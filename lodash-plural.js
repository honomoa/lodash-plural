'use strict';

const _ = require('lodash');

function _plural(noun) {
    if (_.lastIndexOf(noun, 'y') === noun.length - 1) {
        return noun.substring(0, noun.length - 1) + 'ies';
    }
    return `${noun}s`;
}

_.mixin({ 'plural': _plural });

module.exports = _;
