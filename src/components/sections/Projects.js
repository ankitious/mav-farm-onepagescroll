import React from 'react';
import ScrollDown from "../scroll/ScrollDown";

const Projects = () => (
    <div >
        <div className={'align-center'} style={{height : '90vh'}}>
            <div>
                <h1 style={{textAlign : 'center'}}>IBM Cloud Automation Manager</h1>
                <div style={{ padding : '10px'}}>
                    IBM® Cloud Automation Manager is a multi-cloud, self-service management platform running on IBM Cloud Private that empowers developers and administrators to meet business demands. This platform allows you to efficiently manage and deliver services through end-to-end automation while enabling developers to build applications aligned with enterprise policies. More details <a className={'icam-link'} target={'_blank'} href={'https://www.ibm.com/us-en/marketplace/cognitive-automation'}>here</a>
                </div>
            </div>
        </div>
        <ScrollDown to={'section-4'}/>
    </div>
);

export default Projects;
