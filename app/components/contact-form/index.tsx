"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendMail } from "@/lib/send-mail";

export type FormData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty, isValid, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showMsg, setShowMsg] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    const { success, error } = await sendMail(data);

    if (!success) {
      try {
        throw new Error("Email failed to send" + (error ? `: ${error}` : ""));
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setHasError(true);
        setErrorMsg(message);
      }
    }

    reset();
  }

  useEffect(() => {
    if(isDirty) {
      setHasError(false)
      setErrorMsg("")
      setShowMsg(false)
    }
  }, [isDirty])

  useEffect(() => {
    if(isSubmitSuccessful) {
      setShowMsg(true)
      const delay = 10
      let timer = setTimeout(() => setShowMsg(false), delay * 1000)
      
      return () => {
        clearTimeout(timer)
      };
    }
  }, [isSubmitSuccessful])

  return (
    <div className="container m-auto w-full py-16 p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-indigo-700"
      >
        <h1 className="text-2xl font-bold text-gray-50">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-gray-50 font-light mt-8"
        >
          Full name<span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-50"
          {...register("fullname", {
            required: true,
            minLength: {
              value: 3,
              message: "The name requires at least 3 characters",
            },
            maxLength: {
              value: 200,
              message: "The name could be max. 200 characters",
            },
          })}
        />
        {errors.fullname && (
          <p className="text-sm text-red-400"> {errors.fullname.message} </p>
        )}

        <label
          htmlFor="email"
          className="text-gray-50 font-light mt-4"
        >
          E-mail<span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-50"
          {...register("email", {
            required: true,
            minLength: {
              value: 5,
              message: "The email requires at least 5 characters",
            },
            maxLength: {
              value: 100,
              message: "The email could be max. 100 characters",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-400"> {errors.email.message} </p>
        )}

        <label
          htmlFor="subject"
          className="text-gray-50 font-light mt-4"
        >
          Subject<span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-50"
          {...register("subject", {
            required: true,
            minLength: {
              value: 2,
              message: "The subject requires at least 2 characters",
            },
            maxLength: {
              value: 100,
              message: "The subject could be max. 100 characters",
            },
          })}
        />
        {errors.subject && (
          <p className="text-sm text-red-400"> {errors.subject.message} </p>
        )}

        <label
          htmlFor="message"
          className="text-gray-50 font-light mt-4 "
        >
          Message<span className="text-red-400">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-50"
          {...register("message", {
            required: true,
            minLength: {
              value: 10,
              message: "The message requires at least 10 characters",
            },
            maxLength: {
              value: 1000,
              message: "The message could be max. 1000 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className="text-sm text-red-400"> {errors.message.message} </p>
        )}

        <div className="flex flex-col text-center gap-2">
          <button
            disabled={!isDirty || !isValid || isSubmitting}
            type="submit"
            className="self-center text-black disabled:text-gray-700 px-5 py-2.5 mt-8 bg-gradient-to-r from-green-500 to-fuchsia-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-full text-2xl flex flex-row items-center disabled:cursor-not-allowed"
          >
            { isSubmitting ? "SENDING" : "SEND" }
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
          { isSubmitting && <p className="text-lg text-gray-300"> Message is beeing sent... </p> }
          { isSubmitSuccessful && showMsg && !hasError && <p className="text-lg text-gray-300">Message has been sent. Thank You! </p> }
          { hasError && <p className="text-lg text-red-400"> {errorMsg} </p>}
        </div>
        
      </form>
    </div>
  );
}
