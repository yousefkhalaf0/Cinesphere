import React from "react";

class ButtonComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <button className={`btn btn-${this.props.color}`}>{this.props.text}</button>
        );
    }
}

export default ButtonComponent;