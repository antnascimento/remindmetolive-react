import React, {PropTypes} from 'react';
import Row from './Row';
import Col from './Col';

const TwoImages = (props) => {
  return (
    <Row mb={40} mbXs={24}>
      <Col xs={12} sm={6} md={6} lg={6} mbXs={16}>
        <img alt="Project Image" src={props.src1} />
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <img alt="Project Image" src={props.src2} />
      </Col>
    </Row>
  );
};

TwoImages.propTypes = {
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired
};

export default TwoImages;
