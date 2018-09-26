import React from "react";
import Helmet from "react-helmet";
import Themed from "../helpers/Themed";
import "../styles/reset.css";
import "../styles/styles.css";

const Layout = ({ children }) => (
  <Themed>
    <div>
      <Helmet
        title="Digital Art Show"
        meta={[
          {
            name: 'description',
            content:
              "A digital art show for chickens"
          },
          {
            name: 'keywords',
            content: 'animal welfare'
          },
          { name: 'twitter:card', content: 'photo' },
          { name: 'twitter:url', content: 'https://artshow.imnotlovinit.com' },
          { name: 'twitter:title', content: "I'm Not Lovin' It Digital Art Show" },
          { name: 'twitter:description', content: "A digital art show for chickens" },
          {
            name: 'twitter:image',
            content:
              'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-OG-share-image-artshow.jpg'
          },
          { property: 'og:title', content: "I'm Not Lovin' It Digital Art Show" },
          ,
          { property: 'og:type', content: 'website' },
          ,
          {
            property: 'og:description',
            content:
              "A digital art show for chickens"
          },
          ,
          { property: 'og:url', content: 'https://artshow.imnotlovinit.com' },
          ,
          {
            property: 'og:image',
            content:
              'https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-OG-share-image-artshow.jpg'
          }
        ]}>
        <meta property="og:title" content="I'm Not Lovin' It Digital Art Show" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://artshow.imnotlovinit.com" />
        <meta property="og:image" content="https://s3.amazonaws.com/the-humane-league-campaigns/mcdonalds/images/campaigns-mcdonalds-OG-share-image-artshow.jpg" />
      </Helmet>
      {children()}
    </div>
  </Themed>
)

export default Layout;