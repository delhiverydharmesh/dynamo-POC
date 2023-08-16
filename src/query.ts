import { DynamoDBDocumentClient, GetCommand,QueryCommand } from "@aws-sdk/lib-dynamodb";
import client from "./dynamoClient/client";

const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
	const command = new QueryCommand({
		TableName: "Users",
		KeyConditionExpression: "FirstName = :FirstName",
            ExpressionAttributeValues: {
                ":FirstName": "abnc5544",
            },
            ConsistentRead: true,
	});

	const response = await docClient.send(command);
	console.log(JSON.stringify(response));
};

(async () => {
	await main();
})();