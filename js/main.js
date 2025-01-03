const responsive={
    0:{
        items: 1
    },
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    }
}

$(document).ready(function(){

// searchbar suggestions
let suggestions = [
    "Shirt",
    "T-shirt",
    "T-shirts for men",
    "T-shirts women",
    "T-shirts children",
    "Shirts for men",
    "Shirts for women",
    "Shirts for children"
];


// search bar
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

    // Tool tip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

// Loading animation
      var percent =document.querySelector('.percent');
      var progress =document.querySelector('.progress');
      var text =document.querySelector('.text');
      var count=4;
      var per=16;
      var loading=setInterval(animate,10);
      function animate(){
          if(count == 100 && per == 400){
              percent.classList.add("text-blink");
              text.style.display="block"
              clearInterval(loading);
          }
          else{
              per=per + 4;
              count=count +1 ;
              progress.style.width=per + 'px';
              percent.textContent=count + '%';
          }
      }

      setTimeout(function(){
          $('.loading-body').addClass('loaded');
      }, 2000)

     
    //   accessablity
    // font
    $("#range-slider").on("input change",function(){
        $("p, a, :header, i").css("font-size",$(this).val() + "px");
        // change span value
        $(".value").text($(this).val() + "px")
    });
    
    // resize
    // var currentVal= $(".value".text(this).val()); 
    var currentSize = $("p, a, :header, i").css("font-size");
    $(".resize").on("click", function(){
        $("p, a, :header, i").css("font-size", currentSize);
        $(".value").text(20 + "px")
        $("#range-slider").val(20);
    });

    // color
    const colors = document.getElementsByClassName('colors');

    let i;
    for(i=0;i<colors.length;i++){
        colors[i].addEventListener('click',changecolor)

    }

    function changecolor(){
        let color=this.getAttribute('data-color');
        document.documentElement.style.setProperty('--color',color);
        document.documentElement.style.setProperty('--header_footer',color);
        document.documentElement.style.setProperty('--bg-color1',color);
        document.documentElement.style.setProperty('--bg-color2',color);
        document.documentElement.style.setProperty('--hf-text',	'#000000');
    }
    

// Owl-carousel for blog
$(".owl-1").owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
    responsive:responsive
});
$(".owl-2").owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$(".owl-navigation-2 .owl-nav-prev"),$(".owl-navigation-2 .owl-nav-next")],
    responsive:responsive
});

// click to scroll top
$(".move-up span").click(function(){
    $("html, body").animate({
        scrollTop:0
    }, 0000);
})

})