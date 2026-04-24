async function fetchData() {
    const url = 'https://motivation-quotes4.p.rapidapi.com/api';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '174ed2d2d6msha7ca21a3763779ep10d489jsn36ec57bef064',
            'x-rapidapi-host': 'motivation-quotes4.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("quote-id").innerHTML = result.quote;
        document.getElementById("author-id").innerHTML = result.author;
    } catch (error) {
        console.error(error);
    }
}

fetchData();
