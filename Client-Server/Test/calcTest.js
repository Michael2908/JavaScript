const fetch = require('node-fetch');


const testCalc = async () =>{

// POST

await fetch('http://localhost:6113/start', { method: 'POST' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Set value of M - ' + myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });
await fetch('http://localhost:6113/calc/add/10', { method: 'POST' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    }).then(body => {
        let myJSON = JSON.parse(body);
        console.log('Added 10 - ' + myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });

await fetch('http://localhost:6113/calc/sub/3', { method: 'POST' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Subtructed 3 - ' + myJSON.data + ', Test Result:OK');
    }).catch(err => {
        console.log(err);
    });



// PUT

await fetch('http://localhost:6113/calc/multiply/3', { method: 'PUT' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Multiplied by 3 - ' + myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });

await fetch('http://localhost:6113/calc/divide/3', { method: 'PUT' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Divided by 3 - ' + myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });

// GET

await fetch('http://localhost:6113/calc/M')
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Get Value of M - ' + myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });

// Reset

await fetch('http://localhost:6113/reset', { method: 'POST' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log('Reseted value of M - ' + myJSON.data + ', Test Result:OK');
    }).catch(err => {
        console.log(err);
    });

// DELETE

await fetch('http://localhost:6113/calc/del', { method: 'DELETE' })
    .then(res => {
        if (res.status !== 200) throw 'Test Failure Error: ' + res.status;
        return res.text();
    })
    .then(body => {
        let myJSON = JSON.parse(body);
        console.log(myJSON.data + ', Test Result: OK');
    }).catch(err => {
        console.log(err);
    });

}

testCalc();