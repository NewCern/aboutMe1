import * as React from 'react';
import {  homeSliderContainer, home_main, homeMenuButton, homeSlideButton, homeMenuButtonsBackdrop, homeDropDownButtonContainer, homeDropDownButton, homeDropDownBackdrop } from '../css/drawer';

const Home = () => {
    const [menuButton, setMenuButton] = React.useState(homeMenuButton);
    const [slideOutButton1, setSlideOutButton1] = React.useState(homeSlideButton);
    const [slideOutButton2, setSlideOutButton2] = React.useState(homeSlideButton);
    
    const [dropDownButtonContainer1, setDropDownContainer1] = React.useState(homeDropDownButtonContainer);
    const [dropDownButtonContainer2, setDropDownContainer2] = React.useState(homeDropDownButtonContainer);
    
    const [dropDownButton1A, setDropDownButton1A] = React.useState(homeDropDownButton);
    const [dropDownButton1B, setDropDownButton1B] = React.useState(homeDropDownButton);
    const [dropDownButton1C, setDropDownButton1C] = React.useState(homeDropDownButton);

    const [dropDownButton2A, setDropDownButton2A] = React.useState(homeDropDownButton);
    const [dropDownButton2B, setDropDownButton2B] = React.useState(homeDropDownButton);
    const [dropDownButton2C, setDropDownButton2C] = React.useState(homeDropDownButton);
    
    const [menuInitialized, setMenuInitialized] = React.useState(false);


    // This is the yellow area behind the buttons. When in this area,
    // buttons are till extened, but NOT active
    const [slideButtonsBackdrop, setSlideButtonsBackdrop] = React.useState(homeMenuButtonsBackdrop);

    const [dropdownBackDrop1, setDropdownBackDrop1] = React.useState(homeDropDownBackdrop);
    const [dropdownBackDrop2, setDropdownBackDrop2] = React.useState(homeDropDownBackdrop);

    // changes menu button color and keeps it till slide retracts
    const handleMenuInitialized = (event) => {
        if(menuInitialized){
            setMenuButton({
                ...menuButton,
                backgroundColor:'orange',
            });
        }
    };

    // Menu Slider Extends out
    // slide out buttons stay in place on mouse over
    // back drop for menu buttons slide out
    const handleMenuSlideOut = (event) => {
        setSlideOutButton1({
            ...slideOutButton1,
            transform:'translateX(240%)',
            transition: 'all 0.5s',
            backgroundColor:'white',
        });
        setSlideOutButton2({
            ...slideOutButton2,
            transform:'translateX(115%)',
            transition: 'all 0.5s',
            backgroundColor:'white',
        });
        setSlideButtonsBackdrop({
            ...slideButtonsBackdrop,
            display:'block',
            transform:'scaleX(3.75)',
            transition: 'all 0.5s',
        });
        setDropDownContainer1({
            ...dropDownButtonContainer1,
            transform:'translateX(240%)',
            transition:'all 0.5s',
        });
        setDropDownContainer2({
            ...dropDownButtonContainer2,
            transform:'translateX(115%)',
            transition:'all 0.5s',
        });
        handleMenuInitialized(event);
    };

    // Menu Slider retracts
    const handleMenuSlideIn = (event) => {
        setSlideOutButton1({
            ...slideOutButton1,
            transform:'translateX(0px)',
        });
        setSlideOutButton2({
            ...slideOutButton2,
            transform:'translateX(0px)',
        });
        setSlideButtonsBackdrop({
            ...slideButtonsBackdrop,
            display:'none',
            transform:'scaleX(1)',
        });
        setMenuButton({
            ...menuButton,
            backgroundColor:'white',
        });
        setDropDownContainer1({
            ...dropDownButtonContainer1,
            transform:'translate(0px)',
        });
        setDropDownContainer2({
            ...dropDownButtonContainer2,
            transform:'translate(0px)',
        });
    };

    // When Mouse Goes over buton 1
    // activate dropdown
    const handleMouseOverButton1 = (event) => {
        setSlideOutButton1({
            ...slideOutButton1,
            backgroundColor:'silver',
        });
        setDropDownButton1A({
            ...dropDownButton1A,
            transform:'translateY(125%)',
            transition:'all 0.5s',
        });
        setDropDownButton1B({
            ...dropDownButton1B,
            transform:'translateY(240%)',
            transition:'all 0.5s',
        });
        setDropDownButton1C({
            ...dropDownButton1C,
            transform:'translateY(360%)',
            transition:'all 0.5s',
        });
        setDropdownBackDrop1({
            ...dropdownBackDrop1,
            transform:'scaleY(10)',
            transition:'all 0.5s',
            display:'block',
        });
    };

    // drop down buttons retract
    // back drop for drop down buttons retract
    const handleMouseOutButton1 = (event) => {
        setDropDownButton1A({
            ...dropDownButton1A,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropDownButton1B({
            ...dropDownButton1B,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropDownButton1C({
            ...dropDownButton1C,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropdownBackDrop1({
            ...dropdownBackDrop1,
            transform:'scaleY(1)',
        });
    };

    const handleMouseOutButton2 = (event) => {
        setDropDownButton2A({
            ...dropDownButton2A,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropDownButton2B({
            ...dropDownButton2B,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropDownButton2C({
            ...dropDownButton2C,
            transform:'translateY(0px)',
            transition:'all 0.5s',
        });
        setDropdownBackDrop2({
            ...dropdownBackDrop2,
            transform:'scaleY(1)',
        });
    };

    // When Mouse Goes Over button 2
    const handleMouseOverButton2 = (event) => {
        setSlideOutButton2({
            ...slideOutButton2,
            backgroundColor:'silver',
        });
        setDropDownButton2A({
            ...dropDownButton2A,
            transform:'translateY(125%)',
            transition:'all 0.5s',
        });
        setDropDownButton2B({
            ...dropDownButton2A,
            transform:'translateY(240%)',
            transition:'all 0.5s',
        });
        setDropDownButton2C({
            ...dropDownButton2A,
            transform:'translateY(360%)',
            transition:'all 0.5s',
        });
        setDropdownBackDrop2({
            ...dropdownBackDrop2,
            transform:'scaleY(10)',
            transition:'all 0.5s',
            display:'block',
        });
    };

    React.useEffect(() => {
        // immediately update state for menu button
        if (!menuInitialized) {
          setMenuInitialized(true);
        }
      }, [menuInitialized]);

    return (
        <div style={home_main}>
            {/* Container for Slider*/}
            <div style={homeSliderContainer}>
                {/* Back drop provides an area between buttons to keep
                slider extended. Is invisible until mouseOver menu button */}

                {/* Slide out backdrop */}
                <div style={slideButtonsBackdrop}                     
                    onMouseOver={(event) => {
                        handleMenuSlideOut(event);
                    }} 
                    onMouseOut={handleMenuSlideIn}></div>

                {/* Dropdown buttons container 1 */}
                <div style={dropDownButtonContainer1}
                    onMouseOver={(event) => {
                        handleMouseOverButton1(event);
                    }}
                    onMouseOut={(event) => {
                        handleMouseOutButton1(event);
                    }}>
                    {/* back drop for drop down buttons */}
                    <div style={dropdownBackDrop1}></div>
                    {/* ------------------------------- */}
                    <div style={dropDownButton1A}>Drop 1a</div>
                    <div style={dropDownButton1B}>Drop 1b</div>
                    <div style={dropDownButton1C}>Drop 1c</div>
                </div>

                {/* Dropdown buttons container 2 */}
                <div style={dropDownButtonContainer2}
                    onMouseOver={(event) => {
                        handleMouseOverButton2(event);
                    }}
                    onMouseOut={(event) => {
                        handleMouseOutButton2(event);
                    }}>
                    {/* back drop for drop down buttons */}
                    <div style={dropdownBackDrop2}></div>
                    {/* ------------------------------- */}
                    <div style={dropDownButton2A}>Drop 1a</div>
                    <div style={dropDownButton2B}>Drop 1b</div>
                    <div style={dropDownButton2C}>Drop 1c</div>
                </div>

                {/* Slide out menu button 1 */}
                <div style={slideOutButton1}                     
                    onMouseOver={(event) => {
                        handleMenuSlideOut(event);
                        handleMouseOverButton1(event);
                        }
                    }
                    onMouseOut={(event) => {
                        handleMouseOutButton1(event);
                        }
                    }>Slide Out 1</div>

                {/* Slide out menu button 2 */}
                <div style={slideOutButton2}                     
                    onMouseOver={(event) => {
                        handleMenuSlideOut(event);
                        handleMouseOverButton2(event);
                        }
                    }
                    onMouseOut={(event) => {
                        handleMouseOutButton2(event);
                        }
                    }>Slide Out 2</div>

                {/* Menu Button */}
                <div style={menuButton}                     
                    onMouseOver={(event) => {
                        handleMenuSlideOut(event);
                        handleMenuInitialized(event);
                        }
                    }>Menu Button</div>
            </div>
        </div>
    );

};
export default Home;