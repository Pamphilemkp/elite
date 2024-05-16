'use client'

import React, {useState} from 'react'
import './Nav.scss'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import eliteLogo from "../../../../public/static/images/eliteLogo.png"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Nav() {


  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  function selectEn() {
    let loc = "/";
    window.location.replace(loc + "?lng=en");
  }
  function selectAr() {
    let loc = "/";
    window.location.replace(loc + "?lng=ar");
  }

  const { t } = useTranslation();
  

  return (
    <nav>
         <Link href='/'><Image
      src={eliteLogo}
      width={100}
      height={120}
      alt="Elite Logo"
    /> </Link>
        <ul>
            <li><Link href='/' > <FaHome /> {t("Home")}</Link></li>
            <li><Link href='/about' > <FaInfo /> {t("About")}</Link></li>
            <li><Link href='/products' > <MdOutlineProductionQuantityLimits /> {t("Products")}</Link></li>
            <li><Link href='/contact' > <IoIosContacts /> {t("Contact")}</Link></li>
        </ul>
        {active ? (
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="side-menu"
            onClick={() => setActive(!active)}
          >
            <ul className="side-menu-list">
            <li><Link href='/' > <FaHome /> {t("Home")}</Link></li>
            <li><Link href='/about' > <FaInfo /> {t("About")}</Link></li>
            <li><Link href='/products' > <MdOutlineProductionQuantityLimits />  {t("Products")}</Link></li>
            <li><Link href='/contact' > <IoIosContacts /> {t("Contact")}</Link></li>
            </ul>
          </motion.div>
        ) : null}
        <div className='languages' >
        <span onClick={selectEn} className="fi fi-gb"></span>
        <span onClick={selectAr} className="fi fi-ae"></span>
        </div>
        <div onClick={menuTogglerHandler} className="hamburger">
          {active ? (
            <AiOutlineClose className="_icon" />
          ) : (
            <GiHamburgerMenu className="_icon" />
          )}
        </div>
        
    </nav>
  )
}

export default Nav
