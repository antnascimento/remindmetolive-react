import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPageResp from '../components/story/StoryPageResp';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2017-12-15-cretan-sunsets";

class CretanSunsetsStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPageResp logoNumber="11"
                     dirPath={imgDirPath}
                     altLogo="Sunset in Crete"
                     title="Cretan Sunsets"
                     author="Dan"
                     location="Crete, Greece"
                     tags="travel, island, Greece">

        <StoryIntro>
          We traveled to Crete this summer. The island is like a paradise, it has everything
          tourists like us want: great beaches, nice mountains, great towns. We were really
          impressed by the island, but one thing is for sure:
          <br/><br/>
          <blockquote>In Crete we've seen the best sunsets of our lives!</blockquote>
          Let's try to recreate our trip and remember all of our favorite places here.
        </StoryIntro>

        <StoryTextBlock title="Chania">
          <a href="https://en.wikipedia.org/wiki/Chania" trget="_blank">Chania</a> is
          a must visit place. It's the second largest city in Crete, it has a nice shopping
          area in the Old Town and a harbor with a Lighthouse. From the pier we were able
          to watch an amazing sunset.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01"
                         alt="Sunset, Lighthouse in Chania"/>
          <PostImageResp dirPath={imgDirPath} number="02"
                         alt="Chania Port"/>
          <PostImageResp dirPath={imgDirPath} number="03"
                         alt="Buildings in Chania"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="04"
                       alt="Chania Pier and Lighthouse" />
        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="05"
                         alt1="Chania Horse Carrige"
                         number2="06"
                         alt2="Old Man in Crete" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Cretan Painter"
                         number2="08"
                         alt2="Cretan Painter" />
          <PostImageResp dirPath={imgDirPath} number="09"
                         alt="Watching the Chania sunset"/>
        </StoryImages>
        <StoryTextBlock title="Heraklion">
          Heraklion is the largest city in Crete and the administrative capital of the
          island. The first thing we visited here was the Knossos Palace. Then we
          headed to the center of the city and had lunch at a nice restaurant
          near the Koules Fortress, near the seaside. We also liked the Saint Minas Cathedral and
          the Church of Saint Titus.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="05"
                       alt="Knossos Palace" />
        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="11"
                         alt1="Knossos Palace"
                         number2="12"
                         alt2="Knossos Palace" />
          <PostImageResp dirPath={imgDirPath} number="13"
                         alt="Koules Fortress"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="14"
                            alt1="Saint Minas Cathedral, Heraklion"
                            number2="15"
                            alt2="Church of Saint Titus, Heraklion" />
        </StoryImages>

        <StoryTextBlock title="Rethimno">
          Rethimno is one of the smaller but really animated cities. There are lots
          of really nice sea food restaurants here. In the center there is a fortress.
          We witnessed an amazing sunset from the fortress.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="06"
                       alt="Rethimno Lighthouse, Crete" />

        <StoryTextBlock title="Agia Galini">
           Agia Galini is another nice town. It has a nice harbor with lots of
           ships and a pier. It's been built on hill which gives an interesting
           view when photographed from the pier.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="17"
                       alt="Agia Galini, Crete" />


        <StoryTextBlock title="Seitan Limania Beach">
          It was really challenging to reach to the Seitan Limania Beach. You have to
          get down on a rocky way which looks really dangerous. We put some effort into
          getting there. But it's totally worth it.
          The water and sand are amazing and you can see goats doing jumps on the rocks around.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="18"
                       alt="Mountains in Crete" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="19"
                         alt="The Road to Seitan Limania Beach"/>
          <PostImageResp dirPath={imgDirPath} number="20"
                         alt="Seitan Limania Beach, Crete"/>
          <PostImageResp dirPath={imgDirPath} number="21"
                         alt="Seitan Limania Beach, Crete"/>
          <PostImageResp dirPath={imgDirPath} number="22"
                         alt="Cretan Goat"/>
        </StoryImages>

        <StoryTextBlock title="Matala Beach">
          The Matala Beach is really accessible, there is a big parking lot right next to it.
          I did some snorkeling here and I've seen lots of colorful fishes. The view with the
          yellow rocks is amazing.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="23"
                       alt="Matala Beach, Crete" />

        <StoryTextBlock title="Praveli Beach">
          Praveli Beach is special because it has lots of palm trees, directly on the beach.
          So you can enjoy the shade during the really hot summer days.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="24"
                         alt="Preveli Beach, Crete"/>
        </StoryImages>

        <StoryTextBlock title="Balos Beach">
          The Balos beach is one of the most amazing places I've seen! The lagoon
          has white sand and turquoise water. The contrast is amazing!
          <br/><br/>
          Getting to the beach was not easy, we had to go on a rocky way. Another way
          of getting there is by boat. I still recommend the rocky path, as from the hills
          there, you get the best view of the lagoon.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="25" alt="Rocky Landscape, Crete" />
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="26"
                       alt="Balos Beach, Crete" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="27" alt="Balos Beach, Crete" />
        </StoryImages>

        <StoryTextBlock title="Other Beaches">
          Crete has lots of other beaches: small ones, cute one, rocky ones, also
          private ones.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="28" alt="Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="29" alt="Royal Blue Resort Beach, Crete" />
          <PostImageResp dirPath={imgDirPath} number="30" alt="Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="31" alt="Rocky Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="32" alt="Cretan Beach and Mountains" />
        </StoryImages>

        <StoryTextBlock title="The Mountains">
          Crete is not only about beaches, and urban landscapes: it has amazing
          hills and mountains as well. The combination and richness of colors is
          just breathtaking.
          <br/><br/>
          <blockquote>
            Seeing both mountains and sea in the same place makes me think about
            how paradise can look like!
          </blockquote>
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="33"
                       alt="Crete Sea and Mountains" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="34" alt="Mountains in Crete" />
          <PostImageResp dirPath={imgDirPath} number="35" alt="Cretan Mountains" />
          <PostImageResp dirPath={imgDirPath} number="36" alt="Sunset in Cretan Mountains" />
        </StoryImages>

        <StoryTextBlock title="The Sunsets">
          I kept the best for the end. The sunsets! Every evening we watched one
          and every time it got better! Enjoy!
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="37"
                       alt="Sunset, Crete" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="38" alt="Cretan sunset" />
          <PostImageResp dirPath={imgDirPath} number="39" alt="Fortezza Castle, Rethimno" />
          <PostImageResp dirPath={imgDirPath} number="40" alt="Santa Maria delle Grazie, Milan" />
        </StoryImages>
      </StoryPageResp>);
  }
}

export default CretanSunsetsStory;
