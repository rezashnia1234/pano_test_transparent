angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $rootScope, $state, $ionicModal, $timeout, $http) {

        $rootScope.formControls =
        {
            cameraServerEnabled : false,
            torchEnabled : false,
            brightness: 50,
            serverSource: 'img/Offline.jpg',
            clientIpSuffix : 1,
            localIpPrefix : '192.168.0.'
        };

        $rootScope.currentServerId = 0;
        $rootScope.smartCamServers = [];

        $rootScope.appVersion = appVersion;

        $rootScope.formattedBatteryLevel = function(batteryLevel)
        {
            if (batteryLevel == "-1")
            {
                batteryLevel = "Not Available";
            }
            else
            {
                batteryLevel += "%";

                if ($rootScope.deviceInfo.isPlugged)
                {
                    batteryLevel += " (Charging)";
                }
            }

            return batteryLevel;
        };

        $rootScope.getJsonInfo = function()
        {
            var platform = 'Unknown';
            var model = 'Unknown';
            var batteryLevel = 'Unknown';

            if ($rootScope.deviceInfo !== undefined) {
                platform = $rootScope.deviceInfo.platform;
                model = $rootScope.deviceInfo.model;
                batteryLevel = $rootScope.formattedBatteryLevel($rootScope.deviceInfo.batteryLevel);
            }

            var jsonObj = {
                version: appVersion,
                platform: platform,
                model: model,
                batteryLevel: batteryLevel,
                resolution: $rootScope.imageResolution
            };

            return JSON.stringify(jsonObj);
        };

        $rootScope.updateJsonInfo = function()
        {
            if ($rootScope.cameraServer) {
                $rootScope.cameraServer.setInfo({
                    'json_info': $rootScope.getJsonInfo()
                }, function (data) {
                    if (consoleDebug) {
                        console.log('jsonInfo Updated to ' + $rootScope.getJsonInfo());
                    }

                }, function (error) {
                    if (consoleDebug) {
                        console.log('failed to update jsonInfo: ' + error);
                    }
                });
            }
        };

        $rootScope.downloadImage = function()
        {
            if (consoleDebug)
                { console.log('Downloading Image...'); }

            var localImg = 'http://localhost:8080/live.jpg';

            $http.get(localImg).
                success(function(data, status, headers, config) {
                    if (consoleDebug)
                        console.log("Image Downloaded");

                    $timeout(function()
                    {
                        $rootScope.updateResolutionInfo();
                        // code here to use the dimensions
                    }, 1000);
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    if (consoleDebug)
                        console.log("Error @ " + localImg + " :: " + data) + " :: " + status;

                    $timeout(function()
                    {
                        $rootScope.updateResolutionInfo();
                        // code here to use the dimensions
                    }, 1000);
                });
        };

        $rootScope.updateResolutionInfo = function()
        {
            if (consoleDebug)
            { console.log('Updating Resolution...'); }

            var localImg = 'http://localhost:8080/live.jpg';

            var img = new Image();

            img.onload = function() {
                var height = img.height;
                var width = img.width;

                if (consoleDebug)
                    { console.log('Image dimensions: ' + width + 'x' + height); }

                $rootScope.imageResolution = width + 'x' + height;
                $rootScope.updateJsonInfo();

                //alert('Got Resolution :)');

                if (!$scope.$$phase) $scope.$apply();

                // free the image
                img = undefined;
            };

            img.onerror = function()
            {
                // free the image
                img = undefined;
            };

            img.src = localImg;
        };

        // live image counter (for image unicity)
        $rootScope.liveCpt = 1;
        //$rootScope.selectedFormat = 0;
        $rootScope.videoFormats = {};
        $rootScope.numRequests = 0;
        $rootScope.serverUrl = null;
        $rootScope.imageResolution = 'Offline';
        $rootScope.serverLocalPath = null;
        $rootScope.localIp = "";

        $rootScope.$watch('formControls.brightness', function(value) {
            if(value) {
                if ($rootScope.cameraServer !== null) {
                    $rootScope.cameraServer.setBrightness({'brightness': value}, function () {
                        if (consoleDebug) {
                            console.log('Brightness set to ' + value);
                        }
                    });
                }
            }
        }, true);

        $rootScope.cameraServer = null;

        try
        {
            // if possible load directly
            //$rootScope.cameraServer = ( cordova && cordova.plugins && cordova.plugins.CameraServer ) ? cordova.plugins.CameraServer : null;

            // if not, load onReady
            //if ($rootScope.cameraServer === null)
            //{
                window.ionic.Platform.ready(function() {
                    if (consoleDebug)
                        { console.log('Delayed cameraServer plugin loading'); }

                    $rootScope.cameraServer = ( cordova && cordova.plugins && cordova.plugins.CameraServer ) ? cordova.plugins.CameraServer : null;

                    // Called when controller is initalized
                    $rootScope.refreshLocalIp();

                    if (consoleDebug)
                        { console.log('IP Refreshed'); }

                    //$interval( function(){ $scope.refreshInfo(); }, 3000);
                });
            //}
        }
        catch (err)
        {
            if (consoleDebug)
            { console.log('Cannot initialize CameraServer. Running on device?'); }
        }

        $rootScope.refreshLocalIp = function() {

            if (consoleDebug)
            { console.log('Refresh Local Ip...'); }

            if ( $rootScope.cameraServer ) {
                $rootScope.cameraServer.getIPAddress(function (ip) {
                    $scope.$apply(function () {
                        $rootScope.localIp = ip;

                        var splitIp = ip.split('.');

                        if (splitIp.length == 4)
                        {
                            var ipPrefix = splitIp[0] + '.' + splitIp[1] + '.' + splitIp[2] + '.';
                            $rootScope.formControls.localIpPrefix = ipPrefix;
                        }
                        else
                        {
                            $rootScope.formControls.localIpPrefix = 'Invalid';
                        }
                    });
                });
            }
        };


        /*
        $scope.$on("$destroy", function () {
            if (consoleDebug)
            { console.log('Removing Listeners from DeviceCtrl'); }

            $window.removeEventListener('batterystatus', onBatteryStatus, false);
            $window.removeEventListener('batterylow', onBatteryStatus, false);
            $window.removeEventListener('batterycritical', onBatteryStatus, false);
        });
        */

    })

    .controller('DeviceCtrl', function ($scope) {


    })

    .controller('ServerCtrl', function ($scope, $rootScope, $ionicScrollDelegate, $timeout) {

        if (consoleDebug)
            { console.log('ServerCtrl created'); }


        $scope.panelShow = {
            ServerInfo: true,
            ServerCommands: true,
            Extras: false
        };

        $scope.$watch('panelShow.Extras', function(newValue, oldValue, scope) {
            $timeout(function(){$ionicScrollDelegate.resize();}, 500);
        });

        $scope.$watch('panelShow.ServerInfo', function(newValue, oldValue, scope) {
            $timeout(function(){$ionicScrollDelegate.resize();}, 500);
        });

        $scope.$watch('panelShow.ServerCommands', function(newValue, oldValue, scope) {
            $timeout(function(){$ionicScrollDelegate.resize();}, 500);
        });

        $scope.switchCameraServer = function (enabled)
        {
            if (enabled)
            {
                $scope.startCameraServer("root");
            }
            else
            {
                $scope.stopCameraServer();
            }
        };

        $scope.switchTorch = function (enabled)
        {
            if ( $rootScope.cameraServer ) {
                // call this API to stop web server

                $rootScope.cameraServer.setTorch({
                    'enabled' : enabled
                }, function(){

                    if (consoleDebug)
                        { console.log('setTorch success. Set to ' + enabled); }

                    $rootScope.downloadImage();

                }, function( error ){

                    if (consoleDebug)
                     { console.log('setTorch failed. Set to ' + error); }
                });

            } else {
                if (consoleDebug)
                { console.log('CameraServer SetTorch: CameraServer plugin not available/ready.'); }
            }
        };

        $scope.updateStatus = function() {

            if (consoleDebug)
                { console.log("WebCtrl::updateStatus()"); }

            //var currLocation = document.location.href;
            //document.getElementById('location').innerHTML = "document.location.href: " + document.location.href;

            if( $rootScope.cameraServer && $rootScope.formControls.cameraServerEnabled) {
                /* use this function to get status of cameraServer
                 * if server is up, it will return http://<server's ip>:port/
                 * if server is down, it will return empty string ""
                 */
                $rootScope.cameraServer.getURL(function(url){
                    $rootScope.serverUrl = url;

                    if (!$scope.$$phase) $scope.$apply();
                });

                // call this function to retrieve the local path of the www root dir
                $rootScope.cameraServer.getLocalPath(function(path){
                    $rootScope.serverLocalPath = path;

                    if (!$scope.$$phase) $scope.$apply();
                });
            }
            else
            {
                $rootScope.serverUrl = undefined;
                $rootScope.serverLocalPath = undefined;
                $rootScope.numRequests = 0;
                $rootScope.imageResolution = 'Offline';

                if (!$scope.$$phase) $scope.$apply();
            }
        };

        $scope.setFormat = function(format) {
            if (consoleDebug)
                { console.log('Trying to change Video format to ' + format); }

            $rootScope.cameraServer.setVideoFormat({'videoFormat' : format}, function(formats)
            {
                if (consoleDebug)
                    { console.log('Video format set to ' + format); }
            });
        };

        $scope.getFormats = function() {
            $rootScope.cameraServer.getVideoFormats(function(formats)
            {
                if (consoleDebug)
                    { console.log('Got video formats :)'); }

                var frm = [];
                var cId = 0;
                angular.forEach(formats, function(value, key) {
                    if (consoleDebug)
                        { console.log('Format >> ' + key + ' >> ' + value); }

                    var newFormat = {};
                    newFormat.id = cId;
                    newFormat.name = value;
                    frm.push(newFormat);
                    cId++;
                });

                $rootScope.videoFormats = frm;

                if (!$scope.$$phase) $scope.$apply();
            });
        };

        $scope.refreshInfo = function() {

            if (consoleDebug)
                { console.log('Refresh Info...'); }

            if ( $rootScope.cameraServer ) {
                $rootScope.cameraServer.getNumRequests(function (numR) {
                    $scope.$apply(function () {
                        $rootScope.numRequests = numR;
                    });
                });
            }
        };

        $scope.startServer = function( wwwroot ) {
            if (consoleDebug)
                { console.log("WebCtrl::startServer(" + wwwroot + ")"); }

            if ( $rootScope.cameraServer ) {
                // before start, check whether its up or not
                $rootScope.cameraServer.getURL(function(url){
                    if(url.length > 0) {
                        if (consoleDebug)
                            { console.log('CameraServer is already running.'); }

                        //document.getElementById('url').innerHTML = "server is up: <a href='" + url + "' target='_blank'>" + url + "</a>";
                    } else {
                        /* wwwroot is the root dir of web server, it can be absolute or relative path
                         * if a relative path is given, it will be relative to cordova assets/www/ in APK.
                         * "", by default, it will point to cordova assets/www/, it's good to use 'htdocs' for 'www/htdocs'
                         * if a absolute path is given, it will access file system.
                         * "/", set the root dir as the www root, it maybe a security issue, but very powerful to browse all dir
                         */
                        $rootScope.cameraServer.startServer({
                            'www_root' : wwwroot,
                            'port' : 8080,
                            'localhost_only' : false,
                            'json_info': $rootScope.getJsonInfo()
                        }, function( url ){
                            // if server is up, it will return the url of http://<server ip>:port/
                            // the ip is the active network connection
                            // if no wifi or no cell, "127.0.0.1" will be returned.

                            setTimeout(function()
                            {
                                $rootScope.serverUrl = url;

                                $scope.updateStatus();

                            }, 500);

                            if (consoleDebug)
                                { console.log('CameraServer Started @ ' + url); }


                        }, function( error ){
                            $rootScope.serverUrl = null;

                            if (consoleDebug)
                                { console.log('CameraServer Start failed: ' + error); }
                        });
                    }
                });
            } else {
                if (consoleDebug)
                    { console.log('CameraServer cannot Start: CameraServer plugin not available/ready.'); }
            }
        };

        $scope.stopServer = function() {
            if (consoleDebug)
                { console.log("WebCtrl::stopServer()"); }

            if ( $rootScope.cameraServer ) {
                // call this API to stop web server
                $rootScope.cameraServer.stopServer(function(){

                    $scope.updateStatus();

                    if (consoleDebug)
                        { console.log('CameraServer Stopped'); }

                },function( error ){

                    if (consoleDebug)
                        { console.log('CameraServer Stop failed: ' + error); }
                });
            } else {
                if (consoleDebug)
                    { console.log('CameraServer cannot Stop: CameraServer plugin not available/ready.'); }
            }
        };

        $scope.startCapture = function() {
            if (consoleDebug)
                { console.log("WebCtrl::startCapture()"); }

            if ( $rootScope.cameraServer ) {
                // call this API to stop web server
                $rootScope.cameraServer.startCamera(function(){
                    if (consoleDebug)
                        { console.log('Capture Started'); }

                    $scope.getFormats();

                },function( error ){
                    if (consoleDebug)
                        { console.log('CameraServer StartCapture failed: ' + error); }
                });
            } else {
                if (consoleDebug)
                    { console.log('CameraServer StartCapture: CameraServer plugin not available/ready.'); }
            }
        };

        $scope.stopCapture = function() {
            if (consoleDebug)
                { console.log("WebCtrl::stopCapture()"); }

            if ( $rootScope.cameraServer ) {
                // call this API to stop web server
                $rootScope.cameraServer.stopCamera(function(){
                    if (consoleDebug)
                        { console.log('Capture Stopped'); }
                },function( error ){
                    if (consoleDebug)
                        { console.log('CameraServer StopCapture failed: ' + error); }
                });
            } else {
                if (consoleDebug)
                    { console.log('CameraServer StopCapture: CameraServer plugin not available/ready.'); }
            }
        };

        $scope.startCameraServer = function(wwwroot) {
            $scope.startServer(wwwroot);
            $scope.startCapture();

            $timeout(function()
            {
                // refresh the resolution information by grabbing a picture
                $rootScope.downloadImage();
            }, 500);
        };

        $scope.stopCameraServer = function() {
            $scope.stopServer();
            $scope.stopCapture();
        };
    })

    .controller('ClientCtrl', function ($scope, $rootScope, $timeout, $stateParams, $ionicModal) {
        if (consoleDebug)
            { console.log('ClientCtrl created'); }

        // Used by the template to select which source we control


        if ($stateParams.serverId !== undefined) {
            $rootScope.currentServerId = $stateParams.serverId;
        }

        $scope.clientForm = {
            refreshEnabled : true,
            clientSource: 'img/Offline.jpg',
            clientSourceFullscreen: 'img/Offline.jpg',
            smartCam : $rootScope.smartCamServers[$rootScope.currentServerId],
            isFullScreen : false
        };

        console.log('Received SmartCam with Ip: ' + $scope.clientForm.smartCam.ipAddress);

        $scope.switchClientRefresh = function (enabled)
        {
            if (enabled)
            {
                $scope.getImage();
            }
            else
            {
                // stops automatically
            }
        };

        $scope.refreshPreview = function () {

            /*console.log("refreshPreview");*/

            if ($scope.clientForm.refreshEnabled) {
                $timeout(function () {

                    $scope.$apply(function () {
                        $scope.getImage();
                    });

                }, 40);
            }
        };

        $scope.getImage = function() {
            $rootScope.liveCpt++;
            //$rootScope.formControls.clientSource = "http://" + $rootScope.formControls.localIpPrefix + $rootScope.formControls.clientIpSuffix + ":8080/live.jpg?r=" + $rootScope.liveCpt;

            var newSrc = "http://" + $scope.clientForm.smartCam.ipAddress + ":8080/live.jpg?r=" + $rootScope.liveCpt;

            if ($scope.clientForm.isFullScreen)
            {
                $scope.clientForm.clientSourceFullscreen = newSrc;
            }
            else {
                $scope.clientForm.clientSource = newSrc;
            }
        };

        $ionicModal.fromTemplateUrl('image-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.$on('modal.shown', function() {
            if (window.StatusBar) {
                StatusBar.hide();
            }

            $scope.clientForm.isFullScreen = true;
            $scope.refreshPreview();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            $scope.clientForm.isFullScreen = false;

            // refresh all sources after closing the modal (for multi-view)
            $scope.refreshPreview();

            if (window.StatusBar) {
                StatusBar.show();
            }
        });

    })

    .controller('LookupCtrl', function ($scope, $rootScope, $http) {
        if (consoleDebug) {
            console.log('LookupCtrl created');
        }

        $scope.pingServer = function(targetIp)
        {
            $http.get('http://' + targetIp + ':8080/smartcam.json').
                success(function(data, status, headers, config) {
                    if (consoleDebug) {
                        console.log("Found Smartcam @ " + targetIp + " :)");
                    }

                    try
                    {
                        //var jsonObj = JSON.parse(data);

                        // pre-populated with version, platform, resolution
                        var smartCam = data;

                        // we add the ip address
                        data.ipAddress = targetIp;

                        $scope.smartCamServers.push(smartCam);

                        if (!$scope.$$phase) $scope.$apply();
                    }
                    catch (err)
                    {
                        console.log("Couldn't parse result from  Smartcam @ " + targetIp + ". Received: " + JSON.stringify(data) + ". Error: " + err);
                    }

                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    // console.log("Error @ " + targetIp + " :)");
                });
        };

        // Reset the SmartCameras List
        $rootScope.smartCamServers = [];

        for(var i=1; i<255; i++)
        {
            var destIp = $rootScope.formControls.localIpPrefix + i;

            if (consoleDebug)
                { console.log("Contacting " + destIp + "..."); }

            $scope.pingServer(destIp);
        }
    })

    ;
