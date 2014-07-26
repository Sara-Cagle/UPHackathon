app.factory('Time', function(){
    var service = {};
    
    /**
     * Makes the date super pretty from the date object
    */
    service.makeDate = function(date){
        if(date instanceof Date){
            var year = date.getFullYear()-2000;
            var day = date.getDate();
            var month = date.getMonth()+1;
            return month+"/"+day+"/"+year;
        }
        console.log("it wasn't a date");
    };
    
    
    /**
     * Makes the time pretty from the date object
    */
    service.makeTime = function(date){
        if(date instanceof Date){
            var hour = date.getHours();
            var dayOrNight = "am";
            if(hour===0){
                hour = 12;
                dayOrNight = "am";
            }
            else if(hour<12){
                dayOrNight = "am";
            }
            else if(hour>12){
                dayOrNight = "pm";
                hour = hour-12;
            }
            return hour+":"+date.getMinutes()+" "+dayOrNight;
        }  
        console.log("it wasn't a date");
    };
    return service;
});

app.factory('CurrentUser', ['DataFactory', function(DataFactory){
    var service = {};
    service.user;
    
    return service;
}]);


/**
 * List of employees, their shift times (start and end times), and the hours they slept in the prev 24
*/
app.factory('DataFactory', function(){ 
    return [
        { 
            'name': 'John Smith',
            'shifts':[ //this might need to be {}
                    {'start':new Date(2014, 06, 25, 1, 30),
                    'end': new Date(2014, 06, 25, 22, 30)
                    },
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    }
            ],
            'last24': '/*sleep the prev 24hrs*/' 
        },
        { 
            'name': 'Taylor Isom',
            'shifts':[ //this might need to be {}
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    },
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    }
            ],
            'last24': '/*sleep the prev 24hrs*/' 
        },
        { 
            'name': 'Matthew Kocmoud',
            'shifts':[ //this might need to be {}
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    },
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    }
            ],
            'last24': '/*sleep the prev 24hrs*/' 
        },
        { 
            'name': 'Sara Cagle',
            'shifts':[ //this might need to be {}
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    },
                    {'start':'/*somedate*/',
                    'end': '/*someDate*/'
                    }
            ],
            'last24': '/*sleep the prev 24hrs*/' 
        }
        
    ];
});