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
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
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
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
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
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
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
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
  availability: {
    morning: false,
    noon: true,
    afternoon: true,
    evening: true,
    night: true
  },
  profilepic: "/images/sirocco.gif"
});
usersList.push({
  firstName: "Jesse",
  lastName: "Smith",
  username: "jsmith",
  email: "jsmith@gmail.com" ,
  password: "test",
  language: ["English", "Arabic", "Hebrew"],
  specialty: ["Translation", "Medicine"],
  residence: {city:"Amman", province:"Amman", country:"Jordan"},
  age: 32,
  gender: "Other",
  contactInfo: { phone:"(555) 555-5555",
    skype:"jsmith" } ,
  auth: 0,
  professional: true,
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id ante imperdiet bibendum. Praesent ultricies facilisis risus, vel commodo urna ultrices at. In hac habitasse platea dictumst. Suspendisse fringilla eu nisi sit amet hendrerit. Ut sed erat porttitor, molestie dui vel, blandit urna. Aenean eget erat quam. Ut luctus sagittis mi eu porttitor. Praesent in ornare lacus. Cras nibh arcu, feugiat ac tempus vitae, feugiat eu lorem. Pellentesque vitae dolor tempor, ullamcorper dui eget, ullamcorper nunc. Sed ultricies urna nulla. Donec fringilla nibh ut sapien mollis posuere. Donec semper massa tristique ultricies tincidunt. Proin nec mi lectus. Phasellus hendrerit pretium libero non sollicitudin. Fusce tincidunt, sapien a tristique placerat, dolor lacus bibendum sem, a feugiat nibh risus in tortor. <br> Aenean pretium pellentesque auctor. Cras vel neque justo. Nulla in nisi accumsan, condimentum lorem id, faucibus lectus. Sed tincidunt convallis sapien. Sed ut libero eget elit lacinia mattis. Aliquam erat volutpat. Nunc sollicitudin purus mauris, eu tincidunt diam lobortis id. Donec ut mollis orci, at semper tellus. Aliquam vitae pretium nunc, ut interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget odio nulla. Vestibulum eu suscipit ex, eget lacinia arcu. Pellentesque placerat suscipit metus non ultrices.",
  availability: {
    morning: false,
    noon: false,
    afternoon: false,
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
