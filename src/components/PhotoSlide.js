import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import { Button } from '../styles/styledComponents/elements';
import styled from 'styled-components';
import { flex } from '../helpers/mixins';
import { H2, H3 } from '../styles/styledComponents/elements';
import heartSVG from '../assets/svg/heart.svg'
import { fromThemeProps } from '../helpers/utilities';

let renderDetails;
export default class PhotoSlide extends Component {
  state = {
    photo: this.props.photo
  };

  handleSubmit = id => { };

  render() {
    const { photo } = this.props
    renderDetails = (
      < div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <img src={photo.url} />
        <div style={{ width: '65%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <PhotoDetailsContainer>
            <H3>{photo.title}</H3>
            <H3>{photo.artist}</H3>
            <H3>{photo.location}</H3>
          </PhotoDetailsContainer>
          <Button
            hasVoted={this.props.hasVoted}
            onClick={() => {
              if (!this.props.hasVoted) {
                this.props.voteFor(photo.id);
              }
            }}
          >
            vote
          </Button>
        </div>
        <hr style={{ width: '65%', borderBottom: '2px solid #222', margin: '1em 0' }} />
        <H2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '65%' }} color={fromThemeProps("altRed")}><span><SVG src={heartSVG} style={{ width: '50px', paddingRight: '5px' }} />{'  '}</span> <span style={{paddingBottom: '8px', paddingRight: '8px'}}>{photo.votes}</span> VOTE(S)</H2>

      </div >
    )
    return (
      <div>
        {renderDetails}
      </div>
    );
  }
}

const PhotoDetailsContainer = styled.div`
  ${flex({ dir: 'column' })};

`