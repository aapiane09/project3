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
      {method: "PUT", path: "/api/me", description: "Updates your own profile"},
      // {method: "DELETE", path: "/api/me", description: "Deletes your own profile"},
      //auth endpoints
      {method: "POST", path: "/auth/signup", description: "creates and logs in a user"},
      {method: "POST", path: "/auth/login", description: "logs in a user"}
    ]
  });
}

module.exports = {
  index: index
}
