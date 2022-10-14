document.getElementById("moreBtn").addEventListener("click", openPopUp);
function openPopUp(){
    document.getElementById("popUp").style.display = "flex";
}
function closeBtn() {
    document.getElementById("popUp").style.display = "none";
}


getdata()

  async function getdata(){
    try{
        let name=localStorage.getItem("name")
let id=localStorage.getItem("id")
      const res=await fetch(`https://apple-tv-api.herokuapp.com/${name}/${id}`);
      const data=await res.json();
     
    //   displaymostpopularnow(data)
   if(data.name=="Luck"){
    document.getElementById("videoOfTheMovie").src=data.videolink
   

   }else{

   

       changedata(data);
   }
    
            
    }catch(err){
      console.log(err);
  }
}


function changedata(data){
    console.log(data);
    document.getElementById("movieName").innerText=data.name
    document.getElementById("movieImageBeforeResponsive").src=data.poster
    document.getElementById("mobileViewImage").src=data.poster
    document.getElementById("videoOfTheMovie").src=data.videolink
    document.getElementById("trailerImages").src=data.image
    document.getElementById("trailerImages1").src=data.image
}