import React from 'react';
import Modal from 'react-modal';
import Media from 'react-media';
import _ from 'lodash';
import PhotoSlider from "../components/PhotoSlider";
import TitleBar from "../components/TitleBar";
import IntroText from "../components/IntroText";
import CampaignInfo from "../components/CampaignInfo";
import Footer from "../components/Footer";
import Sponsor from "../components/Sponsor";
import Photo, { Grid, GridPhotoContainer } from '../styles/styledComponents/elements/GridPhoto';
import photoData from "../data/photos.json";
import { Button } from "../styles/styledComponents/elements"
import { StyledSection } from "../styles/styledComponents/blocks";
import AboutTHLMarkup from "../components/ModalMarkup";

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
    votedFor: null,
  };

  componentWillMount() {
    photoDetails = _.shuffle(photoData);
  }

  render() {

    images = (
      photoDetails.map((photo, i) => {
        if (photo.id === this.state.votedFor) {
          console.log(this.state.votedFor)
          return (
            <Media query="(max-width: 768px)">
              {matches =>
                matches ? (
                  <GridPhotoContainer>
                    <Photo votedFor={this.state.votedFor} votes={photo.votes} backgroundImage={photo.url} openModal={() => this.openModal(i)} />
                    <Button onClick={() => this.voteFor(photo.id)}>vote</Button>
                  </GridPhotoContainer>
                ) : (
                    <Photo votedFor={this.state.votedFor} votes={photo.votes} backgroundImage={photo.url} openModal={() => this.openModal(i)} />
                  )
              }
            </Media>
          )
        }
        return (
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <GridPhotoContainer>
                  <Photo votes={photo.votes} backgroundImage={photo.url} openModal={() => this.openModal(i)} />
                  <Button onClick={() => this.voteFor(photo.id)}>vote</Button>
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
        <TitleBar />
        <IntroText />
        <StyledSection desktopWidth="90%" maxWidth="80em">


          <Grid>
            {images}
          </Grid>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyles}
          >
            <div style={{ width: '600px' }} />
            <PhotoSlider voteFor={this.voteFor} photoDetails={photoDetails} photoSelected={this.state.photoSelected} />
          </Modal>
          <br />
          <Button>Contest Rules</Button>
        </StyledSection>
        <CampaignInfo />
        <Sponsor />
        <Footer
          triggerItem={
            <a
              style={{
                textDecoration: 'underline',
                color: '#fff',
                textTransform: 'uppercase'
              }}
            >
              About The Humane League
          </a>
          }
          markupToDisplay={AboutTHLMarkup}
        />
      </div >
    );
  }

  // Helpers //
  openModal = (photoSelected) => {
    this.setState({ modalIsOpen: true, photoSelected });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  voteFor = id => {
    this.setState({ votedFor: id });

  }
}

export default App;