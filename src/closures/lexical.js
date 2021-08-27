const buildCount = (i) => {
        let count = i;
        const displayCount = () => {
                console.log(count++);
        };
        return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOlderCount = buildCount(10);
myOlderCount();
myOlderCount();