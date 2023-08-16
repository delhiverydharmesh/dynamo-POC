import { BatchWriteItemCommand, CreateTableCommand, UpdateTableCommand, UpdateTimeToLiveCommand } from "@aws-sdk/client-dynamodb";
import client from "./dynamoClient/client";
import { BatchWriteCommand, DynamoDBDocumentClient, TransactWriteCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
const { marshall } = require('@aws-sdk/util-dynamodb');

const docClient = DynamoDBDocumentClient.from(client);

const main = async () => {
	// const command = new UpdateTimeToLiveCommand({
	// 	TableName: "Users",
	//     TimeToLiveSpecification: {
	//         AttributeName: "TTL",
	//         Enabled: true
	//     }
	// });



	// const response = await client.send(command);
	// console.log(response);

	// await updateQuery();
	await batchUpdateQuery();
};

async function updateQuery() {

	const params = {
		TableName: 'tenant_info',
		Key: {
			tenant_id: "delhivery1"
		},
		UpdateExpression: `SET init_date = :newValue , org= :org`, // Update the desired attribute

		ExpressionAttributeValues: {
			':newValue': { S: '2023-8-13 13:34:7' },
			':org': 'bcdef',
		},
		ReturnValues: 'ALL_NEW' // To return the updated attributes after the update
	};
	console.log(params);
	const command = new UpdateCommand(params);
	const response = await docClient.send(command);
	console.log(JSON.stringify(response));
}

async function batchUpdateQuery() {

	const command = new TransactWriteCommand({
		TransactItems: [
			{
				Update: {
					TableName: "tenant_core_attributes_config",
					Key: { tenant_id: "delhivery1" , attribute_name:"country"},
					UpdateExpression: "SET description = :description",
				
					ExpressionAttributeValues: {
						":description": "20"
						
					},
				},
			
			}
		],
	});

	const result = await docClient.send(command);
	console.log(result);

}

(async () => {
	await main();
})();
