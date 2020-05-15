$("#polzunok").slider({
    animate: "slow",
    max: 15000,
    min: 0,
    range: true,
    values: [ 5000 , 10000 ],
    slide : function(event, ui) {    
        $("#result-polzunok").text( numberWithSpaces(ui.values[ 0 ]) + "₽" + " - " +numberWithSpaces(ui.values[ 1 ]) + "₽" );        
    }
});

$( "#result-polzunok" ).text("5 000₽ - 10 000₽");

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  