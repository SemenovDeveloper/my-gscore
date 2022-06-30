import { ICode } from "src/types";
import styled from "styled-components";
import { SubscriptionP, SubscriptionH3 } from "src/components";
import { CopyIcon } from "src/assets/icons";
import { Checkbox, Button } from "src/ui";
import { useState } from "react";

interface ICodesCard {
  code: ICode;
}

export const CodeCard: React.FC<ICodesCard> = ({ code }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SCodesItem key={code.id}>
      <SCheckBlock>
        <Checkbox isChecked={isChecked} handleChange={handleChange} />
      </SCheckBlock>
      <div>
        <SubscriptionP>License code</SubscriptionP>
        <SLicenseCode>
          <SubscriptionP>{code.code}</SubscriptionP>
          <CopyIcon />
        </SLicenseCode>
      </div>
      <SDomain>
        <SubscriptionP>Domain</SubscriptionP>
        <SDomainBlock>
          <SLink>{code.origin}</SLink>
          {code.status === "INACTIVE" && (
            <Button theme="secondary">Activate</Button>
          )}
        </SDomainBlock>
      </SDomain>
      <SStatus status={code.status}>
        <SubscriptionP>Status</SubscriptionP>
        <SubscriptionH3>
          {code.status.charAt(0) + code.status.slice(1).toLowerCase()}
        </SubscriptionH3>
      </SStatus>
    </SCodesItem>
  );
};

const SCodesItem = styled.li`
  width: 100%;
  padding: 24px 96px 31px 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--darkest-gray);
`;

const SLicenseCode = styled.div`
  max-width: 296px;
  margin-top: 12px;
  padding: 18px 12px 18px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 39px;
  background-color: var(--dark-gray);
  p {
    max-width: 182px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const SCheckBlock = styled.div`
  margin: 20px 48px 0 0;
`;

const SDomain = styled.div`
  flex: 1 1 0px;
  margin: 0 56px 0 28px;
`;

const SDomainBlock = styled.div`
  height: 68px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 59px;
`;

const SLink = styled.div`
  height: 68px;
  padding: 25px 12px 25px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0;
  background-color: var(--dark-gray);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SStatus = styled.div<{ status: string }>`
  height: 98px;
  align-self: flex-start;
  h3 {
    padding: 32px 0 20px;
    color: ${(props) =>
      props.status === "ACTIVE"
        ? "var(--green)"
        : props.status === "INACTIVE"
        ? "var(--red)"
        : "var(--orange)"};
  }
`;
