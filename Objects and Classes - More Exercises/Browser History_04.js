function browserHistory(){


}

/*    4. Browser History
As an input you will receive two parameters: an object and a string array.
The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. Your task is to fill in the object based on the actions we will get in the array of strings.
You can open any site in the world as many times as you like; if you do that add it to the open tabs.
You can close only these tabs you have opened already! If current action contains valid opened site, you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
Browser Logs will hold every single Valid action which you did (Open and Close).
There"s a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.
At the end print the object in format:
{Browser name}
Open Tabs: {[…]} // Joined by comma and space
Recently Closed: {[…]} // Joined by comma and space
Browser Logs: {[…]} // Joined by comma and space
Examples
Input
Output
{"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

  
Google Chrome
Open Tabs: YouTube, Google Translate, StackOverFlow, Google
Recently Closed: Yahoo, Gmail, Facebook
Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google
{"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

Mozilla Firefox
Open Tabs: Twitter
Recently Closed: 
Browser Logs: Open Twitter
    
*/