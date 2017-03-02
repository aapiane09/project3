# [Intrpretr] (https://intrpretr.herokuapp.com/)
Intrpretr allows for people who don't speak English well to access assistance for events in their daily lives that might require a specialized English vocabulary, such as a trip to the doctor or to open a bank account.

## Motivation
I used to live in Japan, and there was always a huge amount of stress involved whenever I had to deal with doctors, the bank, the post office, etc., because very few businesses there have any foreign language support. This meant that I would have to put off important things, as I had to rely on the mercy of my supervisor and the openness of their schedule. The only business with foreign language support was my cell phone provider, who provided a Skype translator.

Apart from my personal experience living abroad, the world is also undergoing the biggest displacement of human beings since World War II. These refugees didn't have the benefit of 4+ years of college Japanese like I had, they might have to move to a country they barely knew of, and know absolutely none of the language. This service would make it easier for them to access medical, financial, and governmental services.

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
##Screen Shots

![alt text](public/images/neighborhoodCard.png "neighborhood card")
![alt text](public/images/placeCard.png "place card")
