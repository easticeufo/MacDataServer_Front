/**
 * Created by madongfang on 2016/9/1.
 */

//testServerAddr = "http://localhost:8082/"; // 开发测试时使用
//testServerAddr = "http://ec2-13-209-75-83.ap-northeast-2.compute.amazonaws.com/MacDataServer/"; // 开发测试时使用
testServerAddr = ""; // 发布时使用

var eastApp = angular.module("eastApp", ["ui.router", "restfulApiService", "appControllers", "appFilters",
    "ui.bootstrap", "ngFileUpload"]);

eastApp.config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "templates/main.html",
                controller: "MainController"
            })
            .state("main.hardwareCodes", {
                url: "/hardwareCodes",
                templateUrl: "templates/hardwareCodes.html",
                controller: "HardwareCodesController"
            })
            .state("main.appleIDs", {
                url: "/appleIDs",
                templateUrl: "templates/appleIDs.html",
                controller: "AppleIDsController"
            })
            .state("main.phoneNumbers", {
                url: "/phoneNumbers",
                templateUrl: "templates/phoneNumbers.html",
                controller: "PhoneNumbersController"
            })
            .state("main.import", {
                url: "/import",
                templateUrl: "templates/import.html",
                controller: "ImportController"
            });
    }
]);
