import { motion } from "framer-motion";
import Map from "./Map";
import contact1 from "../../assets/images/contact-1/1.svg";
import contact2 from "../../assets/images/contact-1/2.svg";
import contact3 from "../../assets/images/contact-1/3.svg";
import ContactUsForm from "./ContactUsForm";
import Collapse from "../../components/Collapse/Collapse";

const ContactUs = () => {
  return (
    <div className="mt-36">
      <Map />

      {/* Main Section */}
      <div className="mt-20 max-w-[1320px] mx-auto flex max-lg:flex-wrap-reverse gap-16">
        {/* Contact Info */}
        <motion.div
          className="w-1/3 max-lg:w-full space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold">ارتباط با ما</p>

          <p className="text-gray-500 leading-7">
            سوالی دارید یا نیاز به راهنمایی دارید؟ تیم ما همیشه آماده پاسخگویی
            به شماست.
          </p>

          {[
            { icon: contact1, text: "مازندران، ساری" },
            { icon: contact2, text: "09384494884" },
            { icon: contact3, text: "mahdiar55582@gmail.com" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-sky-50 transition cursor-pointer"
            >
              <div className="p-3 rounded-full bg-sky-100">
                <img src={item.icon} alt="" />
              </div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-2/3 max-lg:w-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold">ارسال پیام</p>

          <p className="mt-4 text-gray-500">
            فرم زیر را پر کنید، در سریع‌ترین زمان با شما تماس می‌گیریم.
          </p>

          <ContactUsForm />
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.div
        className="bg-[#F7F8FB] py-16 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1320px] mx-auto">
          <p className="text-3xl text-center font-bold">سوالات متداول</p>

          <p className="text-center mt-4 mb-12 text-gray-500">
            پاسخ سریع به سوالات پرتکرار کاربران
          </p>

          <Collapse />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
