import Link from "next/link"
import Image from "next/image"
//import linkedin_icon from "../assets/css/LinkedIn_logo_initials.png"
//import githubicon from "../assets/css/GitHub-Mark.png"

import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./SidebarData"
import { IconContext } from "react-icons"

const Nav = ({ categories }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link href="/" passHref className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link href="/" passHref className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href="https://roastedtea.click/category/new">
                    <a>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}
export default Nav