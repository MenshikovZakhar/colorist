import { NavLink, Link } from 'react-router-dom';
import './HiddenMenu.css';
import logo from '../../images/logo_2.png';

function HiddenMenu({ onClickCloseMenu }) {
  return (
    <section className='hidden-menu'>
      <nav className='nav-movie__menu_adapt'>
        <div className='nav-menu__close' onClick={onClickCloseMenu}></div>
        <div className='nav-movie__movie_adapt'>
          <Link to='/' className='header__link'>
            <img className='header__logo header__logo-hiddenMenu' src={logo} alt='logo' />
          </Link>
          <Link
            to='/'
            className='nav-movie__link-adapt'
            onClick={onClickCloseMenu}
          >
            Главная
          </Link>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Услуги
          </NavLink>
          <NavLink
            to='/price'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Стоимость
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Портфолио
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Контакты
          </NavLink>
        </div>
        <h1 class="hidden-menu__title">Cвязаться со мной</h1>
        <div>
        </div>
      </nav>
    </section>
  );
};

export default HiddenMenu;