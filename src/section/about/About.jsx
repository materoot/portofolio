import { useState } from 'react';
import HeaderTitle from '../../components/headertitle/HeaderTitle';
import './style.css';

const About = () => {
    const [activeLink, setActiveLink] = useState({skill:true,exp:false,edu:false})
    return (
        <article id="about" className='container'>
            <div className="row">
                <div className="about-col-1">
                    <img src="http://localhost:3000/images/user.png" alt="" />
                </div>
                <div className="about-col-2">
                    <HeaderTitle title={'About'} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore mollitia repellendus minus suscipit. Veritatis, expedita illum vitae natus, minima doloremque, earum repudiandae vel magni tempore laudantium ullam reiciendis. Ad!</p>

                    <div class="tab-titles">
                        <div class={'tab-links ' + (activeLink.skill && 'active-link')} onClick={()=> setActiveLink({...activeLink, skill:true,exp:false,edu:false})}>Skills</div>
                        <div class={'tab-links ' + (activeLink.exp && 'active-link')}  onClick={()=> setActiveLink({...activeLink, skill:false,exp:true,edu:false})}>Experience</div>
                        <div class={'tab-links ' + (activeLink.edu && 'active-link')} onClick={()=> setActiveLink({...activeLink, skill:false,exp:false,edu:true})}>Education</div>
                    </div>
                    <div class={"tab-contents " + (activeLink.skill && 'active-tab')} id="skills">
                        <ul>
                            <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                            <li><span>Web Development</span><br/>Designing Web/App interfaces</li>
                            <li><span>App Development</span><br/>Building Android/IOS apps</li>
                        </ul>
                    </div>
                    <div class={"tab-contents " + (activeLink.exp && 'active-tab')} id="experience">
                        <ul>
                            <li><span>Test Experience</span><br/>Designing Web/App interfaces</li>
                            <li><span>Web Development</span><br/>Designing Web/App interfaces</li>
                            <li><span>App Development</span><br/>Building Android/IOS apps</li>
                        </ul>
                    </div>
                    <div class={"tab-contents " + (activeLink.edu && 'active-tab')} id="education">
                        <ul>
                            <li><span>Test Education</span><br/>Designing Web/App interfaces</li>
                            <li><span>Web Development</span><br/>Designing Web/App interfaces</li>
                            <li><span>App Development</span><br/>Building Android/IOS apps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About