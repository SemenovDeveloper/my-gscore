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

  const activateCode = (code: string) => {
    
  }

  return (
    <CodesItem key={code.id}>
      <CheckBlock>
        <Checkbox isChecked={isChecked} handleChange={handleChange} />
      </CheckBlock>
      <div>
        <SubscriptionP>License code</SubscriptionP>
        <LicenseCode>
          <SubscriptionP>{code.code}</SubscriptionP>
          <CopyIcon />
        </LicenseCode>
      </div>
      <Domain>
        <SubscriptionP>Domain</SubscriptionP>
        <DomainBlock>
          <StyledLink>{code.origin}</StyledLink>
          {code.status === "INACTIVE" && (
            <Button theme="secondary" onClick={() => activateCode(code.code)}>Activate</Button>
          )}
        </DomainBlock>
      </Domain>
      <Status status={code.status}>
        <SubscriptionP>Status</SubscriptionP>
        <SubscriptionH3>
          {code.status.charAt(0) + code.status.slice(1).toLowerCase()}
        </SubscriptionH3>
      </Status>
    </CodesItem>
  );
};

const CodesItem = styled.li`
  width: 100%;
  padding: 24px 96px 31px 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--darkest-gray);
`;

const LicenseCode = styled.div`
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

const CheckBlock = styled.div`
  margin: 20px 48px 0 0;
`;

const Domain = styled.div`
  margin: 0 56px 0 28px;
  flex: 1 1 0px;
`;

const DomainBlock = styled.div`
  height: 68px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 59px;
`;

const StyledLink = styled.div`
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

const Status = styled.div<{ status: string }>`
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
