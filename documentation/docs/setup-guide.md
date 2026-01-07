# Overview

This guide explains how to run the server application `server.js` locally.

## Prerequisites

- Node.js (tested with Node 16+)
- npm (comes with Node)

## Quick setup (recommended)

1. Open a terminal and change to the application folder:

    `cd application`

2. Create a `package.json` and install `express`:

    `npm init -y`
	
    `npm install express`

3. Run the server:

    `node server.js`
	
![media](media/index1.png)

The server listens on port 8080 by default and exposes a small in-memory API under `/api/items`.

!!!Note
    This server is intentionally simple and uses in-memory data; it is not built for production use.

## Troubleshooting

- If Node reports a missing module, ensure you ran `npm install` in `application/`.
- If port 8080 is already in use, stop the conflicting process or change the port in `server.js`.
