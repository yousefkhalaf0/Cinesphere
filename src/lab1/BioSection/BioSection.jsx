import React from "react";
import TitleComponent from "../../SubComponents/TitleComponent";
import ButtonComponent from "../../SubComponents/ButtonComponent";

class BioSection extends React.Component {
    render() {
        return (
            <section className="row p-5" style={{ height: "400px" }}>
                <aside className="col-4">
                    <TitleComponent title="About me" textColor="dark" shadow="2px 6px 4px rgba(0, 0, 0, 0.46)" />
                </aside>
                <aside className="col-8 text-start">
                    <p className="mb-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus? Voluptatibus cum quaerat, necessitatibus voluptas quisquam illo vitae doloremque enim iure ullam minus vel sed accusantium culpa libero eaque. Aspernatur?
                        Cum explicabo, sapiente nam quis facere labore. Animi nesciunt eligendi a esse odio dolorem illo ipsa laudantium, optio iste sit officiis commodi sed debitis rerum deserunt laborum, qui reiciendis quia.
                        Nobis, omnis. Quasi perferendis natus vitae, porro totam earum repellendus eveniet reprehenderit alias, non dolorem voluptates ipsam ducimus officiis similique dolores. Necessitatibus alias eos, facilis ipsum doloribus beatae eligendi tempore.</p>
                    <ButtonComponent text="Download Resume" color="dark" />
                </aside>
            </section>
        );
    }
}

export default BioSection;