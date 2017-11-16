'use strict';

var CDP = require('chrome-remote-interface');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.chrome_headless = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    CDP.Protocol({port: 9222}, function (err, protocol) {
      test.ifError(err);
      test.done();
    });
  },
  custom_options: function(test) {
    test.expect(1);

    CDP({port: 9999}, function (client) {
      var Page = client.Page;
      Page.loadEventFired(function (e) {
        client.close();
        test.ok(e);
        test.done();        
      });
      
      Page.enable().then(function () {
        return Page.navigate({url: 'https://google.com'});
      }).catch(function (err) {
        test.ifError(err);
        test.done();
      });
    }).on('error', function (err) {
      test.ifError(err);
      test.done();
    });
  },
};
