import { useState } from 'react'
import '../App.css'

const subjects = ['Gem Inquiry', 'Custom Jewelry', 'Certification', 'General']

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return 'Enter a valid email.'
    if (!form.message.trim()) return 'Please include a message.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      setStatus({ state: 'error', message: error })
      return
    }
    setStatus({ state: 'submitting', message: '' })
    setTimeout(() => {
      setStatus({ state: 'success', message: 'Message sent. We will respond shortly.' })
      setForm({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
    }, 800)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>Full Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </label>
        <label className="form-field">
          <span>Email Address</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </label>
        <label className="form-field">
          <span>Phone / WhatsApp</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+94 ..."
          />
        </label>
        <label className="form-field">
          <span>Subject</span>
          <select
            value={form.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Message</span>
        <textarea
          rows="4"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
        />
      </label>

      {status.state === 'error' && <p className="form-status error">{status.message}</p>}
      {status.state === 'success' && <p className="form-status success">{status.message}</p>}

      <button type="submit" className="btn primary" disabled={status.state === 'submitting'}>
        {status.state === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm


