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
          "api":"https://cases.testzone.in/wp-json",
          "postTypes": [
            {
              type: "patient-details",
              endpoint: "patient-details",
              archive: "/patient-details"
            },
            {
              type: "myplugin",
              endpoint: "myplugin",
              archive: "/myplugin"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
