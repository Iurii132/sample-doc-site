

## Overview

This repository includes the following items:

- API application [server.js](https://github.com/Iurii132/learning-tech/blob/main/application/server.js).
- Documentation for the API application in markdown format and configuration files for the documentation site.
- GitHub workflow (pipeline) to deploy the documentation to [GitHub Pages](https://iurii132.github.io/learning-tech/) when there are changes to the `documentation` folder under the `main` branch.


## Purpose

- Provide a sample documentation workflow that includes key artifacts and deliverables - application, documentation site, user guide, setup guide, API guide, and CI/CD process.
- Explore how AI can update documents together with code

## Quick start

- Preview docs (Windows):

    ```
    python -m venv .venv && .\.venv\Scripts\activate
    pip install -r requirements.txt
    mkdocs serve
	```

- Run the example API:

	```
    cd application
    npm init -y
    npm install express
    node server.js
	```

