import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import CardContainer from "./Components/CardContainer/CardContainer";
import Footer from "./Components/Footer/Footer";
import DATA from "./DATA.js";

function App() {
  return (
    <div className="App">
      <Main>
        <Header></Header>
        <CardContainer questions={DATA}></CardContainer>
        <Footer></Footer>
      </Main>
    </div>
  );
}

export default App;
