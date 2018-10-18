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
import { P, H1, H2, Button } from '../styles/styledComponents/elements'
import { StyledSection } from '../styles/styledComponents/blocks';
import { AboutTHLMarkup, ContestRulesMarkup } from "../components/ModalMarkup";
import ModalTrigger from '../components/ModalTrigger';
import { fromThemeProps } from '../helpers/utilities';
import staffPhotos from '../data/photos.json';

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
    paddingTop: '20px',
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
  z-index: 1;
`;

Modal.setAppElement(`#___gatsby`)


let images,
  staffImages,
  winnerImages,
  winners,
  voteButtonText,
  votedMessage,
  renderImagePage,
  renderStaffImages,
  renderWinnerImages,
  cookieStatus;

class App extends React.Component {
  state = {
    voteModalIsOpen: false,
    nonVoteModalIsOpen: false,
    winnersModalIsOpen: false,
    photoSelected: null,
    votedFor: null,
    hasVoted: true,
    activePage: 1,
    photoDetails: null,
    winners: null,
    winnersArray: null,
  };

  componentWillMount() {
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

    if (this.state.winners) {

      winnerImages = (
        (this.state.winners).map((photo, i) => {
          let place;
          switch (i) {
            case 0:
              place = <H2 fontSize="1.8rem" textTransform="uppercase" color={fromThemeProps("altRed")}>Grand prize</H2>
              break;
            case 1:
              place = <H2 fontSize="1.8rem" textTransform="uppercase" color={fromThemeProps("altRed")}>Second place</H2>
              break;
            case 2:
              place = <H2 fontSize="1.8rem" textTransform="uppercase" color={fromThemeProps("altRed")}>Third place</H2>
              break;
          }
          return (
            <GridPhotoContainer key={i}>
              <Photo
                marginRight="0em"
                votes={photo.votes}
                className="Photo"
                backgroundImage={photo.url.replace(new RegExp("(.*)" + 'lg'), "$1sm")}
                openModal={() => {
                  this.openModal(i, false, false, true);
                }}
              />
              {place}
            </GridPhotoContainer>
          )
        }
        )
      )
    }

    staffImages = (
      (staffPhotos).map((photo, i) => {
        return (
          <GridPhotoContainer key={i}>
            <Photo
              className="Photo"
              marginRight="0em"
              backgroundImage={photo.url.replace(new RegExp("(.*)" + 'lg'), "$1sm")}
              openModal={() => {
                this.openModal(i, false, true, false);
              }}
            />
          </GridPhotoContainer>
        )
      }
      )
    )

    if (this.state.photoDetails) {
      images = (
        (this.state.photoDetails).map((photo, i) => {

          if (!this.state.winnersArray.includes(photo.id)) {

            let photoMobileURL = photo.url.replace(new RegExp("(.*)" + 'lg'), "$1sm");

            if (photo.id === this.state.votedFor || parseInt(photo.id) === cookieStatus) {
              return (
                <Media query='(max-width: 768px)'>
                  {matches =>
                    matches ? (
                      <GridPhotoContainer>
                        <Photo
                          votedFor={this.state.votedFor}
                          votes={photo.votes}
                          backgroundImage={photoMobileURL}
                          openModal={() => this.openModal(i, true, false, false)}
                        />
                        <Button
                          hasVoted={this.state.hasVoted}
                          onClick={() => {
                            if (!this.state.hasVoted) {
                              this.openModal(i, true, false, false)
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
                          openModal={() => this.openModal(i, true, false, false)}
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
                        backgroundImage={photoMobileURL}
                        openModal={() => this.openModal(i, true, false, false)}
                      />
                      <Button
                        hasVoted={this.state.hasVoted}
                        onClick={() => {
                          if (!this.state.hasVoted) {
                            this.openModal(i, true, false, false)
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
                        openModal={() => this.openModal(i, true, false, false)}
                      />
                    )
                }
              </Media>
            )
          }
        })
      )

      switch (this.state.activePage) {
        case 1:
          renderImagePage = images.slice(0, 5);
          break;
        case 2:
          renderImagePage = images.slice(5, 10);
          break;
        case 3:
          renderImagePage = images.slice(10, 15);
          break;
        case 4:
          renderImagePage = images.slice(15, 20);
          break;
        case 5:
          renderImagePage = images.slice(20, 24);
          break;
        default:
          break;
      }

    } else {
      images = <H2>Loading...</H2>
    }

    renderWinnerImages = (
      <Grid marginBottom="0" className="Grid">
        {winnerImages}
      </Grid>
    )

    renderStaffImages = (
      <Grid className="Grid">
        {staffImages}
      </Grid>
    )

    return (
      <div>
        <TitleBar />
        <IntroText />
        <StyledSection paddingBottom="5em" desktopWidth="90%" maxWidth="80em">
          {renderWinnerImages}
          <Modal
            isOpen={this.state.winnersModalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyles}
          >
            <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
            <PhotoSlider
              winners={true}
              hasVoted={this.state.hasVoted}
              photoDetails={winners}
              photoSelected={this.state.photoSelected}
            />
          </Modal>
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <Pagination
                  hideFirstLastPages
                  activePage={this.state.activePage}
                  onChange={this.handlePageChange}
                  totalItemsCount={24}
                  itemsCountPerPage={5}
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
                  totalItemsCount={24}
                  itemsCountPerPage={5}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              ) : (
                  <div />
                )
            }
          </Media>
          <Modal
            isOpen={this.state.voteModalIsOpen}
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
          <hr style={{
            borderBottom: '2px solid black',
            width: '100%',
            marginBottom: '6em',
            marginTop: '6em',
            maxWidth: '65em'
          }} />
          <H1 marginBottom="1.5rem" color={fromThemeProps("altRed")}>
            Non-contest submissions
        </H1>
          <P textAlign="center" width="90%">The following is a collection of international and staff entries that are not eligible for prizes under the official contest rules:</P>
          {renderStaffImages}
          <Modal
            isOpen={this.state.nonVoteModalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyles}
          >
            <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
            <PhotoSlider
              staff={true}
              photoDetails={staffPhotos}
              photoSelected={this.state.photoSelected}
            />
          </Modal>
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
  openModal = (photoSelected, voteModalIsOpen, nonVoteModalIsOpen, winnersModalIsOpen) => {
    this.setState({ photoSelected, voteModalIsOpen, nonVoteModalIsOpen, winnersModalIsOpen });
    document.getElementById('___gatsby').classList.add('blur');
  }

  closeModal = () => {
    this.setState({ voteModalIsOpen: false, nonVoteModalIsOpen: false, winnersModalIsOpen: false });
    document.getElementById('___gatsby').classList.remove('blur');
  }

  voteFor = (id) => {
    fetch(
      'https://hq.thehumaneleague.org/votes',
      {
        method: 'POST',
        body: JSON.stringify({ art_work_id: id }),
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
      }
    ).
      then(response => response.json()).
      then(json => {

        if (json.error) alert('You have reached the vote limit');
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
    fetch('https://hq.thehumaneleague.org/votes', {}).
      then(response => response.json()).
      then(json => this.setPhotos(json));
  }


  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  }

  setPhotos = photos => {
    //sort winners by votes and grab the top 3
    let sortedVotes = _.sortBy(photos, function (obj) {
      return (obj.votes);
    })
    winners = sortedVotes.reverse().splice(0, 3);

    let winnersArray = winners.map((obj) => obj.id)

    //filter out other submissions for main grid (photoDetails)
    let others = photos.filter(photo => !winnersArray.includes(photo.id))
    this.setState({ photoDetails: _.shuffle(others), winners, winnersArray });
  }
}

export default App;
