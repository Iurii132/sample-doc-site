

## Base URL

Base URL: http://localhost:8080


## Endpoints

The following table provides a summary of endpoints:

|**Endpoint**|**Method**|**Description**|
|--|--|--|
|/api/items|GET|Returns an array of items stored in memory.|
|/api/items|POST|Creates a new item in memory based on the provided JSON body.|
|/api/items/:id|GET|Returns a single item by `id` (404 if not found).|
|/api/items/:id|DELETE|Deletes an item by `id` (204 on success, 404 if not found).|



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


### GET /api/items/:id

- Description: Returns a single item by `id`.
- Response: 200 OK with the item body, or 404 Not Found if the id does not exist.

### DELETE /api/items/:id

- Description: Deletes the item with the given `id`.
- Success: 204 No Content on successful deletion.
- Error: 404 Not Found if the id does not exist.


### Example requests

#### Curl

- Create item:

    ```curl
	-X POST http://localhost:8080/api/items \
      -H "Content-Type: application/json" \
      -d '{"name":"test"}'
    ```

- Retrieve items:

    ```curl http://localhost:8080/api/items```

- Retrieve item by id:

    ```bash
    curl http://localhost:8080/api/items/<id>
    ```

- Delete item by id:

    ```bash
    curl -X DELETE http://localhost:8080/api/items/<id>
    ```

#### Postman

- Method: POST
- Headers: 
    -  Key: Content-Type
    -  Value: application/json
- Body:
   
    ```JSON
      {
       "param1": "param1_value",
       "param2": "param2_value"
      }   
	 ```
	
![media](media/index2.png)
	
## Notes

!!!Notes
    - `id` is generated via `cryptoRandomId()` in `application/server.js` and is not meant to be collision-resistant.
    - If you extend the API, add route docs here and update `docs/guides/user-guide.md` with usage examples.
