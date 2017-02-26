//seed.js
var db = require("./models");

var usersList = [];

usersList.push({
  firstName: "Beyoncé",
  lastName: "Knowles",
  username: "queenbey",
  email: "queenbey@beyhive.com" ,
  password: "test",
  language: ["English", "Spanish", "French"],
  specialty: ["Music"],
  residence: {city:"Los Angeles",    province:"California", country:"United States"},
  age: 35,
  gender: "Female",
  contactInfo: { phone:"(555) 555-5555",
    skype:"queenbey" } ,
  auth: 0,
  professional: true,
  availability: {
    morning: false,
    noon: true,
    afternoon: true,
    evening: true,
    night: false
  },
  profilepic: "https://lh5.googleusercontent.com/-wMF30gprRJ8/AAAAAAAAAAI/AAAAAAAAPak/DchY1miINOU/s0-c-k-no-ns/photo.jpg"
});
usersList.push({
  firstName: "Adele",
  lastName: "Britishlady",
  username: "adele",
  email: "adele@britishlady.com" ,
  password: "test",
  language: ["English", "French"],
  specialty: ["Medicine"],
  residence: {city:"London", country:"England"},
  age: 29,
  gender: "Female",
  contactInfo: { phone:"(555) 555-5555",
    skype:"adele" } ,
  auth: 0,
  professional: false,
  availability: {
    morning: false,
    noon: true,
    afternoon: true,
    evening: true,
    night: false
  },
  profilepic: "https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg"
});
usersList.push({
  firstName: "Barack",
  lastName: "Obama",
  username: "potusofourhearts",
  email: "obama@potus.gov" ,
  password: "test",
  language: ["English", "Indonesian"],
  specialty: ["Government"],
  residence: {city:"Washington", province:"D.C.", country:"United States"},
  age: 55,
  gender: "Male",
  contactInfo: { phone:"(555) 555-5555",
    skype:"potus44" } ,
  auth: 0,
  professional: true,
  availability: {
    morning: true,
    noon: true,
    afternoon: false,
    evening: false,
    night: true
  },
  profilepic: "https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB2HQ/QSmIw0nQN_c/s0-c-k-no-ns/photo.jpg"
});
usersList.push({
  firstName: "Alessandro",
  lastName: "Pianetta",
  username: "aapiane09",
  email: "aapiane09@gmail.com" ,
  password: "aapiane09",
  language: ["English", "Japanese"],
  specialty: ["Translation"],
  residence: {city:"Palo Alto", province:"California", country:"United States"},
  age: 26,
  gender: "Male",
  contactInfo: { phone:"(555) 555-5555",
    skype:"aapiane09" } ,
  auth: 0,
  professional: true,
  availability: {
    morning: false,
    noon: true,
    afternoon: true,
    evening: true,
    night: true
  },
  profilepic: "http://cultofthepartyparrot.com/assets/sirocco.gif"
});

db.User.remove({}, function(err, users) {
    // code in here runs after all users are removed
    db.User.create(usersList, function(err, users) {
        // code in here runs after all albums are created
        if (err) {
          return console.log('ERROR', err);
        }
        console.log("all users:", users);
        console.log("created", users.length, "users");
        process.exit();
    });
});
