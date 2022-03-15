import { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await window.fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });
    console.log({ response });
    return false;
  };

  return (
    <div>
      <h2>And this is the {'<Contact />'} component</h2>
      <form action="/contact" id="sign-up" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Us</legend>
          <section>
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </section>
          <section>
            <label htmlFor="last-name">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </section>
          <section>
            <label htmlFor="email-address">Email Address: </label>
            <input
              type="email"
              name="email"
              id="email-address"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </section>
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
