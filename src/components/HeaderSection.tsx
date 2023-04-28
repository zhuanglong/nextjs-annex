'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface MenuLink {
  url: string;
  label: string;
}

function MenuLinkForPC(props: { menuLinks: MenuLink[]; activeLink: string; linkClick: (link: string) => void }) {
  const { menuLinks, activeLink, linkClick } = props;
  return (
    <ul className="hidden gap-[28px] lg:flex xl:gap-[48px]">
      {menuLinks.map((item) => (
        <li key={item.label} className="shrink-0" onClick={() => linkClick(item.url)}>
          <a
            href={item.url}
            className={clsx('text-[15px] text-[#33333]', {
              'text-[#0EAD69]': activeLink === item.url,
            })}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MenuLinkForMobile(props: { menuLinks: MenuLink[]; activeLink: string; linkClick: (link: string) => void }) {
  const { menuLinks, activeLink, linkClick } = props;
  return (
    <div className="absolute h-screen w-full lg:hidden">
      <div className="bg-[#fff] p-[32px] shadow-[0_20px_50px_0_rgba(0,0,0,5%)]">
        <ul className="flex flex-col gap-[20px]">
          {menuLinks.map((item) => (
            <li key={item.label} className="shrink-0" onClick={() => linkClick(item.url)}>
              <a
                href={item.url}
                className={clsx('text-[15px] text-[#33333]', {
                  'text-[#0EAD69]': activeLink === item.url,
                })}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HeaderSection() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const [menuLinks] = useState([
    {
      url: '#home',
      label: 'HOME',
    },
    {
      url: '#services',
      label: 'SERVICES',
    },
    {
      url: '#why-choose-us',
      label: 'WHY CHOOSE US',
    },
    {
      url: '#about',
      label: 'ABOUT',
    },
    {
      url: '#testmonial',
      label: 'TESTMONIAL',
    },
    {
      url: '#concat',
      label: 'CONCAT',
    },
  ]);

  function handleLinkClick(link: string) {
    document.body.style.overflow = 'visible';
    setShowMenu(false);
    setActiveLink(link);
  }

  function handleMenuBtnClick() {
    setShowMenu((showMenu) => {
      const newVal = !showMenu;
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
      return newVal;
    });
  }

  useEffect(() => {
    const anchor = `${window.location.hash || '#home'}`;
    setActiveLink(anchor);

    function handleActiveLink() {
      // 滚动条位置
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      const sections = menuLinks.map((item) => item.url.replace('#', ''));
      sections.forEach((link) => {
        const refElement = document.getElementById(link);
        if (!refElement) {
          return;
        }

        // 加一个偏移量
        const scrollTopMinus = scrollPos + 73;

        if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
          setActiveLink(`#${link}`);
        }
      });
    }

    function handleNavbarSticky() {
      if (navbarRef.current) {
        // 滚动条位置
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        setIsNavbarSticky(scrollPos > navbarRef.current.offsetTop);
      }
    }

    function handleScroll() {
      handleNavbarSticky();
      handleActiveLink();
    }

    handleNavbarSticky();
    if (sessionStorage.getItem('isReload')) {
      // 页面被刷新
      const sections = menuLinks.map((item) => item.url.replace('#', ''));
      sections.forEach((link) => {
        if (anchor.replace('#', '') === link) {
          const refElement = document.getElementById(link);
          if (!refElement) {
            return;
          }

          window.scrollTo(0, refElement.offsetTop);
        }
      });
    } else {
      // 首次被加载
      sessionStorage.setItem('isReload', 'true');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuLinks]);

  return (
    <header
      className={clsx('fixed z-10 w-full transition-all duration-[.3s] ease-out', {
        'bg-[#fff] shadow-[0_20px_50px_0_rgba(0,0,0,5%)]': isNavbarSticky,
      })}
    >
      <div
        ref={navbarRef}
        className="container flex items-center justify-between px-[32px] pt-[34px] pb-[10px] lg:py-[26px] lg:px-[166px]"
      >
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            className="h-[32px] w-[95px] md:h-[48px] md:w-[144px]"
            width={144}
            height={48}
            priority
            alt="logo"
          />
        </a>
        <MenuLinkForPC menuLinks={menuLinks} activeLink={activeLink} linkClick={handleLinkClick} />
        <button
          type="button"
          className="h-[28px] w-[28px] bg-[url('/images/menu.svg')] lg:hidden"
          onClick={handleMenuBtnClick}
        ></button>
      </div>
      {showMenu && <MenuLinkForMobile menuLinks={menuLinks} activeLink={activeLink} linkClick={handleLinkClick} />}
    </header>
  );
}
