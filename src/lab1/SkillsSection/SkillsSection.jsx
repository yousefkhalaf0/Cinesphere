import React from "react";
import TitleComponent from "../../SubComponents/TitleComponent";
import ProgressComponent from "../../SubComponents/ProgressComponent";

class SkillsSection extends React.Component {
    render() {
        return (
            <section className="bg-dark p-5" >
                <TitleComponent title='Skills' textColor='light' shadow="2px 6px 4px rgba(0, 0, 0, 0.46)" />
                <p className="text-light my-5 mx-auto w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum consequuntur harum ipsum voluptatem officia nostrum temporibus odio laboriosam reiciendis porro dignissimos explicabo iste numquam, architecto id commodi delectus? At.
                    Repellendus ducimus enim nobis laboriosam quisquam! Tempore soluta explicabo voluptas? Quae corrupti odio provident in consequuntur quisquam maiores similique nam, repellat earum. Sint hic nemo tenetur esse voluptas minima perferendis!</p>
                <div className="row">
                    <aside className="col-6">
                        <h4 className="my-4 text-light">My Focus</h4>
                        <hr className="text-light w-50 mx-auto" />
                        <h4 className="my-4 text-light">UI/UX Design</h4>
                        <h4 className="my-4 text-light">Responsive Design</h4>
                        <h4 className="my-4 text-light">Web Design</h4>
                        <h4 className="my-4 text-light">Mobile App Design</h4>
                    </aside>
                    <aside className="col-6">
                        <ProgressComponent skillName="HTML" progress="70" />
                        <ProgressComponent skillName="CSS" progress="65" />
                        <ProgressComponent skillName="JavaScript" progress="60" />
                        <ProgressComponent skillName="React" progress="30" />
                        <ProgressComponent skillName="Photoshop" progress="40" />
                        <ProgressComponent skillName="Adobe XD" progress="40" />
                        <ProgressComponent skillName="Node.js" progress="10" />
                        <ProgressComponent skillName="WordPress" progress="70" />
                    </aside>
                </div>
            </section>
        );
    }
}

export default SkillsSection;