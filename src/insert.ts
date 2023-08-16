import { PutCommand, DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import client from "./dynamoClient/client";

const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {

	// await insertInTenantInfo();
	await insertIntoTenantCoreAttributes();
	await insertInUserstable();



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



const insertInUserstable = async () => {
	const command = new BatchWriteCommand({
		RequestItems: {
			"Users": [
				{
					PutRequest: {
						Item: {
							FirstName: "FirstName3",
							LastName: "FirstName1",
							ATTRIBUTE_1: "ATTRIBUTE_1_VALUE",
							ATTRIBUTE_2: "ATTRIBUTE_2_VALUE"
						}
					}
				},
				{
					PutRequest: {
						Item: {
							FirstName: "FirstName3",
							LastName: "FirstName2",
							ATTRIBUTE_1: "ATTRIBUTE_1_VALUE",
							ATTRIBUTE_2: "ATTRIBUTE_2_VALUE"
						}
					}
				}
			]
		}
	});
	const response = await docClient.send(command);
	console.log(response);
}
(async () => {
	await main();
})();
