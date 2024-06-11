

document.getElementById('balance_screen').textContent = 0;

function done(){

    var acc = document.getElementById('acc').value;
    var pin = document.getElementById('pin').value;

    if(acc == '123456789'){
        if(pin == '0000'){
            // document.getElementById('main-screen').style.display = "block";
            document.getElementById('login').style.display = "none";
        }
        else{
            alert('pin is inavlid');
        }
    }   
    else if(acc == ""){}
    else{
        alert('Account in inavlid');
    
    }
    
    
    
    var total = parseInt(document.getElementById('balance_screen').textContent);
    var withdraw_input= parseInt(document.getElementById('withdraw').value);
    var deposit_balance = parseInt(document.getElementById('depositcash').value);

    if(isNaN(withdraw_input)){
        withdraw_input = 0;
    }
    if(isNaN(deposit_balance)){
        deposit_balance = 0;
    }

    if(deposit_balance >= 0 && deposit_balance <= 10000){
        total += parseInt(deposit_balance);
    }
    else{
        alert("valid only 10000 deposit");
    }

    if(withdraw_input >= 0 && withdraw_input <= 50000){
        total -= parseInt(withdraw_input);
    }
    else{
        alert("valid only 50000 withdraw");
    }

    if(total < 0){
        alert('balance invalid');
    }else{
        document.getElementById('balance_screen').textContent = total;
    }
    
    document.getElementById('depositcash').value = 0;
    document.getElementById('withdraw').value = 0;

}
// function keypress(k) {
//     if((document.getElementById('withdraw-screen').style.display = "block") && (document.getElementById('deposit-screen').style.display = "none")){
    //         withdraw.value += k;
//         withdraw_input = parseInt(withdraw.value);
//     }
//     else if((document.getElementById('withdraw-screen').style.display = "none") && (document.getElementById('deposit-screen').style.display = "block")){
//         depositcash.value += k;
//         deposit_balance = parseInt(dipositcash.value);
//     }
// }


function drawcash(){
    document.getElementById('main-screen').style.display = "none";
    document.getElementById('withdraw-screen').style.display = "block";
    document.getElementById('balance-screen').style.display = "none";
    document.getElementById('deposit-screen').style.display = "none";
}

function deposit(){

    document.getElementById('main-screen').style.display = "none";
    document.getElementById('deposit-screen').style.display = "block";
    document.getElementById('balance-screen').style.display = "none";
    document.getElementById('withdraw-screen').style.display = "none";
}

function balance(){

    document.getElementById('main-screen').style.display = "none";
    document.getElementById('withdraw-screen').style.display = "none";
    document.getElementById('deposit-screen').style.display = "none";
    document.getElementById('balance-screen').style.display = "block";
}

