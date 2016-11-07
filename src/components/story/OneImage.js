import React, {PropTypes} from 'react';
import Row from '../base/Row';
import Col from '../base/Col';

const OneImage = (props) => {
  return (
    <Row mb={40} mbXs={24}>
      <Col sm={12} someClass="text-center">
        <img alt="Project Image" src={props.src} />
      </Col>
    </Row>
  );
};

OneImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default OneImage;
