import { useState } from "react";
import emailjs from "emailjs-com";

export const useForm = (initialValues, serviceId, templateId, userId) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        setSuccess(true);
        setFormData(initialValues);
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        setError("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};
