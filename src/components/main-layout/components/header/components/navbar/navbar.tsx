import Link from "next/link";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "src/hooks";
import styled from "styled-components";
import { PopupArrow, SettingsIcon, LogoutIcon } from "src/assets/icons";
import Media from "react-media";
import { SmallScreenNavbar } from "./components/small-screen-navbar";
import { logOutUser } from "src/store/ducks";

export const NavBar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logOutUser());
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
            <SmallScreenNavbar logOut={logOut} />
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
    </>
  );
};

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
    align-items: center;
    &:first-child {
      margin-bottom: 32px;
    }
    a {
      margin: 0 0 0 12px;
      cursor: pointer;
    }
  }
`;
