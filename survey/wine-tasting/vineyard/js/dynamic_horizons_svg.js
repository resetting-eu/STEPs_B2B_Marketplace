        var scaleYFactor = 0.01;
        var isMouseDown = false;
        var prevY = null;
        var currentY = null;
        var current_svg = null;
        var init_profile_values = new Object();

        var svgContainer = document.getElementById("vineyard_svgContainer");

        var svgElements = svgContainer.querySelectorAll("svg");

        svgElements.forEach((svgElement) => {
            if (
                svgElement !== document.getElementById("surface_svg") &&
                svgElement !== document.getElementById("bedrock_svg")
            ) {
                svgElement.addEventListener("load", () => {
                    init_profile_values["humus_value"] = parseFloat(
                        window
                            .getComputedStyle(document.getElementById("humus_svg_div"))
                            .getPropertyValue("height")
                            .replace("px", "")
                    );
                    init_profile_values["topsoil_value"] = parseFloat(
                        window
                            .getComputedStyle(document.getElementById("topsoil_svg_div"))
                            .getPropertyValue("height")
                            .replace("px", "")
                    );
                    init_profile_values["subsoil_value"] = parseFloat(
                        window
                            .getComputedStyle(document.getElementById("subsoil_svg_div"))
                            .getPropertyValue("height")
                            .replace("px", "")
                    );
                    init_profile_values["weatheredRockFragments_value"] = parseFloat(
                        window
                            .getComputedStyle(
                                document.getElementById("weatheredRockFragments_svg_div")
                            )
                            .getPropertyValue("height")
                            .replace("px", "")
                    );
                });

                svgElement.addEventListener("mousedown", () => {
                    current_svg = svgElement.getElementById(
                        svgElement.id.split("_")[0]
                    );

                    isMouseDown = true;

                    prevY = currentY;
                });
            }
        });

        window.addEventListener("mouseup", () => {
            isMouseDown = false;

            prevY = null;
        });

        window.addEventListener("mousemove", (event) => {
            var signal = null;

            if (isMouseDown) {
                var currentY = event.clientY;

                if (current_svg) {
                    if (prevY !== null) {
                        if (currentY > prevY) {
                            signal = 1;
                        } else if (currentY < prevY) {
                            signal = -1;
                        }
                    }

                    var currentTransform = current_svg.getAttribute("transform");

                    if (currentTransform !== null) {
                        var matrix_data = currentTransform
                            .split("(")[1]
                            .split(")")[0]
                            .split(",");
                        var ty =
                            parseFloat(matrix_data[5]) +
                            parseFloat(matrix_data[5]) * signal * scaleYFactor;
                        var sy =
                            parseFloat(matrix_data[3]) +
                            parseFloat(matrix_data[3]) * signal * scaleYFactor;
                        newTransform = `matrix(${matrix_data[0]},${matrix_data[1]},${matrix_data[2]},${sy},${matrix_data[4]},${ty})`;
                    } else {
                        newTransform = `matrix(0,0,0,${1 + 1 * signal * scaleYFactor
                            },0,${1 + 1 * signal * scaleYFactor})`;
                    }

                    var svg_parent = current_svg.closest("svg");
                    var original_viewBox = svg_parent
                        .getAttribute("viewBox")
                        .split(" ");
                    var original_height = svg_parent.getAttribute("height");
                    svg_parent.setAttribute(
                        "viewBox",
                        `${original_viewBox[0]} ${original_viewBox[1]} ${original_viewBox[2]
                        } ${parseFloat(original_viewBox[3]) +
                        parseFloat(original_viewBox[3]) * signal * scaleYFactor
                        }`
                    );
                    svg_parent.setAttribute(
                        "height",
                        `${parseFloat(original_height) +
                        parseFloat(original_height) * signal * scaleYFactor
                        }`
                    );

                    current_svg.setAttribute("transform", newTransform);

                    document.getElementById(
                        String(current_svg.id) + "_value"
                    ).textContent =
                        String(
                            Math.round(
                                document
                                    .getElementById(String(current_svg.id) + "_svg_div")
                                    .getBoundingClientRect().height *
                                (1 / 3) *
                                10
                            ) / 10
                        ) + " cm";

                    prevY = currentY;
                }
            }
        });

        function openDivSoil(e, answerName) {
            e.preventDefault();
            var i, tabcontent, tablinks;

            tabcontent = e.currentTarget.parentElement.parentElement.getElementsByClassName("tabcontentSoil");
            for (i = 0; i < tabcontent.length; i++) {
            // tabcontent[i].style.display = "none";
// alert(`"tabcontent[i].id: "  ${tabcontent[i].id}\n"answerName: "  ${answerName}\n"tabcontent[i].id === answerName: "  ${tabcontent[i].id === answerName}\n"tabcontent[i].id.includes(answerName): "  ${tabcontent[i].id.includes(answerName)}`);
            if (tabcontent[i].id.includes(answerName)) {
// alert(`"tabcontent[i].id: "  ${tabcontent[i].id}\n"answerName: "  ${answerName}\n"tabcontent[i].id.includes(answerName): "  ${tabcontent[i].id.includes(answerName)}`);
                    // get the element with the id that includes 'answerName' and set it to display
                    tabcontent[i].style = "display: inline-flex; justify-content: space-evenly; overflow: visible;"
                } else {
                    // get the element with the id that includes 'answerName' and set it to display
                    tabcontent[i].style.display = "none";
                }  
            }
            tablinks = e.currentTarget.parentElement.getElementsByClassName("tablinksSoil");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(
                    " active",
                    ""
                );
            }

            // document.getElementById(answerName).style =
            //     "display: inline-flex;justify-content: space-evenly;";
            e.currentTarget.className += " active";
        }
        // document.getElementById("defaultOpenSoil").click();