import React from 'react';
import ScrollDown from "../scroll/ScrollDown";

const About = () => (
  <div >
     <div className={'align-center'} style={{height : '90vh'}}>
          <div>
              <h1 style={{textAlign : 'center'}}>WHO AM I?</h1>
              <div style={{ padding : '10px', textAlign : 'center'}}>
              I am a front end developer. JavaScript is <i style={{ width: '20px',verticalAlign: 'middle',marginLeft: '3px'}} className="em em-heart" />
              </div>
              <div>
                  I am passionate about building excellent software that improves the lives of those around me.
              </div>
         </div>
     </div>
      <ScrollDown to={'section-3'}/>
  </div>
);

export default About;
