import React from "react"
import Link from "next/link"
import NextImage from "./image"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "./nav/nav"
import Container from "react-bootstrap/Container"

const Cards = ({ article }) => {
  return (
    <Container className="articlecard">
      <Link as={`/article/${article.slug}`} href="/article/[id]" passHref>
        <Card>
          <a className="uk-link-reset">
            <div className="uk-card uk-card-muted">
              <div className="uk-card-media-top">
                <NextImage
                  variant="bottom"
                  image={article.image}
                  width="270px"
                  hight="270px"
                />
                <Card.Body>
                  <Card.Title>{article.category.name}</Card.Title>
                  <Card.Text>{article.title}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </a>
        </Card>
      </Link>
    </Container>
  )
}

export default Cards
