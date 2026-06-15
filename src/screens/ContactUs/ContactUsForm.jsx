import React, { useState } from "react";
import Button from "../../components/common/Button/Button";
import { motion } from "framer-motion";

const InputField = ({ label, id, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        value={value}
        onChange={onChange}
        required
        className="peer w-full border-2 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:border-[#1A064F]"
      />
      <label
        htmlFor={id}
        className="absolute right-4 top-2 text-gray-400 text-sm transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1A064F]"
      >
        {label}
      </label>
    </div>
  );
};

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div className="flex gap-6 max-md:flex-col">
        <InputField
          id="name"
          label="نام شما"
          value={form.name}
          onChange={handleChange}
        />

        <InputField
          id="email"
          label="ایمیل"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          className="peer w-full border-2 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:border-[#1A064F]"
        />
        <label
          htmlFor="message"
          className="absolute right-4 top-2 text-gray-400 text-sm transition-all 
          peer-focus:text-[#1A064F]"
        >
          پیام شما
        </label>
      </div>

      {/* Button */}
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button>ارسال پیام</Button>
      </motion.div>
    </form>
  );
};

export default ContactUsForm;
