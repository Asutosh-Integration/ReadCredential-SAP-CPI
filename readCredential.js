importClass(com.sap.gateway.ip.core.customdev.util.Message);
importClass(com.sap.it.api.securestore.SecureStoreService);
importClass(com.sap.it.api.securestore.UserCredential);
importClass(com.sap.it.api.securestore.exception.SecureStoreException);
importClass(com.sap.it.api.ITApiFactory);
importClass(java.util.HashMap);
function processData(message) {
       var map = message.getHeaders();
       var alias = map.get("alias");
       var secureStoreService = new Packages.com.sap.it.api.ITApiFactory.getService(Packages.com.sap.it.api.securestore.SecureStoreService, null);
       var userCredential = secureStoreService.getUserCredential(alias);
       var userName = userCredential.getUsername();
       var charArray = userCredential.getPassword();
       var joinArray = charArray.join();
       var splitArray = joinArray.split(",");
       var passWord = String.fromCharCode.apply(String, splitArray);
       message.setBody("Key" + " " + userName + "\n" + "Value" + " " + passWord);
     return message;
}
