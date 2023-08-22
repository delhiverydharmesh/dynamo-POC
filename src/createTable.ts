import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import client from "./dynamoClient/client";

const main = async () => {
	await createTable();
};

async function createTable() {
	const tables: any[] = [
		{
			tableName: "tenant_info",
			hashKey: "tenant_id",
			sortKey: undefined
		},
		{
			tableName: "tenant_core_attributes_config",
			hashKey: "tenant_id",
			sortKey: "attribute_name"
		},
		{
			tableName: "template_data_config",
			hashKey: "id",
			sortKey: undefined
		},
		{
			tableName: "batch_data",
			hashKey: "batch_id",
			sortKey: undefined
		},
		{
			tableName: "entities_schema",
			hashKey: "id",
			sortKey: undefined
		},
	]
	for(let table of tables){
		if(table.sortKey!=undefined){
			createTableWIthSortKey(table.tableName, table.hashKey, table.sortKey);
		}else{
			createTableWIthoutSortKey(table.tableName, table.hashKey);
		}
	}

}
const createTableWIthSortKey = async (tableName: string, hashKey: string, sortKey: string) => {
	try{
		console.log(`createting table: ${tableName}`);
		const command = new CreateTableCommand({
			TableName: tableName,
			AttributeDefinitions: [
				{
					AttributeName: hashKey,
					AttributeType: "S",
				},
				{
					AttributeName: sortKey,
					AttributeType: "S",
				}
	
			],
			KeySchema: [
				{
					AttributeName: hashKey,
					KeyType: "HASH",
				},
				{
					AttributeName: sortKey,
					KeyType: "RANGE",
				}
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: 1,
				WriteCapacityUnits: 1,
			}
		});
		const response = await client.send(command);
		console.log(response);
	}catch(error: any){
		console.log(`error occured ${error}`)
	}

}
const createTableWIthoutSortKey = async (tableName: string, hashKey: string) => {
	try{
		console.log(`creating table createTableWIthoutSortKey ${tableName}`);
		const command = new CreateTableCommand({
			TableName: tableName,
			AttributeDefinitions: [
				{
					AttributeName: hashKey,
					AttributeType: "S",
				}
	
			],
			KeySchema: [
				{
					AttributeName: hashKey,
					KeyType: "HASH",
				}
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: 1,
				WriteCapacityUnits: 1,
			}
		});
	
	
	
		const response = await client.send(command);
		console.log(response);
	}catch(error: any){
		console.log(`error occured ${error}`);
	}
	

}
(async () => {
	await main();
})();
