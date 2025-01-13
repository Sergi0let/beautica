// import { BtnInstagram, BtnOrLink, Contacts, GearSmIcon, LogoFooterIcon } from "@/components";
// import Image from "next/image";
// import Link from "next/link";
"use client";

import { useState } from "react";

export const Footer = () => {
  // const formRef = useRef(null);
  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  type handleChangeType = {
    target: {
      name: string;
      value: string;
    };
  };
  const handleChange = ({ target: { name, value } }: handleChangeType) => {
    setForm({ ...form, [name]: value });
  };
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  // e.preventDefault();

  // setLoading(true);

  // try {
  //   await emailjs.send(
  //     "service_vs6xkcp",
  //     "template_my348hh",
  //     {
  //       from_name: form.name,
  //       to_name: "Sergij",
  //       from_email: form.email,
  //       to_email: "s.vashkevych@gmail.com",
  //       message: form.message,
  //     },
  //     "xIluwm5_TTVAixB2K",
  //   );
  //   setLoading(false);
  //   alert("Message sent successfully!");
  //   setForm({ name: "", email: "", message: "" });
  // } catch (error) {
  //   console.log(error);
  //   setLoading(false);
  //   alert("Something went wrong, please try again later.");
  // }
  // };
  return (
    <footer className="wrap-secondary mb-6">
      <div className="my-4">
        <div className="rounded-[12px] border-2 border-focus">
          <div className="p-[var(--20-40)] xl:p-12">
            <h2 className="text-center text-txt-24-48 leading-none">Підкресліть свою чарівність</h2>
            <p className="mt-2 text-sm md:text-xl">
              Залиште свої дані, і ми зв&apos;яжемось з вами для підкреслення вашого неповторного вигляду.
            </p>
            <form className="mt-3 md:mt-5">
              <div className="">
                <label htmlFor="name" className="">
                  <span className="field-label">Ім&apos;я</span>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="John Doe"
                  />
                </label>
                <label htmlFor="phone" className="">
                  <span className="field-label">Телефон</span>

                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="380 000 00 00"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
