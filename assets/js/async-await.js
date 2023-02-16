const paymentSuccess = true;
const marks = 70;
function enroll(){
    console.log('Course enrollment in progress');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
                reject('Payyment failed!');
            }
        }, 2000);
    });
    return promise; 
}

function progress(callback){
    console.log('Course on progress...');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 70){
                resolve();
            }else{
                reject('You don not have enough marks');
            }
        }, 3000);

    });
    return promise;
}

function getCertificate(callback){
    console.log("Preparing your certificate...");
    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congrats! you got your certificate');
        }, 1000);
    });
    return promise;
}

async function course(){
    try{
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }catch(err){
        console.log(err);
    }
}
course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     });


// async function hello(){  m
//     return "hello world!";
// }
// console.log(hello());