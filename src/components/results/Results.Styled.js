import styled from "styled-components";

export const StyledResults = styled.div`
  width: 90%;
  max-width: 900px;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 15px;

  position: absolute;
  z-index: 1;
  top: 22%;
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
    font-weight: 700;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    min-height: 150px;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    text-align: left;
    padding: 2rem;
    top: 19%;

    .container-data {
      border-left: solid 2px var(--light-gray);
      padding-left: 1.5rem;
    }

    & :first-child {
      border-left: none;
      padding-left: 0;
    }

    .post-code {
      display: block;
    }

    .title {
      margin-bottom: 0.75rem;
    }
  }

  @media screen and (min-width: 1400px) {
    max-width: 1100px;
    padding: 2.5rem;

    .container-data {
      padding-left: 2rem;
    }

    & :first-child {
      padding-left: 0;
    }
    .title {
      font-size: 1rem;
      letter-spacing: 2px;
      color: var(--dark-gray);
      margin-bottom: 0.75rem;
    }

    .data {
      font-size: 1.5rem;
    }
  }
`;
