 function local(imgPath) {

     window.location.href = '/temples/temp1.html';
     localStorage.setItem("path", imgPath)
         //var source = localStorage.getItem("path");
         //console.log('dddddd ' + source);
         //  curImage.alt = imgText;
         //  curImage.title = imgText;
 }

 // function local() {

 //     var b = document.getElementsByClassName('img-thumbnail').length;
 //     console.log('sssssssssssss ' + b);
 // }
 // let imgArr;

 // function local() {

 //     var images = document.getElementsByTagName('img');
 //     console.log('ccc ' + images);
 //     for (var i = 0; i < images.length; i++) {
 //         images[i].onclick = function(img) {
 //             var index = imgArr.findIndex(image => image === img.src);
 //             console.log(index + ' clicked.');
 //         }
 //     }
 // }