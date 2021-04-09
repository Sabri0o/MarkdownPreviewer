import React from "react";
import { Form, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import addText from "../Redux/actions";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.previewThisText
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  render() {
    this.props.NewText(this.state.input);
    return (
      <div style={{ marginTop: "56px" }}>
        <Navbar style={{ backgroundColor: "#178e53" }} variant="dark">
          <Navbar.Brand href="#home">Markdown editor</Navbar.Brand>
        </Navbar>
        <Form
          style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}
        >
          <Form.Group>
            <Form.Label>{""}</Form.Label>
            <Form.Control
              spellCheck={false}
              as="textarea"
              onChange={this.handleInputChange}
              value={this.state.input}
              id="editor"
              style={{ resize: "none", height: "550px" }}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { previewThisText: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    NewText: (text) => {
      dispatch(addText(text));
    }
  };
};

const EditorConnected = connect(mapStateToProps, mapDispatchToProps)(Editor);
export default EditorConnected;
