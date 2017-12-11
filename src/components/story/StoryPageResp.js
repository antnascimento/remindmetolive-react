import React from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import TeaserImageResp from './TeaserImageResp';
import PropTypes from 'prop-types';
import { imageHost } from '../../isomorphicVars';
import SubscribeForm from '../../components/SubscribeForm';

class StoryPageResp extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div className="main-container">
      <TeaserImageResp number={this.props.logoNumber} dirPath={this.props.dirPath} alt={this.props.altLogo} />
      <Container pt={48} pb={32} pbXs={0} someClass="text-center">
        <Row>
          <Col sm={8} smOffset={2} someClass="text-center">
            <h1 className="uppercase">{this.props.title}</h1>
          </Col>
        </Row>
      </Container>

      <Container pt={0} pb={0} someClass="text-center">
        <ul className="post-meta">
          <li>
            <i className="ti-user"/>
            <span>Author: {this.props.author}</span>
          </li>
          <li>
            <i className="ti-tag"/>
            <span>Tags: {this.props.tags}</span>
          </li>
          <li>
            <i className="ti-map"/>
            <span>Location: {this.props.location}</span>
          </li>
        </ul>
      </Container>

      {this.props.children}

      <Container pt={0} pb={32} someClass="text-center">
        <Row>
          <Col>
            <img src={`${imageHost}/images/cocos.png`} alt="Remindmetolive Story Logo" />
          </Col>
        </Row>
      </Container>
      <SubscribeForm />
    </div>);
  }
}

StoryPageResp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  logoNumber: PropTypes.string.isRequired,
  dirPath: PropTypes.string.isRequired,
  altLogo: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

export default StoryPageResp;
