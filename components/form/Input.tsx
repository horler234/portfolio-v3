import styled from "styled-components";

/**
 * InputProps contains the props used in the input components
 * @param placeholder placeholder text in the input field
 * @param id id of the input and also the "for" attribute of the label
 * @param inputWidthSmall width of input from tablet mini to the smallest screen size
 * @param inputWidthLarge width of input from tablet mini to the largest screen size
 * @param onChange function fired when a user types in the input field
 */

interface InputProps {
  placeholder: string;
  id: string;
  inputWidthSmall?: string;
  type: string;
  inputWidthLarge?: string;
  onChange?: (text: string) => void;
}

type FormProps = {
  inputWidthSmall?: string;
  inputWidthLarge?: string;
};

export const InputWrapper = styled.div<FormProps>`
  width: ${(props) => props.inputWidthSmall};
  input {
    padding-bottom: 10px;
    border: transparent;
    font-size: 14px;
    width: 100%;
    font-family: inherit;
    background: transparent;
    border-bottom: 1px solid #4f4f4f;
    color: #ffffff;
    line-height: 16.44px;
    &:focus {
      outline: none;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    width: ${(props) => props.inputWidthLarge};
  }

  @media (max-width: 768px) {
    input {
      font-size: 10px;
      padding-bottom: 5px;
    }
  }
`;

export const Input = ({
  onChange,
  placeholder,
  inputWidthLarge,
  inputWidthSmall,
  id,
  type,
}: InputProps) => (
  <InputWrapper
    inputWidthLarge={inputWidthLarge}
    inputWidthSmall={inputWidthSmall}
  >
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(evt) => console.log(evt)}
      required
    />
  </InputWrapper>
);
