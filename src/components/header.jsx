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
      <main className="main">
        <h2 className="main__title">SHAKER</h2>
        <div className="light"></div>
        <div className="place-mixology row">
          <div className="col s4 alcohol">
            <h3 className="place-mixology__title alcohol__title">Alcohol</h3>
            <ul className="alcohol-list">
              <li className="alcohol-list__item">
                <h4 className="ingredient-group">Крепкий алкоголь</h4>
                <ul> 
                  <li></li>
                </ul>
              </li>
              <li className="alcohol-list__item">
                <h4 className="ingredient-group">Ликер</h4>
                <ul>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col s4"></div>
          <div className="not-alcohol col s4">
            <h3 className="place-mixology__title not-alcohol__title">Not alcohol</h3>
            <ul className="not-alcohol-list">
              <li className="not-alcohol-list__item">
              <h4 className="ingredient-group">Газировка</h4>
                <ul>
                  <li></li>
                </ul>
              </li>
              <li className="not-alcohol-list__item">
              <h4 className="ingredient-group">Сок</h4>
                <ul>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    );
};
export default Header;