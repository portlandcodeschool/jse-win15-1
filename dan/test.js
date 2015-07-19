// Here be pirate-script!
function varrr(name,val) {
	return window[name] = {
		amt:val,
		be: function(some) {
			if (arguments.length) {
				this.amt = some;
			} else return there.be(this);
		},
		valueOf: function() {return this.amt},
		toString:function() {return String(this.amt)}
	}
};
var captain=console;
var aye = {
	valueOf: function() {return true},
	toString:function() {return 'aye'}
}
var nay = {
	valueOf: function() {return false},
	toString:function() {return 'nay'}
}

var there = {
	be:function(thing) {
		return (thing.amt)? aye:nay;
	}
};

varrr('treasure');
varrr('rum');
treasure.be(10);
rum.be(5);
varrr('meMates').be(4);
varrr('meShare').be(treasure/(meMates+1))

if (there.be(treasure)==aye) {
	while (there.be(rum)==aye && meShare<treasure) {
		//walk the plank!
		captain.log('splash!');
		rum.be(rum-1);
		meShare.be(treasure/(meMates--));
	}
}
