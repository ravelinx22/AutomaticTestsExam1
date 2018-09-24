var assert = require('assert');
describe('Los estudiantes authentication', function() {
  it('Should visit los estudiantes and failed at sign up', function () {
      browser.url('https://losestudiantes.co');
      browser.click('button=Cerrar');
      browser.waitForVisible('button=Ingresar', 5000);
      browser.click('button=Ingresar');

      var cajaSignUp = browser.element('.cajaSignUp');

      var nameInput = cajaSignUp.element('input[name="nombre"]');
      nameInput.click();
      nameInput.keys('William ');

      var apellidoInput = cajaSignUp.element('input[name="apellido"]');
      apellidoInput.click();
      apellidoInput.keys('Ravelo');

      var mailInput = cajaSignUp.element('input[name="correo"]');
      mailInput.click();
      mailInput.keys('wr.ravelo@uniandes.edu.co');

      var passwordInput = cajaSignUp.element('input[name="password"]');
      passwordInput.click();
      passwordInput.keys('Test123456');

      var programSelector = cajaSignUp.element('select[name="idPrograma"]');
      programSelector.selectByValue("12");

      var acceptTerms = cajaSignUp.element('input[name="acepta"]');
      acceptTerms.click();

      cajaSignUp.element('button=Registrarse').click()

      browser.waitForVisible('.text-muted.lead', 5000);
      var alertText = browser.element('.text-muted.lead').getText();
      expect(alertText).toContain('Error: Ya existe un usuario registrado con el correo');
  });

    it('Should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('Should visit los estudiantes and log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('test@gmail.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('12345678');
        cajaLogIn.element('button=Ingresar').click()

        browser.waitForVisible('#cuenta', 5000);

        var isCuentaButtonVisible = browser.element('#cuenta').isVisible();
        var isIngresarButtonVisible = browser.element('button=Ingresar').isVisible();
        expect(isCuentaButtonVisible).toBe(true);
        expect(isIngresarButtonVisible).toBe(false);
    });
});
