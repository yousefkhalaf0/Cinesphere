import React from "react";
import TitleComponent from "../../SubComponents/TitleComponent";
import CardComponent from "../../SubComponents/CardComponent";

class PortolioSection extends React.Component {
    render() {
        return (
            <section className="" style={{ height: '700px' }}>
                <TitleComponent position='start' padding='p-5' title='Portfolio' textColor='dark' shadow='2px 6px 4px rgba(0, 0, 0, 0.46)' />
                <div className="row justify-content-center">
                    <CardComponent textColor='white' title='WEB DESIGN' bgColor='secondary' children={<hr className="w-50 mt-1 mx-auto border-3 text-white" />} />
                    <CardComponent textColor='white' title='MOBILE DESIGN' bgColor='dark' children={<hr className="w-50 mt-1 mx-auto border-3 text-white" />} />
                    <CardComponent textColor='white' title='LOGO DESIGN' bgColor='secondary' children={<hr className="w-50 mt-1 mx-auto border-3 text-white" />} />
                    <CardComponent textColor='white' title='WEB APPLICATION DEVELOPMENT' bgColor='dark' />
                    <CardComponent textColor='white' title='MOBILE APPLICATION DEVELOPMENT' bgColor='secondary' />
                    <CardComponent textColor='white' title='PWA DEVELOPMENT' bgColor='dark' />
                </div>
            </section>
        );
    }
}

export default PortolioSection;