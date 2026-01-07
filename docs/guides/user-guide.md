## Overview

[server.js](https://github.com/Iurii132/learning-tech/blob/main/application/server.js) is a tiny example Express server application intended as a learning/demo component for the docs site. It accepts JSON payloads and stores items in an in-memory array.

## Behavior summary

- GET `/api/items` — returns the current array of items (200 OK).
- POST `/api/items` — accepts a JSON body, validates it is not empty, and returns the created item (201 Created). If the POST body is empty or invalid JSON, returns 400 Bad Request.

## Typical developer workflows

- Start the server via `node application/server.js` and use `curl` or Postman to exercise endpoints.
- Inspect `application/server.js` to understand request validation and ID generation logic (`cryptoRandomId()`).

## Limitations and expectations

- Data is stored in memory; restarting the server clears stored items.
- IDs are not cryptographically secure — suitable only for local/development use.

## Examples

- Add an item:

    curl -s -X POST http://localhost:8080/api/items -H "Content-Type: application/json" -d '{"name":"test"}'

- Get items:

    curl -s http://localhost:8080/api/items

- Get item by id (replace `<id>` with a real id):

    curl -s http://localhost:8080/api/items/<id>

- Delete item by id (replace `<id>` with a real id):

    curl -s -X DELETE http://localhost:8080/api/items/<id>

## When to extend

- If you add persistence or new endpoints, document them in `docs/guides/api-guide.md` and add tests or examples in the docs.
