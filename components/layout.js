import Nav from "./nav/nav"
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"

const Layout = ({ children, categories, seo }) => (
  <div>
        <Nav categories={categories} />
        {children}
      </div>
)

export default Layout
