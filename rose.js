const roseCall=document.getElementById("one");
const msgCall=document.getElementById("two");
roseCall.addEventListener("click",()=>{
    confirm("do you sent rose to your partner");
    prompt("please enter his/her name");
});
msgCall.addEventListener("click",()=>{
    if(navigator.share){
        navigator.share({
            title:"Happy joyful rose day",
            text:"every time is a part of love in humans life",
            url:window.location.href

        }).then(()=>{
            console.log("your message shared successfully");
        }).catch((error)=>{
            console.error("your error message",error);
        })
    }else{
        confirm("try again");
    }
})