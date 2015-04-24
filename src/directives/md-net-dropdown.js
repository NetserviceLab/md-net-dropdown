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
            /*
            compile: function(tElement, tAttrs,transclude){
                //console.log("tElement", tElement);
                //console.log("test", tElement[0].getElementsByTagName('ul'));

                return{
                    pre:function(scope, iElement, iAttrs, controller){

                    },
                    post:function(scope, iElement, iAttrs, controller){
                        var open = false;
                        console.log("element",iElement);
                        console.log("test", iElement.find("ul").length);
                        iElement.css({
                            'position':'relative'
                        });
                        var label = iElement.children()[0];
                        console.log("label ",label);

                        iElement.find("li").css({
                            'listStyle':'none',
                            'padding':0,
                            'margin':0
                        });

                        iElement.find("a").css({
                            'display':'block',
                            'color':'#000',
                            'textDecoration':'none',
                            'padding':'5px 8px',
                            'fontSize':'0.9em'
                        });

                        iElement.find("ul").attr('class',"md-whiteframe-z2").css({
                            'display':'inline-block',
                            'position':'absolute',
                            'top':label.offsetHeight+20,
                            'left':0,
                            'padding':0,
                            'margin':0,
                            'overflow':'hidden'
                        });

                        $(label).on('click',function(){
                            console.log("fdjfn");
                            if(open){
                                $(iElement[0]).find('ul').hide('fast');
                            }else{
                                $(iElement[0]).find('ul').show('fast');
                            }
                            open = !open;
                        });
                    }
                };
            }*/
        }
    }]);