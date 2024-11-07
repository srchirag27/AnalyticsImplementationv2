const request = new Request("https://dcs.adobedc.net/collection/cad31adb5357239838fd5d698e85d3ffa9514121038c8261ab0f808738d1539a", {
    method: "POST",
    headers: {
        'x-api-key': 'fdf45223838e40a9bee13b3374d78fe7',
        'x-gw-ims-org-id': '83E53FDE5D14A9330A495E27@AdobeOrg',
        'x-sandbox-name': 'kpmg3',
        'Authorization': 'Bearer ' + _satellite.getVar("API Token")
    },
    body: {



        "header": {
            "schemaRef": {
                "id": "https://ns.adobe.com/wrkshp5snbxamer/schemas/26f5cf0f73238052d467b4ae0688291b1e1d2f4659226a2b",
                "contentType": "application/vnd.adobe.xed-full+json;version=1.0"
            },
            "imsOrgId": "83E53FDE5D14A9330A495E27@AdobeOrg",
            "datasetId": "6708e336b4fb312aef95c2a7",
            "source": {
                "name": "KPMG-POC-Banking-ExperienceProfile-CDP - Signup DataSet (Flow)"
            }
        },
        "body": {
            "xdmMeta": {
                "schemaRef": {
                    "id": "https://ns.adobe.com/wrkshp5snbxamer/schemas/26f5cf0f73238052d467b4ae0688291b1e1d2f4659226a2b",
                    "contentType": "application/vnd.adobe.xed-full+json;version=1.0"
                }
            },
            "xdmEntity": { "_id": "/uri-reference", "_repo": { "createDate": "2024-10-21T12:00:00-06:00", "modifyDate": "2024-10-21T12:00:00-06:00" }, "_wrkshp5snbxamer": { "post_inquiry_PAN": "Sample value", "post_inquiry_city": "Sample value", "post_inquiry_customerID": "Sample value", "post_inquiry_customer_gender": "Sample value", "post_inquiry_dob": "2018-01-12", "post_inquiry_email": "Sample value", "post_inquiry_email_ootb": { "address": "john.smith@abc.com", "label": "Sample value", "primary": false, "status": "active", "statusReason": "Sample value", "type": "unknown" }, "post_inquiry_firstname": "Sample value", "post_inquiry_hit_source": "Sample value", "post_inquiry_isApproved": false, "post_inquiry_isLoggedIn": false, "post_inquiry_lastName": "Sample value" }, "createdByBatchID": "/uri-reference", "modifiedByBatchID": "/uri-reference", "personID": "Sample value", "repositoryCreatedBy": "Sample value", "repositoryLastModifiedBy": "Sample value" }
        }


    }
});

