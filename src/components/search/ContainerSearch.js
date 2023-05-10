import styled from "styled-components";
import { images } from "../../constants/images";

export const ContainerSearch = styled.div`
  width: 100%;
  background-image: url(${images.mobileBG});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  h1 {
    color: var(--white);
    font-weight: 500;
    font-size: 1.7rem;
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 800px) {
    background-image: url(${images.desktopBG});
  }
`;
