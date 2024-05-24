      /* ---------------------------------------------------------------*/     
    // define graphcreator object
    var GraphCreator = function(call_El) {


      var wine_nr = call_El.id.split('_')[call_El.id.split('_').length -1];
      if (!call_El.id.includes("winery_Portfolio_remΔ")) {
      delete window['form_data_' + wine_nr];
      delete window['nodes_' + wine_nr];
      delete window['edges_' + wine_nr];
      }
      // generating new vars for each wine
      form_data_nr = 'form_data_' + wine_nr;
      node_nr = 'nodes_' + wine_nr;
      edge_nr = 'edges_' + wine_nr;

      if(window[form_data_nr] === undefined){
       // console.log('form_data_nr: is not var')
            window[form_data_nr] = structuredClone(form_data_0);
                  for (const form_El of window[form_data_nr]) {
                    var newform_ElID = Object.keys(form_El)[0].split('_').slice(0, -1).join('_') + 'Δwine_' + wine_nr
                    // This method ensures that the renamed property behaves identically to the original one.
                    Object.defineProperty(form_El , newform_ElID,
                        Object.getOwnPropertyDescriptor(form_El , Object.keys(form_El)[0]));
                    delete form_El [Object.keys(form_El)[0]];

                    }
      } else {console.log('form_data_nr: is var')}
     // console.log(window[form_data_nr])

      if(window[node_nr] === undefined){
       // console.log('node_nr: is not var')
            window[node_nr] = structuredClone(nodes_0);
                  for (const node of window[node_nr]) {
                    var newNodeID = node.id.split('_').slice(0, -1).join('_') + 'Δwine_' + wine_nr
                    node.id = newNodeID;
                    }
      } else {console.log('node_nr: is var')}
     // console.log(window[node_nr])

      if(window[edge_nr] === undefined){
       // console.log('edge_nr: is not var')
            window[edge_nr] = structuredClone(edges_0);
                  for (const edge of window[edge_nr]) {
                    newSourceName = 'nodes_' + wine_nr;
                    dictSourceIndex =  Number(edge.source.id.split('_')[edge.source.id.split('_').length - 1]);
                    edge.source = window[newSourceName][dictSourceIndex];
                    
                    newTargetName = 'nodes_' + wine_nr;
                    dictTargetIndex =  Number(edge.target.id.split('_')[edge.target.id.split('_').length - 1]);
                    edge.target = window[newTargetName][dictTargetIndex];
                    }
      } else {console.log('edge_nr: is var')}
     // console.log(window[edge_nr])

      graph_container['wine_' + wine_nr] = {form_data_nr: window[form_data_nr], node_nr: window[node_nr], edge_nr: window[edge_nr]};

     var svg = d3.select("#myModalBody").append("svg")
      .attr("id", "wine_" + node_nr.split('_')[1] + "Δsvg")
      .attr("style", "overflow: visible;")
      .attr("width", width)
      .attr("height", 0.85 * height);


      var thisGraph = this;
     // console.log('thisGraph:');
     // console.log(thisGraph);

      thisGraph.idct = 0;

      thisGraph.form_data = window[form_data_nr] || [];
      thisGraph.nodes = window[node_nr] || [];
      thisGraph.edges = window[edge_nr] || [];

      thisGraph.state = {
        selectedNode: null,
        selectedEdge: null,
        mouseDownNode: null,
        mouseDownLink: null,
        justDragged: false,
        justScaleTransGraph: false,
        lastKeyDown: -1,
        shiftNodeDrag: false,
        selectedText: null
      };

      thisGraph.svg = svg;
      // add a foreignObject container
      thisGraph.svgF = svg.append("foreignObject")
        .classed(thisGraph.consts.foreignObjectClass, true);
      var svgF = thisGraph.svgF
        .attr('id','wine_' + node_nr.split('_')[1] + 'Δwinery_formDiv_cont')
        .attr('x', xLoc - 50)
        .attr('y', yLoc + 290)
        .attr('width', target_cont_width)
        .attr('height', '44vh');

      thisGraph.svgCG = svg.append("g")
        .classed(thisGraph.consts.containerClass, true);
        var target_cont = thisGraph.svgCG;
        target_cont.attr({"id": 'wine_' + node_nr.split('_')[1] + 'Δtarget_cont'})

      target_cont.append('rect')
        .attr('id', 'wine_' + node_nr.split('_')[1] + 'Δtarget_cont_rect')    
        .attr('x', target_cont_x )
        .attr('y', target_cont_y)
        .attr('width', target_cont_width)
        .attr('height', target_cont_height)
        .attr('stroke', 'black')
        .attr('fill', '#fff');

      // define arrow markers for graph links
      var defs = target_cont.append('defs');
      defs.append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', "32")
        .attr('markerWidth', 3.5)
        .attr('markerHeight', 3.5)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5');

      //define arrow markers for leading arrow
      defs.append('marker')
        .attr('id', 'mark-end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 7)
        .attr('markerWidth', 3.5)
        .attr('markerHeight', 3.5)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5');

      // thisGraph.svgG = target_cont.append("g")
      thisGraph.svgG = svg.append("g")
        .classed(thisGraph.consts.graphClass, true);
      var svgG = thisGraph.svgG
        .attr({"id": 'wine_' + node_nr.split('_')[1] + 'Δgraph'})
        .attr('x', target_cont_x )
        .attr('y', target_cont_y - 110)
        .attr('width', target_cont_width)
        .attr('height', target_cont_height - 120);

      // displayed when dragging between nodes
      thisGraph.dragLine = target_cont.append('path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0')
        .style('marker-end', 'url(#mark-end-arrow)');

      // svg nodes and edges
      thisGraph.paths = target_cont.append("g").selectAll("g");
      thisGraph.target_circles = target_cont.append("g").selectAll("g");
      thisGraph.circles = svgG.append("g").selectAll("g");

      thisGraph.drag = d3.behavior.drag()
        .origin(function(d) {
          // d = selected circle. The drag origin is the origin of the circle
          return {
            x: d.x,
            y: d.y
          };
        })
        .on("drag", function(args) {
          thisGraph.state.justDragged = true;
          thisGraph.dragmove.call(thisGraph, args);
        })
        .on("dragend", function(args) {
          // args = circle that was dragged
        });

      // listen for key events
      d3.select(window).on("keydown", function() {
          thisGraph.svgKeyDown.call(thisGraph);
        })
        .on("keyup", function() {
          thisGraph.svgKeyUp.call(thisGraph);
        });
      svg.on("mousedown", function(d) {
        thisGraph.svgMouseDown.call(thisGraph, d);
      });
      svg.on("mouseup", function(d) {
        thisGraph.svgMouseUp.call(thisGraph, d);
      });

      // help icon click
      d3.select("#help").on("click", function(){
        $('#helpbox').removeClass('hidden');
      });

      // handle download data
      d3.select("#download-input").on("click", function() {
        var saveEdges = [];
        thisGraph.edges.forEach(function(val, i) {
          saveEdges.push({
            source: val.source.id,
            target: val.target.id
          });
        });
        var blob = new Blob([window.JSON.stringify({
          "form_data": thisGraph.form_data,       
          "nodes": thisGraph.nodes,
          "edges": saveEdges
        })], {
          type: "text/plain;charset=utf-8"
        });
        document.getElementById('cont_1').innerHTML = blob;
        saveAs(blob, "mydag.json");
      });

      // handle uploaded data
      d3.select("#upload-input").on("click", function() {
        document.getElementById("hidden-file-upload").click();
      });
      d3.select("#hidden-file-upload").on("change", function() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
          var uploadFile = this.files[0];
          var filereader = new window.FileReader();

          filereader.onload = function() {
            var txtRes = filereader.result;
            // TODO better error handling
            try {
              var jsonObj = JSON.parse(txtRes);
              thisGraph.deleteGraph(true);
              thisGraph.nodes = jsonObj.nodes;
              thisGraph.setIdCt(jsonObj.nodes.length + 1);
              var newEdges = jsonObj.edges;
              newEdges.forEach(function(e, i) {
                newEdges[i] = {
                  source: thisGraph.nodes.filter(function(n) {
                    return n.id === e.source;
                  })[0],
                  target: thisGraph.nodes.filter(function(n) {
                    return n.id === e.target;
                  })[0]
                };
              });
              thisGraph.edges = newEdges;
              thisGraph.updateGraph();
            } catch (err) {
              window.alert("Error parsing uploaded file\nerror message: " + err.message);
              return;
            }
          };
          filereader.readAsText(uploadFile);

        } else {
          alert("Your browser won't var you save this graph -- try upgrading your browser to IE 10+ or Chrome or Firefox.");
        }

      });

      // handle delete graph
      d3.select("#delete-graph").on("click", function() {
        thisGraph.deleteGraph(false);
      });
    };

    GraphCreator.prototype.setIdCt = function(idct) {
      this.idct = idct;
    };

    GraphCreator.prototype.consts = {
      selectedClass: "selected",
      connectClass: "connect-node",
      circleGClass: "conceptG",
      graphClass: 'wine_Entry_graph',
      containerClass: "target_cont",
      foreignObjectClass: "winery_formDiv_cont",
      activeEditId: "active-editing",
      BACKSPACE_KEY: 8,
      DELETE_KEY: 46,
      ENTER_KEY: 13,
      nodeRadius: 50
    };

    /* PROTOTYPE FUNCTIONS */
    GraphCreator.prototype.dragmove = function(d) {
      var thisGraph = this;

      if (thisGraph.state.shiftNodeDrag) {
        // thisGraph.dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(thisGraph.svgG.node())[0] + ',' + d3.mouse(this.svgG.node())[1]);
      } else {
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        thisGraph.updateGraph();
      }
    };

    GraphCreator.prototype.deleteGraph = function(skipPrompt) {
      var thisGraph = this,
        doDelete = true;
      if (!skipPrompt) {
        doDelete = window.confirm("Press OK to delete this graph");
      }
      if (doDelete) {
        thisGraph.form_data = [];        
        thisGraph.nodes = [];
        thisGraph.edges = [];
        thisGraph.updateGraph();
      }
    };

    /* insert svg line breaks: taken from http://stackoverflow.com/questions/13241475/how-do-i-include-newlines-in-labels-in-d3-charts */
    GraphCreator.prototype.insertTitleLinebreaks = function(gEl, title) {
      var words = title.split(/\s+/g),
        nwords = words.length;
      var el = gEl.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "-" + (nwords - 1) * 7.5);

      for (var i = 0; i < words.length; i++) {
        var tspan = el.append('tspan').text(words[i]);
        if (i > 0)
          tspan.attr('x', 0).attr('dy', '15');
      }
    };

    // remove edges associated with a node
    GraphCreator.prototype.spliceLinksForNode = function(node) {
      var thisGraph = this,
        toSplice = thisGraph.edges.filter(function(l) {
          return (l.source === node || l.target === node);
        });
      toSplice.map(function(l) {
        thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
      });
    };

    GraphCreator.prototype.replaceSelectEdge = function(d3Path, edgeData) {
      var thisGraph = this;
      d3Path.classed(thisGraph.consts.selectedClass, true);
      if (thisGraph.state.selectedEdge) {
        thisGraph.removeSelectFromEdge();
      }
      thisGraph.state.selectedEdge = edgeData;
    };

    GraphCreator.prototype.replaceSelectNode = function(d3Node, nodeData) {
      // A circle node has been selected.

      var thisGraph = this;
      d3Node.classed(this.consts.selectedClass, true);
      if (thisGraph.state.selectedNode) {
        thisGraph.removeSelectFromNode();
      }
      thisGraph.state.selectedNode = nodeData;
    };

    GraphCreator.prototype.removeSelectFromNode = function() {
      // A circle node has been deselected.

      var thisGraph = this;
      thisGraph.circles.filter(function(cd) {
        return cd.id === thisGraph.state.selectedNode.id;
      }).classed(thisGraph.consts.selectedClass, false);
      thisGraph.state.selectedNode = null;

      d3.selectAll("div#inspector").remove();

    };

    GraphCreator.prototype.removeSelectFromEdge = function() {
      var thisGraph = this;
      thisGraph.paths.filter(function(cd) {
        return cd === thisGraph.state.selectedEdge;
      }).classed(thisGraph.consts.selectedClass, false);
      thisGraph.state.selectedEdge = null;
    };

    GraphCreator.prototype.pathMouseDown = function(d3path, d) {
      var thisGraph = this,
        state = thisGraph.state;
      d3.event.stopPropagation();
      state.mouseDownLink = d;

      if (state.selectedNode) {
        thisGraph.removeSelectFromNode();
      }

      var prevEdge = state.selectedEdge;
      if (!prevEdge || prevEdge !== d) {
        thisGraph.replaceSelectEdge(d3path, d);
      } else {
        thisGraph.removeSelectFromEdge();
      }
    };

    // mousedown on node
    GraphCreator.prototype.circleMouseDown = function(d3node, d) {
      var thisGraph = this,
        state = thisGraph.state;
      d3.event.stopPropagation();
      state.mouseDownNode = d;

      if (d3.event.shiftKey) {
          // Automatically create node when they shift + drag?
        state.shiftNodeDrag = d3.event.shiftKey;
        // reposition dragged directed edge
        thisGraph.dragLine.classed('hidden', false)
          .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
        return;
      }
    };

    // mouseup on nodes
    GraphCreator.prototype.circleMouseUp = function(d3node, d) {
     // console.log('circle mouse up');
      var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
      // reset the states
      state.shiftNodeDrag = false;
      d3node.classed(consts.connectClass, false);

      var mouseDownNode = state.mouseDownNode;

      if (!mouseDownNode) return;

      thisGraph.dragLine.classed("hidden", true);

      if (mouseDownNode !== d) {
        // we're in a different node: create new edge for mousedown edge and add to graph
        var newEdge = {
          source: mouseDownNode,
          target: d
        };
        var filtRes = thisGraph.paths.filter(function(d) {
          if (d.source === newEdge.target && d.target === newEdge.source) {
            thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
          }
          return d.source === newEdge.source && d.target === newEdge.target;
        });
        if (!filtRes[0].length) {
          thisGraph.edges.push(newEdge);
          thisGraph.updateGraph();
        }
      } else {
        // we're in the same node
        if (state.justDragged) {
          // dragged, not clicked
          state.justDragged = false;
        } else {
          // clicked, not dragged
          if (d3.event.shiftKey) {
            // shift-clicked node: edit text content
          //   var d3txt = thisGraph.changeTextOfNode(d3node, d);
          //   var txtNode = d3txt.node();
          //   thisGraph.selectElementContents(txtNode);
          //   txtNode.focus();

          } else {
            if (state.selectedEdge) {
              thisGraph.removeSelectFromEdge();
            }
            var prevNode = state.selectedNode;

            if (!prevNode || prevNode.id !== d.id) {
              thisGraph.replaceSelectNode(d3node, d);
            } else {
              thisGraph.removeSelectFromNode();
            }
          }
        }
      }
      state.mouseDownNode = null;
     // console.log('circle mouse up1');
      return;
    }; // end of circles mouseup

    // mousedown on main svg
    GraphCreator.prototype.svgMouseDown = function() {
      this.state.graphMouseDown = false;//true;
    };

    // mouseup on main svg
    GraphCreator.prototype.svgMouseUp = function() {
      var thisGraph = this,
        state = thisGraph.state;
      if (state.justScaleTransGraph) {
        // dragged not clicked
        state.justScaleTransGraph = false;
      } else if (state.graphMouseDown && d3.event.shiftKey) {
        // clicked not dragged from svg
        var xycoords = d3.mouse(thisGraph.svgG.node()),
          d = {
            id: thisGraph.idct++,
            title: "",
            x: xycoords[0],
            y: xycoords[1],
            eventTypeId: null
          };
        thisGraph.nodes.push(d);
        thisGraph.updateGraph();
      } else if (state.shiftNodeDrag) {
        // dragged from node
        state.shiftNodeDrag = false;
        thisGraph.dragLine.classed("hidden", true);
      }
      state.graphMouseDown = false;
    };

    // keydown on main svg
    GraphCreator.prototype.svgKeyDown = function() {
      var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
      // make sure repeated key presses don't register for each keydown
      if (state.lastKeyDown !== -1) return;

      state.lastKeyDown = d3.event.keyCode;
      var selectedNode = state.selectedNode,
        selectedEdge = state.selectedEdge;

      switch (d3.event.keyCode) {
        case consts.BACKSPACE_KEY:
        case consts.DELETE_KEY:
          d3.event.preventDefault();
          if (selectedNode) {
           // console.log("thisGraph", thisGraph)
            // thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
            thisGraph.spliceLinksForNode(selectedNode);
            state.selectedNode = null;
            thisGraph.updateGraph();
          } else 
          if (selectedEdge) {
            thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
            state.selectedEdge = null;
            thisGraph.updateGraph();
          }
          break;
      }
    };

    GraphCreator.prototype.svgKeyUp = function() {
      this.state.lastKeyDown = -1;
    };

    // call to propagate changes to graph
    GraphCreator.prototype.updateGraph = function() {

      var thisGraph = this,
        consts = thisGraph.consts,
        state = thisGraph.state;

      thisGraph.paths = thisGraph.paths.data(thisGraph.edges, function(d) {
        return String(d.source.id) + "+" + String(d.target.id);
      });
      var paths = thisGraph.paths;
      // update existing paths
      paths.style('marker-end', 'url(#end-arrow)')
        .classed(consts.selectedClass, function(d) {
          return d === state.selectedEdge;
        })
        .attr("d", function(d) {
          return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        });

      // add new paths
      paths.enter()
        .append("path")
        .style('marker-end', 'url(#end-arrow)')
        .classed("link", true)
        .attr("d", function(d) {
          return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        })
        .on("mousedown", function(d) {
          thisGraph.pathMouseDown.call(thisGraph, d3.select(this), d);
        })
        .on("mouseup", function(d) {
          state.mouseDownLink = null;
        });

      // remove old links
      paths.exit().remove();

      // update existing nodes
      thisGraph.circles = thisGraph.circles.data(thisGraph.nodes, function(d) {
        return d.id;
      });
      thisGraph.circles.attr("transform", function(d) {

        var svg_cont_bbox = Array.from(thisGraph.svg[0])[0].getBoundingClientRect();//document.getElementById('wine_' + node_nr.split('_')[1] + 'Δsvg').getBoundingClientRect()
        if (d.x > svg_cont_bbox.left && d.x < svg_cont_bbox.right && d.y > svg_cont_bbox.top && d.y < svg_cont_bbox.bottom){

        return "translate(" + d.x + "," + d.y + ")";
        } else {

        var circle_bbox = this.getBoundingClientRect();

        if (d.x < svg_cont_bbox.left) { d.x = svg_cont_bbox.left; }
          else if (d.x > svg_cont_bbox.right  + circle_bbox.width / 2) { d.x = svg_cont_bbox.right  + circle_bbox.width / 2; }
          if (d.y < svg_cont_bbox.top - circle_bbox.height / 2) { d.y = svg_cont_bbox.top - circle_bbox.height / 2; }
          else if (d.y > svg_cont_bbox.bottom + circle_bbox.height / 2) { d.y = svg_cont_bbox.bottom + circle_bbox.height / 2; }

        return "translate(" + d.x + "," + d.y + ")";
        }
      });

      // add new nodes
      var newGs = thisGraph.circles.enter() 
        .append("g")
        .attr({"id": function(d){ return generateUUID(); }});

      var x_or = null;
      var y_or = null;

      newGs.classed(consts.circleGClass, true)
        .attr("transform", function(d) {
          var circle_bbox = this.getBoundingClientRect();

          var target_cont_bbox = Array.from(thisGraph.svgG[0])[0].firstChild.getBoundingClientRect();
          
          if (d.x - (circle_bbox.width / 5.55) > target_cont_x && d.x + (circle_bbox.width * 0.78) < (target_cont_x  + target_cont_width) && d.y + (circle_bbox.height / 3.3) > target_cont_y && d.y + (circle_bbox.height * 1.25) < (target_cont_y + target_cont_height)) {
            Array.from(thisGraph.svgG[0])[0].getElementsByTagName('g')[1].appendChild(this);
            }
            return "translate(" + d.x + "," + d.y + ")";
        })
        .on("mouseover", function(d) {
          if (state.shiftNodeDrag) {
            d3.select(this).classed(consts.connectClass, true);
          }
        })
        .on("mouseout", function(d) {
          d3.select(this).classed(consts.connectClass, false);
        })
        .on("mousedown", function(d) {
         // console.log('on mouse down d:');
         // console.log(d);

          thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
          x_or = d.x;
          y_or = d.y;
        })
        .on("mouseup", function(d) {
         // console.log(d.x, d.y)
          
          var circle_bbox = this.getBoundingClientRect();

          var target_cont_bbox = Array.from(Array.from(thisGraph.svgCG[0]))[0].firstChild.getBoundingClientRect(); // "x", "y", "width", "height", "top", "right", "bottom","left"

          if (d.x - (circle_bbox.width / 5.55) > target_cont_bbox.left && d.x + (circle_bbox.width * 0.78) < target_cont_bbox.right && d.y + (circle_bbox.height / 3.3) > target_cont_bbox.top && d.y + (circle_bbox.height * 1.25) < target_cont_bbox.bottom) {
            Array.from(Array.from(thisGraph.svgCG[0]))[0].getElementsByTagName('g')[1].append(this);
            thisGraph.circleMouseUp.call(thisGraph, d3.select(this), d);

              if (this.getAttribute("class").includes('selected')) {
                for (const node of Array.from(thisGraph.svg[0])[0].getElementsByClassName('conceptG')) {//document.getElementsByClassName('conceptG')) {
                    if (node.id != this.id) {
                      // console.log(node.getElementsByTagName("path")[0])
                      d3.select(node.getElementsByTagName("path")[0]).attr("style", "visibility: hidden")
                    }
                }
                d3.select(this.getElementsByTagName("path")[0]).attr("style", "visibility: visible");

               // console.log(d);

                var splitID = d.id.split('_');

                if (!document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_'))) {
                  var activityClone = document.getElementById(splitID.slice(0, splitID.length - 2).join('_')).cloneNode(true);

                  iterateChildren(activityClone, 'wine_' + splitID[splitID.length - 1]);
                  
                  Array.from(thisGraph.svgF[0])[0].appendChild(activityClone);

                  activityClone.style.display = 'contents';

                  //hide all other elements
                  for (const child of Array.from(thisGraph.svgF[0])[0].children) {//document.getElementById('wine_' + node_nr.split('_')[1] + 'Δwinery_formDiv_cont').children) {
                    if (child.style.display === 'contents' && child != activityClone)
                      child.style.display = 'none';
                  }
                } else {

                  var dDiv = document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_'));
                  for (const child of Array.from(thisGraph.svgF[0])[0].children) {//document.getElementById('wine_' + node_nr.split('_')[1] + 'Δwinery_formDiv_cont').children) {

                  //hide all other elements
                    if (child.style.display === 'contents' && child != dDiv)
                      child.style.display = 'none';
                  }
                  dDiv.style.display = 'contents';
                }
                } else {
                  
                    d3.select(this.getElementsByTagName("path")[0]).attr("style", "visibility: hidden");
                    var splitID = d.id.split('_');
                    if (document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_'))) {
                      document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_')).style.display = 'none';
                    }
                  }

          } else {
            var splitID = d.id.split('_');
            if (document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_'))) {
              var text = "You will loose any information entered for this process!!!\nPlease click 'OK' if you want to remove this process.\nIf you don't want to remove this process, please click 'Cancel'.";
              if (confirm(text) === true) {
                thisGraph.spliceLinksForNode(d);
                thisGraph.updateGraph();
                // document.getElementById('wine_' + node_nr.split('_')[1] + 'Δgraph').getElementsByTagName('g')[0].append(this);
                Array.from(thisGraph.svgG[0])[0].getElementsByTagName('g')[0].append(this);
                for (const node of nodes_0) {                        
                  if (node.id.split('_').slice(0, -1).join('_') === d.id.split('Δ')[0]) {
                   // console.log("thisGraph", thisGraph)
                    d3.select(this).attr( "transform", "translate(" + node.x + "," + node.y +")");
                    d.x = node.x;
                    d.y = node.y;
                    
                    if (this.getAttribute("class").includes('selected')) {
                      thisGraph.removeSelectFromNode()
                      d3.select(this.getElementsByTagName("path")[0]).attr("style", "visibility: hidden")
                      }
                  }
                }
                document.getElementById('wine_' + splitID[splitID.length - 1] + 'Δ' + splitID.slice(0, splitID.length - 2).join('_')).remove()

                // Iterate over the form_data list
                for (let i = 0; i < thisGraph.form_data.length; i++) {
                  // Iterate over the keys in the dictionary
                  for (let key in thisGraph.form_data[i]) {
                    // Check if the key is the one you want to update
                    if (key === d.id) {
                      // Update the value
                      thisGraph.form_data[i][key] = {};
                    }
                  }
                }
               // console.log(thisGraph.form_data)
                } else {

                for (const node of nodes_0) {
                  if (node.id.split('_').slice(0, -1).join('_') === d.id.split('Δ')[0]) {
                   // console.log("thisGraph", thisGraph)
                    d3.select(this).attr( "transform", "translate(" + x_or + "," + y_or +")");
                    d.x = x_or;
                    d.y = y_or;
                    
                    x_or = null;
                    y_or = null;

                  }
                }
              }
              } else {
                  thisGraph.spliceLinksForNode(d);
                  thisGraph.updateGraph();
                  // document.getElementsByClassName('wine_' + node_nr.split('_')[1] + 'Δgraph')[0].getElementsByTagName('g')[0].append(this);
                  Array.from(thisGraph.svgG[0])[0].getElementsByTagName('g')[0].append(this);
                  for (const node of nodes_0) {
                    
                    if (node.id.split('_').slice(0, -1).join('_') === d.id.split('Δ')[0]) {
                     // console.log("thisGraph", thisGraph)
                      d3.select(this).attr( "transform", "translate(" + node.x + "," + node.y +")");
                      d.x = node.x;
                      d.y = node.y;
                      
                      if (this.getAttribute("class").includes('selected')) {
                        thisGraph.removeSelectFromNode()
                        d3.select(this.getElementsByTagName("path")[0]).attr("style", "visibility: hidden")
                        }
                    }
                  }
                }
          }
        }).call(thisGraph.drag);

      newGs.append("circle")
        .attr("r", String(consts.nodeRadius));

      newGs.each(function(d) {
        thisGraph.insertTitleLinebreaks(d3.select(this), d.title);
      });


      newGs.append('svg:path')
        .attr('d', 'M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z')
        .attr("transform", "translate(30,-60) scale(0.06)")
        .attr('fill', '#0a54e9')
        .attr('style', 'visibility: hidden');
      // remove old nodes
      thisGraph.circles.exit().remove();
    };

    GraphCreator.prototype.zoomed = function() {
      this.state.justScaleTransGraph = true;
      d3.select("." + this.consts.graphClass)
        .attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
    };

    GraphCreator.prototype.updateWindow = function(svg) {
      var docEl = document.documentElement,
        bodyEl = document.getElementById('myModalBody');//document.getElementsByTagName('body')[0];
      // var x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
      // var y = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
      var x = docEl.clientWidth || bodyEl.clientWidth;
      var y = docEl.clientHeight || bodyEl.clientHeight;      
      svg.attr("width", x).attr("height", y);
    };


//handle the remove row for the wine portfolio for svgs
function svgRemRow(wineID,element, nr) {
  var div = document.getElementById('winery_Portfolio_FlowchartΔwine_' + nr);
  var elements = div.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var attributes = elements[i].attributes;
    for (const attr of attributes) {
      if (attr.value.includes('Δ')) {
        attr.value = attr.value.replace(new RegExp(wineID, 'g'), 'wine_' + nr);
        // console.log(attr.name, ':', attr.value)
      }
    }
  }

  // update the graph dicts
  for (const form_El of window['graphwine_' + String(Number(nr) + 1)].form_data) {
    var newform_ElID = Object.keys(form_El)[0].split('_').slice(0, -1).join('_') + 'Δwine_' + nr;
   // console.log('SAAPERI', newform_ElID)
    // This method ensures that the renamed property behaves identically to the original one.
    Object.defineProperty(form_El , newform_ElID,
        Object.getOwnPropertyDescriptor(form_El , Object.keys(form_El)[0]));
    delete form_El [Object.keys(form_El)[0]];

    }

  for (const node of window['graphwine_' + String(Number(nr) + 1)].nodes) {
    var newNodeID = node.id.split('_').slice(0, -1).join('_') + 'Δwine_' + nr;
    node.id = newNodeID;
    }

  // Since the edges itselves are calling the nodes variables, the edges get updated when we update the nodes

window['graphwine_' + nr] = window['graphwine_' + String(Number(nr) + 1)];

}

function elementSummary (parentEl_ID) {

var div = document.getElementById(parentEl_ID);
var elements = div.getElementsByTagName('*');
var dict = {};

for (var i = 0; i < elements.length; i++) {
  var tagName = elements[i].tagName.toLowerCase();
  if (elements[i].tagName.toLowerCase() === 'input') {
    tagName += ':' + elements[i].type;
  }
  if (elements[i].tagName.toLowerCase() === 'select' && elements[i].getAttribute('multiple') != null) {    
    
    tagName += ':multiple';
  }
  if (dict[tagName]) {
    dict[tagName]++;
  } else {
    dict[tagName] = 1;
  }
}
console.log(`below the summary of ${parentEl_ID}:`)
console.log(dict);

// button: 119
// optgroup: 188

// input:checkbox : 20
// input:number: 953
// input:radio: 180
// input:text: 515

// textarea: 105

// select: 1043
// select:multiple: 1

}

// elementSummary ('full')


function formData_updater (element) {
if (!element.id.includes('winery_Portfolio')) {

  var tagName = element.tagName.toLowerCase()

  var baseStrSplit = element.closest('.tabcontent').id.split('Δ');
  var dictMatchStr = baseStrSplit[1] + '_circleΔ' + baseStrSplit[0];

  // for (const process of window['form_data_' + element.id.split('Δ')[0].split('_')[1]]) {
  for (const process of window['graphwine_' + element.id.split('Δ')[0].split('_')[1]].form_data) {
    if (Object.keys(process)[0] === dictMatchStr){

      if (element.tagName.toLowerCase() === 'select' && element.getAttribute('multiple') != null) {    
        tagName += ':multiple' + 'θ' + element.name;

        // Get selected options: an array of the values of the selected options
        var selectedOptions = Array.from(element.selectedOptions).map(option => option.value);

        // set the array to the dictionary
        process[Object.keys(process)[0]][tagName] = selectedOptions;
        
       // console.log(window['graphwine_' + element.id.split('Δ')[0].split('_')[1]].form_data)
        return;
      }

      if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea' || (element.tagName.toLowerCase() === 'select' && element.getAttribute('multiple') == null)) {
        tagName += ':' + element.type;

        if (element.type === 'radio' || element.type === 'checkbox') {
          tagName += 'θ' + element.name;

          var nodeList = document.querySelectorAll(`input[name="${element.name}"]:checked`);
          var idArray = Array.from(nodeList, node => node.id);
          
          // set the value in the dictionary
          process[Object.keys(process)[0]][tagName] = idArray;

         // console.log(window['graphwine_' + element.id.split('Δ')[0].split('_')[1]].form_data)
          return;
        }

        if (element.type === 'number' || element.type === 'text' || element.type === 'month' || element.tagName.toLowerCase() === 'textarea' || element.tagName.toLowerCase() === 'select') {
          tagName += 'θ' + element.id;
          
          // set the value in the dictionary
          process[Object.keys(process)[0]][tagName] = element.value;

         // console.log(window['graphwine_' + element.id.split('Δ')[0].split('_')[1]].form_data)
          return;
        }
      }
    }
}
}
}


// add event listener to get users input on html on all changable elements
const winery_Delegate = (selector) => (cb) => (e) => e.target.matches(selector) && cb(e);

const inputText_winery_Delegate = winery_Delegate('input[type=text]');
document.addEventListener('change', inputText_winery_Delegate((e) => {e.target.setAttribute('value',e.target.value); formData_updater(e.target);}));

const inputNumber_winery_Delegate = winery_Delegate('input[type=number]');
document.addEventListener('change', inputNumber_winery_Delegate((e) => {e.target.setAttribute('value',e.target.value); formData_updater(e.target);}));

const inputMonth_winery_Delegate = winery_Delegate('input[type=month]');
document.addEventListener('change', inputMonth_winery_Delegate((e) => {e.target.setAttribute('value',e.target.value); formData_updater(e.target);}));

const inputRadio_winery_Delegate = winery_Delegate('input[type=radio]');
document.addEventListener('change', inputRadio_winery_Delegate((e) => {
  formData_updater(e.target);
  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
   // console.log(rad === e.target)
    rad.checked = (rad === e.target);
          rad.setAttribute('checked', rad === e.target);
  }
}));

const inputCheckbox_winery_Delegate = winery_Delegate('input[type=checkbox]');
document.addEventListener('change', inputCheckbox_winery_Delegate((e) => {

  formData_updater(e.target);

  var nodeList = document.querySelectorAll(`input[name="${e.target.name}"]:checked`);
  var idArray = Array.from(nodeList, node => node.id);

  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
   // console.log(idArray.includes(rad.id))
    rad.checked = (idArray.includes(rad.id));
          rad.setAttribute('checked', idArray.includes(rad.id));
  }
}));

const textArea_winery_Delegate = winery_Delegate('textarea');
document.addEventListener('change', textArea_winery_Delegate((e) => {e.target.setAttribute('placeholder',e.target.value); formData_updater(e.target);}));

const select_winery_Delegate = winery_Delegate('select');
document.addEventListener('change', select_winery_Delegate((e) => {

  formData_updater(e.target);

  
  // For a single select, you can simply set the value attribute
  e.target.setAttribute('value', e.target.value);

  // For a multiple select, you need to iterate over the options
  for (let option of e.target.options) {
    if (option.selected) {
      option.setAttribute('selected', true);
    } else {
      option.removeAttribute('selected');
    }
  }
}));
