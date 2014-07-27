controllers.controller('CalcController', ['$scope', 'DataFactory', 'CurrentUser', 'Time', function($scope, DataFactory, CurrentUser, Time){
  
  $scope.DataFactory = DataFactory;
  $scope.CurrentUser.orderedSchedule[0] = {'start': new Date(0), 'end': new Date(0)};
  $scope.CurrentUser = CurrentUser;
  $scope.Time = Time;
  
  //fatigue score
  $scope.risk = null;
  
  $scope.hour24;

  $scope.showFatigueFactor = false;

  //subtracting your start time from your end time in hours
  $scope.CurrentUser.orderedSchedule[0] = {'start': new Date(0), 'end': new Date(0)};
  //var workHours = ($scope.CurrentUser.orderedSchedule[0].end.getTime()-$scope.CurrentUser.orderedSchedule[0].start.getTime())/(1000*60*10);
  
  //adding the prev24 hours with the most recent 24hrs
  var hour48 = CurrentUser.user.last24+$scope.hour24;
  $scope.hoursInADay = new Array(25); //(0 to 24) to select for the last 24hrs

  
  /**
   * x: hours of sleep in the past 24 hours
   * y: hours of sleep in the past 48 hours
   * z: hours awake prior to working
  */
  $scope.calcRisk = function(){ 
    $scope.CurrentUser.orderedSchedule[0] = {'start': new Date(0), 'end': new Date(0)};
    var x = parseInt($scope.hour24);
    var y = parseInt(hour48);
    var z = parseInt(($scope.CurrentUser.orderedSchedule[0].end.getTime()-$scope.CurrentUser.orderedSchedule[0].start.getTime())/(1000*60*10));
	  $scope.risk = 0;
	  if (x < 5){
		  $scope.risk += 2 * Math.ceil(5 - x);
	  }
	  if (y < 12){
		  $scope.risk += 2 * Math.ceil(12 - y);
	  }
	  if (z > y){
	    $scope.risk += (z - y);
	  }
	  $scope.showFatigueFactor= true;
	  $scope.CurrentUser.user.sleepScores.push({x:CurrentUser.indexCounter, y:$scope.risk});
	  console.log("sleepscores are: "+$scope.CurrentUser.user.sleepScores);
	  CurrentUser.indexCounter++;
	  //InitChart();
  };
  
  //----------------------------------
  
  $scope.showGraph = false;
  
  //----------------------------------
  
  
  $scope.InitChart = function(){
    $scope.showGraph = true;
      
      //----------------------------------
      
      var lineData = $scope.CurrentUser.user.sleepScores;
      var vis = d3.select('#visualisation'),
        WIDTH = 300, //these must match what's on the actual tag
        HEIGHT = 300,
        MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
        },
        xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
          return d.x;
        }),
        d3.max(lineData, function(d) {
          return d.x;
        })]),
        yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
          return d.y;
        }),
        d3.max(lineData, function(d) {
          return d.y;
        })]),
        xAxis = d3.svg.axis()
          .scale(xRange)
          .tickSize(1)
          .tickSubdivide(false),
        yAxis = d3.svg.axis()
          .scale(yRange)
          .tickSize(2)
          .orient('left')
          .tickSubdivide(true);
  
    vis.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
      .call(xAxis);
     
    vis.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
      .call(yAxis);
      
      var lineFunc = d3.svg.line()
    .x(function(d) {
      return xRange(d.x);
    })
    .y(function(d) {
      return yRange(d.y);
    })
    .interpolate('linear'); //this part draws the lines straight
  
    vis.append('svg:path')
    .attr('d', lineFunc(lineData))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  };
    
    
    
}]);
