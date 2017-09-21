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
        //http://www.internet-technologies.ru/articles/article_2599.html
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
        var count = 1;
        if (index > 0 || index <= this.length)
        {
            while (count <= index) 
            {
                
                currNode = currNode.next;
                count++;
                
            }
        }
        return currNode.data;
    }
 

    insertAt(index, data) // !
    {
        //#insertAt, should insert data by index;
     
   
    }

    isEmpty() 
    {
        //#isEmpty, should return true if list is empty;
        return (!this.length) ? true : false;    
    }

    clear() 
    {
       //#clear, should clear the list;
      
    }

    deleteAt(index) 
    {
        //deleteAt, should delete element by index;

    }

    reverse() 
    {   
        //#reverse, should reverse the list;
    
    }

    indexOf(data) 
    {
        //#indexOf should return index of element if data is found
        //should return -1 if data not found
       
    }
}
module.exports = LinkedList;
