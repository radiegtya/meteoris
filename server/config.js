// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
    service: "facebook"
});
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "add your facebook appId here",
    secret: "add your facebook secret here"
});
