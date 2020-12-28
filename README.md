# ReadCredential-SAP-CPI
This package provide API which can be used to fetch username/password maintained in "Security Material" of SAP CPI tenant. This feature can be used to use security artifacts internally as well. 

# Instruction
1. Import the package "Read_Credential.zip" into your SAP CPI tenant.
2. Deploy the iFlow "readCredentialsAPI".
3. Send HTTP GET request to the endpoint specified in the "Manage Integration Content" section of SAP CPI monitoring tab using POSTMAN or any client.
4. While sending the HTTP GET request, please add header with key named "alias" and value as the alias name specified in "Manage Security Material" section.
5. we will get username/password in the body of the HTTP response.

# Purpose
Material in this blog/project is provided for information and technical features demonstration purposes only. Described techniques and published code snippets, even in case they make sense from technical perspective, shall be a subject for assessment and evaluation from legal perspective to avoid violation of software license agreements, should the one attempt making use of them and embed them or their variations into the application deployed on SAP Cloud Platform or any other development that utilises services provided by SAP Cloud Platform. Ultimately, we are good citizens and our aim is not to break the platform or rules of its usage, but to explore it and build smart applications on top of it.

When using approaches such as those described in the blog/project, please be cautious regarding how techniques are utilised and applied – they can be of great help, but equally to this, inaccurate usage of some of these techniques may cause severe stability and performance issues at runtime. Hence, before using this kind of techniques in real life applications and especially in production environments, ensure their usage is well considered, designed, implemented and well tested.
