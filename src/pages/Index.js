import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Charles Gao's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A personal website written in modern Javascript using react and jamstack.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        The future is not witten in the stars. There are no guarantees.
        So claim your adulthood. Be intentional. Get to work. Pick your family.
        Do the math. Make your own certainty. Don’t be defined by what you
        didn’t know or didn’t do. You are deciding your life right now.<br />
        - Meg Jay, The Defining Decade
      </p>
      <p> Source available <a href="https://github.com/gao440/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
