let movieItems=[];
let favourites=[];
const getMovies= ()=>
{
     return fetch("http://localhost:3000/movies")
     .then((result)=>
    {
        if(result.status==200)
        {
            return Promise.resolve(result.json());
        }
        else 
        {
            return Promise.reject("error");
        }
    }).then(response=>
    {
        console.log(response);
        movieItems=response;
        createMoviesList();
    }
    ).catch(error=>
    {
  alert(error);
    })

}


const createMoviesList = ()=>
{
    let movieList="";
    movieItems.forEach(movie => {
       movieList+= `
       <div class="card" style="width:400px">
  <img class="card-img-top" src="${movie.posterPath}" alt="Card image">
  <div class="card-body">
    <h4 class="card-title"> ${movie.title} </h4>
    <p class="card-text"> ${movie.releaseDate} </p>
    <button type="button" onClick="addFavourite(${movie.id})" class="btn btn-primary"> Add To Favorites <button> 
  </div>
</div>
`
    });

    document.getElementById("moviesList").innerHTML= movieList;

}



const getFavourites = ()=>
{
    return fetch("http://localhost:3000/favourites")
    .then((result)=>
   {
       if(result.status==200)
       {
           return Promise.resolve(result.json());
       }
       else 
       {
           return Promise.reject("error");
       }
   }).then(response=>
   {
       console.log(response);
       favourites=response;
       createFavouritesList();
   }
   ).catch(error=>
   {
 alert(error);
   })

}

  
const createFavouritesList = ()=>
{
    let favList="";
    favourites.forEach(movie => {
        favList+= `
       <div class="card" style="width:400px">
  <img class="card-img-top" src="${movie.posterPath}" alt="Card image">
  <div class="card-body">
    <h4 class="card-title"> ${movie.title} </h4>
    <p class="card-text"> ${movie.releaseDate} </p>
    <button type="button" onClick="deleteFromFav(${movie.id})" class="btn btn-primary"> Delete from Favorites <button> 
  </div>
</div>
`
    });

    document.getElementById("favouritesList").innerHTML= favList;

}


const addFavourite = (id) =>
{
    alert(id);
   if(!isMovieAlreadyInFavSection(id))   
    {
        console.log("Its true")
        let movieObject = getMovieById(id)
        {   
            console.log(movieObject);
            favourites.push(movieObject);
            return fetch("http://localhost:3000/favourites",
            {
                method:'POST',
                body : JSON.stringify(movieObject),
                headers:{
                    'Content-Type':'application/json',
                     'Accept' :'application/json'
            }
        }).then((result)=>
        {
            if(result.status == 200 || result.status==201)
            {
                 return Promise.resolve(favourites);

            }
            else
             { 
                return Promise.reject("movie is already there in fav section")
             }
            
            }).then((favMovieResult)=> 
            {
                createFavouritesList();
                return favMovieResult;
            }). catch(error=>
            {
                throw new Error(error);
            })
        }
    }
        else 
        {
    alert("movie is already there in fav section");
        }

        
    } 



const isMovieAlreadyInFavSection= (id) =>
    {
        alert("isMovieAlreadyInFavSection "+ id);
    // console.log("isMovieAlreadyInFavSection " + id);
        for(let fav in favourites)
        {
            if(id==favourites[fav].id)
            {
                alert("true");
                return true;
            }
        alert("false");
    }
        return false;
}

const getMovieById = (id)=>
    {
        console.log("getMovieById" + id)
      for(let movie in movieItems)
      { 
        if(id==movieItems[movie].id)
        {
           alert(movieItems[movie].title)
            return movieItems[movie];
      }}
    }

    const deleteFromFav = (id)=>
    {
        return fetch("http://localhost:3000/favourites/"+id,
        
            {
                method:'delete'
            })
        .then((result)=>
       {
           if(result.status==200)
           {
               return Promise.resolve(result.json());
           }
           else 
           {
               return Promise.reject("error");
           }
       }).then(response=>
       {
          alert("rec deleted from fav")
           favourites=response;
           createFavouritesList();
       }
       ).catch(error=>
       {
     alert(error);
       })
       
    }