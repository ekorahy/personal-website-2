"use client";

import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ({ name, email, subject, message }: FormData) => {
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:ekorahy@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full [&>*]:mb-4 [&>*]:text-base [&>*]:lg:text-lg"
    >
      <div className="md:flex md:gap-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="mb-4 flex flex-col md:basis-1/2 lg:mb-0"
        >
          <label className="mb-1" htmlFor="name">
            Name*
          </label>
          <input
            className="mb-2 bg-zinc-100 px-4 py-3 outline-none dark:bg-zinc-900"
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="flex flex-col md:basis-1/2"
        >
          <label className="mb-1" htmlFor="email">
            Email*
          </label>
          <input
            className="mb-2 bg-zinc-100 px-4 py-3 outline-none dark:bg-zinc-900"
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
            <p className="text-red-400">{errors.email.message}</p>
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="flex flex-col"
      >
        <label className="mb-1" htmlFor="subject">
          Subject*
        </label>
        <input
          className="mb-2 bg-zinc-100 px-4 py-3 outline-none dark:bg-zinc-900"
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="text-red-400">{errors.subject.message}</p>
        )}
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="flex flex-col lg:basis-1/2"
      >
        <label className="mb-1" htmlFor="message">
          Message*
        </label>
        <textarea
          className="mb-2 min-h-40 bg-zinc-100 px-4 py-3 outline-none dark:bg-zinc-900"
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-red-400">{errors.message.message}</p>
        )}
      </motion.div>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="group mx-auto flex items-center gap-2 overflow-hidden bg-amber-400 px-8 py-3"
        type="submit"
      >
        <span className="z-10">Send Message</span>
        <IoMdSend className="duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-[10] group-hover:text-zinc-50 group-hover:dark:text-zinc-950" />
      </motion.button>
    </form>
  );
}
