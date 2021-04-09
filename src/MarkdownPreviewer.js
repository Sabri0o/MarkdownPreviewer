import React from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import Editor from "./components/editor";
import Preview from "./components/preview";

export default class MarkdownPreviewer extends React.Component {
  render() {
    return (
      <>
        <SplitterLayout split="vertical">
          <Editor />
          <Preview />
        </SplitterLayout>
      </>
    );
  }
}
