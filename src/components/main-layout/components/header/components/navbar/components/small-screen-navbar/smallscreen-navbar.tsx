import Link from "next/link";
import { useState } from "react";
import {
  MenuLine,
  LogoutIcon,
  SettingsIcon,
  CloseIcon,
  Logo,
  PopupArrow,
} from "src/assets/icons";
import { useAppSelector } from "src/hooks";
import styled from "styled-components";

interface ISmallScreenNavbar {
  logOut: () => void
}

export const SmallScreenNavbar: React.FC<ISmallScreenNavbar> = ( { logOut } ) => {
  const user = useAppSelector((state) => state.user.user);
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
  const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);
  
  const openPopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  return (
    <Root>
      <div onClick={openPopup}>
        <MenuLine />
      </div>
      {isPopupOpened && (
        <PopUp>
          <PopUpHeader>
            <div onClick={() => setIsPopupOpened(false)}>
              <CloseIcon />
            </div>
            <Link href="">
              <Logo />
            </Link>
          </PopUpHeader>
          <div>
            <MenuItem>
              <Link href="/subscriptions">
                <a>My subscriptions</a>
              </Link>
            </MenuItem>
            <MenuItem>
            <Username onClick={() => setIsSettingsOpened(!isSettingsOpened)} opened={isSettingsOpened}>
              {user.username}
              <PopupArrow />
            </Username>
            {isSettingsOpened
              && <SettingsMenu>
                  <SettingsMenuItem>
                    <SettingsIcon />
                    <Link href="/settings">
                      <a>Settings</a>
                    </Link>
                  </SettingsMenuItem>
                  <SettingsMenuItem>
                    <LogoutIcon />
                    <Link href="/">
                      <a onClick={() => logOut()}>Logout</a>
                    </Link>
                  </SettingsMenuItem>
                </SettingsMenu>
            }
          </MenuItem>
          </div>
        </PopUp>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const PopUpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--dark-gray);
`;

const Username = styled.div<{ opened: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    transform: ${(props) => props.opened && "rotate(180deg)"};
  }
`;

const SettingsMenu = styled.ul`
  padding: 30px 0 0;
  color: var(--gray);
`;

const SettingsMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 25px;

  a {
    margin-left: 8px;
    color: var(--gray)
  }
  &:last-child {
    padding: 0;
  }
  svg {
    stroke: var(--gray)
  }
`;

const PopUp = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 65vw;
  height: 100vh;
  padding: 28px 24px;
  background-color: var(--darkest-gray);
`;
