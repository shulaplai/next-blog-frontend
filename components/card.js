import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Cards = ({ article }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <Link as={`/article/${article.slug}`} href="/article/[id]" passHref>
            <div className="container">
              <NextImage
                variant="left"
                image={article.image}
                width="100%"
                hight="100%"
                uk-cover
              />

              <div className="card_body">
                <h3>{article.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
