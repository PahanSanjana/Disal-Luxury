import '../App.css'

function MapEmbed() {
  return (
    <div className="map-card">
      <iframe
        title="Disal Luxury Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63318.66317820418!2d79.8150058!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cbb13af41%3A0xd8d03e4d55e1f08d!2sColombo%2003!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapEmbed


