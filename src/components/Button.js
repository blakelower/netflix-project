import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: ${props => (props.primary ? "0 33%" : "0")};
  padding: ${props => (props.primary ? "1.5rem" : "0.8rem 1.3rem")};
  border-radius: 0.1875rem;
  font-size: ${props => (props.primary ? "2rem" : "1 rem")};
  text-align: center;
  color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: var(--main-red-hover);
  }
`;
