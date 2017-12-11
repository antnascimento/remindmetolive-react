import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import ThreePostImageResp from '../components/story/ThreePostImageResp';
import FullImageResp from '../components/story/FullImageResp';
import StoryPageResp from '../components/story/StoryPageResp';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import { Link } from 'react-router-dom';

const imgDirPath = "stories/2017-01-15-florence-theme-park-of-renaissance";

class FlorenceThemeParkOfRenaissanceStory extends React.Component {

  render() {
    return (
      <StoryPageResp logoNumber="03"
                     dirPath={imgDirPath}
                     title="Florence, Theme Park Of Renaissance"
                     author="Dan & Ade"
                     location="Florence, Italy"
                     tags="travel, city, Florence, Italy">

        <StoryIntro title="Florence Cathedral">
          It's hard to find the right words when writing about the
          magnificent <a href="https://en.wikipedia.org/wiki/Florence">Florence</a>.
          It is such a special place that it is hard to find the right words that
          would give it justice.
          That's why, I will quote the Italian writer Tondelli, that describes
          Florence as the “Disneyland of the Renaissance”. Because here, it is
          really about getting surprised every day. I hope our pictures can explain
          why we were so blown away by its architecture and charm.
        </StoryIntro>

        <StoryTextBlock>
          <a href="https://en.wikipedia.org/wiki/Florence_Cathedral">The Cathedral of Saint Mary of the Flower</a>,
          or Duomo di Firenze, as it is called in Italy, is one of the most amazing
          works of architecture in the world. I still remember the first time
          we saw it. We were strolling towards the center through the narrow streets,
          enjoying aromas of Italian coffee and cuisine when the Duomo unexpectedly
          appeared. It really stands out by its size. It is simply oversized! It has
          definitely preserved its height supremacy and volumetric domination of the
          rest of the city.
          <br/><br/>
          Its Building commenced in 1296 and the exterior is decorated in pink,
          green and white marble. Entering the cathedral through the tremendous
          bronze doors that depict the life of "The Madonna" you will find a
          modest and calm setting where you admire the hand painted Dome showing
          "The Final Judgement".
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="02" />
          <ThreePostImageResp dirPath={imgDirPath}
                              number1="03"
                              number2="04"
                              number3="05" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="06"
                            number2="07" />
          <PostImageResp dirPath={imgDirPath} number="08" />
          <ThreePostImageResp dirPath={imgDirPath}
                              number1="09"
                              number2="10"
                              number3="11" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="12"
                            number2="13" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="14" />

        <StoryImages>

          <PostImageResp dirPath={imgDirPath} number="15" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="16"
                            number2="17" />
          <PostImageResp dirPath={imgDirPath} number="18" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="19"
                            number2="20" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="21"
                            number2="22" />
        </StoryImages>

        <StoryTextBlock title="From the top of the Santa Maria del Fiore">
          With a little bit of work on your end, as there are plenty of stairs to climb,
          Duomo di Firenze will graciously treat you with one of the best views
          in the world, offering a unique opportunity to enjoy the city and
          Tuscany panorama from 115 meters hight. Breathtaking emotions and
          impressions are however difficult to convey with words. To understand
          you have to experience it.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="23" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="24"
                            number2="25" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="26"
                            number2="27" />
        </StoryImages>

        <StoryTextBlock title="Glimpse of the city">
          When you say Florence people think <a href="https://en.wikipedia.org/wiki/Michelangelo">Michelangelo</a>’s
          <a href="https://en.wikipedia.org/wiki/David_(Michelangelo)">David</a> and <a href="https://en.wikipedia.org/wiki/Sandro_Botticelli">Botticelli</a>’s <a href="https://en.wikipedia.org/wiki/The_Birth_of_Venus">Venus</a>,
          but there are several wonderful little churches and museums. For example,
          the center of the city is scattered with Dante’s verses: the walls of
          medieval buildings become pages of the Divine Comedy! Therefore, everywhere
          you look, there is a beautiful medieval building, an art gallery
          or a beautiful sculpture. <Link to="/stories/bridges-of-florence.html">The bridges of Florence</Link> have
          an important role in Florence's cityscape, therefore we dedicated an entire story for them.
          Check it out <Link to="/stories/bridges-of-florence.html">here</Link>!
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="28" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="29"
                            number2="30" />
          <PostImageResp dirPath={imgDirPath} number="31" />
        </StoryImages>

        <StoryTextBlock title="Piazzale Michelangelo">
          You must come to the famous <a href="https://en.wikipedia.org/wiki/Piazzale_Michelangelo">Piazzale Michelangelo</a> for
          a magnificent panoramic view of Florence.
          It is dedicated to the great Renaissance artist Michelangelo and has
          copies of his famous works.
          It takes a little legwork and there are a few easy ways to get there,
          but once you are there, you will enjoy a stunning view of Florence and
          Arno Valley. You will notice how the <a href="https://en.wikipedia.org/wiki/Arno_River">Arno River</a> naturally
          splits Florence in two sides, that are linked through beautiful <Link to="/stories/bridges-of-florence.html">bridges</Link>.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="32" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="33" />
        </StoryImages>

        <StoryTextBlock title="Palazzo Pitti and the gardens">
          <a href="https://en.wikipedia.org/wiki/Palazzo_Pitti">The Palazzo Pitti</a> it
          is a stunning Renaissance palace, almost always overshadowed by its more
          famous counterparts,
          the <a href="https://en.wikipedia.org/wiki/Uffizi">Uffizi</a>, <a href="https://en.wikipedia.org/wiki/Galleria_dell'Accademia">Accademia</a> (where
          the David Statue is located), and the <a href="https://en.wikipedia.org/wiki/Palazzo_Vecchio">Palazzo Vecchio</a>.
          It has an impressive collection of art and the building was the royal
          residence of the Medici, and even Napoleon stayed there for a bit.
          The size and grandeur of the Palazzo Pitti and its gardens were one of
          the inspirations for Versailles.
          What a beautiful day we had here, after a marathon of art and architecture,
          strolling through the gardens!
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="34" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="35"
                            number2="36" />
          <PostImageResp dirPath={imgDirPath} number="37" />
          <PostImageResp dirPath={imgDirPath} number="38" />
          <PostImageResp dirPath={imgDirPath} number="39" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="40"
                            number2="41" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath} prefix="image" number="42" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="43"
                            number2="44" />
          <PostImageResp dirPath={imgDirPath} number="45" />
          <PostImageResp dirPath={imgDirPath} number="46" />
        </StoryImages>
      </StoryPageResp>);
  }
}

export default FlorenceThemeParkOfRenaissanceStory;
