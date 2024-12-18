const places = [
    {
        activity: "Christ the Redeemer",
        description: "This 124 foot tall statue of Jesus Christ depects him with outstreached arms. This is meant as a cultural and religious symbol of a warm and welcoming embrace.",
        number: 1,
        URLimage: 
        "https://th.bing.com/th/id/R.7ea7e17161ae7dc43ab2396fa61adb09?rik=6nbE0uh83cGUTQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-oQIOg9V6oV0%2fVTSIty1hHmI%2fAAAAAAAAABs%2fV35ttTD2KK4%2fs1600%2fcristo-redentor.jpg&ehk=rqm5lNG3eeSSqLPdEg7XhqH1nc19HsboNUjFmDCA12Y%3d&risl=&pid=ImgRaw&r=0"
    }
];

createCard(places);

function createCard(places){
    document.querySelector(".res-grid").innerHTML = "";
    places.ForEach(place => {
        let card = document.createElement("section");
        let activity = document.createElement("h3");
        let description = document.createElement("p");
        let number = document.createElement("p");
        let img = document.createElement("img");

        activity.textContent = place.activity;
        description.innerHTML = `<span class="label"></span> ${place.description}`;
        number.innerHTML = `<span class="label"># </span> ${place.number}`;
        img.setAttribute("src", place.imageUrl);
        img.setAttribute("alt", place.activity);

        card.appendChild(activity);
        card.appendChild(number);
        card.appendChild(description);
        card.appendChild(img);

        card.classList.add("card");

        document.querySelector(".res-grid").appendChild(card);
    })
}