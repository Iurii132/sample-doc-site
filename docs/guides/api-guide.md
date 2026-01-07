

## Base URL

Base URL: http://localhost:8080


## Endpoints

The following table provides a summary of endpoints:

|**Endpoint**|**Method**|**Description**|
|/api/items|GET}Returns an array of items stored in memory.|
|/api/items|POST}Creates a new item in the memore based on the provided JSON body.|



### GET

- GET /api/items

    - Description: Returns an array of items stored in memory.
    - Response: 200 OK

**Example response:**

```json
[
  {
    "id": "abc123",
    "received": "2026-01-07T12:34:56.789Z",
    "payload": { "name": "test" }
  }
]
```

### POST

- POST /api/items

    - Description: Accepts JSON body and creates a new item.
    - Request body: any non-empty JSON object. Example: `{ "name": "sample" }`
    - Success: 201 Created with the created item in the response body.
    - Error: 400 Bad Request when payload is empty or invalid JSON.

**Example requests:**

- Create item (curl):

  curl -X POST http://localhost:8080/api/items \
    -H "Content-Type: application/json" \
    -d '{"name":"test"}'


- Retrieve items (curl):

  curl http://localhost:8080/api/items


### Notes

!!!Notes
    - `id` is generated via `cryptoRandomId()` in `application/server.js` and is not meant to be collision-resistant.
    - If you extend the API, add route docs here and update `docs/server/user-guide.md` with usage examples.
