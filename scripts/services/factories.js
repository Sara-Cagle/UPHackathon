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
    
    /**
     *  Gets rid of old shifts 
     */
    service.updateShifts = function(employee){
        var shifts = employee.shifts;
        var now = new Date();
        for (var shift in shifts){
            console.log(now);
            console.log(shift);
            
            
        }
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
                    {'start':new Date(2014, 07, 27, 4, 44),
                    'end': new Date(2014, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 07, 30, 2, 02),
                    'end': new Date(2014, 07, 30, 9, 09)
                    },
                    {'start':new Date(2014, 08, 01, 10, 00),
                    'end': new Date(2014, 08, 01, 16, 59)
                    },
                    {'start':new Date(2014, 08, 02, 16, 01),
                    'end': new Date(2014, 08, 02, 23, 59)
                    },
                    {'start':new Date(2014, 09, 09, 20, 02),
                    'end': new Date(2014, 09, 10, 7, 06)
                    }
            ],
            'last24': 7
        },
        { 
            'name': 'Taylor Isom',
            'shifts':[ //this might need to be {}
                    {'start':new Date(2012, 07, 11, 3, 26),
                    'end': new Date(2013, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 07, 27, 4, 44),
                    'end': new Date(2014, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 07, 30, 2, 02),
                    'end': new Date(2014, 07, 30, 9, 09)
                    },
                    {'start':new Date(2014, 08, 01, 10, 00),
                    'end': new Date(2014, 08, 01, 16, 59)
                    },
                    {'start':new Date(2014, 08, 02, 16, 01),
                    'end': new Date(2014, 08, 02, 23, 59)
                    },
                    {'start':new Date(2014, 09, 09, 20, 02),
                    'end': new Date(2014, 09, 10, 7, 06)
                    }
            ],
            'last24': 5 
        },
        { 
            'name': 'Matthew Kocmoud',
            'shifts':[ //this might need to be {}
                    {'start':new Date(2014, 07, 27, 4, 44),
                    'end': new Date(2014, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 07, 30, 2, 02),
                    'end': new Date(2014, 07, 30, 9, 09)
                    },
                    {'start':new Date(2014, 08, 01, 10, 00),
                    'end': new Date(2014, 08, 01, 16, 59)
                    },
                    {'start':new Date(2014, 08, 02, 16, 01),
                    'end': new Date(2014, 08, 02, 23, 59)
                    },
                    {'start':new Date(2014, 09, 09, 20, 02),
                    'end': new Date(2014, 09, 10, 7, 06)
                    }
            ],
            'last24': 8
        },
        { 
            'name': 'Sara Cagle',
            'shifts':[ //this might need to be {}
                    {'start':new Date(2014, 07, 27, 4, 44),
                    'end': new Date(2014, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 07, 30, 2, 02),
                    'end': new Date(2014, 07, 30, 9, 09)
                    },
                    {'start':new Date(2014, 08, 01, 10, 00),
                    'end': new Date(2014, 08, 01, 16, 59)
                    },
                    {'start':new Date(2014, 08, 02, 16, 01),
                    'end': new Date(2014, 08, 02, 23, 59)
                    },
                    {'start':new Date(2014, 09, 09, 20, 02),
                    'end': new Date(2014, 09, 10, 7, 06)
                    }
            ],
            'last24': 6
        }
        
    ];
});