$(document).ready(function(){

	
$(".zoom").mousemove(function(e){
	zoom(e);
});

function zoom(e){
	var x, y;
	var zoomer = e.currentTarget;
	if(e.offsetX) {
		offsetX = e.offsetX;
	} else {
		offsetX = e.touches[0].pageX;
	}

	if(e.offsetY) {
		offsetY = e.offsetY;
	} else {
		offsetX = e.touches[0].pageX;
	}
	x = offsetX/zoomer.offsetWidth*100;
	y = offsetY/zoomer.offsetHeight*100;
	zoomer.style.backgroundPosition = x+'% '+y+'%';
}

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
        filterItem.querySelector(".active").classList.remove("active"); 
        selectedItem.target.classList.add("active"); 
        let filterName = selectedItem.target.getAttribute("data-name"); 
        filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
            image.classList.remove("hide"); 
            image.classList.add("show"); 
        }else{
            image.classList.add("hide"); 
            image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
}
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; 
    let selectedImgCategory = element.getAttribute("data-name"); 
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory; 
    previewBox.classList.add("show"); 
    shadow.classList.add("show"); 
    closeIcon.onclick = ()=>{ 
    previewBox.classList.remove("show");
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto"; 
  }
}




});