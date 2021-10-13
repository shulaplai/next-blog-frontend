import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Translation",
    path: "https://roastedtea.click/category/translation",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Tech",
    path: "https://roastedtea.click/category/tech",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Baseball",
    path: "https://roastedtea.click/category/baseball",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Story",
    path: "https://roastedtea.click/category/story",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "New",
    path: "https://roastedtea.click/category/new",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
]
