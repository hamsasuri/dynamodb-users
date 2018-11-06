var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": "http://dynamodb.us-west-1.amazonaws.com",
    "accessKeyId":"AKIAIGYYVSGD24ZLUWBA",
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function() {
    var params = {
        TableName: "users",
        Key: { "email_id": "example@test.com" },
        UpdateExpression: "set updated_by =  :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "Hamsa",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"
    };
    docClient.update(params, function(err, data) {
        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success - " + JSON.stringify(data, null, 2));
        }
    });
};

modify();