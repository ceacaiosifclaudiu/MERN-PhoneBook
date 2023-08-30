import { redirect } from "react-router-dom";
import { fetchData } from "../../navigation/actions/fetchContacts";

const BASE_URL = "http://localhost:5000"; //I let the url here for testing purpose

export const contactEditLoader = async ({ params, request }) => {
  let formData = await request.formData();
  const updatedContact = Object.fromEntries(formData);
  console.log(params.id);
  fetchData(`${BASE_URL}/contact/${params.id}`, "PATCH", updatedContact);
  window.location.reload();
  return redirect(`/${params.id}`);
};

export const contactCreateLoader = async ({ request }) => {
  let formData = await request.formData();
  const createContact = Object.fromEntries(formData);
  console.log(createContact);
  fetchData(`${BASE_URL}/contact`, "POST", createContact);
  window.location.reload();
  return redirect(`/`);
};
