import React from 'react';
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Projects from "./sections/Projects";
import {Contact} from "./sections/Contact";

const Section = () => (
  <div style={{    width: '70%'}}>
      <section className="section" id="section-1">
          <Introduction />
      </section>
      <section className="section" id="section-2">
          <About />
      </section>
      <section className="section" id="section-3">
          <Projects/>
      </section>
      <section className="section" id="section-4">
          <Contact/>
      </section>
  </div>
);

export default Section;
