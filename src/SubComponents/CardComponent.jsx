import React from "react";

class CardComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className={`col-3 bg-${this.props.bgColor} d-flex flex-column justify-content-center fs-5 m-3`} style={{ height: '200px', boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.5)' }}>
                <p className={`text-${this.props.textColor}`}>{this.props.title}</p>
                {this.props.children}
            </div>
        );
    }
}

export default CardComponent;