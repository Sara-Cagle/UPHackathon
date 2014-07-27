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
     * Function used for sorting the dates of the shifts to
     * make sure shifts are printed in order (because they may not be in order
     * on the server)
     * 
    */
    service.getSortingDate = function(theShift){
        var theDate = theShift.start;
        if( theDate instanceof Date){
            var d = new Date(); //grabs today's time
            var nowTime = d.getTime();
            var thenTime = theDate.getTime();
            //we should check before this function to make sure the 
            //dates are all valid and not expired. use taylor's functions
            //smallest times should go first
            
            return parseInt(thenTime-nowTime); 
        }
        else{
            console.log("it wasn't a date");
        }
        
    }
    
    
    
    return service;
});


//----------------------------------------------------

app.factory('CurrentUser', ['DataFactory', function(DataFactory){
    var service = {};
    service.blankUser = {'name': 'Holder Person',
            'password': '000000',
            'shifts':[ 
                    {'start':new Date(0),
                    'end': new Date(0)
                    }
            ],
            'last24': 0,
            'sleepScores':[
                ]
        };
    service.user = service.blankUser;
    
    service.orderedSchedule = [{'start': new Date(0),
                                'end': new Date(0)}]; //the schedule after it's been ordered
    
    service.schedule = service.user.shifts;
    
     /**
     * Remove expired dates
    */
    service.removeExpiredShifts = function(){
        var now = new Date();
        for (var indexOfShift in service.user.shifts){ //checks each shift
            var start = service.user.shifts[indexOfShift].start; //date object
            if(start instanceof Date){
                if(parseInt(start.getTime())-(1000*60*90)-parseInt(now.getTime())<0){
                    //futureTime-90minute prep period - current time
                    service.user.shifts.splice(indexOfShift,1); //removes the shift
                }
            }
            else{
                alert("start and end werent dates");
            }
        }
    }
    
    service.indexCounter = service.user.sleepScores.length;
    
    
    return service;
}]);


//--------------------------------------------------


/**
 * List of employees, their shift times (start and end times), and the hours they slept in the prev 24
*/
app.factory('DataFactory', function(){ 
    return [
        { 
            'name': 'John Smith',
            'password': 'abc123',
            'shifts':[ //this might need to be {}
                    {'start':new Date(2014, 07, 27, 4, 44),
                    'end': new Date(2014, 07, 27, 12, 21)
                    },
                    {'start':new Date(2014, 09, 09, 20, 02),
                    'end': new Date(2014, 09, 10, 7, 06)
                    },
                    {'start':new Date(2014, 07, 30, 2, 02),
                    'end': new Date(2014, 07, 30, 9, 09)
                    },
                    {'start':new Date(2014, 08, 01, 10, 00),
                    'end': new Date(2014, 08, 01, 16, 59)
                    },
                    {'start':new Date(2014, 08, 02, 16, 01),
                    'end': new Date(2014, 08, 02, 23, 59)
                    }
            ],
            'last24': 7,
            'sleepScores':[{x:0,y:1},{x:1,y:0},{x:2,y:5},{x:3, y:2},{x:4,y:2},{x:5,y:0},{x:6,y:1},{x:7,y:3}
                ]
        },
        { 
            'name': 'Taylor Isom',
            'password': 'abc123',
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
            'last24': 5,
            'sleepScores':[{x:0,y:1},{x:1,y:1},{x:2,y:5},{x:3, y:2},{x:4,y:7},{x:5,y:6},{x:6,y:1},{x:7,y:3}
                ],
            'alarms' : ["first alarm", "second alarm", "last alarm"],
            'messages': [
                        {   'to' : 'you',
                            'from' : 'me',
                            'message': 'hello world'
                            
                        }
                        ]
        },
        { 
            'name': 'Matthew Kocmoud',
            'password': 'abc123',
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
            'last24': 8,
            'sleepScores':[{x:0,y:2},{x:1,y:1},{x:2,y:5},{x:3, y:0},{x:4,y:0},{x:5,y:6},{x:6,y:1},{x:7,y:0}
                ]
        },
        { 
            'name': 'Sara Cagle',
            'password': 'abc123',
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
            'last24': 6,
            'sleepScores':[{x:0,y:2},{x:1,y:1},{x:2,y:5},{x:3, y:0},{x:4,y:0},{x:5,y:6},{x:6,y:1},{x:7,y:0}
                ]
        }
        
    ];
});