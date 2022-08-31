import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Header() {
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 1) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {t("yousuckatcoding")}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-targer="$navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem("i18next")}
              onChange={handleChangeLanguage}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </li>

          <li className="nav-item ml-2">
            <Link className="nav-link" to="/profile">
              {t("profile")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
