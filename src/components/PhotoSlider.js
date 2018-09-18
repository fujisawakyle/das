import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import PhotoSlide from './PhotoSlide';
import photoDecorators from './photoDecorators';

let orderedPhotos;

export default class PhotoSlider extends Component {
  state = {
    photoSelected: this.props.photoSelected,
    photoDetails: this.props.photoDetails
  };

  handleSubmit = id => { };

  render() {
    let photoDetails = [...this.state.photoDetails];
    let element = photoDetails.splice(this.state.photoSelected, 1);
    photoDetails.unshift(element[0]);
    orderedPhotos = (
      photoDetails.map(
        (photo, i) => {
          return <PhotoSlide key={i} photo={photo} />
        }
      )
    )
    return (
      <div style={{ position: 'relative', margin: '0 auto', width: '100%', height: '400px', maxWidth: '600px' }}>
        <Carousel easing="ease" slideWidth={1} dragging={false} decorators={photoDecorators}>
          {orderedPhotos}
        </Carousel>
      </div>
    );
  }
}
