import React, { Component } from 'react';
import Media from 'react-media';
import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';
import media from '../../../helpers/media';
import { flex } from '../../../helpers/mixins';
import { H2, FauxButton } from '../elements';
import heartSVG from '../../../assets/svg/heart.svg';
import Themed from '../../../helpers/Themed';

export const Grid = styled.div`
  ${flex({ jc: "center", ai: "center" })};
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3em;
  max-width: 70em;
  
`;

export const GridPhotoContainer = styled.div`
  ${flex({ dir: 'column', jc: 'center', ai: 'center' })};
  border-bottom: 2px solid #222;
  padding-bottom: 2em;
  width:100%;

  :last-of-type {
    border-bottom: none;
  }

  ${media.sm`
    padding-bottom: 0;
  `}
`

export const GridPhoto = styled.div`
  position: relative;
  width: 95%;
  max-width: 332.5px;
  height: 95vw;
  max-height: 332.5px;
  margin-bottom: 1em;
  margin-top: 1.5em;
  

  ${media.sm`
    margin-bottom: 1.5em;
    margin-right: 1.5em;
    margin-top: 0;
  `}

  @media screen and (min-width: 1163px) {
    :nth-of-type(3n) { 
      margin-right: 0;
    }
  }
  
  ${props => props.backgroundImage && css`
    background: url(${props.backgroundImage});
    background-size: cover;
    background-position: center;
  `};
`;

const VotesContainer = styled.div`
  ${flex({ ai: 'center', jc: 'center' })};
`


class Photo extends Component {
  state = {
    hovering: false,
  }
  render() {
    return (

      <GridPhoto
        backgroundImage={this.props.backgroundImage}
        onClick={() => this.props.openModal()}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
        {this.state.hovering && (
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <div />
              ) : (
                  <div
                    style={{
                      position: `absolute`,
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      width: '332.5px',
                      height: '332.5px',
                      backgroundColor: `rgba(0,0,0,0.4)`,
                      display: `flex`,
                      flexDirection: 'column',
                      justifyContent: `center`,
                      alignItems: `center`,
                      color: `white`,
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <FauxButton>View</FauxButton>
                    <br />
                    <Themed dark>
                      <VotesContainer>
                        <H2 style={{ marginBottom: 0 }}><span><SVG src={heartSVG} /></span><span style={{ fontSize: '1.25em' }}>{this.props.votes}</span></H2>
                      </VotesContainer>
                    </Themed>
                  </div>
                )
            }
          </Media>
        )}
        {(this.props.votedFor > -1) && !this.state.hovering && (
          <div
            style={{
              position: `absolute`,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: '332.5px',
              height: '332.5px',
              backgroundColor: `rgba(255,255,255,0.7)`,
              display: `flex`,
              flexDirection: 'column',
              justifyContent: `center`,
              alignItems: `center`,
              color: `#222`,
              textAlign: 'center',
              fontFamily: 'Raleway',
              fontSize: '1.75em',
              fontWeight: '600'
            }}
          >
            <h1 style={{ padding: '0 1em' }}>Thanks for voting today!</h1>
            <br />
            <h1 style={{ fontSize: '2.5em' }}>🐔</h1>
            <br />
            <h1 style={{ padding: '0 1em' }}>Come back tomorrow to cast another vote.</h1>
          </div>
        )}
      </GridPhoto>

    )
  }


}

export default Photo;