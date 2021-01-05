import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Full stack MERN junior developer, just graduated from Northwestern University Coding Bootcamp</p>

                <p>Recent graduate of the Northwestern University Coding Bootcamp. Specialty in the MERN stack. My favorite aspect of the course was working with classmates in group projects. For the last 20 years of my life I've been a professional musician. Highlights of that career include masterclasses at Princeton, Michigan, and multiple national tours, 20 recordings of original music, reviews in major music publications, etc. I have also taught thousands of private saxophone lessons.</p>
            
                <p></p>
            </Content>
        </div>
    );
    
}

export default AboutPage;