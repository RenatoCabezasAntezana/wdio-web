import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^SwagLabs login page is opened$/, async function () {
  console.log("Before opening browser ...");
  await browser.url("https://www.saucedemo.com/v1/");
  console.log("LLegue aca");
});

When(/^Write (.*) and (.*)$/, async function (username, password) {

  let inputUsername = await $(`[name="user-name"]`)
  let inputPassword = await $(`[name="password"]`)

  await inputUsername.setValue(username);
  await inputPassword.setValue(password);
});

Then(/^Click on the button submit$/, async function () {
  let buttonSubmit = await $(`[type="submit"]`);
  await buttonSubmit.click();
});


Then(/^URL should match (.*)/, async function (expectedURL) {
  await expect(browser).toHaveUrl(expectedURL);
})