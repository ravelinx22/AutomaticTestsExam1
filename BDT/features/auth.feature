Feature: Authentication into losestudiantes
  As a user I want to sign up and log in into losestudiantes in order to write opinions.

  Scenario Outline: Sign up failed with wrong inputs
		Given I go to losestudiantes home screen
		When I open the login screen
		And I fill sign up name with <name>
		And I fill sign up last name with <last_name>
		And I fill sign up email with <email>
		And I fill sign up password with <password>
		And I accept the terms and conditions
		And I try to sign up
		Then I expect to see error <error>

		Examples:
			| name  | last_name | email        | password | error                  |
			|william| ravelo    |test@gmail.com|          | Ingresa una contraseña |
			|william| ravelo    |              | 12345678 | Ingresa tu correo      |

	Scenario Outline: Sign up failed because of not accepting terms and conditions
		Given I go to losestudiantes home screen
		When I open the login screen
		And I fill sign up name with <name>
		And I fill sign up last name with <last_name>
		And I fill sign up email with <email>
		And I fill sign up password with <password>
		And I try to sign up
		Then I expect to see error <error>

		Examples:
			| name  | last_name | email        | password | error                                    |
			|william| ravelo    |test@gmail.com|12345678  | Debes aceptar los términos y condiciones |

  Scenario Outline: Login failed with wrong inputs
		Given I go to losestudiantes home screen
		When I open the login screen
		And I fill login with <email> and <password>
		And I try to login
		Then I expect to see error <error>

		Examples:
			| email            | password | error                    |
			|                  |          | Ingresa una contraseña   |
			| miso@gmail.com   |    1234  | Upss! El correo y        |

	Scenario Outline: Login success
		Given I go to losestudiantes home screen
		When I open the login screen
		And I fill login with <email> and <password>
		And I try to login
		Then I expect to have a my account button

		Examples:
			| email            | password |
			| test@gmail.com   |12345678  |
