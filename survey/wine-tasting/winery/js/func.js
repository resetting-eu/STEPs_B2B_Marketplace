
        /* ---------------------------------------------------------------*/
      function saveSVG(modal_body) {
        var svg = modal_body.children("svg");
        var mask_rect = d3.select('#' + svg.attr('id')).append('rect').attr('id', svg.attr('id').split('Δ')[0] + 'Δ' + 'mask_rect')    
              .attr('x', target_cont_x )
              .attr('y', target_cont_y)
              .attr('width', target_cont_width)
              .attr('height', target_cont_height)
              .attr('stroke', 'black')
              .attr('fill', '#fff')
              .attr('fill-opacity', 0);
        svg.attr('viewBox', `${target_cont_x} ${target_cont_y} ${target_cont_width} ${target_cont_height}`)
        svg.attr('width', target_cont_width / 5);
        svg.attr('height', target_cont_height / 5);
        svg.attr('style', "overflow: hidden;");
        svg.appendTo($('#winery_Portfolio_FlowchartΔ'+ svg.attr('id').split('Δ')[0]));
        // var thisGraph = d3.select("#wine_" + svg.attr('id').split('Δ')[0].split('_')[1] + 'Δsvg');
      }

      /* ---------------------------------------------------------------*/
      function handleSelection(multiSelect) {
        sourceID = multiSelect.id.split('_');
        tableID_body = "#" + sourceID.slice(0, sourceID.length - 2).join('_') + "_" + "SourcePlotTableΔwine_" + sourceID[sourceID.length - 1] + " tbody";
        
        var tableBody = document.querySelector(tableID_body);
          // Clear existing rows
          tableBody.innerHTML = '';

          // Get selected options
          var selectedOptions = Array.from(multiSelect.selectedOptions);

          // Create rows for each selected option
          selectedOptions.forEach(option => {
              var row = document.createElement('tr');
              var valueCell = document.createElement('td');
              valueCell.style = "border-width: inherit";
              var inputCell = document.createElement('td');
              inputCell.style = "border-width: inherit";
              var input = document.createElement('input');
              var unitSel = document.createElement('select');
              unitSel.id = sourceID.slice(0, sourceID.length - 2).join('_') + "_" + "SourcePlotTableΔwine_" + option.value + "_unit_" + sourceID[sourceID.length - 1];
              unitSel.class = "inpControl";
              var unitSel_opt = document.createElement('option');
              unitSel_opt.value = '%';
              unitSel_opt.innerHTML = '%';
              unitSel.appendChild(unitSel_opt);

              input.type = 'number';
              input.id = sourceID.slice(0, sourceID.length - 2).join('_') + "_" + "SourcePlotTableΔwine_" + option.value + "_" + sourceID[sourceID.length - 1];
              input.class  = "inpControl";
              input.style = "width: 7em"

              valueCell.textContent = option.value;
              inputCell.appendChild(input);
              inputCell.appendChild(unitSel);
              row.appendChild(valueCell);
              row.appendChild(inputCell);
              tableBody.appendChild(row);
          });

          // Show/hide the table based on selections
          var table = document.getElementById(sourceID.slice(0, sourceID.length - 2).join('_') + "_" + "SourcePlotTableΔwine_" + sourceID[sourceID.length - 1]);
          table.style.display = selectedOptions.length > 0 ? 'table' : 'none';
      }




      /* ---------------------------------------------------------------*/        
      var node_nr = 'nodes_0';
      var form_data_nr = 'form_data_0';
      var edge_nr = 'edges_0';
      var graph_container = {};
      function editFlowChart(caller) {
        document.getElementById('myModalBody').innerHTML = '';
        
        if (document.getElementById("winery_Portfolio_FlowchartΔ" + caller.id.split('Δ')[1]).innerHTML === ""){
          /**** MAIN ****/
          // warn the user when leaving
          window.onbeforeunload = function() {
            //return "Make sure to save your graph locally before leaving :-)";
          };

          /** MAIN SVG **/


      // generating new vars for each wine
      graph_nr = 'graph' + caller.id.split('Δ')[1];

      if(window[graph_nr] === undefined){
       // console.log('graph_nr: is not var')
            window[graph_nr] = new GraphCreator(caller);
          window[graph_nr].setIdCt(2);
          window[graph_nr].updateGraph();

          $("#myModal").modal();
          $('#helpbox').click(function(){ $(this).addClass('hidden'); });
      } else {
       // console.log('graph_nr: is var')
        delete window[graph_nr];
        editFlowChart(caller);
      }
      // console.log(window[graph_nr])
          } else {

            form_data_nr = 'form_data_' + caller.id.split('Δ')[1];
            node_nr = 'nodes_' + caller.id.split('Δ')[1];
            edge_nr = 'edges_' + caller.id.split('Δ')[1];

            var svg = $("#winery_Portfolio_FlowchartΔ" + caller.id.split('Δ')[1]).children("svg");
            $('#' + svg.attr('id').split('Δ')[0] + 'Δ' + 'mask_rect').remove();

            svg.removeAttr('viewBox');
            svg.attr('width', width);
            svg.attr('height', 0.85 * height);
            svg.attr('style', "overflow: visible;");

            svg.appendTo($('#myModalBody'));
            $("#myModal").modal();

            var myGraph = $('#wine_' + caller.id.split('Δ')[1] + 'Δgraph');
            myGraph.attr('x', target_cont_x )
            myGraph.attr('y', target_cont_y - 110)
            myGraph.attr('width', target_cont_width)
            myGraph.attr('height', target_cont_height - 120);

          }
console.log(window)
      }