import "./LauncherPage.css";
import "./AuthPage.css";
import ExternalInfo from "./componentsAuth/ExternalInfo/ExternalInfo";
import HeaderButtons from "./componentsAuth/HeaderButtons/HeaderButtons";
import Login from "./componentsAuth/Login/Login";
const AuthPage = ({
  setIsAuth,
  player,
  setPlayer,
  password,
  setPassword,
  setDescription,
}) => {
  return (
    <div className="auth">
      <div className="header">
        <div className="name">ALTROMON</div>
        <HeaderButtons />
      </div>
      <div className="body authCenter">
        <div className="authBody">
          <Login
            setPlayer={setPlayer}
            setIsAuth={setIsAuth}
            player={player}
            password={password}
            setPassword={setPassword}
            setDescription={setDescription}
          />
        </div>
      </div>
      <div className="footer">
        <ExternalInfo />
      </div>
    </div>
  );
};

export default AuthPage;
