import React from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import PropTypes from 'prop-types';

const StoryTextBlock = (props) => {

  return (
    <Container pt={16} pb={16}>
      <Row mb={0} mbXs={0}>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          {props.title && <h2 className="uppercase mb16 text-center">{props.title}</h2>}
          <div className="lead">
            {props.children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

StoryTextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  title: PropTypes.string
};

export default StoryTextBlock;
