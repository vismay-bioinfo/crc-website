import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/contact.css";

export default function Contact() {
  const [toast, setToast] = useState(null); 
  const [formData, setFormData] = useState({
  name: "",
  org: "",
  email: "",
  message: ""
});

const [status, setStatus] = useState(null);
const [loading, setLoading] = useState(false);


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // 🚫 BOT CHECK
  if (e.target.honeypot?.value) return;

  setLoading(true);
  setStatus(null);

  emailjs.send(
    "service_anl6rca",
    "template_x5xw65d",
    {
      user_name: formData.name,
      organization: formData.org,
      user_email: formData.email,
      message: formData.message
    },
    "IvXnETdTgRPlyHZoH"
  )
.then(() => {

  setToast("success");
  setTimeout(() => setToast(null), 3000);

  // ✅ save time HERE (correct place)
  localStorage.setItem("lastSent", Date.now());

  emailjs.send(
    "service_anl6rca",
    "template_zbn3gap",
    {
      user_name: formData.name,
      user_email: formData.email
    },
    "IvXnETdTgRPlyHZoH"
  );

  setFormData({
    name: "",
    org: "",
    email: "",
    message: ""
  });

})
  .catch(() => {
    setStatus("error");
  })
  .finally(() => {
    setLoading(false);
  });
};

  return (
    <div className="page">
      <Navbar />
      
      <section className="section section-grey">
        <div className="container contact-container">
          <h1>Get in Touch</h1>

          <p className="contact-intro">
            Whether you are seeking clinical information, exploring a research
            collaboration, or have a general question, our team is here to assist you.
          </p>
        </div>
      </section>
        <section className="section section-light">
          <div className="container contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                For general inquiries, please use the form below. Our team will
                respond to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>

                  {/* 🛑 HONEYPOT (ANTI-SPAM) */}
                  <input type="text" name="honeypot" style={{ display: "none" }} />

                  <div className="input-group">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                    />
                  </div>

                <div className="input-group">
                  <span className="input-icon">🏢</span>
                  <input
                    type="text"
                    name="org"
                    value={formData.org}
                    onChange={handleChange}
                    placeholder="Organization / Institution"
                  />
                </div>

                <div className="input-group">
                  <span className="input-icon">✉</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="input-group textarea-group">
                  <span className="input-icon">💬</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Message"
                  />
                </div>

                  <button type="submit" className="contact-btn" disabled={loading}>
                    {loading ? <span className="spinner"></span> : "Send Message"}
                  </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h2>Our Contact Details</h2>

              <p>
                <strong>Address</strong>
                <br />
                Department of Medical Genetics
                <br />
                3rd Floor, Basic Sciences Block
                <br />
                Kasturba Medical College, Manipal Academy of Higher Education
                <br />
                Manipal - 576104, Karnataka, India
              </p>

              <p>
                <strong>Email</strong>
                <br />
                Registry-related inquiries:
                <br />
                <a href="mailto:crcregistry.khmanipal@gmail.com">
                  crcregistry.khmanipal@gmail.com
                </a>
                <br />
                <br />
                Clinical inquiries & appointments:
                <br />
                <a href="mailto:genetics.clinic@manipal.edu">
                  genetics.clinic@manipal.edu
                </a>
              </p>

              <p>
                <strong>Phone</strong>
                <br />
                +91 820 2923149
              </p>

              <p>
                <strong>Working Hours</strong>
                <br />
                Monday – Friday: 9:00 AM – 5:00 PM
                <br />
                Closed on weekends, 3rd Saturdays and public holidays
              </p>

              <p className="contact-note">
                *We aim to respond to all inquiries in a timely manner.
              </p>
            </div>
          </div> {/* Correctly closes contact-grid */}
        </div> {/* Correctly closes container contact-container */}
      </section>

      {/* Google Map Section */}
      <section className="section section-grey">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">

            
            <iframe
              title="MAHE Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d341.2896274103633!2d74.7859865273778!3d13.35212082220305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4aa2d57c1b3%3A0x5a034922f23785cb!2sKMC%20Center%20for%20Basic%20Sciences%20Manipal!5e0!3m2!1sen!2sin!4v1774082501982!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0, width: "100%", height: "450px" }}
            ></iframe>
          </div>
        </div>
      </section>
        {toast && (
            <div className={`toast ${toast}`}>
              {toast === "success"
                ? "✅ Message sent successfully!"
                : "❌ Failed to send. Please try again."}
            </div>
          )}
      <Footer />
    </div>
  );
}