import Nav from "./nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Cards from "./card.js"

const Layout = ({ children, categories, seo }) => (
  <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col xs={4} md={4}>
        <Nav categories={categories} />
        {children}
      </Col>
      <Col xs={12} md={4}></Col>
    </Row>
  </Container>
)

export default Layout
