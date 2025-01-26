import React from "react";
import img from "../../assets/images/download.jpg";
import TitleComponent from "../../SubComponents/TitleComponent";
import ButtonComponent from "../../SubComponents/ButtonComponent";

class HeroSection extends React.Component {
    render() {
        return (
            <header style={{ position: 'relative', backgroundImage: `url(${img})`, backgroundSize: 'contain', backgroundPosition: 'center', height: '600px' }}>
                <div className="p-5" style={{ position: 'absolute', top: '150px' }}>
                    <TitleComponent title='Yousef Khalaf' textColor='white' />
                    <h3 style={{ marginTop: '25px', marginBottom: '50px' }} className="text-white">Web Developer & Designer</h3>
                    <ButtonComponent text='CONTACT ME' color='outline-light' />
                </div>
            </header>
        );
    }
}

export default HeroSection;