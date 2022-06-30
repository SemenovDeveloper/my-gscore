import Link from "next/link";
import { useState } from "react";
import {
  MenuLine,
  LogoutIcon,
  SettingsIcon,
  CloseIcon,
  Logo,
} from "src/assets/icons";
import { useAppSelector } from "src/hooks";
import styled from "styled-components";

export const SmallScreenNavbar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const openPopup = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Root>
      <div onClick={openPopup}>
        <MenuLine />
      </div>
      {isOpened && (
        <PopUp>
          <PopUpHeader>
            <div onClick={() => setIsOpened(false)}>
              <CloseIcon />
            </div>
            <Link href="">
              <Logo />
            </Link>
          </PopUpHeader>
          <div>
            {/* <ul>
          <SideBarMenuItem>
            <Link href="/subscriptions">
              <a>My subscriptions</a>
            </Link>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <SideBarUsername onClick={toggleNavPopUp}>
              {user.username}
              {(navPopUp) ? <Up width="16px" height="9px"/> : <Down width="16px" height="9px"/>}
            </SideBarUsername>
            {navPopUp
              && <SideBarSubmenu>
                  <SideBarSubmenuItem>
                    <Settings/>
                    <Link href="/settings">
                      <a>Settings</a>
                    </Link>
                  </SideBarSubmenuItem>
                  <SideBarSubmenuItem>
                    <Logout/>
                    <Link href="/">
                      <a onClick={signOut}>Logout</a>
                    </Link>
                  </SideBarSubmenuItem>
                </SideBarSubmenu>
            }
          </SideBarMenuItem>
        </ul> */}
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
  position: relative;
`;
const PopUpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SideBarMenuItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid var(--dark-gray);

  svg {
    width: 24px;
    height: 24px;
    /* stroke: var(--gray); */
  }
`;
const SideBarUsername = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SideBarSubmenu = styled.ul`
  padding: 30px 0 0;
  color: var(--gray);
`;
const SideBarSubmenuItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 25px;

  a {
    margin-left: 8px;
  }
  &:last-child {
    padding: 0;
  }
`;
const PopUp = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 65vw;
  height: 100vh;
  padding: 28px 24px;
  background-color: var(--darkest-gray);
  svg {
    transform: scale(0.7)
  }
`;

