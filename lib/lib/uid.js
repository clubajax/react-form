'use strict';

var uidMap = {};
function uid() {
	var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uid';

	uidMap[prefix] = uidMap[prefix] || 0;
	uidMap[prefix]++;
	return prefix + '-' + uidMap[prefix];
}

module.exports = uid;