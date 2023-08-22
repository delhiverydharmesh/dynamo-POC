import { PutCommand, DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import client from "./dynamoClient/client";

const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {

	// await insertInTenantInfo();
	// await insertIntoTenantCoreAttributes();
	await insertInTypetable();



};


const insertInTenantInfo = async () => {
	const command = new PutCommand({
		TableName: "tenant_info",
		Item: {
			id: "tenants:1e215897-ded2-5f21-b27f-bc8a444564aa",
			core_attributes: { "terminalTTL": "30d", "redis": "url", "redisConfig": "redis://redis-coreos.nonprod.fxtrt.internal:6379/7", "elasticConfig": "http://es-proxy.infra-dev-utils.svc.cluster.local:9200" },
			country: { "code": "IND", "name": "India" },
			created_at: 1691128840,
			created_by: { "id": "system", "name": "system" },
			init_date: "2023-3-22 13:34:7",
			name: "delhivery1",
			org: "abcd1.&adujacbuadsjbucydabucbauikbucdasbudddddeeeeeeeefffffffa",
			owner_id: "delhivery1",
			tenant_code: "delhivery1",
			tenant_id: "delhivery1",
			tenant_type: "DEV",
			terminal_state_ttl: "30d",
			timezone: { "abbrv": "IST", "name": "Asia/Kolkata", "offset": "+05:30" },
			updated_at: 1682661036047,
			updated_by: { "id": "platform:app:coreos-internal-test", "name": "service-account-zhvvghlncbv6iytdiznviusztglqywn9" }
		},

	});
	const response = await docClient.send(command);
	console.log(response);
}


const insertIntoTenantCoreAttributes = async () => {
	const command = new BatchWriteCommand({
		RequestItems: {
			"tenant_core_attributes_config": [
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "terminalTTL", "callback": null, "created_at": 1682058027767, "created_by": "{\"id\":\"1\",\"name\":\"abc\"}", "default_value": null, "description": null, "indexed": false, "type": "string", "updated_at": 1682058027767, "updated_by": "{\"id\":\"1\",\"name\":\"abc\"}", "validations": "{\"required\":false}", "version": null }

					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "redisConfig", "callback": null, "created_at": 1681930489140, "created_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "default_value": null, "description": "Redis config for a tenant", "indexed": false, "type": "string", "updated_at": 1681930489140, "updated_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "validations": null, "version": null }

					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "redis", "callback": null, "created_at": 1682058065022, "created_by": "{\"id\":\"1\",\"name\":\"abc\"}", "default_value": "null", "description": "Redis for a tenant", "indexed": false, "type": "string", "updated_at": 1682058110510, "updated_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "validations": "{\"required\":false}", "version": null }


					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "langugae", "callback": null, "created_at": 1691661393366, "created_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "default_value": "null", "description": null, "indexed": false, "type": "string", "updated_at": 1691661694978, "updated_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "validations": "{\"required\":true}", "version": null }


					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "headquater", "callback": null, "created_at": 1691661393366, "created_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "default_value": "null", "description": null, "indexed": false, "type": "string", "updated_at": 1691666160673, "updated_by": "{\"id\":\"1\",\"name\":\"abc\"}", "validations": "{\"required\":true}", "version": null }

					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "elasticConfig", "callback": null, "created_at": 1682578057685, "created_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "default_value": null, "description": "elastic search cluster for a tenant", "indexed": false, "type": "string", "updated_at": 1682578057685, "updated_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "validations": null, "version": null }

					}
				},
				{
					PutRequest: {
						Item: { "tenant_id": "delhivery1", "attribute_name": "country", "callback": null, "created_at": 1691661393366, "created_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "default_value": "null", "description": null, "indexed": false, "type": "object", "updated_at": 1691661694978, "updated_by": "{\"id\":\"platform:app:coreos-internal-test\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}", "validations": "{\"required\":false}", "version": null }


					}
				}

			]
		}


	});
	const response = await docClient.send(command);
	console.log(response);
}



const insertInTypetable = async () => {
	const testData = 
		{
		  "entityname":  "participantsabadd",
		  "updatedat":
			"1692296643510",
		  "meta": 
			 JSON.parse("\"{\\\"entityTypePluralName\\\":\\\"abadd\\\",\\\"appId\\\":\\\"participants\\\",\\\"name\\\":{\\\"singular\\\":\\\"abad\\\",\\\"plural\\\":\\\"abadd\\\"},\\\"ownerAppId\\\":\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\",\\\"category\\\":[{\\\"name\\\":\\\"vehilce\\\",\\\"description\\\":\\\"updated\\\",\\\"subCategory\\\":[\\\"SN1\\\",\\\"SN10\\\",\\\"SN11\\\",\\\"SN12\\\",\\\"SN13\\\",\\\"SN14\\\",\\\"SN15\\\",\\\"SN16\\\",\\\"SN17\\\",\\\"SN18\\\",\\\"SN19\\\",\\\"SN2\\\",\\\"SN20\\\",\\\"SN21\\\",\\\"SN22\\\",\\\"SN23\\\",\\\"SN24\\\",\\\"SN25\\\",\\\"SN26\\\",\\\"SN27\\\",\\\"SN28\\\",\\\"SN29\\\",\\\"SN3\\\",\\\"SN30\\\",\\\"SN31\\\",\\\"SN32\\\",\\\"SN33\\\",\\\"SN34\\\",\\\"SN35\\\",\\\"SN36\\\",\\\"SN37\\\",\\\"SN38\\\",\\\"SN39\\\",\\\"SN4\\\",\\\"SN40\\\",\\\"SN5\\\",\\\"SN6\\\",\\\"SN7\\\",\\\"SN8\\\",\\\"SN9\\\"]}],\\\"coreAttributes\\\":\\\"[{\\\\\\\"name\\\\\\\":\\\\\\\"failurereason\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Failure reason if processing failed\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"string\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true},{\\\\\\\"name\\\\\\\":\\\\\\\"inprogress\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Indicates if participant is in progress state\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"boolean\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":true,\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true},{\\\\\\\"name\\\\\\\":\\\\\\\"isfail\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Indicates if processing failed\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"boolean\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":false,\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true},{\\\\\\\"name\\\\\\\":\\\\\\\"processingstage\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Processing stage of participant\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"string\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":\\\\\\\"inProgress\\\\\\\",\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true},{\\\\\\\"name\\\\\\\":\\\\\\\"servicecode\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Service code of participant service\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"string\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true},{\\\\\\\"name\\\\\\\":\\\\\\\"system\\\\\\\",\\\\\\\"description\\\\\\\":\\\\\\\"Is system\\\\\\\",\\\\\\\"dataType\\\\\\\":\\\\\\\"boolean\\\\\\\",\\\\\\\"indexed\\\\\\\":false,\\\\\\\"defaultValue\\\\\\\":false,\\\\\\\"validation\\\\\\\":{\\\\\\\"required\\\\\\\":false},\\\\\\\"ownerAppId\\\\\\\":\\\\\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\\\\\",\\\\\\\"isReadPublic\\\\\\\":true}]\\\",\\\"callback\\\":{\\\"url\\\":\\\"https://webhook.site/ab625ed8-3851-48cb-a074-528a913e79b2\\\",\\\"meta\\\":\\\"{\\\\\\\"x-coreos-request-id\\\\\\\":\\\\\\\"req_dharmesh\\\\\\\"}\\\"},\\\"isActive\\\":false,\\\"isDeleted\\\":false,\\\"isStateMachineEnabled\\\":true,\\\"events\\\":[\\\"E-022\\\",\\\"E-023\\\",\\\"E-024\\\"],\\\"createdAt\\\":\\\"1692296643508\\\",\\\"createdBy\\\":{\\\"id\\\":\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\",\\\"name\\\":\\\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\\\",\\\"appId\\\":\\\"participants\\\"},\\\"updatedAt\\\":\\\"1692296643508\\\",\\\"updatedBy\\\":{\\\"id\\\":\\\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\\\",\\\"name\\\":\\\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\\\"},\\\"serviceName\\\":\\\"participants\\\"}\"")
		  ,
		  "tenantid": 
			"delhivery1"
		  ,
		  "entityschema": 
			"{\"id\":\"/participantsabadd\",\"additionalProperties\":false,\"type\":\"object\",\"properties\":{\"appId\":{\"type\":[\"string\",\"null\"]},\"uniqueCode\":{\"type\":[\"string\",\"null\"]},\"name\":{\"type\":[\"string\",\"null\"]},\"owner\":{\"type\":[\"string\",\"null\"]},\"entityName\":{\"type\":[\"string\",\"null\"]},\"category\":{\"type\":[\"string\",\"null\"]},\"subCategory\":{\"type\":[\"string\",\"null\"]},\"templateId\":{\"type\":[\"string\",\"null\"]},\"indexedAttributes\":{\"type\":[\"string\",\"null\"]},\"nonIndexedAttributes\":{\"type\":[\"string\",\"null\"]},\"callback\":{\"type\":[\"string\",\"null\"]},\"isActive\":{\"type\":[\"boolean\",\"null\"]},\"state\":{\"type\":[\"string\",\"null\"]},\"reasonForFailure\":{\"type\":[\"string\",\"null\"]},\"eventStatus\":{\"type\":[\"string\",\"null\"]},\"eLibraryBatchId\":{\"type\":[\"string\",\"null\"]},\"eLibraryBatchType\":{\"type\":[\"string\",\"null\"]},\"eLibraryServiceName\":{\"type\":[\"string\",\"null\"]},\"createdAt\":{\"type\":[\"string\",\"null\"]},\"createdBy\":{\"type\":[\"string\",\"null\"]},\"updatedAt\":{\"type\":[\"string\",\"null\"]},\"updatedBy\":{\"type\":[\"string\",\"null\"]}},\"required\":[]}"
		  ,
		  "createdat": 
			"1692296643510"
		  ,
		  "updatedby": 
			 "{\"id\":\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}"
		  ,
		  "id": 
			 "delhivery1##participantsabadd"
		  ,
		  "createdby": 
			"{\"id\":\"zHvvGhLnCBv6IYTDIzNviuSZtGlqYwn9\",\"name\":\"service-account-zhvvghlncbv6iytdiznviusztglqywn9\"}"
		  
		}
	  
	// const item= simplifyAttributes(testData);
	console.log(testData);
	const command = new PutCommand({
		TableName: "entities_schema",
		Item: {
			...testData
			}

	});
	const response = await docClient.send(command);
	console.log(response);
}

function simplifyAttributes(item: any) {
	const simplifiedItem : any= {};
	for (const attributeName in item) {

	  const typeKey = Object.keys(item[attributeName])[0];
	  simplifiedItem[attributeName] = item[attributeName][typeKey];
	}
	return simplifiedItem;
  }
(async () => {
	await main();
})();
