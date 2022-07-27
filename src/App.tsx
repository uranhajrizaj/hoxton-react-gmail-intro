import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import EmailContent from "./components/EmailContent";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailContent />
    </div>
  );
}

export default App;
