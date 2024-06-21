function wineryPortfolioEdit(e) {
  editFlowChart(e);
  const intervalID = setInterval(() => {
    const modalContentHeight = document
      .getElementsByClassName("modal-content")[0]
      ?.getBoundingClientRect()?.height;
    if (modalContentHeight) {
      document.getElementById("myModalBody").style.height =
        modalContentHeight - 50 + "px";
      clearInterval(intervalID);
    }
  }, 100);
}
