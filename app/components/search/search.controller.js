(function () {
    angular.module('com.starwars.app.search')
        .controller('Search', SearchController);
    SearchController.$inject = ['searchService', '$state', '$scope', '$rootScope', 'settingFactory', '$cookies'];

    function SearchController(searchService, $state, $scope, $rootScope, settingFactory, $cookies) {
        var vm = this;
        
        this.search = search;
        this.populationComparator = populationComparator;
        this.getStyle = getStyle;

        function search () {
            var savedLimit = settingFactory.getSavedLimit ();
            if (settingFactory.getLimit($cookies.get('name')) == -1) {
                // unlimited hits allowed
            } else {
                var now = (new Date()).getTime ();
                if ((now - savedLimit.timestamp) > 60000) { // 1 min
                    settingFactory.saveLimit({'count':0, 'timestamp':now});
                } else if (savedLimit.count > settingFactory.getLimit($cookies.get('name'))){
                    vm.limitError = true;
                    vm.result = [];
                    return;
                }
            }

            searchService.search (vm.queryText).then (function(result) {
                if (result) {
                    vm.result = result.results;
                    var count = savedLimit.count;
                    vm.limitError = false;
                    settingFactory.saveLimit({'count':count+1, 'timestamp':(new Date()).getTime ()});
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