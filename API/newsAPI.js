const TOKEN_API = "109a63e3da1d4c2393a65fca8bced3ed"

export function getNewsFromApi(){
  const url = 'https://newsapi.org/v2/everything?sources=lequipe&apiKey='+TOKEN_API
      return fetch(url)
             .then((response)=>response.json())
             .catch((error)=>{console.log(error)})
}

export function getNewsDetailFromApi(){
  
}
