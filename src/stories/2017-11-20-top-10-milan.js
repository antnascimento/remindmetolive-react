import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPageResp from '../components/story/StoryPageResp';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2017-11-20-top-10-milan";

class SummerInAmsterdamStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPageResp logoNumber="04"
                     dirPath={imgDirPath}
                     altLogo="The Milan Dome"
                     title="Top 10 Milan"
                     author="Dan"
                     location="Milan, Italy"
                     tags="travel, city, Italy">

        <StoryIntro>
           A few weeks ago, I had the unique chance to visit Milan. I did
           a <a href="https://www.youtube.com/watch?v=FdJ_-4v2CzE">tech talk</a> here,
           at the Codemotion conference and I had a few hours to go around the city.

           As my time here was limited, I had to prioritize what I want to visit. Here are
           my top 10 favorite places in Milan.
        </StoryIntro>

        <StoryTextBlock title="The Milan Cathedral">
          The Milan Cathedral, (Duomo di Milano) is located in in the center of the city.
          It's built in the Gothic style and took nearly six centuries to complete.
          It is the largest church in Italy and the third largest in the world.
          Looking at the tall arches and towers you get a religious feeling of greatness,
          as everything points upwards to the skies and god.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01"
                         alt="The Milan Cathedral"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="02"
                         alt1="The Milan Dome"
                         number2="03"
                         alt2="The Milan Cathedral Square" />
        </StoryImages>
        <StoryTextBlock title="Galleria Vittorio Emanuele II">
          Galleria Vittorio Emanuele is the oldest shopping mall in Milan. Here is you can
          find luxury brands like Prada and Gucci.
          You can enter the "Galleria" though a huge arch. The entrance is in the same crowded
          square together with the Milan Cathedral.
          The roof is build out of glass and iron. The attention to detail is amazing.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="01"
                       alt="The Milan Cathedral Queue" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="05"
                         alt="Galleria Vittorio Emanuele II entrance"/>
          <PostImageResp dirPath={imgDirPath} number="06"
                         alt="Galleria Vittorio Emanuele II interior"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Galleria Vittorio Emanuele II"
                         number2="08"
                         alt2="Basilica of Sant'Eustorgio" />
        </StoryImages>

        <StoryTextBlock title="Basilica of Sant'Eustorgio">
           <a href="https://en.wikipedia.org/wiki/Basilica_of_Sant%27Eustorgio" target="_blank">Basilica of Sant'Eustorgio</a> was
           for many years an important stop for pilgrims on their journey to Rome
           or to the Holy Land, because it was said to contain the tomb of the
           Three Magi or Three Kings.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="09" alt="Basilica of Sant'Eustorgio, Milan" />
        </StoryImages>

        <StoryTextBlock title="Basilica di San Lorenzo">
          In front the church you can see the the statue Constantine the Great.
          The tall arches in front are impressive! As it was rebuilt several times,
          the architectural styles mix here.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="02"
                       alt="Basilica di San Lorenzo, Milan" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="11" alt="Basilica di San Lorenzo, Milan" />
          <PostImageResp dirPath={imgDirPath} number="12" alt="Basilica di San Lorenzo and columns, Milan" />
        </StoryImages>

        <StoryTextBlock title="Sforza Castle">
          In the 16th century the Castle was one of the biggest citadels in Europe.
          Nowadays the are tall walls are surrounding many museums, a cafe and a park.
          There is a nice fountain at the entrance, where people can rest and eat the
          amazing Italian gelato!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="13" alt="Sforza Castle, Milan"/>
          <PostImageResp dirPath={imgDirPath} number="14" alt="Sforza Castle Fountain, Milan"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="15"
                         alt1="Sforza Castle arches, Milan"
                         number2="16"
                         alt2="Sforza Castle arches, Milan" />

          <PostImageResp dirPath={imgDirPath} number="17" alt="Sforza Castle inner yard, Milan"/>
          <PostImageResp dirPath={imgDirPath} number="18" alt="Parco Sempione, Milan"/>
        </StoryImages>

        <StoryTextBlock title="Porta Sempione">
          From the Sforza Castle you can go through the Simplon Park, the main city park of Milan,
          and reach the impressive Porta Sempione.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="03"
                       alt="Porta Sempione" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="20" alt="Porta Sempione" />
        </StoryImages>

        <StoryTextBlock title="Porta Ticinese">
          Porta Ticinese is a former gate of Milan. It was first built together with
          the Spanish walls of the city. And around it you can find really nice
          restaurants.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="21" alt="Porta Ticinese, Milan" />
        </StoryImages>

        <StoryTextBlock title="San Bernardino alle Ossa">
          San Bernardino alle Ossa is best known for its ossuary, a small side chapel
          decorated with numerous human skulls and bones.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="22" alt="San Bernardino alle Ossa, Milan" />
        </StoryImages>

        <StoryTextBlock title="Santa Maria delle Grazie">
          Santa Maria delle Grazie is a church dedicated to Virgin Mary. It has a really nice
          inner yard with trees.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="23" alt="Santa Maria delle Grazie, Milan" />
        </StoryImages>

        <StoryTextBlock title="The Patterns">
          The number ten on my list is not a specific landmark, but it is the attention
          to details the whole city has. I want to encourage you look around, up and down,
          left and right and discover the columns, arches, windows and patterns around the city.

          I find that this is one of the hidden treasures of the city and I just
          can't stop looking around!
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="24"
                       alt="Milan windows" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="25" alt="Milan arches" />
          <PostImageResp dirPath={imgDirPath} number="26" alt="Milan round arches" />
          <PostImageResp dirPath={imgDirPath} number="27" alt="Milan windows and bikes" />

          <TwoPostImageResp dirPath={imgDirPath}
                         number1="28"
                         alt1="Milan building facade"
                         number2="29"
                         alt2="Milan wall, trees and windows"/>
          <PostImageResp dirPath={imgDirPath} number="30" alt="Sforza Castle inner yard with lake, Milan" />
        </StoryImages>
      </StoryPageResp>);
  }
}

export default SummerInAmsterdamStory;
