var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": "http://dynamodb.us-west-1.amazonaws.com",
    "accessKeyId":accesskey,
    "secretAccessKey": secretkey
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

let save = function() {
    var input = {
        "email_id": "example@test.com",
        "created_by": "hamsa",
        "created_on": new Date().toString(),
        "updated_by": "hamsa",
        "updated_on": new Date().toString(),
        "is_deleted": false
    };
    var params = {
        TableName: "users",
        Item: input
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::save::success - " + JSON.stringify(data, null, 2));
        }
    });
};

save();
