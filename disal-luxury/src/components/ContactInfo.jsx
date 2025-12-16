import '../App.css'

const contactItems = [
  { label: 'Address', value: '21 Galle Road, Colombo 03, Sri Lanka', icon: '📍' },
  { label: 'Phone', value: '+94 11 234 5678', href: 'tel:+94112345678', icon: '📞' },
  { label: 'WhatsApp', value: '+94 77 234 5678', href: 'https://wa.me/94772345678', icon: '💬' },
  { label: 'Email', value: 'care@disalluxury.com', href: 'mailto:care@disalluxury.com', icon: '✉️' },
  { label: 'Business Hours', value: 'Mon–Sat: 10:00 – 19:00 IST', icon: '⏰' },
]

function ContactInfo() {
  return (
    <div className="contact-info-grid">
      {contactItems.map((item) => (
        <div className="contact-card" key={item.label}>
          <div className="contact-icon" aria-hidden="true">
            {item.icon}
          </div>
          <div className="contact-text">
            <p className="contact-label">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="contact-value">
                {item.value}
              </a>
            ) : (
              <p className="contact-value">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactInfo


