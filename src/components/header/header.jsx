import React from "react"

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__navbar">
          <a href="/" className="header__title left">Shake That</a>
          <ul className="header__navigation-list right">
            <li className="navigation-list__item"><a href="/">Шейкер</a>  </li>
            <li className="navigation-list__item"><a href="/">Коктейли</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;