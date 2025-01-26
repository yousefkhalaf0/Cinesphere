import React from 'react'
import TitleComponent from '../SubComponents/TitleComponent'
import img from '../assets/images/error.jpg'

const NotFoundPage = () => {
    return (
        <div className='pt-5' style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            textShadow: '2px 2px 4px #000000'
        }}>
            <TitleComponent title="404 Not Found!" textColor="danger" margin="m-5" />
        </div>
    );
}

export default NotFoundPage