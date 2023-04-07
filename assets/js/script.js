var h1El = document.querySelector("h1");
var imgEl = document.querySelector("img");
var movieSearchEl = document.querySelector("#movieSearch");

movieSearchEl.addEventListener("click", function(){
    var movieTitle = document.querySelector("#movieTitle").value.trim();
    searchMovie(movieTitle)
})

function placeTitle(title, poster){
    h1El.textContent = title
    imgEl.setAttribute("src", poster);
}

function searchMovie(movieTitle){

    var url = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=9fa6058b";
    
    fetch(url, {
        method: 'GET' //POST, PUT, DELETE - CRUD Create, Read, Update
    })
    .then(function(response){
        if (response.status !== 200){
             //window.location.href="https://google.com"; //like an ahref allows back button
            //window.location.replace("https://google.com"); //replacing url allow back
            window.location.href="https://google.com?q=" + movieTitle; //like an ahref allows back button
        }
        //gets response ready
        return response.json();
    })
    .then(function(data){ 
            //‘response’ is ready and is available as ‘data’. 
      
            if (!data.Title){
                var title =  "TITLE NOT FOUND!";
                var poster = "notfound.jpg";
            }
            else{
                var title = data.Title;
                var poster = data.Poster;
            }
            
            placeTitle(title, poster);
    });
}
