import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import { AiOutlineBook, AiFillAlert } from "react-icons/ai"
import { HiDesktopComputer } from "react-icons/hi"
export const SidebarData = [
  {
    title: "Home",
    path: "https://roastedtea.click",
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
    icon: <HiDesktopComputer />,
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
    icon: <AiOutlineBook />,
    cName: "nav-text",
  },
  {
    title: "New",
    path: "https://roastedtea.click/category/new",
    icon: <AiFillAlert />,
    cName: "nav-text",
  },
]
