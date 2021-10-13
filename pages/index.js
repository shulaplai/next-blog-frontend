import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Nav from "../components/nav/nav.js"
import Link from "next/link"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />

      <p className="intro">
        Hello, I am Lai shu Lap. This is my blog. In here you can find
        <Link href="https://roastedtea.click/category/translation">
          translations
        </Link>
        
        <Link href="https://roastedtea.click/category/baseball">
          baseball info
        </Link>
        , tech , story and other thing. 
        
        
      </p>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
