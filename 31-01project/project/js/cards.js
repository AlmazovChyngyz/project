
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function cards() {
  const cardContainer = document.getElementById('card-wrap');
  const data = await fetchData();

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.body;

    const image = document.createElement('img');
    image.src = 'https://srv4.imgonline.com.ua/result_img/imgonline-com-ua-Resize-QF8v4OFngTT.jpg';

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);

    cardContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', cards);



