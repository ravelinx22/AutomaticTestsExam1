var assert = require('assert');
describe('los estudiantes login', function() {
    it('Should filter a professor page by a specific class', function () {
        browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
        browser.waitForVisible('button=Ingresar', 5000);

        var cajaMaterias = browser.element('.materias');
        var checkbox = cajaMaterias.element('input[name="id:ISIS3510"]');
        expect(checkbox.isSelected()).toBe(false);
        checkbox.click();
        expect(checkbox.isSelected()).toBe(true);
    });

    it('Should see a professors statistics', function () {
        browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.element("#__next > div > div > div.jsx-331433728 > div > div.jsx-2519691570.column.columnLeft > div.jsx-1339787052.boxElement > div.jsx-1339787052.infoProfesor > div:nth-child(8) > center > a").click()
        browser.waitForVisible('.modal-body', 5000);

        var modal = browser.element(".modal-body");
        var firstViz = modal.element("#tendencia_viz");
        var secondViz = modal.element("#estadisticas_profesor");

        expect(firstViz.isVisible()).toBe(true);
        expect(secondViz.isVisible()).toBe(true);
    });
});
