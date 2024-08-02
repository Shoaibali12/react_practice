import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  let [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x5i1wzl", "template_3o9zwru", form.current, {
        publicKey: "dkNsY0E6E49LB5rWC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form h-screen mt-40 flex pl-12 pr-12">
        <div className="right flex-1 flex flex-col   ">
          <span className="child1">Get in Touch</span>
          <span className=" name">Contact me</span>
        </div>
        <div className="left flex-1  relative ">
          <form
            className="flex flex-col justify-center items-center gap-12"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="user"
            />
            <input
              type="text"
              name="user_email"
              placeholder="Email"
              className="user"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="user"
            ></textarea>
            <input type="submit" value="send" className="btn" />
            <span>{done && "Thanks for contact me"}</span>
            <div
              className="blur c-blur2"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
}
