var htmlBody = document.querySelector('body');

dummyData = {
    title: "Test title",
    content: "I am test text-content",
    author: "I am the test author",
    url: "www.reddit.com/r/test/test",
    mediaurls: ['https://preview.redd.it/09u6hmoj25b71.jpg?width=3024&format=pjpg&auto=webp&s=dc8bd26c15cb3049955c439b758eb9fd09e33b20'],
    created: '9am'
};

function createRedditPost(data) {
    var redditPost = document.createElement('div');
    var redditTitle = document.createElement('h2');
    redditTitle.textContent = data.title;
    var redditInfo = document.createElement('p');
    redditInfo.textContent = data.author + ' ' + data.url + ' ' + data.created;
    redditPost.appendChild(redditTitle);
    redditPost.appendChild(redditInfo);
    if (data.content) {
        var redditTextContent = document.createElement('p');
        redditTextContent.textContent = data.content;
        redditPost.appendChild(redditTextContent);
    }
    if (data.mediaurls) {
        var redditImg = document.createElement('img');
        redditImg.setAttribute('src', data.mediaurls[0]);
        redditImg.setAttribute('style', 'width: 500px;');
        redditPost.appendChild(redditImg);
    }
    htmlBody.appendChild(redditPost);
};

createRedditPost(dummyData);