(function () {
    angular.module('com.starwars.app.search')
        .controller('Search', SearchController);
    SearchController.$inject = ['searchService', '$state', '$scope', '$rootScope'];

    function SearchController(searchService, $state, $scope, $rootScope) {
        var vm = this;
        
        this.search = search;
        this.populationComparator = populationComparator;
        this.getStyle = getStyle;

        function search () {
            searchService.search (vm.queryText).then (function(result) {
                if (result) {
                    vm.result = result.results;
                }
            }, function (response) {
                // do nothing
            });
        }

        function populationComparator(v1, v2) {
            return (parseInt(v1.value) < parseInt(v2.value)) ? -1 : 1;
        };

        function getStyle (font) {
            return {
                'fontSize': parseInt(font) + 'px'
            }
        }
    }
})();