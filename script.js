const videoElement = document.getElementById('video');
const button = document.getElementById('button');
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata= ()=>{
            videoElement.play();
        }
    }
    catch(error){
        console.log('An error ', error);
    }


    button.addEventListener('click',async()=>{
        button.disable = true;
        await videoElement.requestPictureInPicture();
        button.disabled= false;
    })

}
selectMediaStream()