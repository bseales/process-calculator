$(document).ready(function() {
	function renderChart(data, labels) {
	    var ctx = document.getElementById("myChart").getContext('2d');
	    var myChart = new Chart(ctx, {
	        type: 'line',
	        data: {
	            labels: labels,
	            datasets: [{
	                label: 'This week',
	                data: data,
	            }]
	        },
	    });
	}
	$("#renderBtn").click(
	    function () {
	        data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
	        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	        renderChart(data, labels);
	    }
	);
	$("#clearInputs").on('click', function() {
		$('input[type="text"]').val('');
	})
	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}
	function firstComeFirstServed(procList) {
		var count = 0;
		var sortedArr = _.sortBy(procList, "time");
		var names = [];
		var bursts = [];
		var datasets = [];
		_.each(sortedArr, function(proc) {
			if(count == 0) {
				if(proc.time > 0) {
					names.push("empty");
					bursts.push(proc.burst);
					var dataArr = [];
					dataArr.push(proc.time);
					datasets.push({
						"label": "empty",
						"data": dataArr,
						"backgroundColor": "white"
					});
				}
			}
			names.push(proc.name);
			bursts.push(proc.burst);
			var dataArr = [];
			dataArr.push(proc.time);
			datasets.push({
				"label": proc.name,
				"data": dataArr,
				"backgroundColor": getRandomColor()
			});
			count ++;
		})

		//$("#fcfs").destroy();
		new Chart(document.getElementById("fcfs"), {
		    type: 'horizontalBar',
		    data: {
		      labels: [""],
		      datasets: datasets
		    },
		    options: {
		      maintainAspectRatio : false,
		      legend: { 
		      	display: true,
		      	onClick: (e) => e.stopPropagation()
		      },
		      title: {
		        display: true,
		        text: 'First Come First Served'
		      },
		      scales: {
		      	xAxes:[{
		      		stacked: true,
		      		ticks: {
		      			beginAtZero: true,
		      			min: 0,
		      			stepSize: 1
		      		}

		      	}],
		      	yAxes:[{stacked: true}]
		      }
		    }
		});




	}
	$("#calculateButton").on('click', function() {
		var proc1 = {};
		var proc2 = {};
		var proc3 = {};
		var proc4 = {};
		var proc5 = {};
		var procList = [];

		//need to test if inputs are actually numbers

		if($("#proc1_name").val() != "") {
			proc1.name = $("#proc1_name").val();
			proc1.time = parseFloat($("#proc1_time").val());
			proc1.burst = parseFloat($("#proc1_burst").val());
			proc1.priority = parseFloat($("#proc1_prio").val());
			procList.push(proc1);
		} 
		if($("#proc2_name").val() != "") {
			proc2.name = $("#proc2_name").val();
			proc2.time = parseFloat($("#proc2_time").val());
			proc2.burst = parseFloat($("#proc2_burst").val());
			proc2.priority = parseFloat($("#proc2_prio").val());
			procList.push(proc2);
		} 
		if($("#proc3_name").val() != "") {
			proc3.name = $("#proc3_name").val();
			proc3.time = parseFloat($("#proc3_time").val());
			proc3.burst = parseFloat($("#proc3_burst").val());
			proc3.priority = parseFloat($("#proc3_prio").val());
			procList.push(proc3);
		} 
		if($("#proc4_name").val() != "") {
			proc4.name = $("#proc4_name").val();
			proc4.time = parseFloat($("#proc4_time").val());
			proc4.burst = parseFloat($("#proc4_burst").val());
			proc4.priority = parseFloat($("#proc4_prio").val());
			procList.push(proc4);
		} 
		if($("#proc5_name").val() != "") {
			proc5.name = $("#proc5_name").val();
			proc5.time = parseFloat($("#proc5_time").val());
			proc5.burst = parseFloat($("#proc5_burst").val());
			proc5.priority = parseFloat($("#proc5_prio").val());
			procList.push(proc5);
		} 

		firstComeFirstServed(procList);

	})
})




















