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
