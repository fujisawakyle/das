import React from 'react';
import Modal from 'react-modal';
import Media from 'react-media';
import _ from 'lodash';
import PhotoSlider from "../components/PhotoSlider";
import Photo, { Grid, GridPhotoContainer } from '../styles/styledComponents/elements/GridPhoto';
import photoData from "../data/photos.json";
import { Button } from "../styles/styledComponents/elements"

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

Modal.setAppElement(`#___gatsby`)

let images;
let photoDetails;

class App extends React.Component {
  state = {
    modalIsOpen: false,
    photoSelected: null,
  };

  componentWillMount() {
    photoDetails = _.shuffle(photoData);
  }

  render() {

    images = (
      photoDetails.map((photo, i) => {
        return (
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <GridPhotoContainer>
                  <Photo votes={photo.votes} backgroundImage={photo.url} openModal={() => this.openModal(i)} />
                  <Button>vote</Button>
                </GridPhotoContainer>
              ) : (
                  <Photo votes={photo.votes} backgroundImage={photo.url} openModal={() => this.openModal(i)} />
                )
            }
          </Media>
        )
      })
    )
    return (
      <div>
        <Grid>
          {images}
        </Grid>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={ModalStyles}
        >
          <div style={{ width: '600px' }} />
          <PhotoSlider photoDetails={photoDetails} photoSelected={this.state.photoSelected} />
        </Modal>
      </div >
    );
  }

  // Helpers //
  openModal = photoSelected => {
    this.setState({ modalIsOpen: true, photoSelected });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
}

export default App;