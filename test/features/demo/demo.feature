Feature: Demo feature

    Feature Description
    @demo
    Scenario Outline: Run first demo feature
        Given SwagLabs login page is opened
        When Write <username> and <password>
        Then Click on the button submit
        Then URL should match <ExpectedURL>

        Examples:
            | username      | password     | ExpectedURL                                 |
            | standard_user | secret_sauce | https://www.saucedemo.com/v1/inventory.html |
