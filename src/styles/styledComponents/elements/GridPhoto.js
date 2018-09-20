import React, { Component } from 'react';
import Media from 'react-media';
import styled, { css } from 'styled-components';
import media from '../../../helpers/media';
import { flex } from '../../../helpers/mixins';
import { FauxButton } from '../elements';

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
  width: 332.5px;
  height: 332.5px;
  margin-bottom: 1em;
  margin-top: 1.5em;
  border-bottom: 1px solid #000;

  

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
                      backgroundColor: `rgba(0,0,0,0.3)`,
                      display: `flex`,
                      flexDirection: 'column',
                      justifyContent: `center`,
                      alignItems: `center`,
                      color: `white`,
                      textAlign: 'center',
                    }}
                  >
                    <FauxButton>View</FauxButton>
                    <br />
                    {this.props.votes}
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
              backgroundColor: `rgba(255,255,255,0.3)`,
              display: `flex`,
              flexDirection: 'column',
              justifyContent: `center`,
              alignItems: `center`,
              color: `white`,
              textAlign: 'center'
            }}
          >
            <h1>Thanks for voting today!</h1>
            <br />
            <h1>🐔</h1>
            <br />
            <h1>Come back tomorrow to cast another vote.</h1>
          </div>
        )}
      </GridPhoto>

    )
  }


}

export default Photo;