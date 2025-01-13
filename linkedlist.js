    let head = null;

    const getHead = () => head;

    const getTail = () => {
        if(size() === 0) return null;
        let temp = getHead();
        while(temp.getNext() !== null) temp = temp.getNext();
        return temp;
    }

