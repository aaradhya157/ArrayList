function LinkedList() {
	this._length = 0;
	this._head = null
}
LinkedList.prototype = {
	add: function(data) {
		//creat a new node, place data in
		var node = {
			data:data,
			next:null
		},
		current;
		
		if (this._head===null) {
			this._head = node;
		} else {
			current = this._head;
			while (current.next) {
				current = current.next;
			}
			 current.next = node;
		}

		this._length++;
	},


	 item : function (index) {
	 	
	 	if(index > -1 && index < this._length){
			var current = this._head, i = 0;
			while(i++ < index){
				current = current.next;
			}
			return current.data;
		}else {
			return null;
		}
	},

	
    remove : function (index) {
    	
    	if (index > -1 && index < this._length) {
    		var current = this._head, previous, i = 0;
    		// removeing first item
    	    if (index === 0) {
    	    	this._head = current.next; 

    	    } else {
    	    	// find th right location
                while (i++ < index) {
                	previous = current;
                	current = current.next;
                }
                // skip over the item to remove
                previous.next = current.next;
    	    }
    	    // decrement the length
    	    this._length--;
    	    // return the value
    	    return current.data;
    	} else {
    		return null;
    	} 
    }

}

var list = new LinkedList ();
list.add ("Red");
list.add ("Blue");
list.add ("Pink");
list.add ("Yellow");

console.log(list.item(2));

list.remove(3);
console.log(list.item(3));

