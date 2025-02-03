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
