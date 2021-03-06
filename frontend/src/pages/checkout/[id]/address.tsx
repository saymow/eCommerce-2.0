import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomFC } from "../../../@types";
import { FilledCartState } from "../../../@types/redux/checkout";
import { setCheckoutCart } from "../../../actions/cartActions";
import CheckoutAddress from "../../../components/checkout/CheckoutAddress";
import CheckoutLayout from "../../../components/checkout/CheckoutLayout";
import Layout from "../../../components/core/Layout";
import api from "../../../services/api";

interface Props {
  cart: FilledCartState;
  checkoutId: string;
}

const Address: CustomFC<Props> = ({ cart, checkoutId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheckoutCart({ ...cart, locked: true }, checkoutId));
  }, []);

  return (
    <Layout>
      <CheckoutLayout
        title="fill the address"
        contentSize="large"
        contentOverflow="hidden"
        detailed
      >
        <CheckoutAddress />
      </CheckoutLayout>
    </Layout>
  );
};

Address.restrictVisibility = "private";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  try {
    let cookie = req.headers.cookie;
    const checkoutId = (params as any).id;

    let authHeader = {
      headers: {
        Cookie: cookie,
      },
      withCredentials: true,
    };

    const {
      data: { cart },
    } = await api.get(`/checkout/${checkoutId}`, authHeader);

    return {
      props: {
        cart,
        checkoutId,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };
  }
};

export default Address;
