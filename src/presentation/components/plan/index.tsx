import React from "react";

import { Container } from "./styles";

import { IPlans } from "data/models";

import { SplitValue } from "utils";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export const Plan: React.FC<IPlans> = ({
  franquia,
  valor,
  sku,
  aparelho,
  ativo,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <div className="content-product">
          <div className="details">
            <p className="plan">
              <span data-bind="text: $data._tituloDestaque">{franquia}</span>
            </p>

            <p className="desc_franquia"></p>

            <div className="separator"></div>

            <div className="ligacoes-ilimitadas">
              <p className="Ilimitadas">Ligações ilimitadas</p>
            </div>
            <div className="separator"></div>

            {!aparelho ? null : (
              <>
                <div
                  className="oi-addDependentes"
                  id="oi-addDependentescontrole_20gb_nfid"
                >
                  <div>
                    <p className="semDependentes">{aparelho?.nome}</p>
                    <ul>
                      <li>R$ {aparelho?.valor} a vista</li>
                      {aparelho?.valorParcela === false ? null : (
                        <>
                          <li>
                            <p>ou</p>
                            {aparelho?.numeroParcelas} vezes de R${" "}
                            {aparelho?.valorParcela}
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="separator"></div>

            <div className="price-details">
              <div className="price">
                <div className="little currency">
                  <p className="total-float">R$</p>
                </div>

                <p className="total-integer">
                  {SplitValue(valor as string, true)}
                </p>

                <div className="little">
                  <p className="total-float">
                    ,<span>{SplitValue(valor as string, false)}</span>
                  </p>
                  <p>/MÊS</p>
                </div>
              </div>
              <span className="type-purchase">No cartão de crédito</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => {
                dispatch({
                  type: "User.Checkout",
                  checkout: {
                    franquia: franquia,
                    valor: valor,
                    sku: sku,
                    aparelho: aparelho,
                    ativo: ativo,
                  },
                });
              }}
              className="btn btn-knowMore"
              type="button"
            >
              Eu quero
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
