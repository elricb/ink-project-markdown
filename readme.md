# @elricb/ink-project-markdown

> Box list component for [Ink](https://github.com/vadimdemedes/ink).

View markdown files related to base project.

## Install

```
$ npm install @elricb/ink-project-markdown
```

## Usage

[Ink](https://github.com/vadimdemedes/ink) example

```jsx
import React from "react";
import {render, Text} from "ink";
import ProjectMarkdown from "@elricb/ink-project-markdown";

const Readme = () => (
  <ProjectMarkdown baseDir="project/path" suspense={<Text>Loading</Text>} />
);

render(<Readme />);
```

[Pastel](https://www.npmjs.com/package/pastel) example

```jsx
import React from "react";
import PropTypes from "prop-types";
import ProjectMarkdown from "@elricb/ink-project-markdown";

/// displays readme.md in terminal from project root 
const Readme = ({module}) => (
  module
    ? <ProjectMarkdown baseDir="project/path" filename={module} />
    : <ProjectMarkdown baseDir="project/path" />
);

Readme.propTypes = {
  /// select file from docs/ to open
  module: PropTypes.string,
};

Readme.shortFlags = {
  module: "m",
};

export default Readme;
```

## Props

### baseDir

Type: `string`
Required

The project directory.

### filename

Type: `string`
Default: `readme.md` or `README.md`

Filename to view.  `.md` extension is optional.

### docsDir

Type: `string`
Default: `docs`

Directory in project root to serach for markdown files.  Defaults to `docs` directory.

### suspense

Type: `string` / `element` / `null`
Default: `null`

Display while markdown file is loading.


