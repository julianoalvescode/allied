import React from "react";

import { Container } from "./styles";
import { IPlataforms } from "data/models";

import { Link } from "react-router-dom";

export const Plataforms: React.FC<IPlataforms> = ({ descricao, nome, sku }) => {
  return (
    <>
      <Container>
        <div className="content-product">
          <div className="details">
            <p className="plan">
              <span data-bind="text: $data._tituloDestaque">{nome}</span>
            </p>

            <p className="desc_franquia"></p>

            <div className="separator"></div>

            <div className="ligacoes-ilimitadas">
              <p className="Ilimitadas">Aproveite</p>
            </div>
            <div className="separator"></div>

            <div
              className="digital-content apps"
              id="digital-content-collection"
            >
              <div className="digital-content-collection-apps-icon">
                <p className="link">
                  <span
                    data-toggle="popover"
                    data-trigger="manual"
                    data-placement="bottom"
                    className="oi-socialTooltip-pp-2"
                  >
                    {descricao}
                  </span>
                </p>

                <div className="IconBlock">
                  <span data-bind="html: $data._iconesBeneficios">
                    <ul className="sprite-social-icons social-icons-collection sprite-social-icons-small">
                      <li className="icon-tiktok no-border">
                        <span title="TikTok">&nbsp;</span>
                      </li>
                      <li className="icon-instagram no-border">
                        <span title="Instagram">&nbsp;</span>
                      </li>
                      <li className="icon-facebook no-border">
                        <span title="Facebook">&nbsp;</span>
                      </li>
                      <li className="icon-messenger">
                        <span title="Messenger">&nbsp;</span>
                      </li>
                      <li className="icon-whatsapp no-border">
                        <span title="Whatsapp">&nbsp;</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div
              className="oi-addDependentes"
              id="oi-addDependentescontrole_20gb_nfid"
            >
              <div>
                <p className="semDependentes">Oferta sem fidelização</p>
              </div>
            </div>

            <div className="separator"></div>

            <Link to={`/planos/${sku}`} className="btn btn-knowMore">
              Eu quero
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
