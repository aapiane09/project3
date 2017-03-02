# [Intrpretr] (https://intrpretr.herokuapp.com/)
Intrpretr allows for people who don't speak English well to access assistance for events in their daily lives that might require a specialized English vocabulary, such as a trip to the doctor or to open a bank account.

## Motivation
I used to live in Japan, and there was always a huge amount of stress involved whenever I had to deal with doctors, the bank, the post office, etc., because very few businesses there have any foreign language support. This meant that I would have to put off important things, as I had to rely on the mercy of my supervisor and the openness of their schedule. The only business with foreign language support was my cell phone provider, who provided a Skype translator.

Apart from my personal experience living abroad, the world is also undergoing the biggest displacement of human beings since World War II. These refugees didn't have the benefit of 4+ years of college Japanese like I had, they might have to move to a country they barely knew of, and know absolutely none of the language. This service would make it easier for them to access medical, financial, and governmental services.

## User Stories and Needs
1. An immigrant to the US whose English is decent, but lacks the vocabulary necessary for certain important tasks, like visiting the doctor or seeing the dentist.
2. A refugee who came to the US speaking little to no English, who needs help getting settled with a bank account, mobile phone, etc.

* Text on page to be in their native language or a major regional lingua franca. Text should also be available in simple English.
* Ability to sort translators/interpreters by language spoken, specialty, age, gender
* Ability to sort via method of contact
* Minimalist UX so users can easily see info with little ambiguity

## Technologies

* Angular
* Node.js
* Express
* MongoDB
* Mongoose
* Skeleton
* bCryptJS
* Satellizer
* Skeleton

## Installation Steps
1. Fork and clone repo
2. `npm install`
3. Run `nodemon` and `mongod` in Terminal
4. If you need to reseed database, run `node seed.js` in Terminal

## RESTful Routes(Endpoints)

The Intrpretr API provides the following JSON endpoints:

* ```GET /api ``` describes all available endpoints
* ```GET /api/users ``` get all users as JSON
* ```GET /api/users/:userId``` get one specific user as JSON
* ```PUT /api/me``` Updates your own profile
* ```POST /auth/signup ``` creates and logs in a user
* ```POST /auth/login ``` logs in a user
]

## Code We Are Proud Of

```
      ### HTML ###
        <div class="four columns languagesspecialties">
          <h6><strong>Languages</strong></h6>
          <span class="languages" ng-repeat="lang in user.language | filter : filters : true">{{lang}}<span ng-hide="$last">,&nbsp;<wbr></span></span>
          <hr>
          <h6><strong>Specialties</strong></h6>
          <span class="specialties" ng-repeat="specialty in user.specialty">{{specialty}}<span ng-hide="$last">,&nbsp;<wbr></span></span>
        </div>

      ### CSS ###
        .languagesspecialties {
          word-wrap: break-word;
        }
```

##Next Steps

* Full CRUD (unable to update embedded data, can delete but can't redirect to /logout after delete)
* Ability to upload photos to database
* Different language versions of site
* Authorization
* Rating and Reviews
* Better UX and styling
* Bookmarking interpreters
* Messaging
* Set up in-app payments if translators/interpreters want compensation for their time

** Screenshots

[Go to Imgur] (http://imgur.com/a/CTvKz)
