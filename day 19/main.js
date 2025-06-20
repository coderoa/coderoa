async function fetchdata(url) {
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok){
            console.error("Not ok");
        }
        const data = await response.json()
        console.log(data)
        return data
        
    } catch (error) {
        console.log(error);
    }
    
}


const text = document.getElementById("text");
const author = document.getElementById("author")

async function showQuote() {
    data = await fetchdata("https://zenquotes.io/api/random");
    if (data){
        text.textContent = data.q || "No text found";
        author.textContent = data.a || "Unknown";

    }  
}

showQuote()

refresh = ()=>{
    location.reload();
}