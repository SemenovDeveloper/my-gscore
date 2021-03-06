import Link from "next/link";
import styled from "styled-components";
import { Twitter, Facebook, LinkedIn } from "src/assets/icons";
import { MEDIA_QUERY } from "src/lib/constants";

export const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      <Link href="">
        <a>
          <Facebook />
        </a>
      </Link>
      <Link href="">
        <a>
          <Twitter />
        </a>
      </Link>
      <Link href="">
        <a>
          <LinkedIn />
        </a>
      </Link>
    </StyledSocialMedia>
  );
};

const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 134px;
  padding: 5px;
  @media ${MEDIA_QUERY.mobile} {
   margin-top: 29px;
  }
`;
