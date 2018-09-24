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
  padding: 3rem 0;
  font-family: 'Raleway', sans-serif;
  
`;

const Logo = styled.img`
  width: 95%;
  max-width: 300px;
`;

