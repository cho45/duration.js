function duration (str) {
	var ret = 0, map = {
		sec : 1, min : 60, hour : 3600, day : 86400, week : 604800, month : 2592000, year : 31536000
	};
	str.replace(/(\d+)\s*(msec|sec|min|hour|day|week|month|year)s?/g, function (_, num, unit) {
		ret += +num * map[unit];
	});
	return ret * 1000;
}

/*
function eq (obj, expect) {
	if (obj == expect) {
		print("ok\n");
	} else {
		print("ng\nexpect:\n" + uneval(expect) + "\nbut:\n" + uneval(obj) + "\n");
	}
};

eq(duration("1 sec"), 1000);
eq(duration("1 min"), 60 * 1000);
eq(duration("1 hour"), 60 * 60 * 1000);
eq(duration("1 day"), 24 * 60 * 60 * 1000);
eq(duration("1 week"), 7 * 24 * 60 * 60 * 1000);
eq(duration("1 month"), 30 * 24 * 60 * 60 * 1000);
eq(duration("1 year"), 365 * 24 * 60 * 60 * 1000);

eq(duration("1 day, 12 hour"), (24 * 60 * 60 + 12 * 60 * 60) * 1000);
*/