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
          <NextImage
            variant="top"
            image={article.image}
            width="300px"
            hight="300px"
          />
          <Card.Body>
            <Card.Title>{article.category.name}</Card.Title>
            <Card.Text>{article.title}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  )
}

export default Cards
