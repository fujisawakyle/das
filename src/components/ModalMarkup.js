import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import thlLogo from '../assets/svg/THL18-horiz-logo-white.svg'
import { Button } from '../styles/styledComponents/elements';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 40rem;
  height: 100%;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
  transform: none;

  p {
    width: 100%;
    font-weight: 500;
  }
`;

const ShortHR = styled.hr`
  background: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  width: 95%;
  max-width: 10em;
`;

const Intro = styled.h4`
  text-align: center;
  line-height: 1.8;
  font-size: 1.2rem;
`;

export const AboutTHLMarkup = (
  <FlexCenter>
    <Container className="container--aboutTHL">
      <SVG style={{
        width: '75%',
        maxWidth: '450px'
      }} src={thlLogo} />
      <ShortHR />
      <Intro>
        The Humane League’s mission is to reduce the suffering of as many
        animals as possible, as effectively as possible.
      </Intro>
      <p>
        We work to reform the way farm animals are treated while also inspiring
        people to make more compassionate food choices. Our strategy includes
        hard-hitting corporate campaigns and wide-ranging outreach and education
        programs, supported by an extensive network of organizations, activists
        and supporters around the world.
      </p>
      <p>
        In the US, we have on-the-ground organizers in major cities across the
        country. These grassroots staff build and strengthen local communities
        of changemakers that support our work and spread our message, amplifying
        our ability to create meaningful change for farm animals.
      </p>
      <p>
        Internationally, we have offices in Mexico, the UK and Japan, where we
        are engaged in region-specific initiatives that are creating positive
        results. Our reach extends globally with the Open Wing Alliance.
      </p>
      <Intro>
        Animals don’t have to suffer. Get involved to create the change.
      </Intro>
      <a target="_blank" href="https://thehumaneleague.org/get-involved">
        <Button>Create change</Button>
      </a>
    </Container>
  </FlexCenter>
);



export default AboutTHLMarkup;