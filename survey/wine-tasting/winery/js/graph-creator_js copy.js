    var docEl = document.documentElement,
      bodyEl = document.getElementById('myModalBody');

    // var width = docEl.clientWidth || bodyEl.clientWidth,
    //   height = docEl.clientHeight || bodyEl.clientHeight;

// get the width and height from document.getElementsByClassName("gm-style-iw-c")[0].offsetWidth and document.getElementsByClassName("gm-style-iw-c")[0].offsetHeight
    // var width = document.getElementsByClassName("gm-style-iw-c")[0].offsetWidth;
    // var height = document.getElementsByClassName("gm-style-iw-c")[0].offsetHeight;

    // alert("width: " + width + " height: " + height);
    // console.log("width: " + width + " height: " + height);
    // debugger;
  
    // var width = docEl.clientWidth  * (1732 / 1858);
    // var height = docEl.clientHeight * (844.05 / 1080);

    var width = window.innerWidth * (1747 / 1920);//window.innerWidth;
    var height = window.innerHeight * (753 / 919);//window.innerHeight;


    var xLoc = width / 28,//2 - 25,
        yLoc = 40;//80;

        
    var target_cont_x = xLoc - 1.5 * (((window.innerWidth * (1747 / 1920)) * 50) / 1858);
    var target_cont_y = yLoc + (((window.innerWidth * (1747 / 1920)) * 50) / 1858) + 10;
    var target_cont_width = 33.5 * (((window.innerWidth * (1747 / 1920)) * 50) / 1858);//width - (xLoc * 1);
    var target_cont_height = 3 * (((window.innerWidth * (1747 / 1920)) * 50) / 1858);

    var form_data_0 = [{
      winery_Reception_circle_0: {}
    }, {
      winery_Destemming_circle_0: {}
    }, {
      winery_Sorting_circle_0: {}
    }, {
      winery_Crushing_circle_0: {}
    }, {
      winery_Maceration_circle_0: {}
    }, {
      winery_Dejuicing_circle_0: {}
    }, {
      winery_Pressing_circle_0: {}
    }, {
      winery_JuiceMustAdjustments_circle_0: {}
    }, {
      winery_Clarification_circle_0: {}
    }, {
      winery_AlcoholicFermentation_circle_0: {}
    }, {
      winery_MalolacticFermentation_circle_0: {}
    }, {
      winery_WineAdjustments_circle_0: {}
    }, {
      winery_StabilizationClarification_circle_0: {}
    }, {
      winery_Ageing_circle_0: {}
    }, {
      winery_BottlingPackaging_circle_0: {}
    }];

    var nodes_0 = [{
      title: "Grape: reception & transport",
      id: "winery_Reception_circle_0",
      x: xLoc,
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Destemming",
      id: "winery_Destemming_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 1),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Cleaning and Sorting the Grapes",
      id: "winery_Sorting_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 2),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Crushing/ Freeze extraction",
      id: "winery_Crushing_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 3),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Maceration",
      id: "winery_Maceration_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 4),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Dejuicing",
      id: "winery_Dejuicing_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 5),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Pressing",
      id: "winery_Pressing_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 6),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Adjustments: Juice & Must",
      id: "winery_JuiceMustAdjustments_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 7),
      y: yLoc ,
      eventTypeId: null
    }, {
      title: "Clarification of Juice",
      id: "winery_Clarification_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 8),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Alcoholic Fermentation",
      id: "winery_AlcoholicFermentation_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 9),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Malolactic Fermentation",
      id: "winery_MalolacticFermentation_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 10),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Wine Adjustments",
      id: "winery_WineAdjustments_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 11),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Stabilization & Clarification",
      id: "winery_StabilizationClarification_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 12),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Ageing",
      id: "winery_Ageing_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 13),
      y: yLoc,
      eventTypeId: null
    }, {
      title: "Bottling Packaging",
      id: "winery_BottlingPackaging_circle_0",
      x: xLoc + (((((window.innerWidth * (1747 / 1920)) * 50) / 1858) * 2 + 4) * 14),
      y: yLoc,
      eventTypeId: null
    }];

    var edges_0 = []

    document.onload = (function(d3, saveAs, Blob, undefined) {
    "use strict";
    })(window.d3, window.saveAs, window.Blob);

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };