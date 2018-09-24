import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import media from '../helpers/media';
import { Button } from '../styles/styledComponents/elements';
import styled, { css } from 'styled-components';
import { flex } from '../helpers/mixins';
import { H2, H3, P } from '../styles/styledComponents/elements';
import heartSVG from '../assets/svg/heart.svg'
import { fromThemeProps } from '../helpers/utilities';

const PhotoDetailsContainer = styled.div`
  ${flex({ dir: 'column' })};
  order: 1;

  ${media.xs`
    order: 0;
  `}
`

const ModalPhoto = styled.div`
   
  background: ${props => `url(${props.backgroundImage}) no-repeat center center / contain`};
  
  ${flex({ ai: 'center', jc: 'center' })};
  width: 230px; 
  height: 230px;

  ${media.xs`
    width: 80%;
    height: calc(50vw);
    max-width: 800px;
    max-height: 400px;
  `}
`

const PhotoDetails = styled.div`
  margin-top: 1em;
  width: 95%;
  ${flex({ dir: 'column', jc: 'center', ai: 'center' })};

  ${media.xs`
  ${flex({ jc: 'space-between', ai: 'center' })};
    width: 80%; 
  `}
`

const HR = styled.hr`
  width: 95%; 
  border-bottom: 2px solid #222;
  margin: 1em 0;

  ${media.xs`
    width: 80%;
  `}
`

const StyledH2 = styled(H2)`
  ${flex({ ai: 'center', jc: 'center' })}
  width: 95%;
  margin-bottom: 0;
  
  color: ${fromThemeProps("altRed")};
  font-size: 1em;

  ${media.xs`
    ${flex({ ai: 'center', jc: 'flex-end' })}
    width: 80%;
  `}
`

const VoteButtonContainer = styled.div`
  order: 0;
  ${flex({ dir: 'column', ai: 'center', jc: 'center' })};

  ${media.xs`
    margin-bottom: 0;
    order: 1;
  `}
`

const VoteButton = styled(Button)`
  
  margin-bottom: 1em;

  ${media.xs`
    margin-bottom: 0;
    
  `}
`

let renderDetails;
let voteText;
let voteButtonText;
let votedMessage;

export default class PhotoSlide extends Component {
  state = {
    photo: this.props.photo
  };

  handleSubmit = id => { };

  render() {
    const { photo, hasVoted } = this.props

    photo.votes === 1 ? voteText = 'VOTE' : voteText = 'VOTES';

    if (hasVoted) {
      voteButtonText = 'voted';
      votedMessage = "You've already voted today!"
    } else {
      voteButtonText = 'record my vote';
      votedMessage = '';
    }

    renderDetails = (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ModalPhoto backgroundImage={photo.url} />
        <PhotoDetails>
          <PhotoDetailsContainer >
            <H3 fontSizeMobile="1em">{photo.title}</H3>
            <H3 fontSizeMobile="1em">{photo.artist}</H3>
            <H3 fontSizeMobile="1em">{photo.location}</H3>
          </PhotoDetailsContainer>
          <VoteButtonContainer>

            <VoteButton
              hasVoted={hasVoted}
              onClick={() => {
                if (!hasVoted) {
                  this.props.voteFor(photo.id);
                }
              }}
            >
              {voteButtonText}
            </VoteButton>
            <P
              fontSizeMobile="0.7em !important"
              marginBottom="0"
            >
              {votedMessage}
            </P>
          </VoteButtonContainer>
        </PhotoDetails>
        <HR />
        <StyledH2>
          <span>
            <SVG
              src={heartSVG}
              style={{
                width: '50px',
                paddingRight: '5px'
              }}
            />
          </span>
          <span
            style={{
              paddingBottom: '8px',
              paddingRight: '8px'
            }}>
            {photo.votes}
          </span>
          {voteText}
        </StyledH2 >
      </div >
    )
    return (
      <div>
        {renderDetails}
      </div>
    );
  }
}

