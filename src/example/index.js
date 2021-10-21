const path = require("path");
const React = require("react");
const {render, Box, Text} = require("ink");

const FileMarkdown = require("../component/file-markdown");
const ProjectMarkdown = require("../component/project-markdown");

const Example = () => (
  <Box flexDirection="column" marginBottom={1}>
    <Text color="green">FileMarkdown Example</Text>
    <Box flexDirection="column" marginTop={1}>
      <FileMarkdown
        file={path.resolve(__dirname, "..", "..", "docs", "test-markdown.md")}
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text color="green">ProjectMarkdown Example</Text>
      <ProjectMarkdown
        baseDir={path.resolve(__dirname, "..", "..")}
        filename="test-markdown"
      />
    </Box>
  </Box>
);

render(<Example />);
