function arrayList () {
	this.array = [];
}

arrayList.prototype = {

	// add an item from the array
	add: function (val) {
		
		this.array.push (val);
	},

	// remove an item from the array 
	remove: function(val) {
		var count = 0;
		var i;

		for(i = 0; i < this.array.length; i++) {
			if(this.array.length === val) {
				// removes array from the index
				this.array.splice(i,1); 
				i-- ;
			}
		}
		return counter;

	},

	//getindex

	getIndex: function(item) {
        var i,result;

		for(i = 0; i < this.array.length; i++) {
			if(this.array.length === item) {
				result = this.array.indexOf(item);
			}

	    }
	    return result;
	},

	//search
	search: function(val) {
		val x;
		mystr = this.array.toString();
		return x = this.mystr.search(val);
	},

	//sort
	sort: function (val) {
		return this.array.sort(function (a,b){return a - b;});
	},
	// give the length of the array
	length: function (array) {
		return this.array.length;
	}	
}

var ar1 = new arrayList();
ar1.add(10);
ar1.add(20);
ar1.add(30);
ar1.add(40);
ar1.add(50);

console.log(ar1,array);

ar1.remove(30);

console.log(ar1.getIndex(50));

console.log(ar1.array));

console.log(ar1.length(ar1.array));

console.log(ar1.sort());