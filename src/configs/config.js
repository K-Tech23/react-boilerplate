/* eslint-disable import/default */

let config = {};

if(true){
  config = {
    API_URL: "http://apicementos.centralus.cloudapp.azure.com",
    APP_TITLE: "CAPAZYTE"
  };
}else{
  config = {
    API_URL: "https://abc.com",
    APP_TITLE: "CAPAZYTE"
  };
}

export default config;
