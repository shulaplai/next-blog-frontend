import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"
// import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <>
      {/* <Seo seo={seo} /> */}

      <div
        id="banner"
        className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
        width="100%"
        hight="100%"
      ></div>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <h1>{article.title}</h1>
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.author.picture && (
                <NextImage image={article.author.picture} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article
