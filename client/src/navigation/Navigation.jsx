import { createBrowserRouter } from "react-router-dom";
import { AddContact, Contacts, EditContact } from "../pages";
import ContactDetail from "../pages/ContactDetail";
import Layout from "./Layout";
import { fetchContact, fetchContacts } from "./actions/fetchContacts";
import { contactCreateLoader, contactEditLoader } from "./loaders/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    id: "root",
    loader: fetchContacts,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: "/:id",
        loader: fetchContact,
        id: "edit",
        children: [
          { index: true, element: <ContactDetail /> },
          {
            path: "edit",
            action: contactEditLoader,
            element: <EditContact />,
          },
        ],
      },
      {
        path: "/add",
        action: contactCreateLoader,
        element: <AddContact />,
      },
    ],
  },
]);

export default router;
