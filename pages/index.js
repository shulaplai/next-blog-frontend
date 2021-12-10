import React from "react"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Image from "next/image"
import linkedin_icon from "../assets/css/LinkedIn_logo_initials.png"
import githubicon from "../assets/css/GitHub-Mark.png"
// import Head from "next/head"
// import { getStrapiMedia } from "../lib/media"
const Home = ({ homepage }) => {
  return (
    <div className="intro">
      {/* <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(homepage.favicon)}
          width="50px"
          hight="100%"
        />
      </Head> */}

      <p className="intro">
        Hello, I am Lai shu Lap. This is my blog. In here you can find articles
        about
      </p>
      <p className="linkText">
        1. My projects about{" "}
        <Link href="https://roastedtea.click/category/tech">
          software development
        </Link>
      </p>
      <p className="linkText">
        2. My Hobby like {""}
        <Link
          href="https://roastedtea.click/category/translation"
          className="linkText"
        >
          translations
        </Link>{" "}
        ,<Link href="https://roastedtea.click/category/baseball">baseball</Link>
      </p>

      <p className="linkText">
        And you can see my projects in my
        <Link href="https://2021-portfolio-simple.vercel.app/">portfolio</Link>
        and in my github.
      </p>

      <p className="introicon">
        <a href="https://github.com/shulaplai">
          <Image
            src={githubicon}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </a>
        <a href="https://linkedin.com">
          <Image
            src={linkedin_icon}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </a>
      </p>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([fetchAPI("/homepage")])

  return {
    props: { homepage },
  }
}

export default Home
