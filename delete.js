var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": "http://dynamodb.us-west-1.amazonaws.com",
    "accessKeyId":accesskey,
    "secretAccessKey": secretkey
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function() {
    var params = {
        TableName: "users",
        Key: { "email_id": "example@test.com" }
    };
    docClient.delete(params, function(err, data) {
        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success - " + JSON.stringify(data, null, 2));
        }
    });
};

remove();
