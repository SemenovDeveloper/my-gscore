import { MEDIA_QUERY } from "src/lib/constants";
import styled from "styled-components";

export const SlimContainer = styled.div`
  width: 620px;
  height: 916px;
  @media ${MEDIA_QUERY.tablet} {
    width: 100%;
    height: fit-content;
  }
`;
