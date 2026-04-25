async function fetchMeme() {
    const url = 'https://humor-jokes-and-memes.p.rapidapi.com/memes/random?keywords=pokemon&number=1&media-type=image&keywords-in-image=false&min-rating=4';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '174ed2d2d6msha7ca21a3763779ep10d489jsn36ec57bef064',
            'x-rapidapi-host': 'humor-jokes-and-memes.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const meme = await response.text();
        console.log(meme);
        document.getElementById("meme-id").innerHTML = meme.url;
    } catch (error) {
        console.error(error);
    }
}
fetchMeme();