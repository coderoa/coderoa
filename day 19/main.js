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
    data =  await fetchdata("https://thequoteshub.com/api/");
    if (data){
        text.textContent = data.text || "No text found";
        author.textContent = data.author || "Unknown";

    }  
}

showQuote()

refresh = ()=>{
    location.reload();
}