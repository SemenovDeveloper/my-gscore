import Link from "next/link";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "src/hooks";
import styled from "styled-components";
import { PopupArrow, SettingsIcon, LogoutIcon } from "src/assets/icons";
import Media from "react-media";
import { SmallScreenNavbar } from "./small-screen-navbar";

export const NavBar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const logOut = () => {
    // dispatch(signOutAction())
  };

  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const [isOpened, setIsOpened] = useState(false);
  const handlePopup = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <SmallScreenNavbar />
          ) : (
            <BigScreenNavbar>
              <Link href="/subscriptions">
                <a>My subscriptions</a>
              </Link>
              <NavPopUp isOpened={isOpened}>
                <PopUpUser onClick={handlePopup}>
                  <p>{user.username}</p>
                  <PopupArrow />
                </PopUpUser>
                {isOpened && (
                  <PopUp>
                    <div>
                      <SettingsIcon />
                      <Link href="/settings">
                        <a>Settings</a>
                      </Link>
                    </div>
                    <div>
                      <LogoutIcon />
                      <Link href="/">
                        <a onClick={logOut}>Logout</a>
                      </Link>
                    </div>
                  </PopUp>
                )}
              </NavPopUp>
            </BigScreenNavbar>
          )
        }
      </Media>

      {/* <SideBar>
        <SideBarIcon onClick={toggleSideBar}>
          <Menu width="24px" height="24px" />
        </SideBarIcon>
        {sideBar && (
          <SidePopUp>
            <SideBarHeader>
              <CloseIcon width="20px" height="20px" onClick={toggleSideBar} />
              <Link href="/">
                <LogoLink>
                  <Logo width="170px" height="42px" />
                </LogoLink>
              </Link>
            </SideBarHeader>
            <div>
              <ul>
                <SideBarMenuItem>
                  <Link href="/subscriptions">
                    <a>My subscriptions</a>
                  </Link>
                </SideBarMenuItem>
                <SideBarMenuItem>
                  <SideBarUsername onClick={toggleNavPopUp}>
                    {user.username}
                    {navPopUp ? (
                      <Up width="16px" height="9px" />
                    ) : (
                      <Down width="16px" height="9px" />
                    )}
                  </SideBarUsername>
                  {navPopUp && (
                    <SideBarSubmenu>
                      <SideBarSubmenuItem>
                        <Settings />
                        <Link href="/settings">
                          <a>Settings</a>
                        </Link>
                      </SideBarSubmenuItem>
                      <SideBarSubmenuItem>
                        <Logout />
                        <Link href="/">
                          <a onClick={signOut}>Logout</a>
                        </Link>
                      </SideBarSubmenuItem>
                    </SideBarSubmenu>
                  )}
                </SideBarMenuItem>
              </ul>
            </div>
          </SidePopUp>
        )}
      </SideBar> */}
    </>
  );
};

// const SideBar = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;

//   @media (min-width: 426px) {
//     display: none;
//   }
// `
// const SideBarIcon = styled.div`
// `
// const SideBarHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
// const SideBarMenuItem = styled.li`
//   padding: 20px 0;
//   border-bottom: 1px solid ${colors.neutral["600"]};

//   svg{
//     width: 24px;
//     height: 24px;
//     stroke: ${colors.neutral["500"]}
//   }
// `
// const SideBarUsername = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
// const SideBarSubmenu = styled.ul`
//   padding: 30px 0 0;
//   color: ${colors.neutral["500"]}
// `
// const SideBarSubmenuItem = styled.li`
//   display: flex;
//   align-items: center;
//   padding-bottom: 25px;

//   a{
//     margin-left: 8px;
//   }
//   &:last-child{
//     padding: 0;
//   }
// `
// const SidePopUp = styled.div`
//   padding: 30px 35px;
//   position: absolute;
//   top: -30px;
//   left: -250px;
//   height: 100vh;
//   width: 50vh;
//   background-color: ${colors.neutral["700"]};

// `
const BigScreenNavbar = styled.div`
  display: flex;
  align-items: center;
  line-height: 22px;
  font-size: 20px;
  font-weight: 500;

  a {
    margin: 0 20px 0 0;
    text-decoration: none;
  }
  @media (max-width: 426px) {
    display: none;
  }
`;

const NavPopUp = styled.div<{ isOpened: boolean }>`
  position: relative;
  svg {
    transform: ${(props) => props.isOpened && "rotate(180deg)"};
  }
`;

const PopUpUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-right: 10px;
  }
`;
const PopUp = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(100% + 10px);
  right: 0;
  min-width: 188px;
  padding: 30px 25px;
  border-radius: 12px;
  background-color: var(--darkest-gray);
  div {
    display: flex;
    &:first-child {
      margin-bottom: 32px;
    }
    a {
      margin: 0 0 0 12px;
      cursor: pointer;
    }
  }
`;
