angular.module('app.controllers', [])

.controller('doraemonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('melodyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
            $scope.myImages=[];
            function listDir(path){
              window.resolveLocalFileSystemURL(path,
                function (fileSystem) {
                  var reader = fileSystem.createReader();
                  reader.readEntries(
                    function (entries) {
                      for(i=0;i<entries.length;i++){
                        $scope.myImages.push({name:entries[i]['nativeURL'].split("/").pop().split(".")[0],nativeURL:entries[i]['nativeURL']});
                      }
                      //$scope.myImages = entries;
                      $scope.$apply(function(){$scope.myImages});
                    },
                    function (err) {
                      console.log(err);
                    }
                  );
                }, function (err) {
                  console.log(err);
                }
              );
            }

            document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                //example: list of www/audio/ folder in cordova/ionic app.
                listDir(cordova.file.applicationDirectory + "www/img/lol/");
            }

}])

.controller('doremonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('championCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.cname = $stateParams.cname;
}])