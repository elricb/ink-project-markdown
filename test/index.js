import path from "path";
import test from "ava";
import React from "react";
import {render} from "ink-testing-library";

import ProjectMarkdown, {FileMarkdown} from "../lib";

test("component FileMarkdown - docs/test-markdown.md", t => {
  const test = {
    file: path.resolve(__dirname, "..", "docs", "test-markdown.md")
  };
  const {lastFrame} = render(<FileMarkdown {...test} />);

  t.snapshot(lastFrame());
});

test("component ProjectMarkdown - docs/test-markdown.md", t => {
  const test = {
    baseDir: path.resolve(__dirname, ".."),
    filename: "test-markdown"
  };
  const {lastFrame} = render(<ProjectMarkdown {...test} />);

  t.snapshot(lastFrame());
});
