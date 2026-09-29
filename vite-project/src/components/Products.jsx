import ProductCard from "../ui/ProductCard";

import product1 from "../img/product.jpg";
import product2 from "../img/product2.jpg";
import product3 from "../img/product3.jpg";
import product4 from "../img/product4.jpg";

const Products = () => {
    return (
        <div className="container product_cont">
            <ProductCard
                title="Упаковка"
                count="50"
                img={product1}
                description="Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."
            />

            <ProductCard
                title="Пакеты"
                count="30"
                img={product2}
                description="С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн."
            />

            <ProductCard
                title="Кейсы"
                count="200"
                img={product3}
                description="Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."
            />

            <ProductCard
                title="Другие изделия"
                count="10"
                img={product4}
                description="Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."
            />
        </div>
    );
};

export default Products;