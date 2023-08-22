import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import client from "./dynamoClient/client";
import { QueryCommand } from "@aws-sdk/client-dynamodb";

const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
	// await getDataById();
	// await getDataByOnlyHashKey();
	await getType();
};


const getDataByOnlyHashKey= async ()=>{
	const command = new QueryCommand({
		TableName:"tenant_core_attributes_config",
		KeyConditionExpression:"tenant_id = :tenantId",
		ExpressionAttributeValues: {
			":tenantId": { S: "delhivery1" },
			// ":searchKey": { S: "no coloring" },
		  },
		  ConsistentRead: true,

	});
	const response = await docClient.send(command);
	// console.log(response.Items);
	const items=response.Items;
	const simplifiedArray = items?.map(item => 
		simplifyAttributes(item)

		);
		console.log(simplifiedArray);

}

function simplifyAttributes(item: any) {
	const simplifiedItem : any= {};
	for (const attributeName in item) {

	  const typeKey = Object.keys(item[attributeName])[0];
	  simplifiedItem[attributeName] = item[attributeName][typeKey];
	}
	return simplifiedItem;
  }

// const scanKeyCOmmand= async ()=>{
// 	const command = new ScanCommand({
// 		TableName:"tenant_core_attributes_config",
// 		KeyConditionExpression:"tenant_id = :tenantId",
// 		ExpressionAttributeValues: {
// 			":tenantId": { S: "delhivery1" },
// 			// ":searchKey": { S: "no coloring" },
// 		  },
// 		  ConsistentRead: true,

// 	});
// 	const response = await docClient.send(command);
// 	// console.log(response.Items);
// 	const items=response.Items;
// 	if(items){
// 		for(let item of items){
// 			console.log(item);
// 		}
// 	}
// }


const getDataById= async ()=>{
	const command = new GetCommand({
		TableName: "tenant_core_attributes_config",
		Key: {
			tenant_id: "delhivery1",
			attribute_name:"country"
		},
	});
	

	const response = await docClient.send(command);
	console.log(response);
}


const getType= async ()=>{
	const command = new GetCommand({
		TableName: "entities_schema",
		Key: {
			id: "delhivery1##participantsabadab"
			
		},
	});
	

	const response = await docClient.send(command);
	console.log(response);
}
// const keyConditionExpression= "id = :id";
const expressionAttributeValues = {
	":id": `}`
  };

(async () => {
	await main();
})();

