import React from "react";

import { FormCheckout } from "presentation/components";

import { useSelector } from "react-redux";

import { IState } from "data/models";

import { Container } from "./styles";

import { Redirect } from "react-router-dom";

export const Checkout: React.FC = () => {
  const { checkout } = useSelector((state: IState) => state);

  if (checkout === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <FormCheckout />
      </Container>
    </>
  );
};
