document.getElementById('apply-bg').addEventListener('click',function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-third').addEventListener('click',function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

document.getElementById('add-new').addEventListener('click',function () {
    const friends = document.getElementById('friends');
    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>In, aspernatur facere. Beatae, error.</p>
    `;
    friends.appendChild(div);
})