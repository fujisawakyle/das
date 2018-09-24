import React, { Component } from 'react';
import styled from 'styled-components';
import ModalScaleUpOverlay from './ModalScaleUpOverlay';
import { ModalManager } from 'react-dynamic-modal';

export default class ModalTrigger extends Component {
  state = {
    anchorModalShown: false
  };
  modalTransitions = {
    scaleUp: ModalScaleUpOverlay
  };

  openModal = () => {
    setTimeout(() => {
      document.getElementById('___gatsby').classList.add('blur', 'fixed');
    }, 200);
    const ModalName = this.modalTransitions[this.props.modalTransition];
    let markup;
    let bgColor;
    let color;

    ModalManager.open(
      <ModalName
        bgColor={bgColor || this.props.bgColor}
        color={color || this.props.color}
        markupToDisplay={markup || this.props.markupToDisplay}
        onRequestClose={() => true}
      />
    );
  };
  render() {
    return (
      <Centered>
        <ModalClickContainer onClick={this.openModal}>
          {this.props.triggerItem}
        </ModalClickContainer>
      </Centered>
    );
  }
}


const ModalClickContainer = styled.div`
  cursor: pointer;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


