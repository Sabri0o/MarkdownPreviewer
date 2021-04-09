import React from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import marked from "marked";

class Previewer extends React.Component {
  render() {
    //https://marked.js.org/using_advanced for more instructions
    const renderer = new marked.Renderer();
    const rawMarkup = marked(this.props.previewThisText);
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const hljs = require("highlight.js");
        const validLanguage = hljs.getLanguage(language)
          ? language
          : "plaintext";
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    return (
      <div style={{ marginTop: "56px" }}>
        <Navbar variant="dark" style={{backgroundColor:'#178e53'}}>
          <Navbar.Brand>Preview</Navbar.Brand>
        </Navbar>
        <div
          style={{ marginTop: "10px", marginLeft: "10px",marginRight: "10px" }}
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(rawMarkup, { renderer: renderer })
          }}
        ></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { previewThisText: state };
};

const PreviewerConnected = connect(mapStateToProps, null)(Previewer);
export default PreviewerConnected;
