import React, { useEffect, useState } from "react";

import { Plataforms } from "presentation/components";

import { ApiService } from "main/factories/usecases";

import { Container } from "./styles";
import { IPlataforms } from "data/models";

import { v4 as uuid } from "uuid";

import { Wrap, WrapItem, Spinner } from "@chakra-ui/react";

export const Home: React.FC = () => {
  const [state, setState] = useState<IPlataforms[] | undefined>();

  useEffect(() => {
    ApiService.loadPlataforms().then((res) => setState(res));
  }, []);

  return (
    <>
      <Container>
        <Wrap spacing="30px" align="center" justify="center">
          {state === undefined ? (
            <>
              <Spinner />
            </>
          ) : (
            state?.map((i) => (
              <>
                <WrapItem width="400px">
                  <Plataforms
                    key={uuid()}
                    descricao={i.descricao}
                    nome={i.nome}
                    sku={i.sku}
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
