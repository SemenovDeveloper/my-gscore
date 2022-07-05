import { ICode } from "src/types";
import styled from "styled-components";
import { SubscriptionP, SubscriptionH3 } from "src/components";
import { CopyIcon } from "src/assets/icons";
import { Checkbox, Button } from "src/ui";
import { useState } from "react";
import { MEDIA_QUERY } from "src/lib/constants";

interface ICodesCard {
  code: ICode;
  selectCode: (codeId: number) => void;
  handleActivateCode: (code: string) => void;
}

export const CodeCard: React.FC<ICodesCard> = ({
  code,
  selectCode,
  handleActivateCode,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    selectCode(code.id);
  };

  return (
    <CodesItem key={code.id}>
      <CheckBlock>
        <Checkbox isChecked={isChecked} handleChange={handleChange} />
      </CheckBlock>
      <CodeBlock>
        <SubscriptionP>License code</SubscriptionP>
        <LicenseCode>
          <SubscriptionP>{code.code}</SubscriptionP>
          <CopyIcon />
        </LicenseCode>
      </CodeBlock>
      <Domain>
        <SubscriptionP>Domain</SubscriptionP>
        <DomainBlock>
          <Adress>{code.origin}</Adress>
        </DomainBlock>
      </Domain>
      <Status >
        {code.status === "INACTIVE" && (
          <StyledButton
            theme="secondary"
            onClick={() => handleActivateCode(code.code)}
          >
            Activate
          </StyledButton>
        )}
        <TextBlock status={code.status}>
          <SubscriptionP>Status</SubscriptionP>
          <SubscriptionH3>
            {code.status.charAt(0) + code.status.slice(1).toLowerCase()}
          </SubscriptionH3>
        </TextBlock>
      </Status>
    </CodesItem>
  );
};

const CodesItem = styled.li`
  width: 100%;
  padding: 24px 96px 31px 32px;
  border-radius: 12px;
  display: grid;
  grid-template-areas: "checkbox code domain status";
  grid-template-columns: 60px 296px 6fr 1fr;
  background-color: var(--darkest-gray);
  @media ${MEDIA_QUERY.tablet} {
    grid-template-columns: 60px 300px 1fr;
    grid-template-areas:
      "checkbox status ."
      "code code code"
      "domain domain domain";
  }
`;

const CodeBlock = styled.div`
  grid-area: code;
`;

const StyledButton = styled(Button)`
  grid-area: button;
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
  @media ${MEDIA_QUERY.tablet} {
    max-width: 100%;
    margin: 0px;
    justify-content: space-between;
    p {
      max-width: 100%;
    }
  }
`;

const CheckBlock = styled.div`
  grid-area: checkbox;
  margin: 20px 48px 0 0;
`;

const Domain = styled.div`
  grid-area: domain;
  margin: 0 56px 0 28px;
  flex: 1 1 0px;
  @media ${MEDIA_QUERY.tablet} {
    width: 100%;
    margin: 0px;
  }
`;

const DomainBlock = styled.div`
  height: 68px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 59px;
`;

const Adress = styled.div`
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

const Status = styled.div`
  grid-area: status;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 56px;
  @media ${MEDIA_QUERY.tablet} {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

const TextBlock = styled.div<{ status: string }>`
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
  @media ${MEDIA_QUERY.tablet} {
    align-self: flex-end;
    p {
      display: none;
    }
  }
`;
