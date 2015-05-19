'use strict';

/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.directive:<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', function () {
        return {
            templateUrl: 'views/<%= name %>',
            restrict: 'E',
            controller: '<%= cameledName %>Ctrl',
            link: function postLink(scope, element, attrs) {
                // Call update on the figure when the datakey is updated
                $rootScope.$watch('<%= dataKey %>', function(newVal, oldVal) {

                    if (newVal === oldVal) {
                        return;
                    }

                    var figId = '<%= name %>-fig';

                    if (attrs.id) {
                        figId = attrs.id;
                    }

                    $rootScope[figId] = new <%= name %>Fig();

                    var selection = d3.select(element).datum(newVal);
                        
                    $rootScope[figId](selection, $rootScope);
                });
            }
        };
    });
