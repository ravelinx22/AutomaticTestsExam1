var assert = require('assert');
describe('los estudiantes login', function() {
    it('should search for a professor and visit its page', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('.Select-control', 5000);
        var searchInput = browser.element('.Select-control');
        searchInput.click();
        searchInput.keys("Mario Linares");

        browser.waitForVisible('.Select-option', 5000);
        var option = browser.element('.Select-option');
        option.click();
        browser.pause(3000);

        browser.waitForVisible('.nombreProfesor', 5000);
        var nombreProfesor = browser.element('.nombreProfesor').getText();
        expect(nombreProfesor).toBe('Mario Linares Vasquez');
    });

    it('should search for a class and visit its page', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('.Select-control', 5000);
        var searchInput = browser.element('.Select-control');
        searchInput.click();
        searchInput.keys("Pruebas Automaticas");

        browser.waitForVisible('.Select-option', 5000);
        var option = browser.element('.Select-option');
        option.click();
        browser.pause(3000);

        browser.waitForVisible('.nombreProfesor', 5000);
        var nombreProfesor = browser.element('.nombreProfesor').getText();
        expect(nombreProfesor).toBe('Pruebas Automáticas - MISO4208');
    });
});
