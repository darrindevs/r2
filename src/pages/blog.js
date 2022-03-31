import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <main>
        <h2>Blog</h2>
        <div id="blog" className="container-component mt-5 mb-5">
            <p>The <span className="eleven-forty">1140nft</span> Blog is coming soon.</p>
            <p>In the meantime, follow us on <a href='https://twitter.com/1140nft' target="blank">Twitter</a>.</p>
        </div>
    </main>
  </Layout>
)

export default Blog
