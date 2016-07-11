'use strict';

// Declare app level module which depends on filters, and services, etc
angular
    .module('iceDocs', [])
    .controller('IceDocsController', function () {
        var docs = this;
        docs.selection = 'accessToken';
        docs.url = docs.selection + ".html";

        docs.selectPage = function (name) {
            docs.selection = name;
            docs.url = name + '.html';
        };

        docs.resourceList = [
            {
                name: "accessToken",
                display: 'Access Token',
                details: ["Create Access Token", "Delete AccessToken", "Get Access Token User"]
            },
            {
                name: "annotation",
                display: 'Annotation',
                details: ["Get Annotations", "Curate Annotations", "Produce Possible Annotations", "Rebuild Annotations"]
            },

            {name: "apiKey", display: "API Key", details: ["Get API Keys", "Create API Key"]},
            //{name: "bulkUpload", display: "Bulk Upload"},
            {name: "collection", display: "Collection", details: ["Get Collection Folders", "Get Collection Entries"]},
            //{name: "config", display: "Config"},
            //{name: "customField", display: "Custom Field"},
            //{name: "file", display: "File"},
            {name: "folder", display: 'Folder', details: ["Get Folders"]},
            //{name: "group", display: "Group"},
            //{name: "manuscript", display: "Manuscript"},
            //{name: "message", display: "Message"},
            {name: "partner", display: 'Partner', details: ["Get Partners", "Transfer Entries to Partner"]},
            {
                name: "part",
                display: "Part",
                details: ["Get Part", "Create Part", "Update Part", "Get Part Permissions", "Add Part Permission", "Remove Part Permission", "Get Part Experiments", "Create Part Experiment", "Delete Part Experiment", "Link Part to Another", "Remove Link Between Parts"]
            },
            //{name: "permission", display: "Permission"},
            //{name: "remoteAccess", display: "RemoteAccess"},
            //{name: "sample", display: "Sample"},
            {
                name: "search",
                display: "Search",
                details: ["Run Basic Search", "Run Advanced Search", "Rebuild search indexes", "Rebuild blast database"]
            },
            //{name: "user", display: "User", details: ['Get users', 'Get user preferences']},
            {name: "web", display: "Web", details: ['Get web entries']}
        ];
    })
    .directive("menu.details", function () {
        return {
            restrict: "AE",
            templateUrl: "../api/menu-details.html",
            controller: "MenuDetailController",
            scope: {details: '='}
        };
    })
    .controller("MenuDetailController", function ($scope) {
        $scope.showDetails = function (detail, index) {
            $('html, body').animate({
                scrollTop: $("#" + index).offset().top
            }, 200);
        }
    })
;