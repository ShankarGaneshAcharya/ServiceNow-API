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

---

Add Stanford Plan to Apple Watch - SU - Set End User Email

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

---
