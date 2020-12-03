import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { SubmitBtn } from "./SubmitBtn";
import styled from "styled-components";
import { H1 } from "../text/H1";
import { useForm } from "@formcarry/react";

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  width: 41.5%;
  h1 {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    width: 86.4%;
    margin-top: 60px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const Form = () => {
  const { state, submit } = useForm({
    id: "OaZ1G8I9XZ",
  });
  if (state.submitted) {
    return <div>Thanks for the feedback!</div>;
  }
  return (
    <FormContainer>
      <H1>Get In Touch</H1>
      <FormWrapper onSubmit={submit}>
        <Input
          id="name"
          placeholder="Full Name"
          inputWidthSmall="45%"
          type="text"
        />
        <Input
          id="email"
          placeholder="Email"
          inputWidthSmall="45%"
          type="email"
        />
        <TextArea>
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </TextArea>
        <SubmitBtn>
          <input type="submit" value="Send" />
        </SubmitBtn>
      </FormWrapper>
    </FormContainer>
  );
};
