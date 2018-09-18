import React, { Component } from 'react';
import chevronGreyIcon from '../assets/png/chevron--dark.png';
import styled from 'styled-components';

const Chevron = styled.img`
  height: 50px;
`;

export default [
  // these are the styles for the slider's
  // 'previous and next slide buttons and
  // the slider dots
  {
    component: class extends React.Component {
      handleClick = e => {
        e.preventDefault();
        this.props.previousSlide();
      };

      getButtonStyles = disabled => ({
        border: 0,
        background: 'transparent',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 0.6,
        cursor: 'pointer',
        transform: 'rotateY(180deg)'
      });

      render() {
        return (
          <button
            style={this.getButtonStyles(
              this.props.currentSlide === 0 && !this.props.wrapAround
            )}
            onClick={this.handleClick}
          >
            <Chevron src={chevronGreyIcon} />
          </button>
        );
      }
    },

    position: 'CenterLeft'
  },
  {
    component: class extends React.Component {
      handleClick = e => {
        e.preventDefault();
        this.props.nextSlide();
      };

      getButtonStyles = disabled => ({
        border: 0,
        background: 'transparent',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 0.6,
        cursor: 'pointer'
      });

      render() {
        return (
          <button
            className="rightSlide"
            style={this.getButtonStyles(
              this.props.currentSlide + this.props.slidesToScroll >=
              this.props.slideCount && !this.props.wrapAround
            )}
            onClick={this.handleClick}
          >
            <Chevron src={chevronGreyIcon} />
          </button>
        );
      }
    },

    position: 'CenterRight'
  },
];
