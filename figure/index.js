'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
    this.hookFor('datang:controller');
    this.hookFor('datang:figdirective');
    this.hookFor('datang:view');
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
    this.generateSourceAndTest(
        'figure',
        'spec/figure',
        'figures',
        this.options['skip-add'] || false
    );

};
