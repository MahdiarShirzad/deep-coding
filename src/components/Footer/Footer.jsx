import React from "react";
import { Link } from "react-router-dom";
import namad from "../../assets/images/footer/footer-nashr.png";
import namad2 from "../../assets/images/footer/footer-samandehi.png";
import namad3 from "../../assets/images/footer/footer-sep.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8">
      <div className="container max-w-[1320px] mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
          {/* ABOUT */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">درباره ما</h3>
            <p className="text-sm leading-7 text-gray-400">
              تیم Deep Coding با هدف ارائه آموزش‌های کاربردی و ورود سریع‌تر شما
              به بازار کار شکل گرفته است. تمرکز ما روی مهارت‌های واقعی و
              پروژه‌محور است.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/courses"
                  onClick={scrollToTop}
                  className="hover:text-white"
                >
                  دوره‌ها
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  onClick={scrollToTop}
                  className="hover:text-white"
                >
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={scrollToTop}
                  className="hover:text-white"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="hover:text-white"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">تماس با ما</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>مازندران، ساری</p>
              <p>📞 09384494884</p>
              <p>✉️ mahdiar55582@gmail.com</p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/mahdyar-shirzad-a72873280/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://t.me/mahdyarshirzad"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Telegram
              </a>

              <a
                href="https://github.com/MahdiarShirzad"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* NAMAD */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">اعتماد شما</h3>

            <div className="flex gap-4 items-center">
              <img src={namad} alt="" className="w-16 bg-white rounded p-1" />
              <img src={namad2} alt="" className="w-16 bg-white rounded p-1" />
              <img src={namad3} alt="" className="w-16 bg-white rounded p-1" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* BOTTOM */}
        <div className="flex max-md:flex-col items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Deep Coding. همه حقوق محفوظ است.</p>

          <p>ساخته شده با ❤️ توسط تیم Deep Coding</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
