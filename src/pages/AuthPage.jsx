import "./LauncherPage.css";
import "./AuthPage.css";
import ExternalInfo from "./componentsAuth/ExternalInfo/ExternalInfo";
import HeaderButtons from "./componentsAuth/HeaderButtons/HeaderButtons";
import { useState } from "react";
import Login from "./componentsAuth/Login/Login";
import Register from "./componentsAuth/Register/Register";
const AuthPage = ({ setIsAuth, setPlayer, player }) => {
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
            />
          )}
          {page === "register" && <Register setPage={setPage} />}
        </div>
      </div>
      <div className="footer">
        <ExternalInfo />
      </div>
    </div>
  );
};

export default AuthPage;
