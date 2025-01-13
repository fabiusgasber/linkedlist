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

    const prepend = (value) => {
        if(getHead() === null) head = createNode(value, null);
        else {
            const oldHead = createNode(head.getValue(), head.getNext());
            head = createNode(value, oldHead);
        }
    }

    const at = (index) => {
        if(index >= size() || index < 0) return -1;
        let temp = getHead();
        let i = 0;
        while(i <= index) {
            if(i === index) return temp;
            else {
                i++;
                temp = temp.getNext();
            }
        }
    }

    const pop = () => {
        if(size() === 0) return;
        else if(size() === 1) return head = null;
        else if(size() > 1) {
            let temp = getHead();
            while(temp.getNext() !== null) {
                if(temp.getNext().getNext() === null) return temp.setNext(null);
                else temp = temp.getNext();
            }
        }
    }

