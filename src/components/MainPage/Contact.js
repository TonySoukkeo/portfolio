import React from "react";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact__container">
        <form
          className="contact__form"
          method="POST"
          action="https://formspree.io/tonysoukkeodesign@gmail.com"
        >
          <div className="contact__form-group">
            <input
              id="name"
              className="contact__form-input "
              type="text"
              name="name"
              required
            />
            <label htmlFor="name" className="contact__form-label">
              Name
            </label>
          </div>

          <div className="contact__form-group">
            <input
              id="email"
              className="contact__form-input"
              type="email"
              name="Email"
              required
            />
            <label htmlFor="email" className="contact__form-label">
              Email
            </label>
          </div>

          <div className="contact__form-group">
            <textarea
              id="message"
              className="contact__form-input"
              name="message"
              rows="3"
            />
            <label htmlFor="message" className="contact__form-label-message">
              Message
            </label>
          </div>
          <button className="contact__form-btn" type="submit">
            Send
          </button>
        </form>
        <div className="contact__container-text">Get in touch.</div>
      </div>
      <div className="contact__group">
        <p>Check me out on</p>
        <p style={{ marginTop: "-2rem" }}>&darr;</p>
        <div className="contact__icon-container">
          <a href="https://github.com/TonySoukkeo" target="__blank">
            <i className="fab fa-github-square contact__github" />
          </a>
          <a href="https://www.linkedin.com/in/tonysoukkeo/" target="__blank">
            <i className="fab fa-linkedin contact__linkedin" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
