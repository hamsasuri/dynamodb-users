var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-1",
    "endpoint": "http://dynamodb.us-west-1.amazonaws.com",
    "accessKeyId":"AKIAIGYYVSGD24ZLUWBA",
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function() {
    var params = {
        TableName: "users",
        Key: {
            "email_id": "hamsa@test.com"
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}
fetchOneByKey();