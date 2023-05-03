import styled from "styled-components";
import { images } from "../../constants/images";

export const ContainerSearch = styled.div`
  width: 100%;
  background-image: url(${images.mobileBG});
  text-align: center;

  h1 {
    color: var(--white);
    font-weight: 500;
    font-size: 1.7rem;
    padding: 1.5rem 0;
  }
`;
