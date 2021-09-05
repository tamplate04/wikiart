async function fetchArtImage() {
    const endpoint = `https://www.wikiart.org/en/App/Artist/AlphabetJson?v=new`
    const r =   await (await fetch(endpoint)).json();
    console.log(r);
}



// const fetchData =  function() {
//     let pp =  fetchArtImage(2);
//     console.log(pp)
// }
// debugger
fetchArtImage();
// async function artImage() {
//     const artImage = await fetchArtImage();
//     return artImage
// }
// debugger
// const image = artImage()