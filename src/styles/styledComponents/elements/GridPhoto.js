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
  max-width: 70em;
  
`;

export const GridPhotoContainer = styled.div`
  ${flex({ dir: 'column', jc: 'center', ai: 'center' })};
  border-bottom: 1px solid #000;
  padding-bottom: 2em;
  width:100%;

  ${media.sm`
    padding-bottom: 0;
  `}
`

export const GridPhoto = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 1em;
  margin-top: 1.5em;
  border-bottom: 1px solid #000;

  ${media.sm`
    margin-bottom: 1.5em;
    margin-right: 1.5em;
    margin-top: 0;
  `}
  
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
      <div>

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
                        width: '300px',
                        height: '300px',
                        backgroundColor: `rgba(0,0,0,0.3)`,
                        display: `flex`,
                        flexDirection: 'column',
                        justifyContent: `center`,
                        alignItems: `center`,
                        color: `white`,
                        textAlign: 'center'
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
        </GridPhoto>
      </div >
    )
  }
}

export default Photo;