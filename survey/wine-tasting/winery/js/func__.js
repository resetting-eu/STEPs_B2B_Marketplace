    function iterateChildren (element, additional) {

      var hasID = element.getAttribute("id");
      var hasChildren = element.children;
      if (hasID) {
        element.id = additional + 'Δ' + hasID;
      }

      var eventAttributes = ["onclick", "onchange", /* add other event attributes here */];

      for (const attr of eventAttributes) {
        var inlineJS = element.getAttribute(attr);
        if (inlineJS && inlineJS.includes('_')) {
          if (inlineJS.includes('.getElementById(')) {
            var first_split = inlineJS.split(';').join(',');
            var second_split = first_split.split('=').join(',');
            var third_split = second_split.split('+').join(',');            
            var split_inlineJS = third_split.split(',');
            var regexp = /document\.getElementById\('(.*?)'\)/g;
            var split_targets_array = [];
            for (const split_str of split_inlineJS) {
              split_targets_array = [...split_targets_array, ...split_str.matchAll(regexp)];
            }
            var unique_targets_array = [...new Set(split_targets_array.map(JSON.stringify))].map(JSON.parse);
            for (const split_target of unique_targets_array) {
              inlineJS = inlineJS.replaceAll("'" + split_target[1] + "'", "'" + additional + 'Δ' + split_target[1] + "'");
              // there might be browser compatibility issues for old browsers with '''replaceAll()''' above, the regex below should do the same.
              // inlineJS = inlineJS.replace(new RegExp("'" + split_target[1] + "'", 'g'), "'" + additional + 'Δ' + split_target[1] + "'");

            }
            element.setAttribute(attr, inlineJS);
          } else {
            if (inlineJS.includes("openDivVertical(")) {
              var originalCall_split = inlineJS.split("'");
              var changedCall = originalCall_split[0] + "'" + additional + 'Δ' + originalCall_split[1] + "'" + originalCall_split[2];
              element.setAttribute(attr, changedCall);
            }
          }           
        }
      }

      var hasFor = element.getAttribute("for");
      // console.log("hasFor",hasFor)
      if (hasFor) {
        element.htmlFor = additional + 'Δ' + hasFor;
      }

      var hasName = element.getAttribute("name");
      if (hasName) {
        element.name = additional + 'Δ' + hasName;
      }

      if (hasChildren.length > 0) {
        for (const child of hasChildren) {
          iterateChildren(child, additional)
        }
      }

    }