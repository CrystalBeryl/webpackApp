var fs = require('fs');
fs.readFile('script.sql','utf-8',function (err,data) {
    if(!err){
        var tables = data.split('\r\n');
       // console.log("tables:"+tables);

        var filters = tables.filter(function (table) {
         //   console.log("table:"+table);
            return table.indexOf('INSERT')
        });
       // console.log("filters:"+filters);
        var fil = filters.map(function (f) {
            var fArray = f.split(',');
            var choose = [' [IC_GROSS_WT]'];
            var i = 0;
            for(var j=0;j<choose.length;j++){
                i = fArray.indexOf(' [IC_GROSS_WT]');
                console.log(i);
                //console.log("choosed:"+`${choose[0]}`)
                fArray.splice(i,1);
                var baseIndex = fArray.indexOf(' [CUSTOM_HINT]');
                console.log("baseIndex:"+baseIndex);
                fArray.splice(baseIndex+i+1,1);
            }


            return fArray.join();
            /*var fArray = f.split(',');
            var i = fArray.indexOf(' [IC_GROSS_WT]');
            fArray.splice(i,1);
            var baseIndex = fArray.indexOf(' [CUSTOM_HINT]');
            fArray.splice(baseIndex+i,1);
            return fArray.join();*/
        })
        fs.writeFile('./output.sql',fil.join('\r\n'))
    }
});