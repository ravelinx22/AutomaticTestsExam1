function loadScript(callback) {
  var s = document.createElement('script');
  s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
  if (s.addEventListener) {
    s.addEventListener('load', callback, false);
  } else if (s.readyState) {
    s.onreadystatechange = callback;
  }
  document.body.appendChild(s);
}

function unleashGremlins(ttl, callback) {
  function stop() {
    horde.stop();
    callback();
  }
  var horde = window.gremlins.createHorde()
  .gremlin(gremlins.species.formFiller()
  .canFillElement(function(element) {
    return document.body.contains(element) && (matchesSelector(element, "textarea") || matchesSelector(element, 'input[type="text"]'));
  }))
  .gremlin(gremlins.species
    .clicker()
    .clickTypes(['click'])
    .canClick(function(element) {
      return document.body.contains(element) && (matchesSelector(element, "a") || matchesSelector(element, "button") || matchesSelector(element, "img"));
  }))

  horde.seed(1234);

  horde.after(callback);
  window.onbeforeunload = stop;
  setTimeout(stop, ttl);
  horde.unleash();

  function matchesSelector(el, selector) {
    if (el.webkitMatchesSelector) {
        matchesSelector = function(el, selector) {
            return el.webkitMatchesSelector(selector);
        };
    } else if (el.mozMatchesSelector) {
        matchesSelector = function(el, selector) {
            return el.mozMatchesSelector(selector);
        };
    } else if (el.msMatchesSelector) {
        matchesSelector = function(el, selector) {
            return el.msMatchesSelector(selector);
        };
    } else if (el.oMatchesSelector) {
        matchesSelector = function(el, selector) {
            return el.oMatchesSelector(selector);
        };
    } else {
        throw new Error('Unsupported browser');
    }
    return matchesSelector(el, selector);
  }
}

describe('Monkey testing with gremlins professor page', function() {

  it('it should not raise any error', function() {
    browser.url('/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(loadScript);

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(unleashGremlins, 50000);
  });

  afterAll(function() {
    browser.log('browser').value.forEach(function(log) {
      browser.logger.info(log.message.split(' ')[2]);
    });
  });
});
