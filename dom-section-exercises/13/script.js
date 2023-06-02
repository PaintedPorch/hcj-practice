/* Profile Inner HTML
<img id="profile-picture" src="./images/black.jpg" alt="person-img">
<h2 id="name">Sample Name</h3>
<h3 id="job-title">Sample Title</h3>
<p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellat nesciunt hic architecto cupiditate sit similique eius praesentium soluta! Veniam amet consectetur adipisicing elit. Laboriosam repellat.</p>
*/

const cardContent = document.getElementById("profile");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const surpriseButton = document.getElementById("surprise");

const profiles = [
'<img id="profile-picture" src="./images/man1.jpg" alt="person-img"><h2 id="name">Brody Jackman</h2><h3 id="job-title">Business Maker</h3><p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Bellisimo hic architecto cupiditate sit similique eius praesentium soluta! Veniam amet consectetur adipisicing elit. Laboriosam repellat.</p>',
'<img id="profile-picture" src="./images/woman1.jpg" alt="person-img"><h2 id="name">Plia Fraiser</h2><h3 id="job-title">Artist</h3><p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellat nesciunt hic architecto deus me pretenium praesentium soluta! Veniam amet consectetur adipisicing elit. Laboriosam repellat.</p>',
'<img id="profile-picture" src="./images/man2.jpg" alt="person-img"><h2 id="name">John Lagend</h2><h3 id="job-title">Technician</h3><p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellat nesciunt hic architecto deus me pretenium praesent. Laboriosam repellat.</p>',
'<img id="profile-picture" src="./images/dog.jpg" alt="person-img"><h2 id="name">Jobbly McLaughlin</h2><h3 id="job-title">Attention Seeker</h3><p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellat nesciunt hic architecto deus me pretenium praesentium soluta! Veniam amet consectetur adipisicing elit. Laboriosam repellat praesentium soluta! Consectetur.</p>'
];

let i = 0;

rightButton.addEventListener("click", function() {
    cardContent.innerHTML = profiles[i]

    i++;

    if (i >= profiles.length) {
        i = 0;
    }
});

leftButton.addEventListener("click", function() {
    cardContent.innerHTML = profiles[i]

    i--;

    if (i <= 0) {
        i = profiles.length - 1;
    }
});

surpriseButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * profiles.length);

    cardContent.innerHTML = profiles[randomIndex];
})