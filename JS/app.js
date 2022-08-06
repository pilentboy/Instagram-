/*get elements */

const showTaggedBTN=document.querySelector("#showTaggedBTN");
const showPostsBTN=document.querySelector("#showPostsBTN");
const userPosts=document.querySelector(".userPosts");
const postsTagged=document.querySelector(".postsTagged");
const displayhightlight=document.querySelector("#displayhightlight");
const hightlights=document.querySelector(".hightlights");
const hightlight=document.querySelector(".hightlight");
const storydownArrow=document.querySelector("#storydownArrow");


/* to display the contant */ 
showTaggedBTN.addEventListener("click",function(){
    if(postsTagged.style.display != "flex"){
        postsTagged.style.display="flex";
        userPosts.style.display="none";
    }
})

showPostsBTN.addEventListener("click",function(){
    if(userPosts.style.display != "flex"){
        userPosts.style.display="flex";
        postsTagged.style.display="none";
    }
    
})


/* TO DISPLAY THE HIGHTLIGHT */
displayhightlight.addEventListener("click",function(){
    if(hightlights.style.display != "none"){
        hightlights.style.display="none";
        hightlight.style.flex="0.1";
        storydownArrow.classList.remove("bi-chevron-down");
        storydownArrow.classList.add("bi-chevron-up");


    }

    else{
        hightlights.style.display="flex"
        hightlight.style.flex="1.4";
        storydownArrow.classList.remove("bi-chevron-up");
        storydownArrow.classList.add("bi-chevron-down");

    }

})




