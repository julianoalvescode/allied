import React, { useEffect, useState } from "react";

import { ApiService } from "main/factories/usecases";

import { Container } from "./styles";
import { IPlans } from "data/models";

import { Plan } from "presentation/components";

import { useParams } from "react-router-dom";

import { v4 as uuid } from "uuid";

import { Wrap, WrapItem, Spinner } from "@chakra-ui/react";

interface Params {
  sku: string;
}
export const Plans: React.FC = () => {
  const [state, setState] = useState<IPlans[] | undefined>();

  const { sku } = useParams<Params>();

  useEffect(() => {
    ApiService.loadPlans(sku).then((res) => setState(res));
  }, [sku]);

  return (
    <>
      <Container>
        <Wrap spacing="60px" align="center" justify="center">
          {state === undefined ? (
            <Spinner />
          ) : (
            state
              ?.filter((f) => f.ativo)
              .map((i) => (
                <>
                  <WrapItem width="300px">
                    <Plan
                      key={uuid()}
                      sku={i.sku}
                      valor={i.valor}
                      ativo={i.ativo}
                      franquia={i.franquia}
                      aparelho={i.aparelho}
                    />
                  </WrapItem>
                </>
              ))
          )}
        </Wrap>
      </Container>
    </>
  );
};
