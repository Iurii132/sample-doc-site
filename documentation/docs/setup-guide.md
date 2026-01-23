# Overview

This guide explains how to set up and run the server application `server.js` locally.

## Prerequisites

- Download and install [node.js](https://nodejs.org/en/download)

## Setup


1. Clone the [repository](https://github.com/Iurii132/sample-doc-site.git) or download the [application](https://github.com/Iurii132/sample-doc-site/tree/main/application) folder.

1. Open a command prompt.

1. Go to the `application` folder.

    `cd application`
	
1. Initialize a Node project:

	`npm init -y`

1. Install the `express` module.

	`npm install express`		
	
1. Run the application:

    `node server.js`

![media](media/index1.png)


The server listens on port 8080 by default and exposes a small in-memory API under `/api/items`.

!!!Note
    This server is intentionally simple and uses in-memory data; it is not built for production use.

## Troubleshooting

- If Node reports a missing module, ensure you ran `npm install` in `application/`.
- If port 8080 is already in use, stop the conflicting process or change the port in `server.js`.
