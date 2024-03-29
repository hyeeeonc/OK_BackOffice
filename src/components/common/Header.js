import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "../../../node_modules/react-router-dom/index";
import { doLogout } from "../../modules/auth";

const HeaderBlock = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  background: black;
  color: white;
  border-bottom: 1px solid white;
`;

const Wrapper = styled(Responsive)`
  font-family: "Noto Sans KR", sans-serif;

  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 3.2rem;
    letter-spacing: -3px;

    .logof {
      font-weight: 900;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    }

    .logob {
      font-weight: 600;
      font-style: italic;
    }
  }
  .right {
    display: flex;
    align-items: right;
  }
`;

const UserInfo = styled.div`
  display: flex;
  font-weight: 600;
  margin-right: 1rem;
  align-items: center;
`;

const LocalNavBlock = styled.div`
  position: fixed;
  z-index: 5;
  top: 86px;
  width: 100%;
  background: black;
  color: white;
`;

const LocalNavWrapper = styled(Responsive)`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LocalNavLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
`;

const LocalNavA = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Spacer130 = styled.div`
  height: 130px;
`;

const Spacer85 = styled.div`
  height: 130px;
`;

const Header = ({ user }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <span className="logof">OKRA</span>
            <span className="logob">SEOUL</span>
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user}</UserInfo>
              <Button onClick={doLogout}>Sign Out</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">Sign In</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      {user ? (
        <>
          <LocalNavBlock>
            <LocalNavWrapper>
              <LocalNavLink to="/editor">New Post</LocalNavLink>
              <LocalNavLink to="#">Google analytics</LocalNavLink>
              <LocalNavA target="_blank" href="https://okraseoul.com">
                Client Page
              </LocalNavA>
              <LocalNavLink to="/register">Add Administrator</LocalNavLink>
            </LocalNavWrapper>
          </LocalNavBlock>
          <Spacer130 />
        </>
      ) : (
        <>
          <Spacer85 />
        </>
      )}
    </>
  );
};

export default Header;
