let duration = prompt("Write The Duration of the video");
let Title = prompt("Write The title of the video");
let channelname = prompt("Write The channel name");
let views = prompt("Write The exact number of views");
let monthsOld = prompt("Write how old is the video(in months)");
let img=prompt("Paste image url for thumbnail")

if(views>1000){
    views = views/1000 + "K";
}

else if(views>100000){
    views = views/100000 + "M";
}
else{
    views = views;
}


let html = `<div class="main">
<div class="img">
    <img src=${img} alt="image">
    <div class="time">
        ${duration}
    </div>
</div>
<div class="text">
    <div class="t1">
        ${Title}
    </div>
    <div class="t2">
        <div class="channelName">
            ${channelname}
        </div>
        <div class="views">
            ${views} views
        </div>
        <div class="timeuploaded">
            ${monthsOld} months ago
        </div>
    </div>
</div>
</div>` ;
document.body.innerHTML = html ;