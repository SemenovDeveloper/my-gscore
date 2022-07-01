import styled from "styled-components";
import { Logo } from "src/assets/icons";
import Link from "next/link";
import { SocialMedia } from "./social-media";

export const Footer: React.FC = () => {
  return (
    <SFooter>
      <Description>
        <Logo />
        <DescText>
          Ut enim ad minim veniam quis
          <br />
          nostrud exercitation ea commodo
        </DescText>
      </Description>
      <CopyrightContainer>
        <p>
          Copyright © 2022 GScore | All Rights Reserved |{" "}
          <Link href="">
            <a>Cookies</a>
          </Link>{" "}
          |{" "}
          <Link href="">
            <a>Privacy Policy</a>
          </Link>
        </p>
        <SocialMedia />
      </CopyrightContainer>
    </SFooter>
  );
};

const SFooter = styled.footer`
  height: 362px;
  padding: 0 87px;
  border-top: 1px solid var(--dark-gray);
  background-color: var(--black);
  color: var(--light-gray);
`;

const Description = styled.div`
  width: 100%;
  height: 126px;
  margin: 60px 0;
`;

const DescText = styled.p`
  margin-top: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  height: 116px;
  margin-left: -19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--dark-gray);
`;
