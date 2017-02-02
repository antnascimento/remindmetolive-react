import React, {PropTypes} from 'react';
import ImageWithTextTeaser from '../components/ImageWithTextTeaser.js';

class TopPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className="pt0 pb0">
        <ImageWithTextTeaser src={this.props.teaser}
                             text={this.props.title} />
        {this.props.children}
      </section>
    );
  }
}

TopPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  teaser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopPage;
