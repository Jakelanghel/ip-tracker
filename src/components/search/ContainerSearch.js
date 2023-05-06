import styled from "styled-components";
import { images } from "../../constants/images";

export const ContainerSearch = styled.div`
  width: 100%;
  background-image: url(${images.mobileBG});
  background-repeat: no-repeat;
  text-align: center;
  /* position: relative; */

  h1 {
    color: var(--white);
    font-weight: 500;
    font-size: 1.7rem;
    padding: 1.5rem 0;
  }
`;
