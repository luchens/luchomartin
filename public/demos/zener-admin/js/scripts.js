$(document).ready(function(){
  var randomScalingFactor = function() {
    return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
  };

  var icons = new Skycons({"color": "#FFD700"}),
  list  = [
    "clear-day"
  ],
  i;
  for(i = list.length; i--; )
  icons.set(list[i], list[i]);
  icons.play();

  var icons = new Skycons({"color": "#f5f5f5"}),
  list  = [
    "clear-night", "partly-cloudy-day",
    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
    "fog"
  ],
  i;
  for(i = list.length; i--; )
  icons.set(list[i], list[i]);
  icons.play();



  /*
    CONECTIVIDAD FUNCIONALIDAD
  */
  /*$("#sec-1 #btn-configurar").on("click", function(e){
    e.preventDefault();
    //changeConexionLocal(2);
    $('#nueva-conexion-modal').on('show.bs.modal', function (e) {
    })
  });*/
  $("#sec-1 #btn-nueva").on("click", function(e){
    e.preventDefault();

    if($("#sec-1 #switch-wifi").is(':checked') == false){
      $('#mensaje-modal').modal('show');
    } else {
      $('#nueva-conexion-modal').modal('show');
    }
  });
  $("#sec-1 #switch-wifi").on("change", function(e){
    if($(this).is(':checked') == false){
      $("#sec-1 .btn-nueva").removeClass("disabled").addClass("disabled");
    } else {
      $("#sec-1 .btn-nueva").removeClass("disabled");
    }
  });
  $("#sec-1 #btn-configurar").on("click", function(e){
    e.preventDefault();
    changeConexionLocal(2);
  });
  $(".btn-modificar").on("click", function(e){
    e.preventDefault();
    $('#modificar-modal').modal('show');
  });

  $("#nueva-conexion-modal .conexiones .conexion").each(function() {
    $(this).find("#btn-siguiente").on("click", function(e){
      e.preventDefault();
      alert("siguiente");
    });
  });

  $("#sec-2 #btn-aceptar").on("click", function(e){
    e.preventDefault();
    $("#error-modal").modal("show");
  });
  $("#sec-2 #btn-cancelar").on("click", function(e){
    e.preventDefault();
    changeConexionLocal(1);
  });
  $("#sec-2 #switch-dhcp").on("change", function(e){
    if($(this).is(':checked') == false){
      $("#sec-2 form input").each(function() {
        $(this).prop("disabled", true);
      });
    } else {
      $("#sec-2 form input").each(function() {
        $(this).prop("disabled", false);
      });
    }
  });

  $("#sec-2 .conexiones conexion a").each(function() {
    $(this).find("a .form").troggle();
  });

  if($('#ip-1').lenght){ $('#ip-1').inputmask({ mask: "999.999.999.999", alias: "ip", greedy: false }); }
  if($('#ip-2').lenght){ $('#ip-2').inputmask({ mask: "999.999.999.999", alias: "ip", greedy: false }); }
  if($('#ip-3').lenght){ $('#ip-3').inputmask({ mask: "999.999.999.999", alias: "ip", greedy: false }); }
  if($('#ip-4').lenght){ $('#ip-4').inputmask({ mask: "999.999.999.999", alias: "ip", greedy: false }); }
  if($('#ip-5').lenght){ $('#ip-5').inputmask({ mask: "999.999.999.999", alias: "ip", greedy: false }); }

  var config = {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
      datasets: [{
        label: 'Demanda',
        fill: false,
        borderColor: "rgb(253, 0, 2)",
        backgroundColor: "rgb(253, 0, 2)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Autoconsumo',
        fill: false,
        borderColor: "rgb(64, 116, 193)",
        backgroundColor: "rgb(64, 116, 193)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'DESARROLLO DÍA'
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            callback: function(dataLabel, index) {
              // Hide the label of every 2nd dataset. return null to hide the grid line too
              return index % 1 === 0 ? dataLabel : '';
            }
          }
        }],
        yAxes: [{
          display: true,
          beginAtZero: true
        }]
      }
    }
  };

  var config1 = {
    type: 'line',
    data: {
      labels: ['','','','','','',''],
      datasets: [{
        label: 'Hora',
        fill: false,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(0, 0, 0)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Kwh',
        fill: false,
        borderColor: "rgb(112, 173, 71)",
        backgroundColor: "rgb(112, 173, 71)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'APORTE A LA RED'
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            callback: function(dataLabel, index) {
              // Hide the label of every 2nd dataset. return null to hide the grid line too
              return index % 1 === 0 ? dataLabel : '';
            }
          }
        }],
        yAxes: [{
          display: true,
          beginAtZero: true
        }]
      }
    }
  };

  var config2 = {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
      datasets: [{
        label: 'Tension',
        fill: false,
        borderColor: "rgb(68, 114, 196)",
        backgroundColor: "rgb(68, 114, 196)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Corriente',
        fill: false,
        borderColor: "rgb(237, 125, 49)",
        backgroundColor: "rgb(237, 125, 49)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Potencia',
        fill: false,
        borderColor: "rgb(165, 165, 165)",
        backgroundColor: "rgb(165, 165, 165)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Energía activa',
        fill: false,
        borderColor: "rgb(255, 192, 0)",
        backgroundColor: "rgb(255, 192, 0)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'DATOS DÍA'
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            callback: function(dataLabel, index) {
              // Hide the label of every 2nd dataset. return null to hide the grid line too
              return index % 1 === 0 ? dataLabel : '';
            }
          }
        }],
        yAxes: [{
          display: true,
          beginAtZero: true
        }]
      }
    }
  };

	var config4 = {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
		datasets: [{
			label: 'Energía total diaria KWh',
			backgroundColor: "rgb(74, 120, 199)",
			borderColor: "rgb(74, 120, 199)",
			borderWidth: 0,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			]
		}, {
			label: 'Máxima potencia diaria KW',
			backgroundColor: "rgb(255, 255, 255)",
			borderColor: "rgb(255, 255, 255)",
			borderWidth: 0,
			data: [
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
        randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			]
		}]
	};

  var config5 = {
			labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			datasets: [{
				label: 'Demanda',
				backgroundColor: "rgb(175, 171, 171)",
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Excedente',
				backgroundColor: "rgb(255, 192, 0)",
				data: [
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]
		};

  window.onload = function() {
    if($("#canvas-1").length){
      var ctx1 = document.getElementById('canvas-1').getContext('2d');
      window.myLine = new Chart(ctx1, config);
    }

    if($("#canvas-2").length){
      var ctx2 = document.getElementById('canvas-2').getContext('2d');
      window.myLine = new Chart(ctx2, config1);
    }

    if($("#canvas-3").length){
      var ctx3 = document.getElementById('canvas-3').getContext('2d');
      window.myLine = new Chart(ctx3, config2);
    }

    if($("#canvas-4").length){
      var ctx4 = document.getElementById('canvas-4').getContext('2d');
      window.myLine = new Chart(ctx4, {
				type: 'bar',
				data: config4,
				options: {
					responsive: true,
					legend: {
						position: 'bottom',
					},
					title: {
						display: true,
						text: ''
					}
				}
			});
    }

    if($("#canvas-5").length){
      var ctx5 = document.getElementById('canvas-5').getContext('2d');
			window.myBar = new Chart(ctx5, {
				type: 'bar',
				data: config5,
				options: {
					title: {
						display: true,
						text: 'AHORRO ENERGÉTICO'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					legend: {
						position: 'bottom',
					},
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});
    }
  };

  /*if($('#accordion').lenght){
    $('#accordion').collapse({
      toggle: true
    });
  }

  var items = $("main .content-items .item .inner");
  $(items).on("click",function(e){
    e.preventDefault();
    if($(this).parent().hasClass("active")){
      $(this).parent().removeClass("active");
    } else {
      $(items).each(function() {
        if($(this).parent().hasClass("active")){
          $(this).parent().removeClass("active");
        }
      });
      $(this).parent().addClass("active");
    }
  });*/
});

function changeConexionLocal(opt){
  $(".sec").each(function(i) {
    $(this).hide();
  });

  switch (opt) {
  case 1:
    $("#sec-1").show();
  break;
  case 2:
    $("#sec-2").show();
  break;
  case 3:
    $("#sec-3").show();
  break;
  case 4:
    $("#sec-4").show();
  break;
  default:

  break;
  }
}

function showPassword(id) {
  var x = document.getElementById("password-field-"+id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showPasswordAlt(id) {
  var x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
