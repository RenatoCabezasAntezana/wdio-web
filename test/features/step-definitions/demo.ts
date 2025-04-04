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
  await browser.url("/inputs")
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
  await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function () {
  /**
   * 1. Input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the flied and type or just addvalue
   * 3. Click and type
   * 4. 
   */
  let ele = $(`[type=number]`)
  await ele.setValue("12345")
})

Then(/^Windows handling manage$/, async function () {
  await browser.url("/windows")

  //Primer escenario cuando abrimos 2 pesta;as diferentes
  await $(`=Click Here`).click()
  await $(`=Elemental Selenium`).click()

  let currentWindowTitle = await browser.getTitle()
  let parentWinHandle = await browser.getWindowHandle()
  console.log(`>> currentWinTitlle: ${currentWindowTitle}`)

  //Switch to specific window
  let winHandles = await browser.getWindowHandles()  //Esto nos devuelve una matriz
  for (const element of winHandles) {
    console.log(`>>> Win handle: ${element}`)
    await browser.switchToWindow(element)
    currentWindowTitle = await browser.getTitle()
    if (currentWindowTitle === "Home | Elemental Selenium") {
      await browser.switchWindow(element)
      let headerTxtEleSel = await $(`<h1>`).getText()
      console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`)

      break;
    }
  }

  //Switch back to parent
  await browser.switchToWindow(parentWinHandle)
  let parentWinHeaderTxt = await $(`<h3>`).getText()
  console.log(`>> parentWinHeaderTxt: ${parentWinHeaderTxt}`)
  //Continue with rest of the execution

  
})