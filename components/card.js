import React from "react"
import Link from "next/link"
import NextImage from "./image"
import { StyledCard } from "./style/card.style"


const Card = ({ article }) => {
  return (
    <StyledCard>
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
    </StyledCard>
  )
}

export default Card
