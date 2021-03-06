import React from "react";
import Image from "next/image";

import { CartProduct } from "../../../../@types/redux";

import {
  Container,
  Info,
  MinusIcon,
  Name,
  PlusIcon,
  Price,
  QtyContainer,
  TrashIcon,
} from "./styles";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../../actions/cartActions";
import { priceFormmater } from "../../../../utils";

interface Props {
  product: CartProduct;
  size: "small" | "large";
}

const CheckoutProduct: React.FC<Props> = ({ product, size }) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveProductFromCart = (force = false) => {
    dispatch(removeProductFromCart(product.id, force));
  };

  return (
    <Container>
      <Image
        src={product.image}
        width={size === "small" ? 120 : 200}
        height={size === "small" ? 120 : 200}
        layout="intrinsic"
      />
      <Info>
        <div>
          <Name>{product.name}</Name>
          <Price>{priceFormmater(product.price)}</Price>
        </div>
        <QtyContainer>
          <button onClick={() => handleRemoveProductFromCart()}>
            <MinusIcon />
          </button>
          <input type="number" readOnly value={product.qty} max={99} min={1} />
          <button onClick={handleAddProductToCart}>
            <PlusIcon />
          </button>
        </QtyContainer>
        <TrashIcon />
      </Info>
    </Container>
  );
};

export default CheckoutProduct;
