import React from "react"
import Link from "next/link"
import NextImage from "./image"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

const Cards = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id] " passHref>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia image={article.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p id="category" className="uk-text-uppercase">
                {article.category.name}
              </p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p id="title" className="uk-text-large">
                {article.title}
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>{" "}
    </Link>
  )
}

export default Cards
