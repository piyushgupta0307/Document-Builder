window.onload = function() {

    var source = localStorage.getItem("path");
    var frame = document.getElementById('obj');
    frame.data = source
    console.log('frame.src ' + frame.data);
}

function resetPage() {
    window.location.reload();
}

function myFunction() {

    var iframe = document.getElementById("obj");
    var box1 = iframe.contentWindow.document.getElementById("txt1");
    var input1 = document.getElementById('inputbox1');
    box1.innerHTML = input1.value;

    var box2 = iframe.contentWindow.document.getElementById("txt2");
    var input2 = document.getElementById('inputbox2');
    box2.innerHTML = input2.value;

    var custombox2 = iframe.contentWindow.document.getElementById("txt2content");
    var input2content = document.getElementById('inputbox2content');
    custombox2.innerHTML = input2content.value;


    var box3 = iframe.contentWindow.document.getElementById("txt3");
    var input3 = document.getElementById('inputbox3');
    box3.innerHTML = input3.value;

    var custombox3 = iframe.contentWindow.document.getElementById("txt3content");
    var input3content = document.getElementById('inputbox3content');
    custombox3.innerHTML = input3content.value;


    var box4 = iframe.contentWindow.document.getElementById("txt4");
    var input4 = document.getElementById('inputbox4');
    box4.innerHTML = input4.value;

}