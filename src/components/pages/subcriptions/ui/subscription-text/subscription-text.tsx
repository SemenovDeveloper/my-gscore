import styled from "styled-components";

export const SubscriptionP = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: var(--gray);
`;

interface ISubscriptionH3 {
  active?: boolean;
  inactive?: boolean;
}

export const SubscriptionH3 = styled.h3<ISubscriptionH3>`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) =>
    props.active
      ? "var(--green)"
      : props.inactive
      ? "var(--red)"
      : "var(--white)"}; ;
`;
