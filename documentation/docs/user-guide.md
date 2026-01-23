## Overview

[server.js](https://github.com/Iurii132/sample-doc-site/blob/main/application/server.js) is a tiny example Express server application. It accepts items with arbitrary JSON payloads and stores items in an in-memory array.

## Typical workflows

- Start the server via `node application/server.js` and use `curl` or Postman to exercise endpoints.
- Open the `application/server.js` file to understand request validation and ID generation logic (`cryptoRandomId()`).
- Modify the `application/server.js` file to add endpoints or other features.

## Behavior summary

**Endpoints:**

- GET `/api/items` — returns the current array of items (200 OK).
- POST `/api/items` — accepts a free-form JSON body, validates it is not empty, and returns the created item (201 Created). If the POST body is empty or invalid JSON, returns 400 Bad Request.
- GET `/api/items/id` — returns an item by id (200 OK).
- DELETE `/api/items/id` — deletes an item by id (204 OK).


**Usage Examples:**

- Add an item:

    `curl -X POST "http://localhost:8080/api/items" -H "Content-Type: application/json" -d "{\"name\":\"test\"}"`

- Get items:

    `curl -s http://localhost:8080/api/items`
	
    ![media](media/index4.png)

- Get item by id (replace `<id>` with a real id):

    `curl -s http://localhost:8080/api/items/<id>`

- Delete item by id (replace `<id>` with a real id):

    `curl -s -X DELETE http://localhost:8080/api/items/<id>`
	
For more information, see [API Guide](api-guide.md).

## Limitations and expectations

!!!Notes

    - Data is stored in memory; restarting the server clears stored items.
    - IDs are not cryptographically secure — suitable only for local/development use.


