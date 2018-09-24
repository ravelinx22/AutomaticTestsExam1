//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
	Given('I go to losestudiantes home screen', () => {
		browser.url('/');
		if(browser.isVisible('button=Cerrar')) {
			browser.click('button=Cerrar');
		}
	});

  When('I search for {string}', text => {
    browser.waitForVisible('.Select-control', 5000);
    var searchInput = browser.element('.Select-control');
    searchInput.click();
    searchInput.keys(text);
    browser.waitForVisible('.Select-option', 5000);
  });

  When('I click the search box results first option', () => {
    var option = browser.element('.Select-option');
    option.click();
  });

  // Authentication
	When('I open the login screen', () => {
		browser.waitForVisible('button=Ingresar', 5000);
		browser.click('button=Ingresar');
	});

  Then('I expect to see error {string}', error => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});

  Then('I dont expect to see error {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });

  // Login
  When(/^I fill login with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });

	When('I try to login', () => {
		var cajaLogIn = browser.element('.cajaLogIn');
		cajaLogIn.element('button=Ingresar').click()
	});

	Then('I expect to have a my account button', () => {
		browser.waitForVisible("#cuenta", 5000);
		var button = browser.element('#cuenta');
		expect(button).to.exist;
	});

  // Sign Up
  When(/^I fill sign up name with (.*)$/ , (name) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="nombre"]');
		input.click();
		input.keys(name);
	});

	When(/^I fill sign up last name with (.*)$/ , (last_name) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="apellido"]');
		input.click();
		input.keys(last_name);
	});

	When(/^I fill sign up email with (.*)$/ , (email) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="correo"]');
		input.click();
		input.keys(email);
	});

	When(/^I fill sign up password with (.*)$/ , (password) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="password"]');
		input.click();
		input.keys(password);
	});

	When('I accept the terms and conditions', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="acepta"]');
		input.click();
	});

	When('I select a program', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var programSelector = cajaSignUp.element('select[name="idPrograma"]');
		programSelector.selectByValue("12");
	});

	When('I try to sign up', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		cajaSignUp.element('button=Registrarse').click()
	});

  // Professor
  Given('I go to Mario Linares professor page', () => {
    browser.url('/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  Then('I expect to see the name of {string}', text => {
    browser.waitForVisible('.nombreProfesor', 5000);
    var nombreProfesor = browser.element('.nombreProfesor').getText();
    expect(nombreProfesor).to.equal(text);
  });

  When('I filter by class {string}', text => {
    var cajaMaterias = browser.element('.materias');
    var checkbox = cajaMaterias.element('input[name="id:' + text + '"]');
    checkbox.click();
	});

  Then('I expect class filter {string} should be checked', text => {
    var cajaMaterias = browser.element('.materias');
    var checkbox = cajaMaterias.element('input[name="id:' + text + '"]');
    expect(checkbox.isSelected()).to.equal(true);
  });

  When('I click see statistics option', () => {
    var statisticsOption = browser.element("#__next > div > div > div.jsx-331433728 > div > div.jsx-2519691570.column.columnLeft > div.jsx-1339787052.boxElement > div.jsx-1339787052.infoProfesor > div:nth-child(8) > center > a");
    statisticsOption.click()
    browser.waitForVisible('.modal-body', 5000);
  });

  Then('I expect to see professor trend statistics', () => {
    var modal = browser.element(".modal-body");
    var viz = modal.element("#tendencia_viz");
    expect(viz.isVisible()).to.equal(true);
  });

  Then('I expect to see professor general statistics', () => {
    var modal = browser.element(".modal-body");
    var viz = modal.element("#estadisticas_profesor");
    expect(viz.isVisible()).to.equal(true);
  });
});
