document.addEventListener("DOMContentLoaded",()=>{class e{constructor(e,t){const n=document.createElement("script");n.src=e,n.defer=!0,document.body.insertAdjacentElement("beforeend",n),n.addEventListener("load",t||(()=>console.log("Script added successfully!!")))}}if(setTimeout(()=>{new e("https://www.googletagmanager.com/gtag/js?id=UA-140881194-1",()=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-140881194-1")})},5e3),null!==document.querySelector(".packages-slider")){new e("../js/modules/tiny-slider.js",()=>{tns({container:".packages-slider",responsive:{320:{items:1,edgePadding:20},576:{items:2,edgePadding:60},768:{items:2,edgePadding:10},992:{items:2},1200:{items:2,edgePadding:110}},slideBy:1,controls:!1,nav:!1,navPosition:"bottom",speed:500,autoplay:!0,autoplayTimeout:3500,autoplayHoverPause:!0,autoplayButtonOutput:!1,swipeAngle:!1})})}if(null!==document.querySelector(".single-packages-slider")){new e("../js/modules/tiny-slider.js",()=>{tns({container:".single-packages-slider",responsive:{320:{items:1,edgePadding:20},576:{items:2,edgePadding:60},768:{items:2,edgePadding:10},992:{items:2},1200:{items:4,edgePadding:0}},slideBy:1,controls:!1,nav:!1,navPosition:"bottom",speed:500,autoplay:!0,autoplayTimeout:3500,autoplayHoverPause:!0,autoplayButtonOutput:!1,swipeAngle:!1})})}document.querySelector(".footer-year").textContent=`${(new Date).getFullYear()}`});