import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import './styles.css';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Other',
    href: '/other',
    target: '_self',
  },
  {
    label: 'Career',
    href: 'https://www.google.com',
    target: '_blank',
  },
  {
    label: 'Support',
    href: 'https://www.youtube.com',
    target: '_blank',
  },
  {
    label: 'Challenges',
    href: '/#challenges',
  },
  {
    label: 'OtherPageSection',
    href: '/other#other-page-test',
  },
  {
    label: 'Test',
    href: '/#test',
  },
];

export default function Navbar(props) {
  const [activeHref, setActiveHref] = useState('#home');
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHrefChanged = (href) => () => {
    setActiveHref(href);
  };

  const scrollToElement = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 70; // Height of your fixed header
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;

      // Scroll to the section
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (e, navLink) => {
    console.log('handleNavClick', navLink);
    e.preventDefault();
    if (navLink.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
      }
      // Scroll to the section after navigation
      setTimeout(() => scrollToElement(navLink.href), 0);
    } else {
      window.open(navLink.href, navLink.target);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setActiveHref('#home');
    // Scroll to top if already on home page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle scrolling to hash if present in URL
    if (location.hash) {
      scrollToElement(location.hash);
      setActiveHref(`${location.hash}`);
    } else {
      setActiveHref(location.pathname);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <nav className={clsx('navbar', { scrolled })}>
      <img
        src='/logo'
        alt='logo'
        width={100}
        height='auto'
        style={{ cursor: 'pointer' }}
        onClick={handleLogoClick}
      />
      <ul className='desktop-nav navbar-links'>
        {navLinks.map((navLink, idx) => {
          console.log('navLink', {
            navLink,
            includeHash: navLink.href.includes('#'),
            split: navLink.href.split('#'),
          });
          return (
            <li
              key={idx}
              className={clsx('nav-link', {
                active:
                  activeHref ===
                  (navLink.href.includes('#')
                    ? '#' + navLink.href.split('#')[1]
                    : navLink.href),
              })}
              onClick={handleHrefChanged(navLink.href)}
            >
              {navLink.href.startsWith('#') ? (
                <a
                  href={navLink.href}
                  onClick={(e) => handleNavClick(e, navLink)}
                >
                  {navLink.label}
                </a>
              ) : (
                <Link to={navLink.href} target={navLink.target}>
                  {navLink.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <button className='btn-nav-menu' onClick={() => setOpenMenu(true)}>
        <svg
          width='40px'
          height='40px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 7L4 7'
            stroke='#1C274C'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M20 12L4 12'
            stroke='#1C274C'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M20 17L4 17'
            stroke='#1C274C'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <div
        className={clsx('sidebar-overlay', { show: openMenu })}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={clsx('sidebar', { show: openMenu })}>
        <div className='btn-close'>
          <button
            className='btn-nav-menu btn-menu-close'
            onClick={() => setOpenMenu(false)}
          >
            <svg
              width='40px'
              height='40px'
              viewBox='0 -0.5 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z'
                fill='#000000'
              />
            </svg>
          </button>
        </div>
        <ul className='mobile-menu navbar-links'>
          {navLinks.map((navLink, idx) => (
            <li
              key={idx}
              className={clsx('nav-link', {
                active:
                  activeHref ===
                  (navLink.href.includes('#')
                    ? '#' + navLink.href.split('#')[1]
                    : navLink.href),
              })}
              onClick={handleHrefChanged(navLink.href)}
            >
              {navLink.href.startsWith('#') ? (
                <a
                  href={navLink.href}
                  onClick={(e) => handleNavClick(e, navLink)}
                >
                  {navLink.label}
                </a>
              ) : (
                <Link to={navLink.href} target={navLink.target}>
                  {navLink.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
