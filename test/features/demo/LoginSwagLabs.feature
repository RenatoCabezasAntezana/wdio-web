Feature: Demo feature

    Login Successfull and unsuccessfull
    @renato
    Scenario Outline: Login Successfull
        Given SwagLabs login page is opened
        When Write standard_user and secret_sauce
        Then Click on the button submit
        Then URL should match https://www.saucedemo.com/v1/inventory.html

    @demo @smoke
    Scenario Outline: Login Unsuccessfull
        Given SwagLabs login page is opened
        When Write <username> and <password>
        Then Click on the button submit
        Then Message should match <ExpectedURL>

        Examples:
            | username        | password     | ExpectedURL                                                               |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
            | asd             | secret_sauce | Epic sadface: Username and password do not match any user in this service |

