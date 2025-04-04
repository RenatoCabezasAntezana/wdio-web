import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^SwagLabs login page is opened$/, async function () {
  console.log("Before opening browser ...");
  await browser.url("https://www.saucedemo.com/v1/");
  console.log("LLegue aca");
});

When(/^Write (.*) and (.*)$/, async function (username, password) {

  let inputUsername = $(`[name="user-name"]`)
  let inputPassword = $(`[name="password"]`)

  await inputUsername.setValue(username);
  await inputPassword.setValue(password);
});

Then(/^Click on the button submit$/, async function () {
  let buttonSubmit = $(`[type="submit"]`);
  await buttonSubmit.click();
});


Then(/^URL should match (.*)/, async function (expectedURL) {
  await expect(browser).toHaveUrl(expectedURL);
})

Then(/^Message should match (.*)/, async function (expectedMessage) {
  let message = $(`[data-test="error"]`);
  await expect(message).toHaveText(expectedMessage)
})

Given(/^A web page is opened$/, async function () {

})