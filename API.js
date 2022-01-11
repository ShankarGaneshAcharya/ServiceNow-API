var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
}

//Without the loop mechanism [while(incidentGR.next()){}]it will go to the first incident
//example : script
var incidentGR = new GlideRecord('incident');
incidentGR.query();
incidentGR.next();
gs.print(incidentGR.number);

// Recheck it didnt work in serviceNow script
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', 1);
incidentGR.query();
while(incidentGR.next()) {
  gs.print('priority 1 incident:' + incidentGR.number':'+ incidentGR.priority);
}

//Prints the incident number
var incidentGR = new GlideRecord('incident');
incidentGR.get('3894e44687b00110c5e4986d3fbb358a');
gs.print(incidentGR.number);

//Prints the incident number & sys_id
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

//create new incident
var newIncident = new GlideRecord('incident');
newIncident.newRecord();
newIncident.short_description = 'This incident was created from a background script';
newIncident.insert();


//creating Multiple incidents
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

//Deleting a Record
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description', 'incident #5');
incidentGR.query();
while(incidentGR.next()){
  incidentGR.deleteRecord();
}

gs.print(incidentGR.number + ' has ' + incidentGR.short_description);


//Ascending Order
var incidentGR = new GlideRecord('incident');
incidentGR.orderby('short_description');
incidentGR.query();
while(incidentGR.next()) {
  gs.print(incidentGR.number +' : '+ incidentGR.short_description);
}

//Descending Order
var incidentGR = new GlideRecord('incident');
incidentGR.orderByDesc('short_description');
incidentGR.query();
while(incidentGR.next()) {
  gs.print(incidentGR.number +' : '+ incidentGR.short_description);
}

//SetLimit()
//Will set limit for queryString
var problemGR = new GlideRecord('problem');
problemGR.setlimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.number);
}

var problemGR = new GlideRecord('problem');
problemGR.orderBy('short_description');
problemGR.setlimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.short_description);
}

//getRowCount Method - shows no of incidents
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.getRowCount());

//hasNext() returns boolean value
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.hasNext());

//get Method
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010085');
gs.print(incidentGR.number);

//getLink method
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010085');
gs.print(incidentGR.getLink());

//deleteMultiple()
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

//update()
//For single Record
var incidentGR = new GlideRecord('incident');
incidentGR.Get('number', 'INC0010083')
incidentGR.urgency = 2;
incidentGR.update();

//for Multiple Records
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





//GlideForm Methods - Client Side
//inspect javascript and first hand look on API
console.dir(g_form)

//getValue() - Pulls current value of category on the form and assign that to the variable fieldValue
var fieldValue = g_form.getValue('category');
alert(fieldValue);

//setValue() Example : to set the category field value to software
g_form.setValue('category', 'software');

//clearValue - If you want to clear the value of any field
//Example to clear category field value
g_form.clearValue('category');
//output will be Category = none

//save() - Saves the current Record
g_form.save();

//setDisabled - disables the fieldValue
//if it is true it will diable the field
g_form.setDisabled('category', true);

//if it is false it will enable the field
g_form.setDisabled('category', false);

//hideRelatedLists() & showRelatedLists()
//hideRelatedLists - hides the related list at the bottom of the form serviceNow
g_form.hideRelatedLists();
//showRelatedLists - unhides the related list at the bottom of the form serviceNow
g_form.showRelatedLists();

//isMandatory()
//The below method will return true or false
alert(g_form.isMandatory('Category'));
//to set field as Mandatory
g_form.setMandatory('category', true);
alert(g_form.isMandatory('Category'));

//isNewRecord() - This return a boolean value whether if the current record the form is new or not
var isNewRecord = g_form.isNewRecord();
alert('Is this a new record? ' + isNewRecord);
//output will be false

//addInfoMessage() & addErrorMessage() & clearMessages()
//addInfoMessage()
g_form.addInfoMessage('Hello Welcome to the javascript world');
//addInfoMessage
g_form.addInfoMessage('This is an error');
//clearMessages()
g_form.clearMessages();

//getlabelOf() - This method take the name of the field and reurns us the field lable
alert(g_form.getLabelOf('category'));

//getTableName() - This returns the table name
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





//GlideElement
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