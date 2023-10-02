var input = document.getElementById('input');
var btn = document.getElementById('add-btn');
var posts = document.querySelector('.posts');
let postCnt  =0;
btn.addEventListener('click',addPost);
let isEdit = false;

function addPost(){
    let postContent = input.value;
    if(isEdit===true){
        let post = document.querySelector('.edited');
        console.log(post);
        post.remove();
        isEdit=false;
    }
    if(postContent.trim()!==""){
        createPost(postContent);
        postCnt++;
        input.value = "";
    }
}

function createPost(postContent){
    let post = document.createElement('div');
    post.className = 'post';

    let dp = document.createElement('div');
    dp.className = 'dp';

    post.appendChild(dp);

    let data = document.createElement('div');
    data.className = 'data';
    
    post.appendChild(data);
    
    let user = document.createElement('div');
    user.className = 'user';
    data.appendChild(user);
    let name = document.createElement('h4');
    name.textContent = 'Deadpool';
    user.appendChild(name);

    let chkBoxId = `edit-del${postCnt}`
    let chkbox = document.createElement('input');
    chkbox.type = 'checkbox';
    chkbox.id =chkBoxId;
    user.appendChild(chkbox);
    let label = document.createElement('label');
    label.setAttribute('for',chkBoxId); 
    user.appendChild(label);

    let more=  document.createElement('i');
    more.className = 'fa-solid fa-ellipsis more';
    label.appendChild(more);

    let hide = document.createElement('div');
    hide.className = 'hide';
    let ul = document.createElement('ul');
    let edit = document.createElement('li'); //edit button
    edit.id = 'edit';
    edit.textContent = 'Edit';
    ul.appendChild(edit);
    let delBtn = document.createElement('li'); //del button
    delBtn.id = 'delete';
    delBtn.className = 'remove';
    delBtn.textContent = 'Delete Post';
    ul.appendChild(delBtn);
    hide.appendChild(ul);
    user.appendChild(hide);

    //adding eventListener on edit and del
    delBtn.addEventListener('click',removePost);
    edit.addEventListener('click',editPost);

    let postData = document.createElement('div');
    postData.className = 'post-data';
    postData.textContent = postContent;
    data.appendChild(postData);

    let reactions = document.createElement('div');
    reactions.className = 'reactions';
    let comment = document.createElement('i');
    comment.className = 'fa-regular fa-comment';
    let retweet = document.createElement('i');
    retweet.className = 'fa-solid fa-retweet';
    let heart = document.createElement('i');
    heart.className = 'fa-regular fa-heart';
    let chart = document.createElement('i');
    chart.className = 'fa-solid fa-chart-simple';
    let arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-arrow-up-from-bracket';
    reactions.appendChild(comment);
    reactions.appendChild(retweet);
    reactions.appendChild(heart);
    reactions.appendChild(chart);
    reactions.appendChild(arrow);
    data.appendChild(reactions);

    posts.appendChild(post);
    // console.log(post);   
}

function removePost(e){
    if(confirm('Are you Sure')){
        let post = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        posts.removeChild(post);
        // console.log(post);
    }
}

function editPost(e){
    let post = e.target.parentElement.parentElement.parentElement.nextSibling;
    input.value = post.textContent;
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('edited');
    isEdit = true;
}