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
    <div>
      <Link as={`/article/${article.slug}`} href="/article/[id]" passHref>
        <div className="uk-card-media-left uk-cover-container">
          <NextImage
            variant="left"
            image={article.image}
            width="270px"
            hight="270px"
            uk-cover
          />

          <div className="uk-card-body">
            <h3 className="uk-card-title">{article.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards
