

function whoAmI(){
    this.getIP = function (req, res) {
        
        var obby = {};
        obby['ipaddress'] = req.get('X-Forwarded-For');
        obby.language = cleanLang(req.get('Accept-Language'));
        obby.software = cleanSoftware(req.get('User-Agent'));
        
        
        res.end(JSON.stringify(obby));  
    };
    
    function cleanSoftware (soft) {
        var cutDex = soft.indexOf('(') + 1;
        var endDex = soft.indexOf(')');
        
        return soft.slice(cutDex, endDex);
    }
    
    function cleanLang (lang) {
        var endDex = lang.indexOf(',');
        
        return lang.slice(0, endDex);
    }
}

module.exports = whoAmI;