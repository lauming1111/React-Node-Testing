const express = require('express');

const app = express();

app.get('/people', (req, res) => {
    const people =[
        {
            "_id": "5a8d580adc9625629d525a97",
            "picture": "https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg",
            "age": 20,
            "eyeColor": "brown",
            "name": {
                "first": "Lenore",
                "last": "Brewer"
            },
            "company": "EQUICOM",
            "son": [{
                "_id": "5a8d580b46f55b4e8fdde582",
                "picture": "https://lovelace-media.imgix.net/getty/111307814.jpg",
                "age": 24,
                "eyeColor": "blue",
                "name": {
                    "first": "Ryan",
                    "last": "Berry"
                },
                "son": [{
                    "_id": "5a8d580bd674653e25dde492",
                    "picture": "https://vignette.wikia.nocookie.net/rickandmorty/images/e/ea/Pocket_Mortys_App_Icon_1.1.1.png/revision/latest?cb=20160910014916",
                    "age": 21,
                    "eyeColor": "green",
                    "name": {
                        "first": "Nicholson",
                        "last": "Charles"
                    },
                    "son": [],
                    "company": "HELIXO",
                    "email": "nicholson.charles@helixo.name",
                    "phone": "+1 (805) 550-2453",
                    "address": "578 Montana Place, Ellerslie, District Of Columbia, 3120",
                    "about": "Do laboris non velit proident laboris exercitation adipisicing ut qui. Deserunt id esse adipisicing cupidatat ut culpa est adipisicing et nostrud consequat laboris sit ipsum. Et deserunt cillum in esse fugiat sunt eu. Mollit sunt consequat consequat incididunt aliqua cupidatat minim anim veniam. Et laborum est ullamco aliqua nisi minim officia reprehenderit dolor ullamco. Pariatur sunt consequat et voluptate non tempor deserunt esse est adipisicing adipisicing ex esse.",
                    "registered": "Saturday, March 26, 2016 3:19 PM",
                    "tags": [
                        "adipisicing",
                        "ipsum",
                        "est",
                        "sunt",
                        "laboris"
                    ]
                }, {
                    "_id": "5a8d580be864464bf0e80567",
                    "picture": "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f4/Pocket_Mortys_App_Icon_1.6.jpg/revision/latest?cb=20160922202605",
                    "age": 23,
                    "eyeColor": "brown",
                    "name": {
                        "first": "Nichols",
                        "last": "Mays"
                    },
                    "son": [],
                    "company": "SLAX",
                    "email": "nichols.mays@slax.biz",
                    "phone": "+1 (905) 582-2220",
                    "address": "632 Roosevelt Court, Layhill, New Mexico, 5455",
                    "about": "Et id enim culpa consequat magna commodo nulla voluptate enim. Aliqua culpa commodo aliquip fugiat consectetur cillum quis elit. Qui qui nulla sit dolor officia do aliqua consectetur esse. Laboris laboris enim sit eu enim occaecat minim sunt laboris pariatur ea dolore culpa. Et id aliqua adipisicing culpa reprehenderit pariatur proident est voluptate enim aute voluptate nisi.",
                    "registered": "Tuesday, August 23, 2016 9:41 AM",
                    "tags": [
                        "mollit",
                        "sit",
                        "ad",
                        "nisi",
                        "cupidatat"
                    ]
                }],
                "company": "KLUGGER",
                "email": "ryan.berry@klugger.tv",
                "phone": "+1 (951) 593-2184",
                "address": "133 Highlawn Avenue, Kempton, Idaho, 7048",
                "about": "Reprehenderit nisi ad nisi enim culpa eu ex nulla quis nulla labore adipisicing. Officia magna magna consequat ipsum enim pariatur excepteur sint et sit voluptate do pariatur exercitation. Excepteur sit minim proident culpa voluptate in laborum velit ea. Nostrud anim pariatur aute qui magna sunt culpa aute eu laborum proident tempor ullamco.",
                "registered": "Monday, August 24, 2015 7:43 AM",
                "tags": [
                    "adipisicing",
                    "veniam",
                    "adipisicing",
                    "excepteur",
                    "in"
                ]
            }, {
                "_id": "5a8d580b89f49e5b99dcc976",
                "picture": "https://usatftw.files.wordpress.com/2017/05/spongebob.jpg?w=1000&h=600&crop=1",
                "age": 33,
                "eyeColor": "brown",
                "name": {
                    "first": "Alberta",
                    "last": "Acevedo"
                },
                "son": [{
                    "_id": "5a8d580b361ecbda2ec257c0",
                    "picture": "https://ih0.redbubble.net/image.524527453.3004/flat,1000x1000,075,f.u1.jpg",
                    "age": 27,
                    "eyeColor": "brown",
                    "name": {
                        "first": "Rosalie",
                        "last": "Simon"
                    },
                    "son": [],
                    "company": "IMAGEFLOW",
                    "email": "rosalie.simon@imageflow.us",
                    "phone": "+1 (891) 527-2537",
                    "address": "294 Willoughby Street, Holcombe, Virginia, 3613",
                    "about": "Magna sint cupidatat nisi anim occaecat tempor fugiat. Elit ut fugiat cupidatat ut reprehenderit occaecat minim eu. Deserunt in proident sunt est ut occaecat ipsum. Non aute ex est sit nisi voluptate est dolor eu ad tempor. Nostrud esse id amet eu Lorem et minim fugiat consectetur elit. Culpa id laborum elit nostrud nostrud eu minim laboris consequat veniam sunt. Ut mollit amet et deserunt irure nisi eiusmod sit.",
                    "registered": "Tuesday, November 22, 2016 7:00 PM",
                    "tags": [
                        "laboris",
                        "et",
                        "ea",
                        "ipsum",
                        "officia"
                    ]
                },
                    {
                        "_id": "5a8d580b22d195f70bcc3417",
                        "picture": "https://i.ytimg.com/vi/eix7fLsS058/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDUy-DKoztFyM4uzH7DvHZpU7Ao-A",
                        "age": 20,
                        "eyeColor": "brown",
                        "name": {
                            "first": "Barrera",
                            "last": "Solis"
                        },
                        "son": [],
                        "company": "ZERBINA",
                        "email": "barrera.solis@zerbina.org",
                        "phone": "+1 (944) 457-2741",
                        "address": "947 Lake Place, Aberdeen, Virgin Islands, 3778",
                        "about": "Reprehenderit cupidatat amet sint culpa adipisicing. Laborum et excepteur id exercitation sunt. Nisi Lorem ut amet velit adipisicing aliquip excepteur qui amet aliquip non dolore voluptate. Do occaecat non ea ex.",
                        "registered": "Monday, July 31, 2017 12:10 PM",
                        "tags": [
                            "laborum",
                            "id",
                            "anim",
                            "Lorem",
                            "aliqua"
                        ]
                    },
                    {
                        "_id": "5a8d580b88c44907da8bb51d",
                        "picture": "https://res.cloudinary.com/teepublic/image/private/s--fYD1RoPT--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1478011383/production/designs/764536_1.jpg",
                        "age": 21,
                        "eyeColor": "green",
                        "name": {
                            "first": "Harriet",
                            "last": "Hurley"
                        },
                        "son": [],
                        "company": "ENERSAVE",
                        "email": "harriet.hurley@enersave.info",
                        "phone": "+1 (889) 421-3740",
                        "address": "505 Alton Place, Southmont, Georgia, 7686",
                        "about": "Dolor tempor velit incididunt duis Lorem. Culpa pariatur elit ipsum quis qui dolore deserunt laborum mollit mollit Lorem laborum ullamco. Nulla veniam occaecat amet reprehenderit voluptate laborum cillum ipsum sint qui commodo laborum. Do voluptate fugiat voluptate incididunt dolore. Excepteur consequat magna et id dolor cupidatat.",
                        "registered": "Saturday, May 24, 2014 8:23 AM",
                        "tags": [
                            "quis",
                            "dolore",
                            "excepteur",
                            "ullamco",
                            "id"
                        ]
                    }],
                "company": "TELEPARK",
                "email": "alberta.acevedo@telepark.co.uk",
                "phone": "+1 (824) 440-2079",
                "address": "141 Whitney Avenue, Finzel, Ohio, 684",
                "about": "Amet consectetur dolor deserunt qui quis non sit pariatur incididunt. Excepteur mollit eiusmod esse incididunt ea. Nisi quis proident Lorem exercitation cillum aliquip ullamco nisi est. Nulla in esse culpa irure.",
                "registered": "Tuesday, April 26, 2016 9:52 PM",
                "tags": [
                    "sit",
                    "sunt",
                    "tempor",
                    "nulla",
                    "laboris"
                ]
            },],
            "email": "lenore.brewer@equicom.com",
            "phone": "+1 (966) 470-2029",
            "address": "913 Dewitt Avenue, Ticonderoga, Federated States Of Micronesia, 6585",
            "about": "In dolor ut excepteur est incididunt. Labore ex elit ipsum ut pariatur. Mollit amet eu consequat anim ut in et elit.",
            "registered": "Friday, May 12, 2017 3:25 PM",
            "tags": [
                "labore",
                "id",
                "aute",
                "ea",
                "laboris"
            ]
        }
    ]

    res.json(people);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);