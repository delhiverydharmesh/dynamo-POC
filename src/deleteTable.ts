import { DeleteTableCommand } from "@aws-sdk/client-dynamodb";
import client from "./dynamoClient/client";

export const main = async () => {

	let tables :string[]=["entities_schema","template_data_config","batch_data","tenant_info","tenant_core_attributes_config"]
	for(let table of tables){
		try{
			console.log(`deleting table: ${table}`)
			const command = new DeleteTableCommand({
				TableName: table,
			});
			const response = await client.send(command);
			console.log(response);
		}catch(error: any){
			console.log(`error occured ${error}`);
		}

	}



};


(async () => {
	await main();
})();
