    import React, {useState } from 'react'
    import "./Landing.css";
    import { NavLink } from 'react-router-dom';

    const Landing = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const goToNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        };

        const goToPrevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        };

        return (
            <div className='landing-page'>
                <div className="carousel">
                    <img src="" alt="" />
                </div>

                {/* welcome notification */}
                <div className="lading-welcome-notification">
                    <b>Welcome to our <br />community!</b>
                </div>

                {/* short description */}
                <div className="landing-descrption">
                    <div className="description-item">
                        Find and join event and activities that interest you.
                    </div>
                    <div className="description-item">
                        Find and join event and activities that interest you.
                    </div>
                    <div className="description-item">
                        Find and join event and activities that interest you.
                    </div>
                </div>

                <div className="landing-description-dots">
                    <div className='active'></div>
                    <div className=''></div>
                    <div className=''></div>
                </div>

                <div className="get_started_container">
                    <NavLink className="get_started_btn">
                        <button>Get Started</button>
                    </NavLink>
                </div>
            </div>
        )
    }

    export default Landing
