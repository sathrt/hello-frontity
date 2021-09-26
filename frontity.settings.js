const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://cases.testzone.in",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"

    }
  },
  "packages": [
    {
      name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      active:true,
      "state": {
        "source": {
          //"url": "https://cases.testzone.in",
          // "api":"https://cases.testzone.in/wp-json",
          "api":"http://farmfoods.in/wp-json",
          //"url":"http://farmfoods.in",
          "postTypes": [
            {
              type: "patient-details",
              endpoint: "patient-details",
              archive: "/patient-details"
            },
            {
              type:'visit-list',
              endpoint: 'myrest/visit-details',
              archive: "/myrest/visit-details"
            },
            {
              type: "visit-details",
              endpoint: "visit-details",
              archive: "/visit-details"
            },
            {
              type: "post",
              endpoint: "myplugin/v1",
              // archive: "/patient-details"
            }
          ]
        },
        "visits_retrieved":{
          "uhid":[]
        },
        'bearer-token':{"token":''}
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
