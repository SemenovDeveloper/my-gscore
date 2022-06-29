import { ICode } from "src/types";
import styled from "styled-components";
import { SubscriptionP, SubscriptionH3 } from "src/components";
import { CopyIcon } from "src/assets/icons";
import { Checkbox } from "src/ui";
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
      <SLicense>
        <SubscriptionP>License code</SubscriptionP>
        <SLicenseCode>
          <SubscriptionP>{code.code}</SubscriptionP>
          <CopyIcon />
        </SLicenseCode>
      </SLicense>
      {/* <SLicense>
            <SubscriptionP>Domain</SubscriptionP>
            <SLicenseCode>
              {code.origin}
            </SLicenseCode>s
          </SLicense>
          <SLicense>
            <SubscriptionP>Status</SubscriptionP>
            <SLicenseCode>
              {code.origin}
            </SLicenseCode>
          </SLicense> */}
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

const SLicense = styled.div``;

const SLicenseCode = styled.div`
  max-width: 296px;
  margin-top: 12px;
  padding: 25px 12px 25px 24px;
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
  margin: 20px 48px 0 0 ;
`;
