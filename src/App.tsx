import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import styled from "@emotion/styled";
import Navigator from "./components/navigator/navigator";
import { HeaderTop } from "./components/header/header";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calendar } from "./pages/Calendar/Calendar";
import { Tasklist } from "./pages/Tasklist/Tasklist";
import { Bill } from "./pages/Bill/Bill";
import { Settings } from "./pages/Settings/Settings";
import { useState } from "react";
import { ButtonSummit } from "./components/buttonSumit/buttonSumit";
import { Provider } from "react-redux";
import store from "./redux/store";

const Container = styled.div`
  background: white;
  display:grid;

  .containerNavigator{
    grid-area: nav;
  }

  .header{
    grid-area: header;
  }
  .content{
    grid-area: content;
  }


  grid-template-columns: 10% 90%;
  grid-template-rows:15% 85%;
  grid-template-areas:
  "nav header"
  "nav content";
`;

const ContainterHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  //VOLVER VALOR A FALSE PARA TENER MODO LOGIN
  const [isUserLogged, setIsUserLogged] = useState(true);

  const handleLogin = () => {
    setIsUserLogged(true);
  };

  return (
    <Provider store={store}>

      <Router>
        {!isUserLogged && (
          <ContainterHome>
            <Route path="/" component={Home} />
            <ButtonSummit path="/dashboard" content="Loguearse" functionOnClick={handleLogin}></ButtonSummit>
          </ContainterHome>
        )}
        {isUserLogged && (
          <Container>
            <div className="containerNavigator">
              <Navigator />
            </div>
            <div className="page">
              <HeaderTop className="header" />
              <div className="content">
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/tasklist" component={Tasklist} />
                <Route path="/bill" component={Bill} />
                <Route path="/settings" component={Settings} />
              </div>
            </div>
          </Container>
        )}
      </Router>
    </Provider>
  );
};

export default App;
