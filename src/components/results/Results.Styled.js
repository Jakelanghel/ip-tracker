import styled from "styled-components";

export const StyledResults = styled.div`
  width: 90%;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 15px;

  position: absolute;
  z-index: 1;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  .title {
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--dark-gray);
    margin-bottom: 0.25rem;
  }

  .data {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;
