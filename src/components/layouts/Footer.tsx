"use client";

import { BtnOrLink, Contacts, InstagramIcon } from "@/components";
import { socials } from "@/constants";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef, useState } from "react";

export const Footer = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.send(
        "service_71w10bf",
        "template_bv2rqn4",
        {
          from_name: form.name,
          to_name: "Viktoria",
          from_email: form.phone,
          to_email: "s.vashkevych@gmail.com",
          message: form.message,
        },
        "xIluwm5_TTVAixB2K",
      );
      setLoading(false);
      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong, please try again later.");
    }
  };
  return (
    <footer className="wrap-secondary mb-6">
      <div className="mb-16 mt-9 w-full lg:mb-0 lg:mt-0 lg:flex lg:gap-4">
        <div data-fade data-delay-one className="mx-auto h-auto w-[115px] lg:w-[400px]">
          <Image
            src="/footer/1.webp"
            alt="Photo Viki"
            width={400}
            height={743}
            className="h-full w-full bg-bottom object-contain object-left-bottom"
          />
        </div>
        <div data-fade data-delay-two className="rounded-[12px] border-2 border-focus lg:my-[12px]">
          <div className="p-[var(--16-32)]">
            <h2 className="mx-auto text-center text-txt-24-48 leading-none lg:w-2/3">Підкресліть свою чарівність</h2>
            <p data-fade data-delay-three className="mx-auto mt-2 text-center text-sm md:text-base lg:w-2/3">
              Залиште свої дані, і ми зв&apos;яжемось з вами для підкреслення вашого неповторного вигляду.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-3 border-b border-focus pb-5 text-center md:mt-5 lg:pb-10"
            >
              <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <label htmlFor="name" className="block">
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
                <label htmlFor="phone" className="block">
                  <span className="field-label">Телефон</span>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="380 000 00 00"
                  />
                </label>
                <label className="block w-full lg:col-span-2">
                  <span className="field-label">Чим я можу бути вам корисною?</span>
                  <textarea
                    className="field-input"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Напишіть повідомлення"
                    required
                    name="message"
                    id="text"
                    rows={2}
                  />
                </label>
              </div>
              <p className="mb-3 mt-2 text-center text-xs font-normal lg:mb-5 lg:mt-4">
                Натискаючи «Відправити», я даю згоду на обробку моїх персональних данних.
              </p>
              <div>
                <BtnOrLink
                  disabled={loading}
                  title={loading ? "Відправляємо..." : "Відправити"}
                  type="submit"
                  className="!h-[53px] !max-w-64"
                />
              </div>
            </form>
            <div className="pt-[var(--16-32)] lg:flex lg:justify-between lg:gap-6">
              <Contacts type="secondary" classsName="flex-col gap-4 lg:flex-row lg:w-full lg:justify-around" />
              <a href={socials[0].href} className="pointer flex items-center gap-2 lg:flex-grow lg:pr-6">
                <InstagramIcon className="size-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
