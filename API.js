/* Common GlideRecord Methods
query() - is used to query all data (one asking for information)
newRecord() - creates a new record
insert() - 
update() - It will update the existing record
deleteRecord() - deletes a record
addQuery() - is used to query some selected data
addEncodedQuery() - accepts a encoded string
hasNext() - returns a boolean value (should be used when you need to check if there are any records after you execute a query. It will stop after it finds a record and returns true/false)
next() - performs iteration
get() - shortcut for grabbing a specific record
orderBy() - Ascending Method
orderByDesc() - Descending Method
canCreate() - 
canWrite() - 
canRead() - 
canDelete() - 
 */

//This will print all of the incident Numbers
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
}

/* removed while loop there is no output*/
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.number);

//Without the loop mechanism [while(incidentGR.next()){}]it will go to the first incident
var incidentGR = new GlideRecord('incident');
incidentGR.query();
incidentGR.next();
gs.print(incidentGR.number);

//addQuery
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', 1);
incidentGR.query();
while(incidentGR.next()) {
  gs.print('priority 1 incident: ' + incidentGR.number + ' : ' + incidentGR.priority);
}

//getDisplayValue()
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', 1);
incidentGR.query();
while(incidentGR.next()) {
  gs.print('priority 1 incident: ' + incidentGR.number + ' : ' + incidentGR.priority.getDisplayValue());
}

/* get() Method
Prints the incident number
go to the incident form view and copy the sys_ID
Output will be the incident Number */
var incidentGR = new GlideRecord('incident');
incidentGR.get('3894e44687b00110c5e4986d3fbb358a');
gs.print(incidentGR.number);

/* Prints the incident number & sys_id
Output will be incident number & sys_id*/
var incidentGR = new GlideRecord('incident');
incidentGR.get('3894e44687b00110c5e4986d3fbb358a');
gs.print(incidentGR.number + ' has a sys_id of' + incidentGR.sys_id);

//addEncodedQuery()
var queryString ='category=inquiry^ORcategory=software^ORcategory=hardware^active=true'
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery(queryString);
incidentGR.query();
while(incidentGR.next()) {
  gs.print(incidentGR.number);
}

/* newRecord
create new incident
insert() method will help insert this record into the database
without insert() the short description would never get saved */
var newIncident = new GlideRecord('incident');
newIncident.newRecord();
newIncident.short_description = 'This incident was created from a background script';
newIncident.insert();

/* creating Multiple incidents
output will be in sys_id
check incident table for output of 5 incidents created */
var newIncidents =[];
var counter = 1;
var incidentGR = new GlideRecord('incident');
while(counter<=5){
  incidentGR.newRecord();
  incidentGR.short_description = 'Incident #' + counter;
  counter++;
  newIncidents.push(incidentGR.insert());
}
gs.print(newIncidents);

/* deleteRecord()
Deleting a Record*/
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description', 'incident #5');
incidentGR.query();
while(incidentGR.next()){
  incidentGR.deleteRecord();
}

/* orderBy
Ascending Order*/
var incidentGR = new GlideRecord('incident');
incidentGR.orderby('short_description');
incidentGR.query();
while(incidentGR.next()) {
  gs.print(incidentGR.number + ' : ' + incidentGR.short_description);
}

/* orderByDesc()
Descending Order*/
var incidentGR = new GlideRecord('incident');
incidentGR.orderByDesc('short_description');
incidentGR.query();
while(incidentGR.next()) {
  gs.print(incidentGR.number + ' : ' + incidentGR.short_description);
}

/* SetLimit()
Will set limit for queryString
It will show only 5 records */
var problemGR = new GlideRecord('problem');
problemGR.setlimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.number);
}
/* SetLimit()
It will show first 5 records in alphabetic order*/
var problemGR = new GlideRecord('problem');
problemGR.orderBy('short_description');
problemGR.setlimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.short_description);
}

/* getRowCount Method 
shows the count of no of incidents in the tabel */
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.getRowCount());

//hasNext() returns boolean value
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.hasNext());

/* get Method
output will be INC0010085 */
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010085');
gs.print(incidentGR.number);

/* getLink method
Will retreive the link of the incident number */
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010085');
gs.print(incidentGR.getLink());

/* deleteMultiple()
While loop is used to check the record exists or not*/
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('short_descriptionLIKEincident #');
incidentGR.query();
while (incidentGR.next()) {
gs.print(incidentGR.short_description);
}

//deleteMultiple method does not require query or gs.print
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('short_descriptionLIKEincident #');
incidentGR.deleteMultiple

/*update()
For single Record
updates one record here urgency will 2*/
var incidentGR = new GlideRecord('incident');
incidentGR.Get('number', 'INC0010083')
incidentGR.urgency = 2;
incidentGR.update();

/* for Multiple Records
ouput will be all incidents with urgency 2 will change to urgency 3*/
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('urgency', 2);
incident.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
  incidentGR.urgency =3;
  incident.update();
}

//addNullQuery() This finds incidents which do not have short_description
var incidentGR = new GlideRecord('incident');
incidentGR.addNullQuery('short_description');
incidentGR.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
}

//addNotNullQuery() This finds incidents which have some sort of short_description
var incidentGR = new GlideRecord('incident');
incidentGR.addNotNullQuery('short_description');
incidentGR.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
}

var helloText = 'Hello World'
gs.print(helloText);


/* GlideSystem Intro - Server side
The GlideSystem API provides a number of convenient methods to get information about the system, the current logged in user, etc.

Used for
system and user Data
Referenced by gs
Doesnt need to be invoked
helper Methods
 
addErrorMessage() - shown on the client side
addInfoMessage() - shown on the client side
eventQueue()
getMessage()
getProperty()
getSession()-  it keeps of tracks of session inside of the system
print() - similar like console.log
error()
log()
debug()
info()
warn()
generateGUID() - sys_id
getUser() - will return current user object to us 
hasRole() - to find out the role of the user
isLoggedIn() - helpful in service portal scripts
isMobile() - helpful in service portal scripts
nil()
setRedirect()
setProperty()
*/

/*GlideSystem Methods
gs.print() Method */
gs.print('Hello World!');

/*gs.log() Method
accepts two arguments one is message and second is source
the below log message can be viewed under logs in script log statements module*/
gs.log('This is a log message', 'marks_logs');
//can be passed as below
gs.log('This is a log message');

/*gs.error() Method
the below error message can be viewed under System log in error module*/
gs.error('I am an error Message');

/*gs.warn() Method
the below warn message can be viewed under System log in warnings module*/
gs.warn('I am warn message');

/*gs.addErrorMessage() Method
Runs on update in incident form in business rule
accepts the string arguments*/
gs.addErrorMessage('STOP!! This is an error message');

/*gs.addInfomMessage() Method
Runs on update in incident form in business rule
accepts the string arguments*/
gs.addInfoMessage('Welcom to ServiceNow');

/*gs.beginningOfLastMonth() Method
returns the Begining of date of last Month
output will be 2021-12-01 08:00:00*/
gs.print(gs.beginningOfLastMonth());

/* generateGUID() Method
generates the sys_id */
gs.print(generateGUID());

/* gs.getMessage() Method
Helps in language */ 
gs.getMessage();

/*watch tutorial serviceNow Developer Course 10:20
gs.getProperty() Method
gs.property Method*/

/* getUser() Method
will return current user object to us
output will be Script: com.glide.sys.User@fccb86*/
gs.print(gs.getUser());
/* If you want dislay name of the current user
output will be Script: System Administrator*/
gs.print(gs.getUser().getDisplayName());
/* We can also use getFirstName Method which will return the first Name
output will be Script: System */
gs.print(gs.getUser().getFirstName());
/* We can also use getLocation Method
output will be sys_id*/
gs.print(gs.getUser().getLocation());
/* getUserRoles Method
Output will be Script: admin,security_admin*/
gs.print(gs.getUser().getUserRoles());
/* getUserID Method
It grabs sys_id of my user record
Output will be Script: f4c3ec6c87204110c5e4986d3fbb3536*/
gs.print(gs.getUserID());

/* hasRole() Method 
To find out the role of the user
Output it will print the message */
if(gs.hasRole('itil') || (gs.hasRole('admin')){
  gs.print('The current user has ITIL or admin');
}

/* getSeesion() Method
which will retrun the session ID
outout will be Script: com.glide.sys.GlideSnapshotSession@606374*/
gs.print(gs.getSession());
/* We can also change the is logged in method on the session method, which will return a boolean value. if the user is logged in or not.
Output will be Script: true*/
gs.print(gs.getSession().isLoggedIn());

/* nil() Method
The nil method will test whether a specific variable contains a falsey value. variable can be string or object
Output : It will display incident without short short_description*/
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()) {
  if(gs.nil(incidentGR.short_description)){
    gs.print('This incident (' + incidentGR.number + ' ) has no short Description ' + incidentGR.short_description);
  }
}

/* tableExists() Method
This will test if the argument is actually a table within the system.
Output will be Script: true*/
gs.print(gs.tableExists('incident'));

/* xmlToJSON() Method
checkout the video on this @ 17:00 
var xmlString = 'new to method';
var json = gs.xmlToJSON(xmlString);
gs.print(json.root.test);*/

/*eventQueue() Method
checkout the video on this @ 18:30
gs.printeventQueue()*/



/* GlideForm Methods - Client Side
The GlideForm API provides methods to customize forms. The global object g_form is used to access GlideForm methods. GlideForm Methods are only used on the client. These methods are used to make custom changes to the form view of records.
Used for
Changes to form & fields
Referenced by g_form 
GlideForm Methods
addErrorMessage()
addInfoMessage()
addOption()
clearValue()
disableAttachments()
enableAttachments()
getLableOf()
getOption()
getReference()
hideRelatedLists()
isMandatory()
removeOption()
setDisabled()
setReadOnly()
setVisible()
setValue()*/

//inspect javascript and first hand look on API
console.dir(g_form)

/* getValue() Method
Pulls current value of category on the form and assign that to the variable fieldValue
Paste it in Javascript Executor(alt+ctrl+shift+j)
Output - Pop ups message field value*/ 
var fieldValue = g_form.getValue('category');
alert(fieldValue);

/* setValue() Method 
Output - sets the category field value to software 
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.setValue('category', 'software');

/* clearValue - If you want to clear the value of any field
Example to clear category field value
Paste it in Javascript Executor(alt+ctrl+shift+j)
output will be Category = none */
g_form.clearValue('category');


/* save() Method
Paste it in Javascript Executor(alt+ctrl+shift+j)
output will be Category = none */
g_form.save();

/* setDisabled - disables the fieldValue
Paste it in Javascript Executor(alt+ctrl+shift+j)
if it is true it will diable the field */
g_form.setDisabled('category', true);

/* if it is false it will enable the field 
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.setDisabled('category', false);

/*hideRelatedLists
hides the related list at the bottom of the form serviceNow 
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.hideRelatedLists();

/* showRelatedLists
unhides the related list at the bottom of the form serviceNow
Paste it in Javascript Executor(alt+ctrl+shift+j) */
g_form.showRelatedLists();

/* isMandatory()
Paste it in Javascript Executor(alt+ctrl+shift+j)
The below method will return true or false */
alert(g_form.isMandatory('Category'));
/* to set field as Mandatory 
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.setMandatory('category', true);
alert(g_form.isMandatory('Category'));

/* isNewRecord() Method
Paste it in Javascript Executor(alt+ctrl+shift+j)
This return a boolean value whether if the current record the form is new or not 
output will be false*/
var isNewRecord = g_form.isNewRecord();
alert('Is this a new record? ' + isNewRecord);

/*addInfoMessage() Method
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.addInfoMessage('Hello Welcome to the javascript world');

/*addInfoMessage Method
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.addInfoMessage('This is an error');

/*clearMessages() Method
Paste it in Javascript Executor(alt+ctrl+shift+j)*/
g_form.clearMessages();

/* getlabelOf() Method
Paste it in Javascript Executor(alt+ctrl+shift+j)
This method take the name of the field and reurns us the field lable */
alert(g_form.getLabelOf('category'));

/*getTableName()
Paste it in Javascript Executor(alt+ctrl+shift+j)
This returns the table name */
var tableName = g_form.getTableName();
alert('Table: ' + tableName);




//GlideUser Method
//firstName, lastName, userID
alert('Hello ' + g_user.firstName + ' ' + g_user.lastName + 'Your userID is ' + g_user.userID);
// output : g_user.userID gives sys_id

//getFullName()
alert('Hello ' + g_user.getFullName());

//hasRoles();
//This method returns boolean value
alert('Do you have any Roles? ' +g_user.hasRoles());

//hasRole()
alert('Do you have ITIL role? ' + g_user.hasRole('itil'));

//userName
alert('Your user name is ' + g_user.userName);


//GlideDateTime Method - Server Side
//The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.

//Used for
//Date/time operations
//Formatting date/time
//Converting between date/time formats

//GlideDateTime Method
// add() - adds miliseconds to GlideDateTime object
// addDaysUTC() - adds days to GlideDateTime object
// addMonthsUTC() - adds months to GlideDateTime object
// addSeconds() - adds seconds to GlideDateTime object
// addWeeksUTC() - adds weeks to GlideDateTime object
// addYearsUTC() - adds miliseconds to GlideDateTime object
// after() - compares to Glide Date Time to each other
// Before() - compares to Glide Date Time to each other
// compareTo() - 
// equals() -
// getDate() - Which will return date stored in the daytime object
// getDayOfMonthUTC() - 
// getLocalTime()
// getMonthUTC()
// getTime()
// getWeekOfYearUTC()
// getYearUTC()
// isValid() - which will test if the glide date time object is valid
// onOrAfter()  
// onOrBefore()
// subtract() - This method will return the difference in days, minutes and or seconds between the two dates.

var start = new GlideDateTime('2017-01-01 09:00:00');
var end = new GlideDateTime('2017-01-07 08:00:00');
var difference = GlideDateTime.subract(start,end);
gs.print(difference.getDisplayValue());
//output will be 5 Days 23 Hours

//Prints the current time
var gdt = new GlideDateTime();
gs.print(gdt);


//addDaysUTC()
var gdt = new GlideDateTime();
gs.print('Now: ' + gdt);
gdt.addDaysUTC(3);
gs.print('New Value: ' + gdt);
//Now: 2022-01-11 08:55:44
//New Value: 2022-01-14 08:55:44
//New Value represents 3 days in future

//addMonthsUTC()
var gdt = new GlideDateTime();
gs.print('Now: ' + gdt);
gdt.addMonthsUTC(3);
gs.print('New Value: ' + gdt);
//Now: 2022-01-11 09:00:03
//New Value: 2022-01-14 09:00:03
//New Value represents 3 Months in future

var gdt = new GlideDateTime();
gs.print('Now: ' + gdt);
gdt.addYearsUTC(3);
gs.print('New Value: ' + gdt);
//Now: 2022-01-11 09:01:12
//New Value: 2025-01-11 09:01:12
//New Value represents 3 Years in future

//before() - we get boolean value


//GlideElement - Server Side
// The Scoped GlideElement API provides a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord.
//GlideRecord and GlideElement go hand in hand

//Used for
////Accessing GlideRecords fields
////Manipulating GlideRecord fields

//getDisplayValue Method
//copy the incident sys_id
//Direct access
var incidentGR = new GlideRecord('incident');
incidentGR.get('46b9490da9fe1981003c938dab89bda3')
gs.print(incidentGR.caller_id);
//output will be 5137153cc611227c000bbd1bd8cd2005

//toString Method
var incidentGR = new GlideRecord('incident');
incidentGR.get('46b9490da9fe1981003c938dab89bda3')
gs.print(incidentGR.caller_id.toString());
//output will be 5137153cc611227c000bbd1bd8cd2005

//getDisplayValue
var incidentGR = new GlideRecord('incident');
incidentGR.get('46b9490da9fe1981003c938dab89bda3')
gs.print(incidentGR.caller_id.getDisplayValue());
//output will be Fred Luddy

//GetHTMLValue() Method
//copy sys_id of KBArticle
var kbArticleGR = new GlideRecord('kb_knowledge');
kbArticleGR.get('72b8203987600110c5e4986d3fbb358e');
gs.print(kbArticleGR.text.getHTMLValue());


//getJournalEntry() Method
var incidentGR = new GlideRecord('incident');
incidentGR.get('46b9490da9fe1981003c938dab89bda3')
gs.print(incidentGR.comments.getJournalEntry(-1));
// -1 which wil print all comments stored in the journal field

//nil() Method
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()){
  if(incidentGR.short_description.nill()){
    gs.print(incidentGR.number);
  }
}
//Prints all of the incident numbers whose short description is nill or null


//XMLDocument2 API - Serverside APi so we cannot use on client Side

//XMLDocument2 is a JavaScript Object Wrapper for parsing and extracting XML data from an XML string

//Used for 
//Working with XML documents & nodes

var xmlString = 'Paste xml snippet'
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
gs.print(xmlDoc.getNodeText('//active'))

//We can also create new element on XML document
var xmlString = 'Paste xml snippet'
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
xmlDoc.createElement('pet');
gs.print(xmlDoc);
//Pet node will be created in XML snippet

//We can also create new element with some text value on XML document
var xmlString = 'Paste xml snippet'
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
xmlDoc.createElementWithTextValue('pet', 'Oscar');
gs.print(xmlDoc);
//We will see start and end Pet node with value in between will be created in XML snippet

//Get first node method
var xmlString = 'Paste xml snippet'
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
gs.print(xmlDoc.getFirstNode('/xml/incident'));



///Other APIs and Undocumented APIs////
//Documented APIs
//GlideModal - used for Pop ups in SericeNow
//Workflow - 
//GlideSysAttachment - used to work with attachments
//RestMessageV2 - 
//RestResponseV2 -
//SOAPMessageV2 -
//SOAPResponseV2 -
//GlideDuration -

////Undocumented APIs/// - script Includes or Server Scripts
// JSUtils
// Workflow
// DiscoveryCMDBUtil
// AssetandCI
// CMDBItem
// SNC
// GlideStringUtil
// Cart
// SPCart


////Creating Our Own API////



1800 202 6161
1860 267 6161
