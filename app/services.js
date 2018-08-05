/**
 * Created by madongfang on 2016/9/1.
 */

var restfulApiService = angular.module("restfulApiService", ["ngResource"]);

restfulApiService.config(["$resourceProvider",
    function ($resourceProvider)
    {
        $resourceProvider.defaults.actions = {
            get: {method: 'GET', withCredentials: true},
            create: {method: 'POST', withCredentials: true},
            exec: {method: 'POST', withCredentials: true},
            query: {method: 'GET', isArray: true, withCredentials: true},
            update: {method: 'PUT', withCredentials: true},
            delete: {method: 'DELETE', withCredentials: true}
        };
    }
]);

restfulApiService.factory("ApiHardwareCode", ["$resource",
    function ($resource) {
        return $resource(testServerAddr + "api/hardwareCodes/:hardwareCodeId", {hardwareCodeId:"@id"}, null);
    }
]);

restfulApiService.factory("ApiAppleID", ["$resource",
    function ($resource) {
        return $resource(testServerAddr + "api/appleIDs/:appleIDId", {appleIDId:"@id"}, null);
    }
]);

restfulApiService.factory("ApiPhoneNumber", ["$resource",
    function ($resource) {
        return $resource(testServerAddr + "api/phoneNumbers/:phoneNumberId", {phoneNumberId:"@id"}, null);
    }
]);
