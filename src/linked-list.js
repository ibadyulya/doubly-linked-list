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
        var count = 0;
        if (index > 0 || index <= this.length)
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
        if (index > 0 || index <= this.length) 
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
       this._head = new Node();
       this._tail = new Node();
       return this;
      
    }

    deleteAt(index) 
    {
        //http://www.internet-technologies.ru/articles/article_2599.html
        //deleteAt, should delete element by index;
        var currentNode = this._head;
        var count = 1;
        var message = {failure: 'Failure: non-existent node in this list.'};
        var beforeNodeToDelete = null;
        var nodeToDelete = null;
        var deletedNode = null;
        // 1-ый случай: неверная позиция
        if (this.length === 0 || index < 1 || index > this.length) 
        {
            throw new Error(message.failure);
        }
        // 2-ой случай: первый узел удален
        if (index === 1) 
        {
            this._head = currentNode.next;

            // 2-ой случай: существует второй узел
            if (!this._head) {
                this._head.prev = null;
            // 2-ой случай: второго узла не существует
            } else {
                this._tail = null;
            }
        // 3-ий случай: последний узел удален
        } 
        else if (index === this.lenght) 
        {
            this._tail = this._tail.prev;
            this._tail.next = null;
        // 4-ый случай: средний узел удален
        } 
        else 
        {
            while (count < index) 
            {
                currentNode = currentNode.next;
                count++;
            }
            beforeNodeToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;
            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
    this.lenght--;
    return message.success;
    }

    reverse() 
    {   
        //#reverse, should reverse the list;
    
    }

    indexOf(data) 
    {
        //#indexOf should return index of element if data is found
        //should return -1 if data not found
        var currentNode = this._head;
        var count = 0;
        var notFound = -1;
        while (count < this.length) {
          if (currentNode.data == data) {
            return count;
          }
          currentNode = currentNode.next;
          count++;
        }
        return notFound;
    }
}
module.exports = LinkedList;
