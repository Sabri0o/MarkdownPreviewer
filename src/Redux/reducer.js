import ADD from "./types";
var defaultState = `# Welcome to my React Markdown Previewer!

## i used React + Redux to build this project
![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

### Here's some other cool stuff:

You can make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

\`multi lines code\`
\`\`\`javascript
for(var i=0;i<3;i++){
  console.log("Hello world");
};
\`\`\`

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

`;

const textReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return action.text;
    default:
      return state;
  }
};

export default textReducer;

// \`Is the syntax highlighting even working?\`
// \`\`\`javascript
// let s = "JavaScript syntax highlighting";
// alert(s);
// \`\`\`
