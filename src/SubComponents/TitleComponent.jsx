import React from "react";

class TitleComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <h1 id={this.props.id} className={`text-${this.props.textColor} text-${this.props.position} ${this.props.margin} ${this.props.padding}`} style={{ textShadow: `${this.props.shadow}` }}>{this.props.title}</h1>
        );
    }
}

export default TitleComponent;