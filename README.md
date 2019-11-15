# Problem Description
Gmail is great for filtering out spam email. However, it is not so great when my wife subscribes to 100+ (exaggeration?) different weekly advertisement lists for shopping, travel, or food related items and wants them available for a couple weeks. These weekly or more frequent emails from organizations like Target, Land's End or Jet Blue become clutter in the mail box. Gmail allows you to automatically label an item based on the From address to say move it to a "Shopping" folder, but there does not seem to be a good way to automatically delete older versions of these weekly emails. Only the most current one or two emails are relevant. The older ones are just clutter.

# Solution
The solution is auto-label the relevant emails with a 'Delete-older-15-days' or 'Delete-older-30-days' label based on the email From address. Then using Google Apps scripting to run the attached Code.gs script. The batchDelete15Days() or batchDelete30Days() function then will walk through the matching 'Delete-older-30-days' or 'Delete-older-30-days' labeled email and trash any message older than that number of days.

# Setup
## Upload the script to Google Apps
1. Log into your google account at https://script.google.com
1. Select the 'New project' button in the upper left
1. Rename the 'Untitled project' to something like 'Cleanup Gmail Email'
1. Copy the Code.gs contents from this github repo to the Code.gs of the new project
1. Hit the white right arrow with blue background in the upper left to go back to the 'Google Apps Script Dashboard'
1. You should be able to see the 'Cleanup Gmail Email' Project listed in the 'My Projects' tab

## Add Trigger to run script daily
1. When in the My Projects left navigation, on the 'Cleanup Gmail Email' project, select the vertical ... symbol and pick 'Triggers'
1. This switches the view to the triggers view
1. Select 'Add Trigger' in the lower right
1. Set the following values:
  1. Choose which function to run = batchDelete15Days()
  1. Which runs at deployment = Head
  1. Select event source = Time-driven
  1. Select type of time based trigger = Day timer
  1. Select time of day = 1am to 2am (or whatever time you like)
  1. Failure notification settings = Notify me daily
1. You can repeat steps 3 and 4 for the batchDelete30Days() function, picking a different time.

## Gmail add Delete-older-15-days and/or Delete-older-30-days label
The Gmail help link at https://support.google.com/mail/answer/6579?hl=en provides basic instructions on creating a filter. You can create a new 'Delete-older-15-days' and 'Delete-older-30-days' label if not already created or select the existing label.

Note:
1. You can have multiple From addresses in the filter. Join multiple From addresses with a OR keyword when creating or updating the filter criteria. E.g. 'big5sportinggoods@big5.edirect1.com OR Kohls@s.kohls.com OR PotteryBarn@mail.potterybarn.com' (without the quotes)
1. There is a limit to the either the length of the From addresses possible in the filter. If Gmail complains with a 'The specified filter is too long. Please specify shorter filter search criteria.' error message, just create another new filter for the new From addresses; assigning the appropriate 'Delete-older-15-days' or 'Delete-older-30-days' label for them just like the first filter.

# Caveats
Getting all of the From addresses extracted and labeled via Gmail Filters can be a pain, but once setup, doesn't really need to be touched unless you sign up for new subscriptions.
