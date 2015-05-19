'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);

    this.argument('dataKey', { type: String, required: true });
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
    this.generateSourceAndTest(
        'figdirective',
        'spec/figdirective',
        'directives',
        this.options['skip-add'] || false
    );
};
