let photoDiv = document.querySelector("#photo");
let photoUploadInput = document.querySelector("#photo-upload");
let downloadDiv = document.querySelector("#download");

photoDiv.addEventListener("click", function () {
  photoUploadInput.click();
});

photoUploadInput.addEventListener("change", function (event) {
  console.log(event);
  let fileObj = event.target.files[0];
  console.log(fileObj);
  let filePath = URL.createObjectURL(fileObj, { type: "image/jpg" });
  let img = document.createElement("img");
  img.setAttribute("src", filePath);
  img.classList.add("sticky-image");
  addSticky(img);
});


downloadDiv.addEventListener("click" , function(){
    html2canvas(document.getElementsByTagName("body")[0]).then(function (canvas) {			
      var anchorTag = document.createElement("a");
			document.body.appendChild(anchorTag);
			//document.getElementById("previewImg").appendChild(canvas);
			anchorTag.download = "canvas.jpg";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
		});
})