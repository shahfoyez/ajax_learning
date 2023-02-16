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
            if(marks >= 80){
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

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    });

// promise definition / producing code
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if( status ){
//             resolve('Task 2');
//         }else{
//             reject('Failed');
//         }
//     }, 2000);
// });
// // promise call / consuming code
// promise
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
 
// console.log("Task 3");

// function hello1(){
//     console.log('Task 1');
// };
// function hello2(){
//     console.log('Task 2');  
// }
// function hello3(){
//     console.log('Task 3');
// }
