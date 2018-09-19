import React, { Component } from 'react';
import styled from 'styled-components';
import thlLogo from '../assets/svg/THL18-horiz-logo-white.svg';
import media from '../helpers/media';
import ModalTrigger from './ModalTrigger';

export default class Footer extends Component {

  render() {

    return (
      <Container>
        <a
          style={{ marginBottom: '1em' }}
          href="https://thehumaneleague.org"
          target="_blank"
        >
          <Logo src={thlLogo} />
        </a>
        <ModalTrigger
          modalTransition="scaleUp"
          triggerItem={this.props.triggerItem}
          markupToDisplay={this.props.markupToDisplay}
        />
        <Disclaimer style={{ marginTop: '2.5em' }}>
          Images representative of farms in McDonald's supply chain
      </Disclaimer>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-family: 'Raleway', sans-serif;
  ${media.md`
    padding: 1rem 0;
  `};
`;

const Logo = styled.img`
  width: 95%;
  max-width: 300px;
`;

const Disclaimer = styled.p`
  text-align: center;
  font-size: 0.6rem;
  color: #fff;
  margin-bottom: 0;

  ${media.sm`
    font-size: .2rem;
  `};
`;