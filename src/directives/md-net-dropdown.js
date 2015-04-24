angular.module('mdNetservice',[])
    .directive("mdNetDropdown",['$parse','$compile',function($parse,$compile){
        return {
            restrict: 'EC',
            replace: true,
            scope: false,
            template:"<span ng-transclude></span>",
            transclude: true,
            controllerAs: 'dropdown',
            controller: ['$scope', function($scope) {

            }],
            link:function(scope, iElement, iAttrs, controller){
                var open = false;
                var jElement = $(iElement[0]);

                var label = $(jElement.find('.md-button')[0]);

                var ul = $(jElement.find('ul')[0]);

                jElement.addClass('md-net-dropdown');
                ul.hide().css('top',jElement.find(':first-child').height()+15).addClass('md-whiteframe-z2');

                var show = function(){
                    ul.show('fast');
                    open = true;
                };
                var hide = function(){
                    ul.hide('fast');
                    open = false;
                };

                label.on('click',function(event){
                    event.stopPropagation();
                    if(!open) {
                        show();
                    }else{
                        hide();
                    }
                });
                ul.find('li button').click(function(event){
                    event.stopPropagation();
                    setTimeout(hide,200);
                });
                $(document).click(function(){
                    if(open)hide();
                });

            }
        }
    }]);