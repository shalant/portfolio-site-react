import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>a bunch of wordy words</p>
            </Content>
        </div>
    );
    
}

export default AboutPage;