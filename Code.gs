// Source code from: https://github.com/JimBrennan3/Gmail-delete-older-emails-script

// Moves all messages to Gmail Trash that:
// 1. have a label of 'Delete-older-'+numDays+'-days' e.g. Delete-older-15-days or Delete-older-30-days labeled messages, and
// 2. the message is older than numDays.
function batchDeleteNumDays(numDays) {
  var searchDate = new Date()
  searchDate.setDate(searchDate.getDate()-numDays)
  var searchMonth = 1 + searchDate.getMonth()
  var mySearch = "label:\"Delete-older-"+numDays+"-days\" AND before:" + searchDate.getFullYear() + "/" + searchMonth + "/" + searchDate.getDate()
  Logger.log("Search criteria: " + mySearch)
  
  var batchSize = 100 // Process up to 100 messages at once
  do
  {
    var threads = GmailApp.search(mySearch, 0, batchSize);
    Logger.log ("found "+threads.length+" items")
    if (threads.length > 0)
      GmailApp.moveThreadsToTrash(threads);
  } while (threads.length > 0);
}

// Setup a Day Timer Trigger to run daily at different time window than batchDelete30Days()
function batchDelete15Days() {
  batchDeleteNumDays(15)
}

// Setup a Day Timer Trigger to run daily at different time window than batchDelete15Days()
function batchDelete30Days() {
  batchDeleteNumDays(30)
}
