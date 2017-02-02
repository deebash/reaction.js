/*
 * Reaction.js
 * http://reactionjs.org
 *
 * https://github.com/deebash/reaction.js
 *
 * Date: 2017-02-02
 */
 
 
 (function(window){

    'use strict';
    function reaction_library(){
        var Reaction = {};
        Reaction.ifResize = function(id, callback){		
			document.getElementById(id).addEventListener("onmousemove", function(){
				console.log("Hello World");
			});
        }
		
		
		//ifCollide - to detect if two div's overlap each other
		
		Reaction.ifCollide = function(id, target, callback){			
			var idLeft = parseInt(document.getElementById(id).offsetLeft);
			var idRight = parseInt(document.getElementById(id).offsetLeft+ document.getElementById(id).offsetWidth);
			var idTop = parseInt(document.getElementById(id).offsetTop);
			var idBottom = parseInt(document.getElementById(id).offsetTop) + parseInt(document.getElementById(id).offsetHeight);
			var targetLeft = parseInt(document.getElementById(target).offsetLeft);
			var targetRight = parseInt(document.getElementById(target).offsetLeft+ document.getElementById(target).offsetWidth);
			var targetTop = parseInt(document.getElementById(target).offsetTop);
			var targetBottom = parseInt(document.getElementById(target).offsetTop) + parseInt(document.getElementById(target).offsetHeight);	  
			var overlap = !(idRight < targetLeft || idLeft > targetRight || idBottom < targetTop || idTop > targetBottom);			
			return overlap;			
		}
		
		
		
		
		
        return Reaction;
    }
    if(typeof(Reaction) === 'undefined'){
        window.Reaction = reaction_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);
