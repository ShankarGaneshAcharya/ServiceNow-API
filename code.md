Form Name : Employee onboarding - Validate work email address (change)
Validate email address (submit)

---

Update a Non-Employee (POI) Record - changes lower text to upper text

---

Request Ergonomics Services - SU - Missing Attachment - Missing attachment - on submit

---

Create website on Stanford Sites - SU - Alphanumeric- WebsitePurpose

---

Change/Cancel System Administration Service - SU - Instruction Character Limit

```
function onSubmit() {
g*form.hideFieldMsg('changeCancellationInstructions', false);
var alpha = /^[\sA-Za-z0-9*@./#&+-]{0,450}$/;
var BusinessCase=g_form.getValue('changeCancellationInstructions');
//alert("value"+BusinessCase);
var res=alpha.test(BusinessCase);
if (!res) {
g_form.showFieldMsg('changeCancellationInstructions', 'Special instructions has a field length limit of 450 characters or less.','error');
return false;
}
return;
}
```

---

Add Stanford Plan to Apple Watch - SU - Set End User Email

```
function onChange(control, oldValue, newValue, isLoading) {
if(isLoading || oldValue == newValue) {
return;
}
else {
var newUser = g_form.getReference('u_end_user_name', setInfo);
}
}

//reference is passed into callback as first arguments
function setInfo(newUser) {
g_form.setValue('u_end_user_email', newUser.email);
}
```

---

New GCP Service Request - SU - VerifyProjectNameAndFillPIDOnChange

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   // Verify projectName using RegEx in onChange
   // var project_name = g_form.getValue('projectName').toLowerCase();
   var project_name = g_form.getValue('projectName');

   var re = new RegExp("^[a-z][a-z0-9-]+[a-z0-9]$");
   if(!re.test(project_name) || project_name.toString().length < 6 || project_name.toString().length > 24) {
		var errstr='Please enter valid project name. It must be 6 to 24 characters. Can have lowercase letters, numbers, or hyphens. It must start with a lowercase letter and end with a letter or number. Trailing hyphens are prohibited.';
		g_form.addErrorMessage(errstr);
		g_form.setValue('projectName','');
		return false;
	}
}
```

---

Get Assistance with Remote Pay Questions - SU Format Currency

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

  var searchRegExp = /(\d)(?=(\d{3})+\.)/g;
	var val = newValue.replaceAll('$','').replaceAll(',','');
	if(isNaN(val))
	{
		g_form.showFieldMsg('requestedFTEAnnualSalary','Input is not correct','error');
	}
	g_form.setValue('requestedFTEAnnualSalary','$'+Number(val).toFixed(2).replace(searchRegExp, '$1,'));
}
```

---

Help with an ASSU Waiver - SU-Abort Submission

```
function onSubmit() {

    var errorMessage = "This form is no longer active. If you need assistance, please review the instructions provided in the description.";

    g_form.addErrorMessage(errorMessage);


    return false;

}
```

---

Request LBRE Finance P2P Services - SU - ChangeSupplierNameUpperCase

```
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue == '')
      return;

   var str = newValue.toUpperCase();
   if (str != newValue)
  g_form.setValue("ChangeSupplierName", str);
}
```

---

Add Mobile Service - SU - Validate No Less Than 8 Digits

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    //var fieldValue = 8;

    // now check the length
    if (newValue.length < 8) {

        //alert("Please enter at least 8 digits.");
        g_form.clearValue('currentDeviceIMEIorESNorMEID');
		g_form.showFieldMsg('currentDeviceIMEIorESNorMEID',"Please enter at least 8 digits.",'error', true);

    }
}
```

---

Add Bulk Assets - SU File Validations

```
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	g_form.setValue('enable_submit', 'false');
	// 	if (g_form.getValue('data_source') != '') {
	var cat_id = g_form.getValue('sysparm_item_guid');
	var gx = new GlideAjax('SUValidateAttachment');
	gx.addParam('sysparm_name', 'checkFile');
	gx.addParam('sysparm_cat_id', cat_id);
	//gx.addParam('sysparm_ds', g_form.getValue('data_source'));
	gx.getXML(getResponse);

	// 	} else {
	// 		alert('Please select the data source');
	// 		g_form.clearValue('select_attachment');
	// 	}
}

function getResponse(response) {
	var answer = response.responseXML.documentElement.getAttribute("answer");

	if (answer != "") {
		g_form.clearValue('select_attachment');

		g_form.addErrorMessage(answer);
	}else{
		g_form.setValue('enable_submit', 'true');
	}

}

```

---

Get Assistance with Supplemental Pay Requests -

SU Format Percentage

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
var searchRegExp = /(\d)(?=(\d{3})+\.)/g;
	var val = newValue.replaceAll('%','');
	if(isNaN(val) || val > 100)
	{
		g_form.clearValue('TARRequestPercentageAmount');
		g_form.showFieldMsg('TARRequestPercentageAmount','Input is not correct','error');
	}
	else
	g_form.setValue('TARRequestPercentageAmount', Number(val).toFixed(2).replace(searchRegExp, '1,')+'%');
}
```

SU Format Currency

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
var searchRegExp = /(\d)(?=(\d{3})+\.)/g;
	var val = newValue.replaceAll('$','').replaceAll(',','');
	if(isNaN(val))
	{
		g_form.showFieldMsg('oneTimeAmount','Input is not correct','error');
	}
	g_form.setValue('oneTimeAmount','$'+Number(val).toFixed(2).replace(searchRegExp, '$1,'));
}
```

SU - Validate Start Date1

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    if (g_form.getValue('effectiveEndDate') != '') {
        if (g_form.getValue('effectiveStartDate') > g_form.getValue('effectiveEndDate')) {
            g_form.clearValue('effectiveStartDate');
            g_form.showFieldMsg('effectiveStartDate', getMessage("Effective Start Date can't be later than Effective End Date."), 'error');
        }
        if (g_form.getValue('effectiveStartDate') == g_form.getValue('effectiveEndDate')) {
            g_form.clearValue('effectiveStartDate');
            g_form.showFieldMsg('effectiveStartDate', getMessage("Effective Start Date can't be same as Effective End Date."), 'error');
        }
    }
}
```

SU - Validate End Date

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (g_form.getValue('effectiveEndDate') < g_form.getValue('effectiveStartDate')){
        g_form.clearValue('effectiveEndDate');
    g_form.showFieldMsg('effectiveEndDate', getMessage("Effective End Date can't be earlier than Effective Start Date."), 'error');
	}
	if (g_form.getValue('effectiveEndDate') == g_form.getValue('effectiveStartDate')){
        g_form.clearValue('effectiveEndDate');
    g_form.showFieldMsg('effectiveEndDate', getMessage("Effective End Date can't be same as Effective Start Date."), 'error');
	}
}
```

---

Upload Assets to SUHP Stockroom - Price numeric only

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   var alpha = /^[\d\.]*$/;
	//var alpha = /^\d*$/;

 var cost=g_form.getValue('per_unit_cost_including_tax_and_shipping');
  var res=alpha.test(cost);
  if (!res) {
  alert ("Only numeric characters can be entered in the 'Per unit cost (incl. tax and shipping)' field.");
  //g_form.showFieldMsg('per_unit_cost_including_tax_and_shipping', 'Invalid input', 'error');
  g_form.clearValue('per_unit_cost_including_tax_and_shipping');
return false;
  }
return;
}


```

Request Computer Loaner - SU - Auto populate user field details

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var user_id = g_form.getValue('requester');
    var ga = new GlideAjax('AutoPopulateUserFieldDetailsUtil');
    ga.addParam('sysparm_name', 'getUserFieldDetails');
    ga.addParam('sysparm_user', user_id);
    ga.getXML(EmployeeUserFieldDetailsLookup);

    function EmployeeUserFieldDetailsLookup(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        var result = JSON.parse(answer);
        g_form.setValue('sunetID', result.sunet_id); //userSunetid is variable name in catalog item
        g_form.setValue('phoneNumber', result.phone_number); //emailAddress is variable name in catalog item
        g_form.setValue('email', result.email_id); //department is variable name in catalog item
    }
}
```

AutoPopulateUserFieldDetailsUtil

```
var AutoPopulateUserFieldDetailsUtil = Class.create();
AutoPopulateUserFieldDetailsUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getUserFieldDetails: function() {
        var userName = this.getParameter('sysparm_user');
        var user = new GlideRecord('sys_user');
        var result = {
            sunet_id: "",
            phone_number: "",
            email_id: "",
        };
        if (user.get(userName)) {
            result.sunet_id = user.user_name.toString();
            result.phone_number = user.phone.toString();
            result.email_id = user.email.toString();
            //toString();
        }
        return JSON.stringify(result);
    },
    type: 'AutoPopulateUserFieldDetailsUtil'
});
```

---

Reserve Space/Conference Room in Science & Engineering Quad - SU - don't allow past start date

SU - don't allow past start date

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue != '') {
        var ga = new GlideAjax('SuRSCatDateValidation');
        ga.addParam('sysparm_name', 'checkPastSDate');
        ga.addParam('sysparm_date', newValue);
        ga.getXML(parseScript);
    }

    function parseScript(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer == 'past') {
            g_form.clearValue('EventDateAndTimeStart');
            g_form.showFieldMsg("EventDateAndTimeStart", "You can't select past date.", 'error');
            return;
        }
    }

}

```

SuRSCatDateValidation

```
var SuRSCatDateValidation = Class.create();
SuRSCatDateValidation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	checkPastSDate: function() {
		var publisheddateTime = new GlideDateTime(this.getParameter('sysparm_date'));
		var publisheddate = publisheddateTime.getDate();
		var todayDateTimeS = new GlideDateTime(gs.nowDateTime());
		var todayDateS = todayDateTimeS.getDate();
		if (publisheddate < todayDateS) {
			return 'past';
		} else
			return 'not past';

	},

	getNumberOfDaysFromToday: function() {
		var start = new GlideDateTime(this.getParameter('sysparm_date'));
		var end = new GlideDateTime(gs.nowDateTime());
		end = new GlideDateTime(end.getDate()+' 00:00:00');
		var diff = GlideDateTime.subtract(end, start);
		var days = diff.getRoundedDayPart();
		return days;
	},

	checkPastFDate: function() {
		var pdateTime = new GlideDateTime(this.getParameter('sysparm_date'));
		var pdate = pdateTime.getDate();
		var strtDate = this.getParameter('sysparm_stdate');
		var todayDateTimeF = new GlideDateTime(gs.nowDateTime());
		var todayDateF = todayDateTimeF.getDate();
		if (pdate < todayDateF) {
			return 'past';
		} else {
			if (strtDate > pdate) {
				return 'greater';
			} else {
				return 'good';
			}
		}
	},



	type: 'SuRSCatDateValidation'
});
```

---

Request GSB Media Services

SU - Event Name - On Change

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   g_form.hideFieldMsg('changeCancellationInstructions', false);
  var alpha = /^[\sA-Za-z0-9!@#$%^&*=+-_(),.?":{}|<>'"]{8,50}$/;
  var BusinessCase=g_form.getValue('eventTitle');
  //alert("value"+BusinessCase);
  var res=alpha.test(BusinessCase);
  if (!res) {
g_form.showFieldMsg('eventTitle', ' Event Name must be between 8 and 50 characters in length.','error');
//alert(' Event Name must be between 8 and 50 characters in length.');
return false;
  }
return true;
}

```

SU - GSB Compare start time vs. End time

```
function onSubmit() {
var start_time = g_form.getValue('startTime');
var end_time = g_form.getValue('end_time');

answer = true;
if (end_time < start_time || end_time == start_time ){
alert("The Event End Time has to be greater than the Event Start Time.");
//g_form.setValue('var_date_from', '');
//g_form.setValue('var_date_to', '');
return false;
}
}
```

SU - Event Title - on submit

```
function onSubmit() {
  g_form.hideFieldMsg('changeCancellationInstructions', false);
  var alpha = /^[\sA-Za-z0-9!@#$%^&*=+-_(),.?":{}|<>'"]{8,50}$/;
  var BusinessCase=g_form.getValue('eventTitle');
  //alert("value"+BusinessCase);
  var res=alpha.test(BusinessCase);
  if (!res) {
g_form.showFieldMsg('eventTitle', ' Event Name must be between 8 and 50 characters in length.','error');
alert(' Event Name must be between 8 and 50 characters in length.');
return false;
  }
return true;
}
```

SU - GSB Compare start and End times

```
function onSubmit() {
var start_time = g_form.getValue('event_start_time');
var end_time = g_form.getValue('event_end_time');

if (end_time < start_time){
alert("The Event End Time has to be greater than the Event Start Time.");
return false;
}
answer = true;
}

```

SU - Validate Event Start Date Time

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   //Type appropriate comment here, and begin script below
			g_form.hideFieldMsg("eventDate", true);
		    var ga = new GlideAjax("GSBMediaSRDateTimeUtils");
           ga.addParam("sysparm_name", "ValidateEventStart");
           ga.addParam("sysparm_eventstart", newValue);
           ga.getXML(checkDate);

function checkDate(response) {
	var answer = response.responseXML.documentElement.getAttribute("answer");

	switch (answer.toString()) {
		case 'lessZero':
			g_form.clearValue('eventDate');
			g_form.showFieldMsg("eventDate", "You entered: "+newValue+". Events cannot take place in the past.", 'error');
			break;
		case 'lessFalse':
			g_form.showFieldMsg("eventDate", "We cannot guarantee that service requests made within 24hrs of the event start time will be seen and processed in time for your event.", 'error');
			break;
		case 'maxFalse':
			g_form.clearValue('eventDate');
			g_form.showFieldMsg("eventDate", "You entered: "+newValue+". Events cannot take place more than two years in the future", 'error');
			break;
		default:
			return;
	}
}
}

```

GSBMediaSRDateTimeUtils

```
var GSBMediaSRDateTimeUtils = Class.create();
GSBMediaSRDateTimeUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	ValidateEventStart : function() {
		var eventDate = this.getParameter('sysparm_eventstart');
		var nowTime = gs.nowDateTime();
		var startDT = new GlideDate();
		startDT.setDisplayValue(nowTime);
		var endDT = new GlideDate();
		endDT.setDisplayValue(eventDate);
		var duration = new GlideDuration();
		duration= GlideDate.subtract(startDT, endDT);
		var diff = duration.getDayPart();
		gs.log('diff '+diff);
		gs.log("diff nowTime "+nowTime+"eventDate "+eventDate);
		if(diff<0){
			return 'lessZero';
		}
		else if(diff==1 || diff==0){
			return 'lessFalse';
		}
		else{
			var gdt = new GlideDateTime(nowTime);
			gdt.addYears(2);
			var maxTime = gdt.getDisplayValue();
			if(eventDate>=maxTime){
				return 'maxFalse';
			}
			else
				return true;
		}
	},
	type: 'GSBMediaSRDateTimeUtils'
});
```

---

Add CrashPlan Service - SU Limit Max Length

```
function onSubmit() {
	var control = g_form.getControl('crashPlanOrg');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Requested CrashPlan Organization name field cannot have more than 150 characters");
		return false;
	}
	control = g_form.getControl('numberOfUsers');
	if ((isNaN( control.value) ||  control.value <= 0) &&  g_form.getValue("limitUsers") == "Yes")
	{
		g_form.addErrorMessage("How many users field must have a valid number greater than 0");
		return false;
	}
}
```

---

Change or Cancel Point-to-point Circuit Service

SU Limit Max Length

```

function onSubmit() {
	var control = g_form.getControl('carrier_name');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Carrier Name / Point-of-sale Number field cannot have more than 150 characters");
		return false;
	}
	control = g_form.getControl('carrier_circuit_number');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Carrier Circuit ID/Phone Number field cannot have more than 150 characters");
		return false;
	}

	control = g_form.getControl('select_room');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Telecom room Field cannot have more than 150 characters");
		return false;
	}
	control = g_form.getControl('select_room_2');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Telecom room Field cannot have more than 150 characters");
		return false;
	}
	control = g_form.getControl('tso_jack_number');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Rack/Equipment/Port Information Field cannot have more than 150 characters");
		return false;
	}
	control = g_form.getControl('tso_jack_number_2');
	if (control.value.length > 150)
	{
		g_form.addErrorMessage("Rack/Equipment/Port Information Field cannot have more than 150 characters");
		return false;
	}
}

```

---

Request a Food Truck -

SU - Fetch Email ID Load

```
function onLoad() {
      var userName = g_form.getReference('name', fetchDetails);

    function fetchDetails(userName) {
        g_form.setValue('email', userName.email);
    }

}
```

SU - Restrict no of food trucks requeste

```
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var regEx = /^[0-9]*$/;
    if ((newValue == 0) || (!regEx.test(newValue)) || newValue > 8) {
        g_form.clearValue('number_of_food_trucks_requested');
        g_form.showFieldMsg("number_of_food_trucks_requested", "The location will determine how many food trucks would be allowed", 'error');
    }
}
```

SU - Validate Date of event/activity

```
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	if (newValue != '') {
		var ga = new GlideAjax('SuRSCatDateValidation');
		ga.addParam('sysparm_name', 'getNumberOfDaysFromToday');
		ga.addParam('sysparm_date', newValue);
		ga.getXML(parseScript);
	}

	function parseScript(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		if (answer <= 14) {
			//g_form.clearValue('date_of_event_activity');
			g_form.showFieldMsg("date_of_event_activity", "The date entered is less than 2 weeks so your request may be denied.",'error');
		}
	}

}
```

SuRSCatDateValidation

```
var SuRSCatDateValidation = Class.create();
SuRSCatDateValidation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	checkPastSDate: function() {
		var publisheddateTime = new GlideDateTime(this.getParameter('sysparm_date'));
		var publisheddate = publisheddateTime.getDate();
		var todayDateTimeS = new GlideDateTime(gs.nowDateTime());
		var todayDateS = todayDateTimeS.getDate();
		if (publisheddate < todayDateS) {
			return 'past';
		} else
			return 'not past';

	},

	getNumberOfDaysFromToday: function() {
		var start = new GlideDateTime(this.getParameter('sysparm_date'));
		var end = new GlideDateTime(gs.nowDateTime());
		end = new GlideDateTime(end.getDate()+' 00:00:00');
		var diff = GlideDateTime.subtract(end, start);
		var days = diff.getRoundedDayPart();
		return days;
	},

	checkPastFDate: function() {
		var pdateTime = new GlideDateTime(this.getParameter('sysparm_date'));
		var pdate = pdateTime.getDate();
		var strtDate = this.getParameter('sysparm_stdate');
		var todayDateTimeF = new GlideDateTime(gs.nowDateTime());
		var todayDateF = todayDateTimeF.getDate();
		if (pdate < todayDateF) {
			return 'past';
		} else {
			if (strtDate > pdate) {
				return 'greater';
			} else {
				return 'good';
			}
		}
	},



	type: 'SuRSCatDateValidation'
});
```

SU - don't allow past date fulfiller

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
   if (newValue != '') {
        var ga = new GlideAjax('SuRSCatDateValidation');
        ga.addParam('sysparm_name', 'checkPastSDate');
        ga.addParam('sysparm_date', newValue);
        ga.getXML(parseScript);
    }

    function parseScript(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer == 'past') {
            g_form.clearValue('enter_to_be_completed_fire_inspection_date');
            g_form.showFieldMsg("enter_to_be_completed_fire_inspection_date", "You can't select past date.", 'error');
            return;
        }
    }

}
```

SU - FDT time cannot be before FTA time

```
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	//Type appropriate comment here, and begin script below

	var start_time = g_form.getValue('food_truck_arrival_time');
	var end_time = g_form.getValue('food_truck_departure_time');

	start_time = start_time.split(" ");
	var time = start_time[0].split(":");
	var stime = time[0];
	if(start_time[1] == "PM" && stime<12) stime = parseInt(stime) + 12;
	start_time = stime + "." + time[1] ;//+ ":00";

	end_time = end_time.split(" ");
	var time1 = end_time[0].split(":");
	var etime = time1[0];
	if(end_time[1] == "PM" && etime<12) etime = parseInt(etime) + 12;
	end_time = etime + "." + time1[1] ;//+ ":00";

	if (start_time != '' && end_time != '') {
// 		alert(start_time);
// 		alert(end_time);
		if (Number(end_time) <= Number(start_time)) {
			g_form.addErrorMessage("Food truck departure time cannot be before Food truck arrival time.");
			g_form.clearValue('food_truck_departure_time');
			return false;
		}
	}
}
```

SU - Allow up to 3 preference to select

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var listValue ='if_you_have_a_specific_food_truck_preference_please_select_up_to_3_from_the_list';
    var maxOptions = 3;
    var myListCollector = g_list.get(listValue);
    var selectedOptions = g_form.getValue(listValue).split(',');
    if (selectedOptions.length > maxOptions) {
        //Remove the last item
        myListCollector.removeItem(selectedOptions[selectedOptions.length - 1]);
        g_form.addErrorMessage('You cannot select more than ' + maxOptions + ' options.');
    }
}
```

SU - End time cannot be before Start time

```
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	//Type appropriate comment here, and begin script below

	var start_time = g_form.getValue('start_time');
	var end_time = g_form.getValue('end_time');

	start_time = start_time.split(" ");
	var time = start_time[0].split(":");
	var stime = time[0];
	if(start_time[1] == "PM" && stime<12) stime = parseInt(stime) + 12;
	start_time = stime + "." + time[1] ;//+ ":00";

	end_time = end_time.split(" ");
	var time1 = end_time[0].split(":");
	var etime = time1[0];
	if(end_time[1] == "PM" && etime<12) etime = parseInt(etime) + 12;
	end_time = etime + "." + time1[1] ;//+ ":00";

	if (start_time != '' && end_time != '') {
// 		alert(start_time);
// 		alert(end_time);
		if (Number(end_time) <= Number(start_time)) {
			g_form.addErrorMessage("End time cannot be before Start time.");
			g_form.clearValue('end_time');
			return false;
		}
	}
}
```

---

Submit Approved Travel Medical Accommodations for Faculty, Staff and Students

SU Hide Attachment

```
function onLoad() {

    try {
        var attachment = top.document.getElementById("su_attachment");
        if (attachment) {
            attachment.style.display = 'none';
        }

    } catch (e) {
        //can't do anything.
    }
}

```

---

Request Client Technology Solutions & Consulting Services

SU - Auto populate user details onLoad

```
function onLoad() {
    var ga = new GlideAjax("autoPopulateUserDetailsOnLoad");
    ga.addParam("sysparm_name", "user_info");
    ga.getXML(ajaxResponse);

    function ajaxResponse(serverResponse) {
        var result = serverResponse.responseXML.getElementsByTagName("result");
        //var userName = result[0].getAttribute("users");
        var userEmail = result[0].getAttribute("email_id");
		var userPhone = result[0].getAttribute("phone_number");
        var userDepartment = result[0].getAttribute("department_name");
		g_form.setValue('emailAddress', userEmail);
        g_form.setValue('phoneNumber', userPhone);
        g_form.setValue('groupOrDepartment', userDepartment);
    }
}
```

autoPopulateUserDetailsOnLoad

```
var autoPopulateUserDetailsOnLoad = Class.create();
autoPopulateUserDetailsOnLoad.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    user_info: function() {
        var result = this.newItem("result");
        var logged_user = gs.getUserID();
        var user_detail = new GlideRecord('sys_user');
        user_detail.addQuery('sys_id', logged_user);
        user_detail.query();
        while (user_detail.next()) {
			//result.setAttribute("users", user_detail.sys_id);
            result.setAttribute("email_id", user_detail.email);
            result.setAttribute("phone_number", user_detail.phone);
            result.setAttribute("department_name", user_detail.department.getDisplayValue());
        }
    },
    type: 'autoPopulateUserDetailsOnLoad'
});

```

---

Google Lists - General Request

SU - Validate List Name Value

```

function onSubmit() {
    var alpha = /^(?!\.)(?!.*\.$)(?!.*?\.\.)[A-Za-z0-9][A-Za-z0-9-._]+[A-Za-z0-9]$/;
    var BusinessCase = g_form.getValue('listName');
	var res = alpha.test(BusinessCase);
	var isItStartedwithSecure = BusinessCase.toLowerCase().startsWith("secure-");
    if (!res || isItStartedwithSecure || BusinessCase.toString().trim().length < 9 || BusinessCase.toString().trim().length > 64) {
        //g_form.showFieldMsg('listName', 'Requested name does not meet required guidelines.  Please review guidelines mentioned above.', 'error');
		g_form.clearMessages();
		g_form.addErrorMessage('List name does not meet required guidelines.  Please review guidelines.');
		removeAllDecorationsAndMessages();
		showError();
        //alert(' Event Name must be between 8 and 50 characters in length.');
        return false;
    }
    var status = g_scratchpad.status;
    var code = g_scratchpad.code;
    //alert('ISVALIDATED '+g_scratchpad.hasValidated);
    if (g_scratchpad.hasValidated) {
        if (status == 200 && code == "00") {
            return true;
        } else if(status == 200 && code.indexOf("1") >= 0) {
			g_form.clearMessages();
            g_form.addInfoMessage("List Name Already in Use");//List name not available
            return false;
        }else{
			g_form.addErrorMessage("We are unable to process your request at this time, please try again later");
			return false;
		}
    } else {
        g_form.clearMessages();
        g_form.addInfoMessage('List name is being validated, please wait for few seconds.');
        return false;
    }

	function showError() {
        g_form.showFieldMsg('listName', 'Invalid List Name!', 'listName is not available', true);
        g_form.addDecoration('listName', 'custom-error', 'INVALID');
    }

	function removeAllDecorationsAndMessages() {
        g_form.hideFieldMsg('listName', true);
        g_form.removeDecoration('listName', 'custom-loading', 'VALIDATING');
        g_form.removeDecoration('listName', 'custom-success', 'VALID');
        g_form.removeDecoration('listName', 'custom-error', 'INVALID');
    }

    /*
    //g_form.hideFieldMsg('changeCancellationInstructions', false);
    var alpha = /^(?!\.)(?!.*\.$)(?!.*?\.\.)[-_.sA-Za-z0-9]{9,64}$/;
    var BusinessCase = g_form.getValue('listName');
    //alert("value"+BusinessCase);
    var res = alpha.test(BusinessCase);
    if (!res) {
        g_form.showFieldMsg('listName', ' Requested name does not meet required guidelines.  Please review guidelines mentioned above.', 'error');
        //alert(' Event Name must be between 8 and 50 characters in length.');
        return false;
    }
    return true;
	*/
}
```

---

Request Changes to Google Drive Storage

check on list collector on Notifications field

---

Adding a Room to Axess/PeopleSoft/CLSS

Capacity accepts ONLY numbers

```
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == '') {
  return;
  }
  var regexp = /^[+]?\d*$/;
  if(!regexp.test(newValue)){
  alert('Capacity - Please enter numeric value');
  //g_form.showFieldMsg('Capacity', ' Please enter numeric value','error');
  g_form.setValue('Capacity','');
  }
}


```

---

Reserve Space/Conference Room in Science & Engineering Quad

SU - don't allow past finish date

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue != '') {
        var ga = new GlideAjax('SuRSCatDateValidation');
        ga.addParam('sysparm_name', 'checkPastFDate');
        ga.addParam('sysparm_date', newValue);
        ga.addParam('sysparm_stdate', g_form.getValue('EventDateAndTimeStart'));

        ga.getXML(parseScript);
    }

    function parseScript(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer == 'past') {
            g_form.clearValue('EventDateAndTimeFinish');
            g_form.showFieldMsg("EventDateAndTimeFinish", "You can't select past date.", 'error');
            return;
        }
        if (answer == 'greater') {
            g_form.clearValue('EventDateAndTimeFinish');
            g_form.showFieldMsg("EventDateAndTimeFinish", "Event Finish Date and Time should be after Event Start Date and Time ", 'error');
            return;
        }
    }

}
```

---

Ad Hoc Data Request (SoM)

SU - UserSUNetReadOnly

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
	  // To handle the scenario when cross is pressed
	  g_form.setMandatory('sunet_id', true);
      return;
   }

   if(g_form.getValue('user_name') != '') {
	   g_form.setMandatory('sunet_id', false);
	   g_form.setReadOnly('sunet_id', true);
   }
}
```

---

Request a Nero Google Cloud Platform (GCP) Project

SU - VerifyProjectSuffixOnChange

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   // Verify projectSuffix using RegEx in onChange
   var project_suffix = g_form.getValue('projectSuffix');

	//var re = new RegExp("^[a-z0-9-]+[a-z0-9]$");
	//var re = new RegExp("[a-z]{1}[a-z1-9-]{0,6}[a-z1-9]{1}");
	var re = new RegExp("^[a-z]{1}[a-z0-9-]{0,5}[a-z0-9]{1}$");
	if(!re.test(project_suffix) || project_suffix.toString().length > 7) {
		var errstr='Please enter valid project name. It must be 2 to 7 characters. Can have lowercase letters, numbers, or hyphens. It must start with a lowercase letter and end with a letter or number. Trailing hyphens are prohibited.';
		g_form.addErrorMessage(errstr);
		g_form.setValue('projectSuffix','');
		return false;
	}
}

```

---

Request GSB Media Services

SU - Event Title - on submit

```

function onSubmit() {
  g_form.hideFieldMsg('changeCancellationInstructions', false);
  var alpha = /^[\sA-Za-z0-9!@#$%^&*=+-_(),.?":{}|<>'"]{8,50}$/;
  var BusinessCase=g_form.getValue('eventTitle');
  //alert("value"+BusinessCase);
  var res=alpha.test(BusinessCase);
  if (!res) {
g_form.showFieldMsg('eventTitle', ' Event Name must be between 8 and 50 characters in length.','error');
alert(' Event Name must be between 8 and 50 characters in length.');
return false;
  }
return true;
}

```

---

Create website on Stanford Sites

SU - alphanumeric characters only

```
function onSubmit() {
// Type appropriate comment here, and begin script below
   //var alpha = new RegExp("^[a-zA-Z0-9]*$");
var alpha = /^[0-9a-zA-Z]*$/;
  var BusinessCase=g_form.getValue('webSiteAddress');
  //alert("value"+BusinessCase);
  var res=alpha.test(BusinessCase);
  if (!res) {
       //g_form.showFieldMsg('justification', 'Invalid input', 'error');
alert ("Only alphanumeric characters can be entered in the 'Your website address' field");
return false;
  }
return;
}
```

---

Add Mobile Service

SU - Validate 3 Digit Area Code

```
function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading || newValue == '') {

        return;
    }

    var regexp = /^([0-9]+[0-9]+[0-9])/;
    if (!regexp.test(newValue)) {

        //alert('Please enter a 3 digit number');
        g_form.clearValue('preferredAreaCode');
        g_form.showFieldMsg('preferredAreaCode', "Please enter a 3 digit number.", 'error', true);
    }
}
```

---

SU - AlphaNumeric and dash only

```
function onSubmit() {

    var alpha = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;///^[a-zA-Z0-9-_]+$/; ///^[0-9a-zA-Z\-]*$/;
    //alert(g_form.getValue("serial_number"));
	//var multiRowVariableSet = JSON.parse(g_form.getValue('serial_number'));
	//alert(multiRowVariableSet);
    var serialNum = g_form.getValue('serialNumberValue');
	var res = alpha.test(serialNum);
    if (!res) {
        alert("Only alphanumeric characters and dashes can be entered in the 'Serial Number' field.");
        g_form.clearValue('serialNumberValue');
        return false;
    }

    /*var ga = new GlideAjax('SUAssetUtlAjax');
    ga.addParam('sysparm_name', 'validateSerialNumber');
    ga.addParam('sysparm_serial_number', serialNum);
    ga.getXML(getSerialNum);*/
	//alert(serialNum+":"+ga.getXMLAnswer());

}

function getSerialNum(response) {
    var answer = response.responseXML.documentElement.getAttribute("answer");
	//alert(answer);
    if (answer == "false") {
        g_form.setValue("serialNumberValue", "");
        alert("Duplicate serial number");
		return false;
    }

}
```

---

SU-ValidateCourseNumber

```
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
 var alpha = /^[0-9]{5,6}$/;
  var BusinessCase=g_form.getValue('canvasCourse');
  var res=alpha.test(BusinessCase);
  if (!res) {
g_form.clearValue('canvasCourse');
g_form.showFieldMsg('canvasCourse', ' Enter 5 to 6 numeric characters with no spaces.','error');
return false;
  }
return true;

}
```

Cancel A Scheduled Payment

SU Validate Amount Of Payment

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (!newValue.match(/^\d+\.\d{0,2}$/)) {
        g_form.showErrorBox("AmountOfPayment", "Input is not correct.");
    }

}
```

---

Change or Cancel Mobile Service

SU - Validate No Less Than 8 Digits

```
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    //var fieldValue = 8;

    // now check the length
    if (newValue.length < 8) {

        //alert("Please enter at least 8 digits.");
        g_form.clearValue('deviceIMEI');
		g_form.showFieldMsg('deviceIMEI',"Please enter at least 8 digits.",'error', true);

    }
}
```
