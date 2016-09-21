import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import {StaticLinkSectionItem} from '../../components/sectionitem/sectionitem.jsx';

export default class HourOfCode extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <div id="content">
                    <div className="content-section">
                        <div className="content-section-title">
                            Try Coding with ScratchJr
                        </div>
                        <div className="content-section-description">
                            Try these teacher-led activities to explore creative coding with ScratchJr.
                        </div>
                        <div className="content-section-items-container">
                            <StaticLinkSectionItem
                                format="full"
                                title="Can I Make the Sun Set?"
                                thumbnail="/images/activitycards/card06-sun.png"
                                linkURL="https://drive.google.com/file/d/0B_kqMacZctDuTG5CdEhoR2o3M0E/view"
                                linkText="See more">
                                Students will get an introduction to programming by making a sun set over a city
                                landscape! <em>Ages 5 - 9. Programming, Storytelling, Mathematics,Creativity</em>
                            </StaticLinkSectionItem>

                            <StaticLinkSectionItem
                                format="full"
                                title="Can I Make a Spooky Forest?"
                                thumbnail="/images/activitycards/card05-forest.png"
                                linkURL="https://drive.google.com/file/d/0B_kqMacZctDuWDRtLXQwRWp4ZGc/view"
                                linkText="See more">
                                Students will learn more features of ScratchJr by creating a spooky
                                forest with multiple characters! <em>Ages 5 - 9. Art, Storytelling, Sequence</em>
                            </StaticLinkSectionItem>

                            <StaticLinkSectionItem
                                format="full"
                                title="Can I Make My Characters Greet Each Other?"
                                thumbnail="/images/activitycards/card08-greet.png"
                                linkURL="https://drive.google.com/file/d/0B_kqMacZctDuNVg0QTJaWUR6WVE/view"
                                linkText="See more">
                                Students will learn advanced features of the ScratchJr app when
                                they make a dog and kitten meet each other and exchange hellos! <em>
                                Ages 5 - 9. Programming, Storytelling, Mathematics, Creativity</em>
                            </StaticLinkSectionItem>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

render(
    <HourOfCode/>,
    document.getElementById('app'));
