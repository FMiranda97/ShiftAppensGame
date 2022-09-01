db = new Mongo().getDB("SA_DB");

db.createCollection('challenges', { capped: false });
db.createCollection('users', { capped: false });

let challenges = [{
  "_id": {
    "$oid": "6251b518ae32fc5a609a2ead"
  },
  "title": "Workshop RedLight",
  "description": "Introdução ao TypeScript, apresentado por Pedro Figueiredo",
  "date": {
    "$date": {
      "$numberLong": "1649496600000"
    }
  },
  "points": 10,
  "availableCodes": [
    "478ea082",
    "ed6a3fc3",
    "8eb5eadd",
    "0c797719",
    "3dc58130"
  ],
  "__v": 1
},{
  "_id": {
    "$oid": "6251b58eae32fc5a609a2eb1"
  },
  "title": "Talk Mindera",
  "description": "A day in the life os a mobile developer, apresentado por Ricardo Silva",
  "date": {
    "$date": {
      "$numberLong": "1649503800000"
    }
  },
  "points": 10,
  "availableCodes": [
    "b21f7f28",
    "b702b004",
    "a8e32688",
    "0b6a5a22",
    "46b20363",
    "d434a55c",
    "618d8c73"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b599ae32fc5a609a2eb3"
  },
  "title": "Talk Subvisual",
  "description": "What about Web3? , apresentado por José Gomes, Gabriel Poça e José Pedro Resende",
  "date": {
    "$date": {
      "$numberLong": "1649590200000"
    }
  },
  "points": 10,
  "availableCodes": [
    "82106925",
    "46b3bc33",
    "a0fa8bdf",
    "106ff3ca",
    "7b4bcf9b",
    "74fc09b7",
    "c958cfc6"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5a4ae32fc5a609a2eb5"
  },
  "title": "Talk Bliss Applications",
  "description": "Android Kotlin Workshop- Waht is? When to use? how to make? an Android Native Application, apresentado por João Hortas",
  "date": {
    "$date": {
      "$numberLong": "1649604600000"
    }
  },
  "points": 10,
  "availableCodes": [
    "6f7f5b3f",
    "e649ab6c",
    "684ee805",
    "4bf810b6",
    "7332f516",
    "94ed2561",
    "1848003c"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5afae32fc5a609a2eb7"
  },
  "title": "Talk GoodBarber",
  "description": "Como colaborar(eficazmente) remotamente, apresentado por Alvaro Gijón Francis",
  "date": {
    "$date": {
      "$numberLong": "1649617200000"
    }
  },
  "points": 10,
  "availableCodes": [
    "e5bb8d35",
    "c053426b",
    "057453cc",
    "f278697b"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5c0ae32fc5a609a2eb9"
  },
  "title": "Workshop Deloitte",
  "description": "Salesforce- Sales Cloud, Service Cloud and Experience Cloud, apresentado por Francisco Estanqueiro",
  "date": {
    "$date": {
      "$numberLong": "1649624400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "de6c4635",
    "91738acd",
    "244c2ce1",
    "29daed6d",
    "d775823d",
    "271b09c3",
    "af9b092f"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5caae32fc5a609a2ebb"
  },
  "title": "Workshop Feedzai",
  "description": "End to end test in modern web application",
  "date": {
    "$date": {
      "$numberLong": "1649674800000"
    }
  },
  "points": 10,
  "availableCodes": [],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5d2ae32fc5a609a2ebd"
  },
  "title": "Workshop Feedzai",
  "description": "Unit test in react applications",
  "date": {
    "$date": {
      "$numberLong": "1649687400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "626fcb1e",
    "f0dd960c",
    "d23b86a0",
    "3d01c2ef",
    "1b008212",
    "d307ec6e",
    "62d00ba0"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5dfae32fc5a609a2ebf"
  },
  "title": "Workshop Accenture",
  "description": "Scrum Lego with Agile, apresentado por Carlos Jesus",
  "date": {
    "$date": {
      "$numberLong": "1649525400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "f82bb667",
    "4360f0e8",
    "b46ee60e",
    "5bd12415",
    "cf1bc4ff",
    "27db59ef",
    "3ba16a58"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b5ebae32fc5a609a2ec1"
  },
  "title": "Banca RedLight",
  "description": "Venham a banca da RedLight para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "03ebfbe0",
    "2e11df95"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b73f8478a88b87766971"
  },
  "title": "Banca Mindera",
  "description": "Venham a banca da Mindera para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "a4193a26",
    "339b8c99",
    "f6c9673b",
    "746bee8f",
    "12fabd05",
    "e681d0f2"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b75b8478a88b87766973"
  },
  "title": "Banca Bliss Applications",
  "description": "Venham a banca da Bliss Applications para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "c55c4a66",
    "ed7100b3",
    "9b76ca05",
    "231561e4",
    "b089abba",
    "e0a8a436"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b7628478a88b87766975"
  },
  "title": "Banca GoodBarber",
  "description": "Venham a banca da GoodBarber para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "4f58f7ed",
    "ee6a3b54",
    "36798dda",
    "7053ee7d",
    "e5d7a484",
    "98f3f538",
    "c55ffade"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b7698478a88b87766977"
  },
  "title": "Banca Deloitte",
  "description": "Venham a banca da Deloitte para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "8f7ebb38",
    "5d6fa00d",
    "1f650c70",
    "ccff4fc8",
    "d0493e39"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b76f8478a88b87766979"
  },
  "title": "Banca Globalvia",
  "description": "Venham a banca da Globalvia para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "82bc7a39",
    "4b4805db",
    "661513d3",
    "2a5ab993",
    "a2826cb8",
    "f0445ad6",
    "cb3474dc"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b7778478a88b8776697b"
  },
  "title": "Banca Checkmarx",
  "description": "Venham a banca da Checkmarx para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "3d544249",
    "604b09e9",
    "ffaebe6f",
    "296294ac",
    "a017fc4a",
    "1cdf79f5",
    "61f861f9"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b77c8478a88b8776697d"
  },
  "title": "Banca Kelvin",
  "description": "Venham a banca da Kelvin para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "2db6449a",
    "17d5724c",
    "94b59a61",
    "8bf0046d",
    "5052f04f",
    "ffc7b7d9",
    "46802125"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b7848478a88b8776697f"
  },
  "title": "Banca Accenture",
  "description": "Venham a banca da Accenture para descobrir mais sobre ela",
  "date": {
    "$date": {
      "$numberLong": "1649462400000"
    }
  },
  "points": 10,
  "availableCodes": [
    "8d1c35c5",
    "804ffc1d",
    "208c045b",
    "339405e1",
    "93e07783",
    "078f77bc",
    "aad2cf64"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b78a8478a88b87766981"
  },
  "title": "Quiz Whitesmith",
  "description": "Apresentado por Mariana Cerveira, Pedro Janeiro, Tomás Marques",
  "date": {
    "$date": {
      "$numberLong": "1649619000000"
    }
  },
  "points": 15,
  "availableCodes": [
    "11e80caf",
    "4ee9ad11",
    "e3bf70b4",
    "351894a4",
    "cafddfb9",
    "3733f8b4",
    "784bd8e6"
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b7908478a88b87766983"
  },
  "title": "Qual o caminho para caracas?",
  "description": "Apenas uma das pessoas do evento sabe a resposta, agora só te resta saber quem é. Para receberes mais 5 pontos basta te juntares a outra pessoa. Boa Sorte!",
  "date": {
    "$date": {
      "$numberLong": "1649548800000"
    }
  },
  "points": 22,
  "availableCodes": [
    "0c16f555",
    "ce3b2316",
    "732f9f04",
    "521f549d",
    "2b3ebbb8",
    "71d47d4c",
    "c248edf3",
    "ola2",
    "ola2",
    "ola2",
    "ola2"
  ],
  "__v": 0
}]

let users = [{
  "_id": {
    "$oid": "6251b85d614fda9b59e9c828"
  },
  "username": "Ines",
  "email": "ines@gmail.com",
  "password": "$2a$12$7sDqU6jJQ6usKZPACskH8u.isxPCoplj6sgq5/TAOd.oSrmCfS6di",
  "isAdmin": false,
  "totalPoints": 0,
  "completedChallenges": [],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b9881380dca1bf92061c"
  },
  "username": "Rita",
  "email": "rita@gmail.com",
  "password": "$2a$12$/dcZ4GsEZ46eS/6crP3vCuLx60qjkxiMxa2tZQQz1F980SgFjR6rC",
  "isAdmin": false,
  "totalPoints": 40,
  "completedChallenges": [
    {
      "$oid": "6251b5afae32fc5a609a2eb7"
    },
    {
      "$oid": "6251b5ebae32fc5a609a2ec1"
    },
    {
      "$oid": "6251b73f8478a88b87766971"
    },
    {
      "$oid": "6251b7698478a88b87766977"
    }
  ],
  "__v": 4
},{
  "_id": {
    "$oid": "6251b9971380dca1bf920620"
  },
  "username": "Francisco",
  "email": "francisco@gmail.com",
  "password": "$2a$12$jKToKzmmAhJzGj5oa80RWeOcM/W6ybrMeJ2CYUt0wT39Q7tnS5q5.",
  "isAdmin": false,
  "totalPoints": 2,
  "completedChallenges": [],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b9a01380dca1bf920624"
  },
  "username": "Rui",
  "email": "rui@gmail.com",
  "password": "$2a$12$8htnbUt0jB7wFmdEZmhpe.L3ZjAyoNpJxA94hVZJDRSJlzOdytmSC",
  "isAdmin": false,
  "totalPoints": 0,
  "completedChallenges": [],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b9aa1380dca1bf920628"
  },
  "username": "Filipa",
  "email": "filipa@gmail.com",
  "password": "$2a$12$iUNxnu9JvwiAO.F6C3ia.OlR8Zs3kWRZFjroGMe.yAGh8CYOMO4rS",
  "isAdmin": false,
  "totalPoints": 0,
  "completedChallenges": [],
  "__v": 0
},{
  "_id": {
    "$oid": "6251b9b31380dca1bf92062c"
  },
  "username": "Joao",
  "email": "joao@gmail.com",
  "password": "$2a$12$8Q5/Cb1rS7hq4BNbi5U7Uumyy.lU8zhHnUinrZMwblRC/iQps7d9y",
  "isAdmin": true,
  "totalPoints": 30,
  "completedChallenges": [
    {
      "$oid": "6251b75b8478a88b87766973"
    },
    {
      "$oid": "6251b518ae32fc5a609a2ead"
    },
    {
      "$oid": "6251b5ebae32fc5a609a2ec1"
    }
  ],
  "__v": 3
},{
  "_id": {
    "$oid": "6252191f81d308b19bc5fdc8"
  },
  "username": "Zoe",
  "email": "zoe@gmail.com",
  "password": "$2a$12$8Eo/RlCIwBVJkrQkQiMZzuXpd4e5yUmbVUPBAMrwfS.rSSuEzHhjy",
  "isAdmin": false,
  "totalPoints": 10,
  "completedChallenges": [
    {
      "$oid": "6251b5ebae32fc5a609a2ec1"
    }
  ],
  "__v": 1
},{
  "_id": {
    "$oid": "62522b1581d308b19bc5fed7"
  },
  "username": "Sara",
  "email": "sara@gmail.com",
  "password": "$2a$12$mdeEuBA1crg1V/e21BmoeeO6EfZ2sdKmR86C8l8NAmq5gFt7UnJem",
  "isAdmin": false,
  "totalPoints": 10,
  "completedChallenges": [
    {
      "$oid": "6251b7698478a88b87766977"
    }
  ],
  "__v": 1
},{
  "_id": {
    "$oid": "6252303681d308b19bc5ffb3"
  },
  "username": "Palmeira",
  "email": "ola@gmail.com",
  "password": "$2a$12$rE7KhW5e1R4IfuzBjNYXfeii9Ud1hrSmUgqg5BiJkejuenUUmvhw2",
  "isAdmin": false,
  "totalPoints": 42,
  "completedChallenges": [
    {
      "$oid": "6251b5ebae32fc5a609a2ec1"
    },
    {
      "$oid": "6251b518ae32fc5a609a2ead"
    },
    {
      "$oid": "6251b7908478a88b87766983"
    }
  ],
  "__v": 3
},{
  "_id": {
    "$oid": "6252e3904331729fbd9680fc"
  },
  "username": "Miranda",
  "email": "miranda@gmail.com",
  "password": "$2a$12$poQqKI2fvLFG08RXQpWzM.s03LVzGVtV3XLq09STz2wuUtBOUEegq",
  "isAdmin": false,
  "totalPoints": 0,
  "completedChallenges": [],
  "__v": 0
}]

challenges = challenges.map((challenge) => ({
  ...challenge,
  "_id": new ObjectId(challenge._id.$oid)
}))

users = users.map((user) => ({
  ...user,
  _id: new ObjectId(user._id.$oid),
  completedChallenges: user.completedChallenges.map((completedChallenge) => new ObjectId(completedChallenge.$oid))
}))

db.challenges.insertMany(challenges);
db.users.insertMany(users);