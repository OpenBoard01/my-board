function loadPosts() {
    const posts =
        JSON.parse(
            localStorage.getItem("posts")
        ) || [];

    const area =
        document.getElementById("posts");

    area.innerHTML = "";

    posts.forEach(post => {
        area.innerHTML += `
        <div class="post">
            <strong>${post.name}</strong>
            <p>${post.message}</p>
        </div>
        `;
    });
}

function postMessage() {

    const name =
        document.getElementById("name").value;

    const message =
        document.getElementById("message").value;

    if (!message) return;

    const posts =
        JSON.parse(
            localStorage.getItem("posts")
        ) || [];

    posts.unshift({
        name,
        message
    });

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    loadPosts();
}

loadPosts();