import React from "react";

function ContactItem({ iconSrc, text }) {
  return (
    <div className="contact-item">
      <img src={iconSrc} className="svg" alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default ContactItem;
