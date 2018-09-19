import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';

export default class ModalScaleUpOverlay extends Component {
  closeModal = () => {
    ModalManager.close();
    document.getElementById('___gatsby').classList.remove('blur', 'fixed');
  };

  componentDidMount() {
    //allow ESC key to close modal
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ('key' in evt) {
        isEscape = evt.key == 'Escape' || evt.key == 'Esc';
      } else {
        isEscape = evt.keyCode == 27;
      }
      if (isEscape) {
        ModalManager.close();
        document.getElementById('___gatsby').classList.remove('blur', 'fixed');
      }
    };
  }

  render() {
    const { markupToDisplay, onRequestClose, bgColor } = this.props;
    const defaultBgColor = 'rgba(43, 43, 43, .9)';
    return (
      <Modal
        style={{
          content: {
            background: bgColor || defaultBgColor
          }
        }}
        onRequestClose={onRequestClose}
        effect={Effect.ScaleUp}
      >
        <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
        {markupToDisplay}
      </Modal>
    );
  }
}

const OverlayExitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  /* border: 2px solid white; */
  border-radius: 50%;
  /* background: red; */
  font-size: 1.8rem;

  cursor: pointer;
`;
