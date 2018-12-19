define({ "api": [
  {
    "type": "get",
    "url": "/api/user/",
    "title": "Return requested user data",
    "name": "CanAsk",
    "group": "Questions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result Data</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result.possible",
            "description": "<p>possibility of create a new question</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error Data</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "error.code",
            "description": "<p>Code of Error</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "error.description",
            "description": "<p>Description of Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response when it is possible:",
          "content": "{\n    \"result\": {\n        \"possible\": true\n    }\n}",
          "type": "json"
        },
        {
          "title": "Response when it is not possible:",
          "content": "{\n  \"error\": {\n      \"code\": \"-342\",\n      \"description\": \"testse\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "Questions"
  }
] });
