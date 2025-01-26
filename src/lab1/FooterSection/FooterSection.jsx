import React from "react";
import ButtonComponent from "../../SubComponents/ButtonComponent";

class FooterSection extends React.Component {
    render() {
        return (
            <footer className="bg-dark text-center p-5 row" style={{ height: '250px' }}>
                <aside className="col-4 text-light text-start d-flex flex-column justify-content-center">
                    <h4 className="mb-4">GET IN TOUCH</h4>
                    <div className="fs-5">
                        <i class="bi bi-envelope-fill me-2"></i>
                        <span>yousefkhalaf567@gmail.com</span>
                    </div>
                    <div className="fs-5">
                        <i class="bi bi-telephone-fill me-2"></i>
                        <span>+20-10686-059-02</span>
                    </div>
                </aside>
                <aside className="col-4 d-flex flex-column justify-content-center">
                    <ButtonComponent color="outline-light" text="CONTACT ME" />
                </aside>
                <aside className="col-4 text-light text-end fs-5 d-flex flex-column justify-content-center">
                    <div className="mb-3">
                        <i class="bi bi-linkedin me-2"></i>
                        <i class="bi bi-facebook me-2"></i>
                        <i class="bi bi-twitter-x"></i>
                    </div>
                    <span>Copyright @2025 KR</span>
                </aside>
            </footer>
        );
    }
}

export default FooterSection;