import React from 'react';
import ScrollDown from "../scroll/ScrollDown";

const Introduction = () => (
  <div style={{width : '100%'}}>
      <div className={'align-center'}>

         <h1 className={'intro-heading'}>
             Hi!
             <div>I'm Ankit</div>
             <div style={{fontSize : '14px', textAlign : 'center'}}>
                 Software Engineer @IBM Software Labs
             </div>
         </h1>


      </div>
      <ScrollDown to={'section-2'}/>
  </div>
);

export default Introduction;
