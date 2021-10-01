import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="navbar-nav ml-auto">
        <div className="nav-item active">
          <ul className="nav-item">
            <li>
              <Link href="/">
                <a>Roasted Tea</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-item active">
          <ul className="nav-item">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
;

export default Nav
