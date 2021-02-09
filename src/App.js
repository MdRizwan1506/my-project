import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AboutUs from "./components/about/AboutUs";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import MenuList from "./components/menu";
import Footer from "./components/footer/Footer";
import MyEvents from "./components/events";
import MyGallery from "./components/gallery";
import MyContact from "./components/contact";
import Reservation from "./common/Reservation";
import './assets/scss/common.scss'

const Container = styled.div`
  min-height: 100vh;
  background: black
`;

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Container>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><AboutUs /></Route>
          <Route exact path="/menu"><MenuList /></Route>
          <Route exact path="/events"><MyEvents /></Route>
          <Route exact path="/gallery"><MyGallery /></Route>
          <Route exact path='/contact'><MyContact /></Route>
          <Route exact path='/book-table'><Reservation /></Route>
        </Switch>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;