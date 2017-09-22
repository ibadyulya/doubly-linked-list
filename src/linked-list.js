const Node = require('./node');

class LinkedList {
    constructor()
    {
        // #constructor, assign 0 to this.length;
        this.length = 0; 
        this._head = null;
        this._tail = null;
    }

    append(data) 
    {
        var node = new Node(data);
        //'#append', should assign any nodes to this._head and this._tail if list is empty;
        if (!this.length) 
        {
            this._head = node;
            this._tail = node;
        } 
        else 
        {
            //'#append', should add new data to the end of list;
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
          this.length++;
          return this;
    }

    head() 
    {
        //'#head', should return data from the this.head;
        return this._head.data;
    }

    tail() 
    {
        //'#tail', should return data from the this.tail;
        return this._tail.data;
    }

    at(index) 
    {
        //#at, should return Node.data by index;
        var currNode = this._head;
        var count = 0;
        if (index > 0 || index < this.length)
        {
            while (count < index) 
            {
                currNode = currNode.next;
                count++;
                
            }
        }
        return currNode.data;
    }
 

    insertAt(index, data)
    {
        //#insertAt, should insert data by index;
        var node = new Node(data);
        var currNode = this._head;
        var count = 0;
        if (index > 0 || index < this.length) 
        { 
             if (index == this.lenght) 
            {
                this.append(data);
            }
            else 
            {
                while (count < index) 
                {
                    currNode = currNode.next;
                    count++;
                }
                node.prev = currNode.prev;
                node.next = currNode;
                currNode.prev.next = node;
                currNode.prev = node;
            }
            this.length++;
            return this;
        }
    }

    isEmpty() 
    {
        //#isEmpty, should return true if list is empty;
        return (!this.length) ? true : false;    
    }

    clear() 
    {
       //#clear, should clear the list;
       this.length = 0;
       this._head.data = null; 
       this._tail.data = null;
       return this;
      
    }

    deleteAt(index) 
    {
        //deleteAt, should delete element by index;
        var currNode = this._head;
        var count = 0;
        if (index > 0 || index < this.length) 
        {
            while (count < index) 
            {
                currNode = currNode.next;
                count++;
            }
            if(currNode.prev && currNode.next)
            {
            currNode.next.prev = currNode.prev;
            currNode.prev.next = currNode.next;
            }
            if(!currNode.next && !currNode.prev)// if 1 node
            {
                this._head.data = null; 
                this._tail.data = null;
            }
            if(!currNode.next)//if is tail;
            {
                this._tail.data = null;
            }
            if(!currNode.prev)
            {
                this._head.data = null;
            }

            this.lenght--;
            return this;
        }
    }

    reverse() 
    {   
        //#reverse, should reverse the list;
        var currNode = this._head;
        while(currNode) 
        {
            var revNode = currNode.next;
            currNode.next = currNode.prev;
            currNode.prev = revNode;
            currNode = revNode;
        }
        var revHT = this._head;
        this._head = this._tail;
        this._tail = revHT;
        return this;
    
    }

    indexOf(data) 
    {
        //#indexOf should return index of element if data is found
        //should return -1 if data not found
        var currNode = this._head;
        var count = 0;
        var notFound = -1;
        while (count < this.length) {
          if (currNode.data == data) {
            return count;
          }
          currNode = currNode.next;
          count++;
        }
        return notFound;
    }
}
module.exports = LinkedList;
