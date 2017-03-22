// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var consoleDebug = true;
var appVersion = '1.2.0';

angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'perfectParallax', 'ngCordova', 'ui.bootstrap', 'ngIOS9UIWebViewPatch'])

    .run(function ($ionicPlatform, $rootScope, $cordovaDevice) {

        $rootScope.deviceInfo = {};

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            if (navigator.noAutolock) {
                navigator.noAutolock.disableAutolock();

                if (consoleDebug)
                    console.log("Auto-Lock disabled...");
            }

            if (window !== undefined && window.device !== undefined) {
                try {
                    $rootScope.deviceInfo.device = $cordovaDevice.getDevice();
                    $rootScope.deviceInfo.cordova = $cordovaDevice.getCordova();
                    $rootScope.deviceInfo.model = $cordovaDevice.getModel();
                    $rootScope.deviceInfo.platform = $cordovaDevice.getPlatform();
                    $rootScope.deviceInfo.uuid = $cordovaDevice.getUUID();
                    $rootScope.deviceInfo.version = $cordovaDevice.getVersion();
                    $rootScope.deviceInfo.batteryLevel = -1;
                    $rootScope.deviceInfo.isPlugged = false;
                    $rootScope.deviceInfo.isAndroid = $rootScope.deviceInfo.platform.indexOf("Android") === 0;
                } catch (er) {
                    alert('Error in app.Run() ' + er);
                }

                var onBatteryStatus = function (event) {
                    if (consoleDebug)
                    {
                        console.log('Got Battery Status');
                    }

                    $rootScope.deviceInfo.batteryLevel = event.level;       // (0 - 100)
                    $rootScope.deviceInfo.isPlugged = event.isPlugged;      // bool

                    $rootScope.updateJsonInfo();

                    //if (!$scope.$$phase) $scope.$apply();
                };

                window.addEventListener('batterystatus', onBatteryStatus, false);
                window.addEventListener('batterylow', onBatteryStatus, false);
                window.addEventListener('batterycritical', onBatteryStatus, false);
            }
         });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

        /*$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);*/
        /*$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|content):/);*/
        /*$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);*/

        /* ImgSanitizationWhilelist must not block data:image !!! */

        $ionicConfigProvider.views.maxCache(0);


        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.deviceinfo', {
                url: "/deviceinfo",
                views: {
                    'menuContent': {
                        templateUrl: "templates/deviceinfo.html",
                        controller: 'DeviceCtrl'
                    }
                }
            })

            .state('app.settings', {
                url: "/settings",
                views: {
                    'menuContent': {
                        templateUrl: "templates/settings.html"
                    }
                }
            })

            .state('app.webserver', {
                url: "/webserver",
                views: {
                    'menuContent': {
                        templateUrl: "templates/webserver.html",
                        controller: 'ServerCtrl'
                    }
                }
            })

            .state('app.webclient', {
                url: "/webclient/:serverId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/webclient.html",
                        controller: 'ClientCtrl'
                    }
                }
            })

            .state('app.lookup', {
                url: "/lookup",
                views: {
                    'menuContent': {
                        templateUrl: "templates/lookup.html",
                        controller: 'LookupCtrl'
                    }
                }
            })

            ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/webserver');

    });

