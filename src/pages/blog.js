import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <main>
        <h2>Blog</h2>
        <div id="blog" className="container-component mt-5">
            <p>The <span className="eleven-forty">1140nft</span> Blog is coming soon.</p>
            <p>In the meantime follow us on Twitter.</p>
          <p><button type="button" className="btn btn-red mt-2"><a className="btn-red" href='https://twitter.com/1140nft' target="blank">Follow</a></button></p>
        </div>
    </main>
  </Layout>
)

export default BlogPage
