import React, { useEffect, useState } from "react";
import avatar1 from "../../assets/images/home-3/testimonials/1.png";
import avatar2 from "../../assets/images/home-3/testimonials/2.png";
import avatar3 from "../../assets/images/home-3/testimonials/3.png";
import avatar4 from "../../assets/images/home-3/testimonials/4.png";
import avatar5 from "../../assets/images/home-3/testimonials/5.png";

const StudentsComments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      role: "آرین هاشمی",
      position: "طراح رابط کاربری",
      desc: "آرین از طراحی زیبای رابط‌های کاربری لذت می‌برد و با استفاده از جدیدترین فناوری‌ها، تجربه کاربری بی‌نظیری خلق می‌کند. به دنبال یادگیری مداوم و خلق طراحی‌های جذاب است.",
      avatar: avatar1,
    },
    {
      role: "الیسا نیکو",
      position: "توسعه‌دهنده بک‌اند",
      desc: "الیسا یک متخصص بک‌اند است که در پیاده‌سازی سیستم‌های مقیاس‌پذیر و ایمن مهارت دارد. او به بهبود عملکرد وب‌سایت‌ها و ایجاد ساختارهای قدرتمند برای برنامه‌های وب علاقه‌مند است.",
      avatar: avatar2,
    },
    {
      role: "سارا رضایی",
      position: "طراح گرافیک",
      desc: "سارا در زمینه طراحی گرافیک و برندینگ مهارت دارد و با رنگ‌ها و فرم‌ها بازی می‌کند تا پیام‌های برندها را به شکلی خلاقانه منتقل کند. او همیشه به دنبال الهام گرفتن از دنیای اطراف خود است.",
      avatar: avatar3,
    },
    {
      role: "علی طاهری",
      position: "مدیر پروژه",
      desc: "علی با پشتکار بالا، پروژه‌ها را به موقع تحویل می‌دهد و همیشه در تلاش است تا تیم را در مسیر درست هدایت کند. او به مدیریت پروژه‌های پیچیده با استفاده از متدولوژی‌های چابک علاقه‌مند است.",
      avatar: avatar4,
    },
    {
      role: "نیکا حسینی",
      position: "مدیر ارشد بازاریابی",
      desc: "نیکا با درک عمیق از بازار و مشتریان، استراتژی‌های بازاریابی موفقی را برای برندها ایجاد می‌کند. او به تحلیل داده‌ها و کشف فرصت‌های جدید برای رشد برندها علاقه دارد.",
      avatar: avatar5,
    },
  ];

  const intervalDuration = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, intervalDuration]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-36 max-lg:mt-96 container max-w-[1320px] mx-auto mb-32 max-md:mt-[830px]">
      <p className="text-2xl text-center max-lg:pt-36">افراد تیم ما</p>
      <p className="text-center mt-4">
        تیم ما از متخصصان با تجربه است که با هم همکاری می‌کنند.
      </p>
      <div>
        <div className="relative w-[650px] mt-14 mx-auto">
          <div className="overflow-hidden relative flex items-center justify-center w-full h-[200px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-full absolute transition-transform duration-1000 text-black px-14 py-10 rounded-2xl ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <p className="leading-7 text-center">{slide.desc}</p>
                <p className="mt-7 text-center mb-2 font-semibold">
                  {slide.role}
                </p>
                <p className="text-sm text-center text-gray-700">
                  {slide.position}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 justify-center">
            <div className="flex mb-1 justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`p-2 mx-1 rounded-full cursor-pointer transition-opacity duration-500 ${
                    index === currentSlide
                      ? "transition-opacity duration-500 border-2 border-gray-400"
                      : "transition-opacity duration-500"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <img src={slide.avatar} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsComments;
