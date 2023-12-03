import { useState, useEffect } from "react";

const useContactForm = ({ initialData, submitUrl, successCallback }) => {
  const [contactData, setContactData] = useState(initialData);

  useEffect(() => {
    setContactData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(submitUrl, {
        method: initialData._id ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        console.log("Contact operation successful");
        setContactData(initialData);
        if (successCallback) {
          successCallback();
        }
      } else {
        const responseText = await response.text();
        throw new Error(
          `Failed to perform contact operation. Response text: ${responseText}`
        );
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return { contactData, handleChange, handleSubmit };
};

export default useContactForm;