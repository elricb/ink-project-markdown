const {readFile} = require("fs");
const React = require("react");
const {Newline} = require("ink");
const PropTypes = require("prop-types");
const InkMarkdown = require("ink-markdown").default;

/// View markdown file
const FileMarkdown = ({file}) => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    readFile(file, (error, data) => {
      if (error) throw error;
      setText(data.toString());
    });
  }, [file]);

  return (
    <>
      <Newline />
      <InkMarkdown>{text}</InkMarkdown>
      <Newline />
    </>
  );
};

FileMarkdown.propTypes = {
  /// the markdown file
  file: PropTypes.string.isRequired
};

FileMarkdown.shortFlags = {
  file: "f"
};

module.exports = FileMarkdown;
