import product from "../img/product.jpg";
import arrow from "../img/arrow.png";

const ProductCard = ({ title, count, img, description }) => {
    return (
        <div className="product_card">
            <img
                className="product_card_img"
                src={img || product}
                alt={title}
            />

            <h3>{title}</h3>

            <p className="product_count">
                Тираж: от {count} штук
            </p>

            <p className="product_description">
                {description}
            </p>

            <a className="product_link" href="#">
                Подробнее
                <img src={arrow} alt="" />
            </a>
        </div>
    );
};

export default ProductCard;