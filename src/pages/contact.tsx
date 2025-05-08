import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import "@/styles/globals.css";

<h1 className={title()}>Contact</h1>;

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_aodawfk", "template_fbcrfmp", form.current, {
          publicKey: "z_l982_kfuBRNqYZ4",
        })
        .then(
          () => {
            console.error("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="first_name">First name</label>
      <input id="user_name" name="first_name" type="text" />
      <label htmlFor="first_name">Last name</label>
      <input id="user_name" name="first_name" type="text" />
      <label htmlFor="user_email">Email</label>
      <input name="user_email" type="email" />
      <label htmlFor="user_message">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default function Contact() {
  return (
    <DefaultLayout>
      <ContactForm />
    </DefaultLayout>
  );
}
