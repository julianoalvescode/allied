import React, { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { UserActions } from "main/factories/usecases";
import {
  Container,
  Form,
  RowForm,
  ButtonSubmit,
  ErrorContainer,
} from "./styles";

import { useToast } from "@chakra-ui/react";

import { InputCPF } from "presentation/components";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

import { format } from "date-fns";
import { formHidePlan } from "data/validations";

import { useSelector } from "react-redux";
import { IState } from "data/models";

import { reducerCPF } from "utils";
registerLocale("pt-BR", ptBR);

export const FormCheckout: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const toast = useToast();
  const { checkout } = useSelector((state: IState) => state);

  const isChangeDate = (date: Date, setFieldValue: any) => {
    setStartDate(date);
    setFieldValue("birthDate", format(date, "P"));
  };

  return (
    <>
      <Container>
        <Formik
          onSubmit={(e) => {
            UserActions.isCheckout({
              ...e,
              cpf: reducerCPF(e.cpf),
              checkout,
            });

            toast({
              title: "Cadastro Realizado.",
              description: "Em breve nossa equipe vai entrar em contato :).",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }}
          initialValues={{
            name: "",
            cpf: "",
            birthDate: "",
            phone: "",
            email: "",
          }}
          validationSchema={formHidePlan}
        >
          {({ handleChange, setFieldValue }) => (
            <>
              <FormikForm>
                <Form>
                  <RowForm>
                    <label>Qual é o seu e-mail?</label>
                    <Field name="email" />
                    <ErrorContainer>
                      <ErrorMessage name="email" component="span" />
                    </ErrorContainer>
                  </RowForm>
                  <RowForm>
                    <label>Qual seu nome?</label>
                    <Field name="name" />
                    <ErrorContainer>
                      <ErrorMessage name="name" component="span" />
                    </ErrorContainer>
                  </RowForm>
                  <RowForm>
                    <label>Qual a data do seu nascimento?</label>
                    <DatePicker
                      selected={startDate}
                      locale="pt-BR"
                      dateFormat="P"
                      onChange={(e) => isChangeDate(e as Date, setFieldValue)}
                    />
                    <ErrorContainer>
                      <ErrorMessage name="birthDate" component="span" />
                    </ErrorContainer>
                  </RowForm>
                  <label>Qual é o seu número atual?</label>
                  <RowForm>
                    <PhoneInput
                      country={"br"}
                      onlyCountries={["br"]}
                      onChange={(e) => setFieldValue("phone", e)}
                    />
                    <ErrorContainer>
                      <ErrorMessage name="phone" component="span" />
                    </ErrorContainer>
                  </RowForm>
                  <RowForm>
                    <label>Qual o CPF do titular?</label>
                    <InputCPF
                      mask="cpf"
                      onChange={(e) =>
                        setFieldValue("cpf", e.currentTarget.value)
                      }
                    />
                    <ErrorContainer>
                      <ErrorMessage name="cpf" component="span" />
                    </ErrorContainer>
                  </RowForm>
                  <ButtonSubmit type="submit">Enviar</ButtonSubmit>
                </Form>
              </FormikForm>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
};
