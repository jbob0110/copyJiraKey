var jiraKey;
var project;
var jiraInstance;
var url;
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("copy-button").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var url = tabs[0].url;
      getURLs(url);


      navigator.clipboard.writeText(jiraKey).then(function() {
        console.log("Copied URL: " + jiraKey);
      });
    });
  });
});

//Gets URL from active JIRA tab and parses our the JIRA Instance/Key/Project
function getURLs(url){
  var re = /https\:\/\/(.+?)\..+\/((.+?)\-[^\?]+)/;
  var regexGroups = { jIns: 1, jKey: 2, pKey: 3 };
  var m = re.exec(url);
  jiraKey = m[regexGroups.jKey];
  project = m[regexGroups.pKey];
  jiraInstance = m[regexGroups.jIns];
};
