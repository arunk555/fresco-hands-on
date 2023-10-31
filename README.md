# fresco-hands-on
HandsOn - Working with JSON: Node.js and Express

Create a back-end application using Node.js and Express framework to get post and modify user data from a json file.

The endpoints and their functionalities that you need to create are as follows:

/add -> POST Method -> This route should add the data sent with the request body into the post.json file.
Sample data sent with the request:

{ "id": "1", "name": "updated name", "age": "22", "gender": "Male", "email": "userone@gmail.com" } If the data is added successfully, then you should sent a response code of 200.

/view -> GET Method -> This route has a optional query param called id. If no query param get passed with the request then you should fetch all the data from the get.json file. If some id gets passed with the request query param, then you should send the details of the user having id equal to the id that comes with the request query.
Sample request without query parameter:

/view

Expected response:

[ { "id": "1", "name": "updated name", "age": "22", "gender": "Male", "email": "userone@gmail.com" }, { "id": "2", "name": "user two", "age": "24", "gender": "Female", "email": "usertwo@gmail.com" }, { "id": "3", "name": "user three", "age": "23", "gender": "Male", "email": "userthree@gmail.com" } ]

Sample request with query parameter id:

/view?id=2

Expected response:

[ { "id": "2", "name": "user two", "age": "24", "gender": "Female", "email": "usertwo@gmail.com" } ]

If the data is fetched successfully, then you should send a response code of 200.

/edit/:id -> PATCH Method -> This route should update the values of the of the user having id in post.json equal to the id that comes with the request URL. You can update name, age and email of a user.
Sample request:

/edit/3

Sample data sent with the request:

{ "name": "updated name" } This request should update the name of the user having id 3 in post.json as updated name.

If the data is updated successfully, then you should send a status code of 200.

IDE Instructions:

You can test your app by clicking Run test cases button at the right bottom. You can submit your code by clicking the submit button at the bottom right corner.