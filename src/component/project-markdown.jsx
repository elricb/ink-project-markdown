const path = require("path");
const {existsSync, readdirSync} = require("fs");
const React = require("react");
const {Box, Text} = require("ink");
const PropTypes = require("prop-types");

const MarkdownFile = require("./file-markdown");

/// View markdown files in project
const MarkdownProject = ({
  baseDir,
  docsDir = "docs",
  filename = "",
  suspense = null
}) => {
  const [fullPath, setFullPath] = React.useState("");

  React.useEffect(() => {
    if (filename) {
      if (existsSync(path.resolve(baseDir, docsDir, filename))) {
        setFullPath(path.resolve(baseDir, docsDir, filename));
        return;
      }

      if (existsSync(path.resolve(baseDir, docsDir, filename + ".md"))) {
        setFullPath(path.resolve(baseDir, docsDir, filename + ".md"));
        return;
      }

      if (existsSync(path.resolve(baseDir, filename))) {
        setFullPath(path.resolve(baseDir, filename));
        return;
      }

      if (existsSync(path.resolve(baseDir, filename + ".md"))) {
        setFullPath(path.resolve(baseDir, filename + ".md"));
        return;
      }
    } else {
      if (existsSync(path.resolve(baseDir, "readme.md"))) {
        setFullPath(path.resolve(baseDir, "readme.md"));
        return;
      }

      if (existsSync(path.resolve(baseDir, "README.md"))) {
        setFullPath(path.resolve(baseDir, "README.md"));
        return;
      }
    }

    throw new Error(`File not found, "${path.resolve(baseDir, filename)}"`);
  }, [filename, docsDir, baseDir]);

  if (fullPath === "") {
    return suspense;
  }

  return (
    <>
      <MarkdownFile file={fullPath} />
      <Box flexDirection="column" marginTop={1} marginBottom={1}>
        <Text bold color="green">
          Documention
        </Text>
        {existsSync(path.resolve(baseDir, docsDir)) ? (
          <Box marginTop={1} marginBottom={1}>
            {readdirSync(path.resolve(baseDir, docsDir)).map(s =>
              s.endsWith(".md") ? (
                <Box key={s} marginLeft={1} marginRight={1}>
                  <Text>{s}</Text>
                </Box>
              ) : null
            )}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

MarkdownProject.propTypes = {
  /// the project base directory
  baseDir: PropTypes.string.isRequired,
  /// document sub-folder
  docsDir: PropTypes.string,
  /// markdown file name - sans extension
  filename: PropTypes.string,
  /// what to show when loading
  suspense: PropTypes.any
};

MarkdownProject.defaultProps = {
  docsDir: "docs",
  filename: "",
  suspense: null
};

MarkdownProject.shortFlags = {
  filename: "f",
  baseDir: "d"
};

module.exports = MarkdownProject;
