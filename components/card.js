import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Cards = ({ article }) => {
  return (
    <div className="card">
      <Link as={`/article/${article.slug}`} href="/article/[id]" passHref>
        <div className="container">
          <NextImage
            variant="left"
            image={article.image}
            width="320px"
            hight="400px"
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
