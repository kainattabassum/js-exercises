function make_album(artist, title, tracks) {
    let album = {
        artist,
        title,
        tracks
    }
    return album
}

console.log(make_album('Blank canvas', 'Hit the road'))
console.log(make_album('Sweetbitter', 'Final draft'))
console.log(make_album('Election perfection', 'Under the bus'))
console.log(make_album('Long story short', 'Lets do this', 6))