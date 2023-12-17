import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
const HomeAnimation = () => {
  const codeString = `// Require the Express module
const express = require('express');
// Create an instance of Express
const app = express();
// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});
// Set the port for the server to listen on
const PORT = 3000;
// Start the server
app.listen(PORT, () => {
  console.log('Server is running on rks team');
});
`;
  return (
    <div className="borderforrks secondaryBg pt-1 pl-2">
      <div>
      <div className="threedot">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        customStyle={{
          padding: "10px",
          background: "#00002C",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default HomeAnimation;
