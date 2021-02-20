const explore = function () {    
    // api url
    const apiKey = `${process.env.KEY}`
    const category = `Html`

fetch("https://quizapi.io/api/v1/questions", {
  body: `apiKey=${apiKey}&limit=10&category=${category}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
.then(function(response){
    if (response.ok){
        response.json();
    }
});
     
}

explore();