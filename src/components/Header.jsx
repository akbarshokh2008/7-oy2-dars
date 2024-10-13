import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
// IMG
import Paski from "../images/paski.svg";
import { useEffect } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

function Header() {
  const { darkMode, setDarkmode, lang, setLang } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  function handleChange(e) {
    setLang(e.target.value);
  }
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function handleDark() {
    setDarkmode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" ">
        <div className=" shadow-xl ">
          <div className="container mx-auto px-32 flex items-center gap-28 py-2">
            <div className="logo  p-1 bg-white   rounded-2xl">
              <img
                src="https://www.ulife.uz/images/14788-logo-img.d33f4712.svg"
                alt=""
              />
            </div>
            <nav className="flex gap-10 items-center w-[550px] dark:text-white">
              <span className="flex gap-1">
                <a href="/">{t("assets")}</a>
                <img src={Paski} alt="" />
              </span>
              <a href="/">{t("creators")}</a>
              <a href="/">{t("careers")}</a>
              <a href="/">{t("goPro")}</a>
            </nav>
            <div className="flex gap-6 items-center">
              <div className="language">
                <select
                  onChange={handleChange}
                  value={lang}
                  className="bg-slate-300 p-2 rounded-md"
                >
                  <option value="en">English</option>
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                </select>
              </div>
              <div className="darkmode">
                <button
                  onClick={handleDark}
                  className="bg-slate-400 text-white py-2 px-4 rounded-xl"
                >
                  {darkMode ? (
                    <span className="flex gap-2">
                      <p>Light </p>
                      <img src={Sun} alt="" />
                    </span>
                  ) : (
                    <span className="flex gap-2">
                      <p>Dark </p>
                      <img src={Moon} alt="" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
