import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi, I'm Prit. I've been building websites for over five years. I'm 16 years old web developer and constantly learning new things every day. I've learned so many things in the past five years of experience. Self-taught developer and no one can stop me from learning!`,
  paraTwo: `Full Stack Web Developer & love to code, expert as web developer 🔥💾
  `,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Pritu', 'coding', 'pritudev', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      
    </>
  );
};
export default AboutMe;
