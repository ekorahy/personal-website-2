"use client";

import { FormData } from "@/types/contact";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ({ name, email, subject, message }: FormData) => {
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:ekorahy@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full [&>*]:mb-4">
      <div className="md:flex md:gap-4">
        <div className="mb-4 flex flex-col md:basis-1/2 lg:mb-0">
          <label className="mb-1 text-xl lg:text-lg" htmlFor="name">
            Name*
          </label>
          <input
            className="mb-2 border border-zinc-950 px-4 py-3 text-xl outline-none dark:border-zinc-50 lg:text-lg"
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-base text-red-400 lg:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col md:basis-1/2">
          <label className="mb-1 text-xl lg:text-lg" htmlFor="email">
            Email*
          </label>
          <input
            className="mb-2 border border-zinc-950 px-4 py-3 text-xl outline-none dark:border-zinc-50 lg:text-lg"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-base text-red-400 lg:text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-xl lg:text-lg" htmlFor="subject">
          Subject*
        </label>
        <input
          className="mb-2 border border-zinc-950 px-4 py-3 text-xl outline-none dark:border-zinc-50 lg:text-lg"
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="text-base text-red-400 lg:text-sm">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className="flex flex-col lg:basis-1/2">
        <label className="mb-1 text-xl lg:text-lg" htmlFor="message">
          Message*
        </label>
        <textarea
          className="mb-2 min-h-40 border border-zinc-950 px-4 py-3 text-xl outline-none dark:border-zinc-50 lg:text-lg"
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-base text-red-400 lg:text-sm">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        className="group mx-auto flex items-center gap-2 overflow-hidden bg-amber-400 px-8 py-3 text-xl lg:text-lg"
        type="submit"
      >
        <span className="z-10">Send Message</span>
        <IoMdSend className="duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-[10] group-hover:text-zinc-50 group-hover:dark:text-zinc-950" />
      </button>
    </form>
  );
}
