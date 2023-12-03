import React from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";
import { Search } from "../assets";

const ContactsList = () => {
  const [search, setSearch] = React.useState("");
  const contacts = useRouteLoaderData("root");

  return (
    <div className="contacts-container__left">
      <div className="input-container">
        <div className="input-container__search">
          <input
            id="input-search"
            type="text"
            placeholder={contacts.length <= 0 ? "No contacts" : "Search..."}
            onChange={(e) => setSearch(e.target.value)}
            disabled={contacts.length <= 0}
            autoComplete="false"
          />
          <img src={Search} alt="Search" />
        </div>

        <Link to={"/add"} className="button">
          Add
        </Link>
      </div>
      <div className="contacts-list">
        {contacts.length <= 0 ? (
          <h1>No contacts</h1>
        ) : (
          contacts
            ?.filter(
              (contact) =>
                contact?.name.toLowerCase().includes(search) ||
                contact?.phone.includes(search)
            )
            ?.map((contact) => (
              <NavLink
                to={`/${contact._id}`}
                key={contact._id}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <h4>{contact.name}</h4>
                <p>{contact.phone}</p>
              </NavLink>
            ))
        )}
      </div>
    </div>
  );
};

export default ContactsList;