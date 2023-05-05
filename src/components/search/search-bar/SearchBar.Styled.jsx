import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: solid 1px var(--very-dark-gray);

  input,
  button {
    border: none;
    padding: 1.25rem;
  }

  input {
    width: 100%;
    font-size: 1.15rem;
    font-weight: 700;
    background-color: var(--white);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    border: solid 3px transparent;
    display: flex;
  }

  button {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--very-dark-gray);
  }

  .error {
    border: solid 3px red;
  }
`;
