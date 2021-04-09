import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import MarkdownPreviewer from "./MarkdownPreviewer";
import "./styles.css";
import { Navbar} from "react-bootstrap";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
       <Navbar style={{backgroundColor: '#265d42'}} variant="dark" fixed="top" >
          <Navbar.Brand>Markdown Previewer</Navbar.Brand>
        </Navbar>
      <MarkdownPreviewer />
  </Provider>,
  rootElement
);
