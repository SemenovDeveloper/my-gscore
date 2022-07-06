import Link from "next/link";
import { useAppSelector, useAppDispatch } from "src/hooks";
import styled from "styled-components";
import { PopupArrow, SettingsIcon, LogoutIcon } from "src/assets/icons";
import Media from "react-media";
import { SmallScreenNavbar } from "./components/small-screen-navbar";
import { logOutUser } from "src/store/ducks";
import useComponentVisible from "src/hooks/useComponentVisible";

export const NavBar: React.FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  const handlePopup = () => {
    setIsComponentVisible(!isComponentVisible);
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
              <NavPopUp isOpened={isComponentVisible}>
                <PopUpUser onClick={handlePopup}>
                  <p>{user.username}</p>
                  <PopupArrow />
                </PopUpUser>
                {isComponentVisible && (
                  <div ref={ref}>
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
                  </div>
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
