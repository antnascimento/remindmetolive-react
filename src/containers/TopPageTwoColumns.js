import React, {PropTypes} from 'react';
import Row from '../components/base/Row';
import Col from '../components/base/Col';
import Container from '../components/base/Container';
import TopPage from './TopPage.js';

class TopPageTwoColumns extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <TopPage teaser={this.props.teaser}
               title={this.props.title}>
        <Container>
          <Row>
            <Col sm={6} md={5}>
              {this.props.children[0]}
            </Col>
            <Col sm={6} md={5} mdOffset={1}>
              {this.props.children[1]}
             </Col>
          </Row>
        </Container>
      </TopPage>
    );
  }
}

TopPageTwoColumns.propTypes = {
  children: PropTypes.array.isRequired,
  teaser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopPageTwoColumns;
