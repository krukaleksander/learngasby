import React from "react"
import Layout from "../components/Layout"
const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>What to get in touch?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Id quis dolorum illo cumque blanditiis, facere animi ullam
              recusandae, nemo nisi consectetur.{" "}
            </p>
            <p>
              Eligendi, expedita fugit officia nemo facilis explicabo deleniti
              dignissimos.
            </p>
          </article>
          <article>
            <form className="form contact form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
