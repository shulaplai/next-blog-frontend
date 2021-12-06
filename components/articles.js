import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  const Articles = articles.slice(0, articles.length)
  return (
    <div>
      {Articles.map((article, i) => {
        return <Cards article={article} key={`article__${article.slug}`} />
      })}
    </div>
  )
}

export default Articles
