import React from 'react';
import Modal from 'react-modal';
import Media from 'react-media';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import _ from 'lodash';
import cookie from 'react-cookies';
import PhotoSlider from '../components/PhotoSlider';
import TitleBar from '../components/TitleBar';
import IntroText from '../components/IntroText';
import CampaignInfo from '../components/CampaignInfo';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsor';
import Photo, { Grid, GridPhotoContainer } from '../styles/styledComponents/elements/GridPhoto';
import photoData from '../data/photos.json';
import { P, H2, Button } from '../styles/styledComponents/elements'
import { StyledSection } from '../styles/styledComponents/blocks';
import { AboutTHLMarkup, ContestRulesMarkup } from "../components/ModalMarkup";
import ModalTrigger from '../components/ModalTrigger';

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(34,34, 34, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    maxWidth: '900px',
    paddingTop: '50px',
    boxShadow: '0px 0px 25px 5px #222'
  },
};

const OverlayExitButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  color: #222;
  font-family: 'Raleway'};
  font-size: 1.8rem;
  filter: opacity(.6);

  cursor: pointer;
`;

Modal.setAppElement(`#___gatsby`)

let images;
let photoDetails;
let voteButtonText;
let votedMessage;
let renderImagePage;
let cookieStatus;

class App extends React.Component {
  state = {
    modalIsOpen: false,
    photoSelected: null,
    votedFor: null,
    hasVoted: false,
    activePage: 1,
    photoDetails: null
  };

  componentWillMount() {
    photoDetails = _.shuffle(photoData);
    typeof (document) !== "undefined" && this.loadPhotosFromAPI();

    cookie.load('voted') ? cookieStatus = parseInt(cookie.load('voted')) : cookieStatus = null;
    if (cookieStatus) {
      this.setState({ votedFor: cookieStatus, hasVoted: true })
    }
  }

  render() {

    if (this.state.hasVoted) {
      voteButtonText = 'Voted';
      votedMessage = "You've already voted today!";
    } else {
      voteButtonText = 'Vote';
      votedMessage = "";
    }



    if (this.state.photoDetails) {
      images = (
        (this.state.photoDetails).map((photo, i) => {
          if (photo.id === this.state.votedFor || parseInt(photo.id) === cookieStatus) {
            return (
              <Media query='(max-width: 768px)'>
                {matches =>
                  matches ? (
                    <GridPhotoContainer>
                      <Photo
                        votedFor={this.state.votedFor}
                        votes={photo.votes}
                        backgroundImage={photo.url}
                        openModal={() => this.openModal(i)}
                      />
                      <Button
                        hasVoted={this.state.hasVoted}
                        onClick={() => {
                          if (!this.state.hasVoted) {
                            this.openModal(i)
                          }
                        }}
                      >
                        {voteButtonText}
                      </Button>
                      <P
                        fontSizeMobile="0.7em"
                        marginBottom="0"
                        marginTop="1em"
                      >
                        {votedMessage}
                      </P>
                    </GridPhotoContainer>
                  ) : (
                      <Photo
                        votedFor={this.state.votedFor}
                        votes={photo.votes}
                        backgroundImage={photo.url}
                        openModal={() => this.openModal(i)}
                      />
                    )
                }
              </Media>
            )
          }
          return (
            <Media query='(max-width: 768px)'>
              {matches =>
                matches ? (
                  <GridPhotoContainer>
                    <Photo
                      votes={photo.votes}
                      backgroundImage={photo.url}
                      openModal={() => this.openModal(i)}
                    />
                    <Button
                      hasVoted={this.state.hasVoted}
                      onClick={() => {
                        if (!this.state.hasVoted) {
                          this.openModal(i)
                        }
                      }}
                    >
                      {voteButtonText}
                    </Button>
                    <P
                      fontSizeMobile="0.7em"
                      marginBottom="0"
                      marginTop="1em"
                    >
                      {votedMessage}
                    </P>
                  </GridPhotoContainer>
                ) : (
                    <Photo
                      votes={photo.votes}
                      backgroundImage={photo.url}
                      openModal={() => this.openModal(i)}
                    />
                  )
              }
            </Media>
          )
        })
      )

      switch (this.state.activePage) {
        case 1:
          renderImagePage = images.slice(0, 3);
          break;
        case 2:
          renderImagePage = images.slice(3, 6);
          break;
        default:
          break;
      }

    } else {
      images = <H2>Loading...</H2>
    }
    return (
      <div>
        <TitleBar />
        <IntroText />
        <StyledSection paddingBottom="5em" desktopWidth="90%" maxWidth="80em">
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <Pagination
                  hideFirstLastPages
                  activePage={this.state.activePage}
                  onChange={this.handlePageChange}
                  totalItemsCount={6}
                  itemsCountPerPage={3}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              ) : (
                  <div />
                )
            }
          </Media>
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <Grid>
                  {renderImagePage}
                </Grid>
              ) : (
                  <Grid>
                    {images}
                  </Grid>
                )
            }
          </Media>
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <Pagination
                  hideFirstLastPages
                  activePage={this.state.activePage}
                  onChange={this.handlePageChange}
                  totalItemsCount={6}
                  itemsCountPerPage={3}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              ) : (
                  <div />
                )
            }
          </Media>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyles}
          >
            <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
            <PhotoSlider
              hasVoted={this.state.hasVoted}
              voteFor={this.voteFor}
              photoDetails={this.state.photoDetails}
              photoSelected={this.state.photoSelected}
            />
          </Modal>
          <br />
          <br />
          <ModalTrigger
            bgColor="#fff"
            color="#222"
            modalTransition="scaleUp"
            triggerItem={<Button>Contest Rules</Button>}
            markupToDisplay={ContestRulesMarkup}
          />
        </StyledSection>
        <CampaignInfo />
        <Sponsor />
        <Footer
          triggerItem={
            <a
              style={{
                textDecoration: 'underline',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '1.1em'
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
    document.getElementById('___gatsby').classList.add('blur');
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    document.getElementById('___gatsby').classList.remove('blur');
  }

  voteFor = (id) => {
    fetch(
      'https://hq-staging.thehumaneleague.org/votes',
      {
        method: 'POST',
        body: JSON.stringify({ art_work_id: id }),
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
      }
    ).
      then(response => response.json()).
      then(json => {

        if (json.error) alert('There was an error');
        // hook this up to error messaging
        // possible errors: 'id not found', 'vote counted for today', 'vote limit reached'
        if (json.result === 'success') {
          const photoDetails = this.state.photoDetails;
          // Maybe add votedFor data here?
          const relevantPhoto = photoDetails.find(photo => photo.id === id);
          relevantPhoto.votes += 1;
          this.setState({ votedFor: id, hasVoted: true });
          //set cookie
          const expires = new Date();
          expires.setHours(23, 59, 59, 999);
          cookie.save('voted', id, { path: '/', expires });
        }
      });
  }

  loadPhotosFromAPI = () => {
    fetch('https://hq-staging.thehumaneleague.org/votes', {}).
      then(response => response.json()).
      then(json => this.setPhotos(json));
  }


  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  }

  setPhotos = photos => this.setState({ photoDetails: photos });
}

export default App;
