// ==UserScript==
// @name        Qbis auto login
// @namespace   Qbis
// @include     https://login.qbis.se/
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// @description Automatic login for the swedish(?) QBis business system (since firefox doesn't automatically fill in company name). \
//              It takes you directly to the Timesheet
// ==/UserScript==
var company = GM_getValue('Company');
if (!company)
{
  company = prompt('Please enter a company name', 'CompanyName');
  GM_setValue('Company', company);
}
document.getElementById('txtCompany').value = company;
setTimeout(function () {
  document.getElementById('btnLogin').click();
  setTimeout(function () {
    location.href = '/Time/Timesheet';
  }, 300);
}, 300);