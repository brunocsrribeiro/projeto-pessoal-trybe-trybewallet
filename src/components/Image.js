import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContainerImage, ImageStyle } from '../styles';

class Image extends Component {
  render() {
    const { src } = this.props;

    return (
      <ContainerImage>
        <ImageStyle src={ src } />
      </ContainerImage>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

Image.defaultProps = { src: '' };

export default Image;
