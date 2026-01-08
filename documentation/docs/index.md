## Overview


[server.js](https://github.com/Iurii132/learning-tech/blob/main/application/server.js) is a tiny example Express server application intended as a demo component for the docs site. It accepts items with arbitrary JSON payloads and stores items in an in-memory array.

## Purpose

- Test work with API through a client, such as curl or Postman.
- Explore AI capabilities to extend the application and write documentation.

## Typical workflows

- Start the server via `node application/server.js` and use `curl` or Postman to exercise endpoints.
- Open the `application/server.js` file to understand request validation and ID generation logic (`cryptoRandomId()`).
- Modify the `application/server.js` file to add endpoints or other features.

## Prerequisites

- Download and install [node.js](https://nodejs.org/en/download)


## Quick start

### Run the application


1. Clone the [repository](https://github.com/Iurii132/learning-tech.git) or download the [application](https://github.com/Iurii132/learning-tech/tree/main/application) folder.

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

	
### Execute a request

Execute an API request using curl or Postman. For more information, see the [API guide](api-guide.md).

![media](media/index2.png)

