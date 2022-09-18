let arrForm = [];
let resultArr = [];


function pushArrInfo() {
    let form = document.getElementById("inputForm");
    arrForm.push(form.value);
    alert(`Добавленно: ${form.value}`);
    document.getElementById("inputForm").value = "";
}

function showСontentArr() {
    document.getElementById('outShowСontentArr').innerHTML = arrForm;
};



function min3SimvolArr() {
    arrForm.forEach(item => {
        if (item.length <= 3) resultArr.push(item)
    });
    return resultArr;
}

function showСontentArrResult() {
    resultArr = [];
    min3SimvolArr();
    document.getElementById('outShowСontentArrResult').innerHTML = resultArr;
    console.log(resultArr);
};

function clearArr() {
    arrForm.length = 0;
    showСontentArr();
}
