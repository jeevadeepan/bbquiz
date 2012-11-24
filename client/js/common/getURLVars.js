define([], function(){
	var getVars = {
			getVar: function(varToReturn){
				return getUrlVars()[varToReturn];
			}
			
			
	}
    return getVars;
	
	function getUrlVars(){
		var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
	}
})