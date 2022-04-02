import { send as emailSend } from "@emailjs/browser";
import React, { useCallback, useState } from "react";
import Input from "../../core/components/Input";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = useCallback((e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const sendEmail = useCallback(() => {
    const templateID = "template_d26lilp";
    const serviceID = "service_53a7wy9";
    const templateParams = {
      name: form.name,
      message: form.message,
      from_email: form.email,
    };

    emailSend(serviceID, templateID, templateParams)
      .then(() => console.log("Send"))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div
      className="modal fade contactMe "
      id="contactMeForm"
      aria-labelledby="contactMeForm"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <form action="#" className="contactMe__container">
              <h1 className="headline1 text-center mb-4">Contact Me</h1>

              <Input
                name="name"
                label="Name"
                type="text"
                placeHolder="Name"
                iconClassName="bi bi-person"
                className="mb-3"
                onChange={handleChange}
                value={form.name}
              />

              <Input
                name="email"
                className="mb-3"
                label="Email"
                type="email"
                placeHolder="Email"
                iconClassName="bi bi-envelope"
                onChange={handleChange}
                value={form.email}
              />

              <Input
                name="message"
                className="mb-3"
                label="Message"
                type="text"
                placeHolder="Message"
                iconClassName="bi bi-chat-left-dots"
                onChange={handleChange}
                value={form.message}
              />

              <div className="d-flex justify-content-end align-items-center">
                <button className="email__send" onClick={sendEmail}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
