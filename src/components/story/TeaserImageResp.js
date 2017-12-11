import React from 'react';
import PropTypes from 'prop-types';
import Row from '../base/Row';
import buildSrcResp from './buildSrcResp';

const TeaserImage = (props) => {

  const buildSrc = (number, size) => {
    return buildSrcResp(props.dirPath, size, "wide", number);
  };

  const buildSrcSet = (number) => {
    return `${buildSrc(number, "M")} 1200w, ${buildSrc(number, "N")} 1600w, ${buildSrc(number, "L")} 1920w, ${buildSrc(number, "H")} 4096w`;
  };

  return (
    <Row>
      <img alt={props.alt}
           className="col-xs-12 p0 border-bottom"
           src={buildSrc(props.number, "M")}
           srcSet={buildSrcSet(props.number)}
           sizes="100vw" />
    </Row>
  );
};

TeaserImage.propTypes = {
  number: PropTypes.string.isRequired,
  dirPath: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default TeaserImage;
