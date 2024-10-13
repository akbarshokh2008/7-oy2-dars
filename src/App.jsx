import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";

// IMG
import Maps from "./images/locatsiya.svg";
import Telephon from "./images/telephone.png";

export const ThemeContext = createContext();
function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkmode] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("darkmode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkmode, lang, setLang }}>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-white dark:bg-black h-full">
          <Header />
          <div>
            <main className="container mx-auto px-32">
              <div className=" bg-blue-200 rounded-xl dark:bg-gray-700 flex items-center justify-between mt-8">
                <div className="text flex flex-col pl-14 py-14 w-[590px]">
                  <h3 className="text-slate-500 text-xl pb-5">
                    {t("security")}
                  </h3>
                  <h1 className="text-5xl font-bold  pb-10 text-[#00085E] dark:text-[#A1A9FF]">
                    {t("h1")}
                  </h1>
                  <div className="maps flex gap-5 w-[500px] pb-16">
                    <img src={Maps} alt="" width={50} />
                    <p className="text-[#00085E] text-xl dark:text-[#878787]">
                      {t("text")}
                    </p>
                  </div>
                  <h2 className="text-4xl text-black  font-bold dark:text-white pb-2">
                    {t("join")}
                  </h2>
                  <p className="text-[#00085E] text-xl dark:text-[#878787] pb-8">
                    {t("ready")}
                  </p>
                  <div className="input flex py-1 gap-4  rounded-2xl px-4  bg-white dark:bg-black">
                    <input
                      type="email"
                      placeholder={t("email")}
                      className=" outline-none border-none w-full bg-inherit"
                    />
                    <button
                      type="submit"
                      className="py-3 w-40 text-white bg-blue-600 rounded-2xl"
                    >
                      {t("emailJoin")}
                    </button>
                  </div>
                </div>
                <div className="rasm pr-16">
                  <img src={Telephon} alt="" />
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* <UserContext.Provider value={{ user, setUser }}>
      </UserContext.Provider> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
