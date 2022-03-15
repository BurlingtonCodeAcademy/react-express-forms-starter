function Contact() {
  return (
    <div>
      <h2>And this is the {'<Contact />'} component</h2>
      <form action="/contact" id="sign-up">
        <fieldset>
          <legend>Contact Us</legend>
          <section>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" name="firstName" id="first-name" required />
          </section>
          <section>
            <label htmlFor="last-name">Last Name: </label>
            <input type="text" name="lastName" id="last-name" required />
          </section>
          <section>
            <label htmlFor="email-address">Email Address: </label>
            <input type="email" name="email" id="email-address" required />
          </section>
          <section>
            <label htmlFor="contact-message">Contact Message: </label>
            <textarea
              name="message"
              id="contact-message"
              form="sign-up"
              rows="10"
              cols="20"
              defaultValue="Your message here..."
            />
          </section>
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
