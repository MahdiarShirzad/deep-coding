import React from "react";

export default function BlogSidebar({ toc }) {
  return (
    <aside className="w-80 max-lg:hidden sticky top-28 h-fit">
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            فهرست مطالب
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(t.id);
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            اشتراک گذاری
          </h4>
          <div className="flex gap-2">
            <a
              className="flex-1 text-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
              href="#"
            >
              توییتر
            </a>
            <a
              className="flex-1 text-center px-3 py-2 rounded-md bg-blue-800 text-white text-sm"
              href="#"
            >
              لینکدین
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
