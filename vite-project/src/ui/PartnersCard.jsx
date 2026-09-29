const PartnersCard = ({ img, title }) => {
    return (
        <div className="partners_card">
            <img src={img} alt={title} />
        </div>
    );
};

export default PartnersCard;