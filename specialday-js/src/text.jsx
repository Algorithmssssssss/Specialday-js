import React, { useState } from "react";
import { css, cx } from "linaria";
import Chat from "./Chat";
import Heading from "./Heading";
import Banner from "./Banner";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { GREY, TEXT_PINK, GREEN } from "./colours";
import { NextButton } from "./DialogElement";


const sectionRootStyle = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Section = (props) => {
  const [titlePrinted, setIsTitlePrinted] = useState(false);

  return (
    <div className={sectionRootStyle}>
      <Heading
        onFinished={() => {
          setTimeout(() => {
            setIsTitlePrinted(true);
          }, 300);
        }}
        right={props.right}
      >
        {props.title}
      </Heading>
      {titlePrinted && props.children}
    </div>
  );
};

const contentStyle = css`
  grid-column: 2/9;
  margin: 72px 0 0 0;
  transform: translateZ(0);
`;

const footerStyle = css`
  font-family: "Menlo", monospace;
  text-align: center;
  padding-bottom: 36px;
  grid-column: 2/9;

  a {
    color: black;
    text-decoration-thickness: 2px;
    text-decoration-color: ${TEXT_PINK};
  }
`;

const navStyle = css`
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
  height: 1.5em;
  position: sticky;
  top: 1em;
  background: ${GREY};
  z-index: 100;
  font-family: "Menlo", monospace;
  font-style: italic;
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  grid-column: 2/9;
  border-radius: 8px;
  border: 2px black solid;
  margin-top: 1em;
  padding: 8px;
  align-items: center;
  overflow: auto;
`;

const activeLinkStyle = css`
  text-decoration-color: ${TEXT_PINK};
`;

const landingSectionRoot = css`
  margin: 0 0 5em 0;
`;

const LandingSection = (props) => {
  return <section className={landingSectionRoot}>{props.children}</section>;
};

const landingNextButtonStyles = css`
  width: 20em;

  margin: 3em auto 0;
`;

const LandingNextButton = () => {
  return (
    <div className={landingNextButtonStyles}>
    <NextButton />
  </div>
);
};

const IntroScreen = () => {
const [bannerFinished, setIsBannerFinished] = useState(false);
const [chatFinished, setIsChatFinished] = useState(false);

return (
  <LandingSection>
    <Banner onFinished={() => setIsBannerFinished(true)} />
    {bannerFinished && (
      <Section title={"Make text come alive!"}>
        <Chat onFinished={() => setIsChatFinished(true)} />
      </Section>
    )}
    {chatFinished && <LandingNextButton />}
  </LandingSection>
);
};

const itemRootStyle = css`
display: flex;
flex-direction: column;
align-items: center;
font-family: Menlo, sans-serif;
font-size: 1.5em;
margin: 0 0 4em 0;
`;

const Item = (props) => {
return (
  <div className={itemRootStyle}>
    <div>{props.icon}</div>
    <div>{props.children}</div>
  </div>
);
};

const App = () => {
return (
  <Router>
    <div>
      <nav className={navStyle}>
        <Link to="/" className={cx(activeLinkStyle, "activeLink")}>
          Home
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={IntroScreen} />
      </Switch>
      <footer className={footerStyle}>
        Made by{" "}
        <a href="https://github.com/FlorianRappl" target="_blank">
          Florian Rappl
        </a>
      </footer>
    </div>
  </Router>
);
};

export default App;

