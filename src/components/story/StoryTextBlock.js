import React, {PropTypes} from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';

const StoryTextBlock = (props) => {

  return (
    <section className="pt16 pb16">
      <Container>
        <Row mb={0} mbXs={0}>
          <Col md={8} mdOffset={2} sm={10} smOffset={1}>
            {props.title && <h2 className="uppercase mb16">{props.title}</h2>}
            <p className="lead">
                {props.children}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

StoryTextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  title: PropTypes.string
};

export default StoryTextBlock;