import React from 'react';
import Container from './base/Container.js';
import Row from './base/Row.js';
import Col from './base/Col.js';
import StoryIntro from './story/StoryIntro.js';
import StoryHover from './stories/StoryHover.js';

class StoriesPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="pt48 pb0">
        <Container>
          <Row>
            <Col sm={8} smOffset={2} someClass="text-center">
              <h1 className="uppercase mb8 mb-xs-8">Stories</h1>
            </Col>
          </Row>
        </Container>

        <StoryIntro>
          Discover stories about love, travel, people, and our lives and culture through photography. Let the stories flow in your veins!
        </StoryIntro>

        <StoryHover title="Lisbon"
                    href="/stories/lisbon.html"
                    src="/images/stories/2017-03-05-lisbon/teaser-02-2048.jpg" />

        <StoryHover title="Florence‚ The Theme Park Of Renaissance"
                    href="/stories/florence-theme-park-of-renaissance.html"
                    src="/images/stories/2017-01-15-florence-theme-park-of-renaissance/teaser-02-2048.jpg" />

        <StoryHover title="Bridges of Florence"
                    href="/stories/bridges-of-florence.html"
                    src="/images/stories/2016-06-30-bridges-of-florence/teaser-02-2048.jpg" />

        <StoryHover title="Pisa Afterglow"
                    href="/stories/pisa-afterglow.html"
                    src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/teaser-02-800.jpg" />

        <StoryHover title="London After Brexit"
                    href="/london"
                    src="http://static.remindmetolive.com/images/stories/2016-09-10-london-after-brexit/teaser-01-800.jpg" />

        <StoryHover title="Tenerife, Land Of Eternal Spring"
                    href="/florence"
                    src="http://static.remindmetolive.com/images/stories/2016-06-11-tenerife-the-land-of-eternal-spring/teaser-01-800.jpg" />

        <StoryHover title="Lanzarote - Beaches"
                    href="/florence"
                    src="http://static.remindmetolive.com/images/stories/2016-05-17-lanzarote-beaches/teaser-01-800.jpg" />

        <StoryHover title="Winter Fairy Tale in Salzburg"
                    href="/florence"
                    src="http://static.remindmetolive.com/images/stories/2016-01-06-winter-fairy-tale-in-salzburg/teaser-01-800.jpg" />

        <StoryHover title="The Casino Of Constanta"
                    href="/stories/the-casino-of-constanta.html"
                    src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-800.jpg" />

        <StoryHover title="Love at the Gardens Of The World"
                    href="/casino"
                    src="http://static.remindmetolive.com/images/stories/2015-09-30-love-at-the-gardens-of-the-world/teaser-01-800.jpg" />

        <StoryHover title="Lunar Landscapes of Lanzarote"
                    href="/stories/lunar-landscapes-of-lanzarote.html"
                    src="/images/stories/2015-09-29-lunar-landscapes-of-lanzarote/teaser-01-800.jpg" />
      </section>
    );
  }
}

export default StoriesPage;
