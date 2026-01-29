## Overview

This is a sample documentation site developed using the [docs-as-code](https://www.writethedocs.org/guide/docs-as-code/) approach. The [source code](https://github.com/Iurii132/sample-doc-site/tree/main/documentation) is built into HTML using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and published to [GitHub Pages](https://docs.github.com/en/pages) through a GitHub Actions [workflow](https://github.com/Iurii132/sample-doc-site/actions/workflows/pages-deploy.yml).

The documentation explains the [server.js](https://github.com/Iurii132/sample-doc-site/blob/main/application/server.js) application, which is a tiny example Node.js Express server.


## Purpose

- Provide a sample end-to-end documentation workflow.
- Showcase markdown functionality.
- Practice with API documentation.
- Explore AI capabilities to write documentation.

# Chatbot widget

Below is the chatbot widget:

<div id="chat-widget">
  <div id="chat-log"></div>
  <input id="chat-input" placeholder="Ask a question..." autocomplete="off" />
</div>

<style>
#chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  font-family: sans-serif;
  z-index: 9999;
}
#chat-log {
  height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
