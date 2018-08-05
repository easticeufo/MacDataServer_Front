/**
 * Created by madongfang on 2016/9/1.
 */

appControllers = angular.module("appControllers", ["ui.router"]);

appControllers.controller("MainController", ["$scope", "$state",
    function ($scope, $state) {
    }
]);

appControllers.controller("ImportController", ["$scope", "Upload",
    function ($scope, Upload)
    {
        $scope.importFile = function (file, fileType) {
            if (file)
            {
                var uploadData = {};
                uploadData[fileType+"File"] = file;
                Upload.upload({
                    url: testServerAddr + "api/import/"+fileType,
                    data: uploadData
                }).then(function (response) {
                        alert("导入成功");
                    }, function (response) {
                        alert(response.data.returnMsg);
                    }
                );
            }
        };
    }
]);

appControllers.controller("HardwareCodesController", ["$scope", "ApiHardwareCode",
    function ($scope, ApiHardwareCode)
    {
        $scope.hardwareCodes = ApiHardwareCode.query(
            function (response) {},
            function (response)
            {
                alert(response.data.returnMsg);
            }
        );
    }
]);

appControllers.controller("AppleIDsController", ["$scope", "ApiAppleID",
    function ($scope, ApiAppleID)
    {
        $scope.appleIDs = ApiAppleID.query(
            function (response) {},
            function (response)
            {
                alert(response.data.returnMsg);
            }
        );
    }
]);

appControllers.controller("PhoneNumbersController", ["$scope", "ApiPhoneNumber",
    function ($scope, ApiPhoneNumber)
    {
        $scope.phoneNumbers = ApiPhoneNumber.query(
            function (response) {},
            function (response)
            {
                alert(response.data.returnMsg);
            }
        );
    }
]);
