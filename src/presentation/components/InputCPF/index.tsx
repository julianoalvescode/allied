import React, { InputHTMLAttributes, useCallback } from "react";

import { cpf } from "./masks";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cpf";
  prefix?: string;
}

export const InputCPF: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return (
    <Container>
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </Container>
  );
};
