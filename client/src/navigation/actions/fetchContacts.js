const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
};

export const fetchContact = async ({ params }) => {
  try {
    const response = await fetch(`${BASE_URL}/contact/${params.id}`);
    const contact = await response.json();

    return contact;
  } catch (error) {
    console.error("Error fetching contact:", error);
    throw error;
  }
};

export const fetchData = async (url, method, payload) => {
  const requestOptions = {
    method: method ? method : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : null,
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  const myData = data;

  return myData;
};

export const deleteAccount = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.json());
  } catch (error) {
    console.error("Error fetching contact:", error);
    throw error;
  }
};
