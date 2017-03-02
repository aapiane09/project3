function index(req, res) {
  res.json({
    message: "Welcome to the Intrpretr API! Here's what you need to know!",
    documentationUrl: "https://github.com/aapiane09/project3/blob/master/README.md",
    baseUrl: "http://intrpretr.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      //User endpoints
      {method: "GET", path: "/api/users", description: "get all users as JSON"},
      {method: "GET", path: "/api/users/:userId", description: "get one specific user as JSON"},
      //residence endpoints
      {method: "GET", path: "/api/users/userId/residence", description: "get all residences from a user"},
      //contact endpoints
      {method: "GET", path: "/api/users/:userId/contact", description: "get contact information from a user as JSON"},
      //availability endpoints
      {method: "GET", path: "/api/users/:userId/availability", description: "get a user's available"}
      // {method: "PUT", path: "/api/users/:userId/places/:placeId", description: "Updates one place atributes"},
      // {method: "PATCH", path: "/api/users/:userId/places/:placeId", description: "Updates one place atributes"},
      // {method: "DELETE", path: "/api/users/:userId/places/:placeId", description: "Deletes one specific place from a user"}
    ]
  });
}

module.exports = {
  index: index
}
