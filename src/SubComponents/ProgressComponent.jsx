import React from "react";

class ProgressComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="mb-3 w-75" style={{ display: "flex", alignItems: "center" }}>
                <span className="text-light" style={{ width: "100px", fontWeight: "bold", backgroundColor: "black", padding: "6px" }}>
                    {this.props.skillName}
                </span>
                <div
                    style={{
                        flexGrow: 1,
                        height: "35px",
                        backgroundColor: "#e0e0e0",
                        overflow: "hidden",
                    }}>
                    <div
                        style={{
                            height: "100%",
                            backgroundColor: "silver",
                            width: `${this.props.progress}%`,
                        }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default ProgressComponent;