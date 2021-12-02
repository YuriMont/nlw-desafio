const linksSocialMedia={
    github: "YuriMont",
    youtube: '',
    facebook: '',
    instagram: "yuri.monteiro1043",
    twitter: ''
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const socialMedia = li.getAttribute('class');
        li.children[0].href = `https://${socialMedia}.com/${linksSocialMedia[socialMedia]}/`;
    }
}

function getGitHubProfileInfos(){
    document.getElementsByClassName("linkGitHub").item('a').href=`https://github.com/${linksSocialMedia.github}`;
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('github').textContent=linksSocialMedia.github,
        document.getElementById('name').textContent=data.name,
        document.getElementById('bio').textContent=data.bio,
        document.getElementById('profileImage').src=data.avatar_url
    });
}

getGitHubProfileInfos();
changeSocialMediaLinks();
