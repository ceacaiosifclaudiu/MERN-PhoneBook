import React from "react";
import { Link } from "react-router-dom";

const ContactListItem = ({ title, description, linkText, linkTo }) => (
  <li>
    <strong>{title}:</strong> {description}
    {linkText && (
      <>
        <Link to={linkTo} className="link">
          <i>{linkText}</i>
        </Link>
        .
      </>
    )}
  </li>
);

export default ContactListItem;