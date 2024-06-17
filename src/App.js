import "./App.css";
import ButtonPlay from "./components/ButtonPlay/ButtonPlay";
import ExternalInfo from "./components/ExternalInfo/ExternalInfo";
import MemoryPicker from "./components/MemoryPicker/MemoryPicker";
import HeaderButtons from "./components/HeaderButtons/HeaderButtons";
import Description from "./components/Description/Description";
import ChangeLog from "./components/ChangeLog/ChangeLog";

function App() {
  return (
    <div className="launcher">
      <div className="window">
        <div className="header">
          <div className="name">ALTROMON</div>
          <HeaderButtons />
        </div>
        <div className="body">
          <Description />
          <ChangeLog />
        </div>
        <div className="footer">
          <ButtonPlay />
          <ExternalInfo />
          <MemoryPicker />
        </div>
      </div>
    </div>
  );
}

export default App;
