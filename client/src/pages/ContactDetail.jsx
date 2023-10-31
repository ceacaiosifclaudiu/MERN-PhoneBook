import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

import { deleteAccount } from "../navigation/actions/fetchContacts";
import { Email, Phone, User } from "../assets";
import ContactItem from "../components/ContactItem";

const ContactDetail = () => {
  const contact = useRouteLoaderData("edit");

  return (
    <div className="contacts-container__right">
      <header></header>
      <div className="two-columns">
        <ContactItem iconSrc={User} text={contact?.name} />
        <ContactItem iconSrc={Email} text={contact?.email} />
        <ContactItem iconSrc={Phone} text={contact?.phone} />
      </div>

      <div className="buttons">
        <Link to={`/${contact._id}/edit`} className="button edit">
          Edit
        </Link>
        <Link
          to={`/`}
          className="button delete"
          onClick={() => {
            deleteAccount(contact._id);
          }}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
