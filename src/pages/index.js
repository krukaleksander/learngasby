import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
export default function Home() {
  return (
    <Layout>
      <div>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simple recipies</h1>
                <h4>no Fluff, just recipies</h4>
              </div>
            </div>
          </header>
        </main>
      </div>
    </Layout>
  )
}
