import React from "react";
import Helmet from "react-helmet";
import Themed from "../helpers/Themed";
import Header from "../components/Header";
import "../styles/reset.css";

const Layout = ({ children }) => (
  <Themed>
    <div>
      <Helmet
        title="The Humane League"
        meta={[
          {
            name: 'description',
            content:
              "Site description"
          },
          {
            name: 'keywords',
            content: 'animal welfare'
          },
          { name: 'twitter:card', content: 'photo' },
          { name: 'twitter:url', content: 'https://www.site.com' },
          { name: 'twitter:title', content: "The Humane League" },
          { name: 'twitter:description', content: "Site description" },
          {
            name: 'twitter:image',
            content:
              'https://s3.amazonaws.com/the-humane-league-campaigns/sites/oneinabillion/images/campaigns-broiler-uk-OinaB-share-image.png'
          },
          { property: 'og:title', content: "The Humane League" },
          ,
          { property: 'og:type', content: 'website' },
          ,
          {
            property: 'og:description',
            content:
              "Site description"
          },
          ,
          { property: 'og:url', content: 'https://www.site.com' },
          ,
          {
            property: 'og:image',
            content:
              'https://s3.amazonaws.com/campaign/sites/site-name/images/share-image.png'
          }
        ]}>
      </Helmet>
      <Header />
      {children()}
    </div>
  </Themed>
)

export default Layout;