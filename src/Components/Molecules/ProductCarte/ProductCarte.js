import ProductImage from "Components/Atoms/ProductImage/ProductImage";
import Title from "Components/Atoms/Title/Title";
import VerticalLigne from "Components/Atoms/VerticalLigne/VerticalLigne";
import Column from "Components/Containers/Column";
import Row from "Components/Containers/Row";
import React from "react";

const ProductCarte = (props) => {
  return (
    <Column className="justifyContent-center alignItems-center  margin-bottom-80px  ">
      <Row>
        <ProductImage imagePath={props.image}>
          {" "}
          <div className="textAlign-center width-100 flex-1 position-absolute display-flex justifyContent-center bgr-white-0-5op height-30px alignItems-center bottom-0 transform-translateY-100 transition-0-5-s transform-translateY-0 ">
            <Title text="Apercu Rapide" className="" size={10} />
          </div>
        </ProductImage>
      </Row>
      <Column height={50}>
        <Title text={props.nomProduct} size={20} />
        <VerticalLigne />
        <Title text={`${props.priceProduct} TND`} size={20} />
      </Column>
    </Column>
  );
};

export default ProductCarte;
