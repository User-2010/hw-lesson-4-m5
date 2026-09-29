import PartnersCard from "../ui/PartnersCard";

import partners1 from "../img/partners1.svg";
import partners2 from "../img/partners2.svg";
import partners3 from "../img/partners3.png";
import partners4 from "../img/partners4.svg";

const Partners = () => {
    return (
        <section className="partners">
            <div className="container partners_cont">

                <div className="partners_list">
                    <PartnersCard img={partners1} title="Партнёр 1" />
                    <PartnersCard img={partners2} title="Партнёр 2" />
                    <PartnersCard img={partners3} title="Партнёр 3" />
                    <PartnersCard img={partners4} title="Партнёр 4" />
                </div>
            </div>
        </section>
    );
};

export default Partners;
