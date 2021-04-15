import { Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./style.scss";

function App() {
  return (
    <Router>
      <Container>{routes}</Container>
    </Router>
  );
}

export default App;
