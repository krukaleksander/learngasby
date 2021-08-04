import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>This is our qbout page, read this if you want!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              mollitia reiciendis aperiam ducimus adipisci.
            </p>
            <p>
              Labore in ut eaque incidunt ratione sint eius quod enim iusto
              libero eos, praesentium, quia voluptatibus!
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default about
