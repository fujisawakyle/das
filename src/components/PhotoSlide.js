import React, { Component } from 'react';
import { Button } from '../styles/styledComponents/elements';
import styled from 'styled-components';
import { flex } from '../helpers/mixins';

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
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <PhotoDetailsContainer>
            <h1>{photo.title}</h1>
            <h1>{photo.artist}</h1>
            <h1>{photo.location}</h1>
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
        <h3>{photo.votes}</h3>
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