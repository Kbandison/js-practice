# Express Intro Notes

## General Notes

- Control-C will exit a terminal command or process.

## Web Servers

- Internet files and resources are requested by a client computer and responded to by a server computer.
- When we open our browser to a particular url, we are making what is known as an HTTP request to some server out in the internet. Our request is routed through ISP's, routers, modems, etc. until it is received by the server, processed and responded to.

## Browser

- The web browser is referred to as the "client"

## HTTP Request

- In order for a client to "ask" for information it must initiate an HTTP (Hypertext Transfer Protocol) request.
- A request is always made to a particular url/path. The path is how the server knows which resource is being requested.
- There are multiple types of HTTP requests. The 4 most common are the GET, POST, PUT, and DELETE requests.
  - A GET request is used to fetch data from a server.
  - A POST request is used to create new data on a server.
  - A PUT request is used to modify existing data on a server.
  - A DELETE request is used to delete data on a server.
  - These 4 functionalites are what comprise what is known as a CRUD app. CRUD stands for Create, Read, Update, Delete and is what most web applications are construted to implement.

## HTTP Response

- Once a server receives a request to a particular route/path, it will process the request and send back what is known as a HTTP response.

## URL

- A URL is broken down into domain, path and queries
- The domain is the part of the url that includes www and .com or .org
- The path is the part of the url that comes after the .com/
  - A path is used to differentiate between different pages or different resources for an API.
- The queries are what come after the ?

  - Queries are additional information typically used to modify a request. Usually they stand for when a user is trying to get a resource but the resource has to be processed in some way with additional information.

- When it comes to sending data, the browser will display it. But servers are capable of responding to requests and are capable of creating requests themselves.

## NPM

- When we are developing applications with servers or clients, we use code from other companies and dev teams. The code we use is known as a library or a module. In order to download the module, we use an online tool known as NPM (Node Package Manager). NPM is a website that publically stores modules known as node_modules and exposes them over the internet for developers to download and use.
- The file that tracks information about our application including which node_modules we have installed is known as the package.json. The command 'npm init -y' will create a package.json file in your current directory which is necessary to download packages/modules
- In order to install a package, we use the command 'npm install {package-name}'. This will download the package into our local file system/repository, as well as list the package in the package.json file. Packages are stored inside of a folder known as node_modules.
- When a particular package requires other packages to run, the npm install command will automatically download those other packages known as dependencies.

## ExpressJS

- When Express code is run in a terminal process, the terminal will become a basic webserver capable of receiving/responding to HTTP requests. The server process will continue to run until it is stopped by the kill command (control-c).
- During local development, our express servers are exposed on what is known as localhost. Localhost is a networking term for our computer. Processes running on localhost are exposed with what is known as a port. A port can only expose a single process at a time and so when multiple applications are running, they must use different ports. The default port for express is port 3000. A web browser can send a request to our server running on port 3000 by visiting the url 'localhost:3000'
- When creating a new route, the starting syntax will always be of the form:
-

```
app.{Request-Type}(
	{Url-Path},
	(req, res) => { // Always include req and res as the first two parameters in the route handler function

	}
)
```

- A route MUST respond to a request, this is one of the rules of HTTP. To respond to a request, we put a response method such as res.send() or res.json() at the end of a route handler function. The value passed in to res.send() or res.json() will be the data sent back to the client in the response. res.send("some string") will send the string "some string" back to the client. res.json({
  someKey: "someValue"
  }) will send back the object containing our keys and values. - res.send() is usually used to send simple values such as strings or numbers. - res.json() is used to send json object. - For most of our exercises, we will be using the res.json() method to send objects.
- A popular package for developing in Express is known as nodemon. By default, if we make a change to our app.js file, we need to restart the terminal process in order for the change to take place. Nodemon is a NPM package that will watch our server files for changes and then automatically restart the server.
- In order to run nodemon, we will create what is known as a start script. In typical web development, processes are started with the terminal command 'npm start'. This command looks in the package.json file under the scripts section for a key known as 'start', the value of which is a terminal command. We define our start script for nodemon by adding the key value pair as follows:
  - ```
    {
    	"start": "nodemon app.js"
    }
    ```
  - Invoking scripts is done by running the terminal command "npm {Script-Name}"
- For server responses, it is good practice to include a success status with the response. There are many ways that API's implement this. For simplicity, we will send an object using res.json() which has a property called success set to true for a successful response and false for unsuccessful.
- A route can be dynamically changed to include what is known as a route parameter. These parameters are typically values for getting or setting a specific resource on the server, the value being the way we identify the resource to get.
  - The way to add a dynamic parameter to a route is to define a path with a slash then colon and then the name of the parameter.
    - "/some-path/:some-path-parameter"
    - Inside of the route when the request is received, the value in the url in the position of :some-path-parameter will be exposed to us in the req.params object. In this way, we can create urls that can dynamically request a specific resource.
- For POST and PUT requests, we can send what is known as a request body with the request. This is a payload of data that can be sent to the server. Note: You cannot send a request body with a GET request.
- When developing routes, we always want to include a response within the route so that our request does not hang. This can be a simple object/response such as res.json({success: true})
- Note for POST, PUT, DELETE: Since our server is being restarted on every change and since we have not hooked up Express to database yet, any data changes we make will not be persisted through restarts. So if you post new data during development and then make a change on the server, the new data will be erased.
- When developing POST and PUT routes, we want to add what is known as validation. Validation is code that checks an input for specific parameters before allowing an operation to be completed. Usually, we want to check the incoming data for type as well as required values before running the code that implements the write operation.
- The information after a ? in a url is known as query params. They come in the form of ?{key1}={value1}&{key2}={value2}, in which you can define a query key and some value for that query. Query's are used to modify a request usually when getting a particular resource.
  - Express will parse the query params on a url and expose them to use in the req.query object. The keys and values of the query url will be keys/values on the object.
  - _Note_: The values that come through on the query object are always going to be strings. So if you need to use one of the values as a different type (boolean, number, etc.), you have to convert the type.

## Postman

- In web development, a common tool/application used to develop server code is Postman. Postman is capable of creating requests of all types.
- For POST and PUT requests, to set a body with Postman, go to the body section, select 'raw' in the type dropdown, then select 'json' in the format dropdown.
