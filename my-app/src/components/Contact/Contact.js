import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-text-container">
          <h1>Contact Us!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            doloremque, maiores aperiam perspiciatis facilis odit vero
            temporibus. Minus, eligendi quia id sit velit praesentium tempora at
            nesciunt, eveniet rerum unde modi in eum voluptas aperiam. Molestias
            expedita ducimus eum deleniti.
          </p>
        </div>
        <form className="contact-form">
          <h5>Name</h5>
          <input type="text" />
          <h5>Subject</h5>
          <input type="text" />
          <h5>Message</h5>
          <textarea
            type="textbox"
            placeholder="What ya got?"
            className="contact-msg"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
