setTimeout(() => {
    console.log('Two seconds are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };

        callback(data);
    }, 2000);
};

geocode('Philadelphia', (data) => {
    console.log(data);
});

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 4, 7]);
    }, 2000);
};

doWorkCallback((err, res) => {
    if(err){
        return console.log(err);
    }

    console.log(res);
});
