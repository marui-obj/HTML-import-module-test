import { data } from './silly-data.js'

const markup = (data) => {
    return `
    <div>
        <h3>Hello ${data.username}</h3>
        <ul>
            <li>Fav ${data.favorite}</li>
        </ul>
    </div>
    `
    ;
};

const main = document.createElement("main");
main.innerHTML = markup(data);
document.body.appendChild(main);

const image = document.createElement("img");
image.src = "https://i.kym-cdn.com/photos/images/newsfeed/002/356/290/fea.png";
document.body.appendChild(image);