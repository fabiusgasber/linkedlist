    let head = null;

    const getHead = () => head;

    const getTail = () => {
        if(size() === 0) return null;
        let temp = getHead();
        while(temp.getNext() !== null) temp = temp.getNext();
        return temp;
    }

    const size = () => {
        if(head === null) return 0;
        else {
            let temp = getHead();
            let length = 1;
            while(temp.getNext() !== null) {
                length++;
                temp = temp.getNext();
            }
            return length;
        }
    }

    const append = (value) => {
        if(getHead() === null) prepend(value);
        else {
            let temp = getHead();
            while(temp.getNext() !== null) temp = temp.getNext();
            temp.setNext(createNode(value, null));
        }
    }

