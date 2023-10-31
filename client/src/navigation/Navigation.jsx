import { createBrowserRouter } from "react-router-dom";
import { AddContact, Contacts, EditContact } from "../pages";
import ContactDetail from "../pages/ContactDetail";
import Layout from "./Layout";
import { fetchContact, fetchContacts } from "./actions/fetchContacts";

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
            element: <EditContact />,
          },
        ],
      },
      {
        path: "/add",
        element: <AddContact />,
      },
    ],
  },
]);

export default router;
