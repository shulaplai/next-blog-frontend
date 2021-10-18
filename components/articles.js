import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  return (
    <div>
      <div className=".uk-child-width-*	">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Cards article={article} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
