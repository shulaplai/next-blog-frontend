import React from "react"
import Link from "next/link"
import Image from "next/image"
import linkedin_icon from "../assets/css/LinkedIn_logo_initials.png"
import githubicon from "../assets/css/GitHub-Mark.png"

const Nav = ({ categories }) => {
  return (
    <header className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <Image
              src={linkedin_icon}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <i className="fas fa-times fa-2x"></i>
          </div>
          <Link href="/" passHref>
            <h1 className="text-center">
              <a>Roasted Tea</a>
            </h1>
          </Link>
        </div>
        <div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li className="tm-nav-item active">
                <a
                  href="https://roastedtea.click/category/baseball"
                  className="tm-nav-link"
                >
                  <i className="fas fa-home"></i>
                  Baseball
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="https://roastedtea.click/category/translation"
                  className="tm-nav-link"
                >
                  <i className="fas fa-pen"></i>
                  Translation
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="https://roastedtea.click/category/story"
                  className="tm-nav-link"
                >
                  <i className="fas fa-users"></i>
                  Story
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="https://roastedtea.click/category/tech"
                  className="tm-nav-link"
                >
                  <i className="far fa-comments"></i>
                  Tech
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="https://roastedtea.click/category/new"
                  className="tm-nav-link"
                >
                  <i className="fas fa-users"></i>
                  New
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="tm-mb-35">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            className="tm-social-link"
          >
            <Image
              src={githubicon}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </a>

          <a href="https://linkedin.com" className="tm-social-link">
            <i className="fab fa-linkedin tm-social-icon"></i>

            <Image
              src={linkedin_icon}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </a>
        </div>
        <p className="tm-mb-80 pr-5 text-white">blog</p>
      </div>
    </header>
  )
}

export default Nav
