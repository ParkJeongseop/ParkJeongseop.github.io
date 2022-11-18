"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "ParkJeongseop", { responsive: true });
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "ParkJeongseop", selector: "#ghfeed" });