import "./LauncherPage.css";
import "./AuthPage.css";
import ExternalInfo from "./componentsAuth/ExternalInfo/ExternalInfo";
import HeaderButtons from "./componentsAuth/HeaderButtons/HeaderButtons";
import { useState } from "react";
import Login from "./componentsAuth/Login/Login";
import Register from "./componentsAuth/Register/Register";
const AuthPage = ({
  setIsAuth,
  player,
  setPlayer,
  password,
  setPassword,
  registerPlayer,
  setRegisterPlayer,
  registerPassword,
  setRegisterPassword,
  registerRetryPassword,
  setRegisterRetryPassword,
  rToken,
  setRToken,
  setDescription,
}) => {
  const [page, setPage] = useState("login");
  return (
    <div className="auth">
      <div className="header">
        <div className="name">ALTROMON</div>
        <HeaderButtons />
      </div>
      <div className="body authCenter">
        <div className="authBody">
          {page === "login" && (
            <Login
              setPage={setPage}
              setPlayer={setPlayer}
              setIsAuth={setIsAuth}
              player={player}
              password={password}
              setPassword={setPassword}
              setDescription={setDescription}
            />
          )}
          {page === "register" && (
            <Register
              setPage={setPage}
              setPlayer={setPlayer}
              setPassword={setPassword}
              registerPlayer={registerPlayer}
              setRegisterPlayer={setRegisterPlayer}
              setRegisterPassword={setRegisterPassword}
              registerPassword={registerPassword}
              registerRetryPassword={registerRetryPassword}
              setRegisterRetryPassword={setRegisterRetryPassword}
              rToken={rToken}
              setRToken={setRToken}
              setIsAuth={setIsAuth}
              setDescription={setDescription}
            />
          )}
        </div>
      </div>
      <div className="footer">
        <ExternalInfo />
      </div>
    </div>
  );
};

export default AuthPage;
