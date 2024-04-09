# CSE3421


-login page
-homepage
-topic page (list of articles or events), article page(event info page), schedule page(appointment or rsvp)
-page tab
-how to "access" outside sources


campus facilities (SSSC, counseling, etc) - data represented in json files? address, name, all schedule info
campus facilities management (the API part) - reads the json and process, transfers to other schedule data structure
app contents - hold all the pages info, ONE PAGE TEMPLATE that reads article infor, maybe a json? displays title, author, subhead, and content in one page template
app - the controller UI, asks for the contents and distrubutes schedule info to be processed
scheduler - contents CURRENT schedule info, gets from campus facilities management
engagements - is a form that is submitted, contains information for the event the student is scheduling or rsvping
user loging code? - asks for data, checks against json, verifies or doesnt
