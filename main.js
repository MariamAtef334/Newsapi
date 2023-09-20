
let articles = [];

async function getNews(country, category) {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=53eda5193c2c4688b14f5d17067ed158`);
    let finalResult = await response.json();
    articles = finalResult.articles;
    displayNews();
    // console.log(articles);
}
function displayNews() {

    let cartoona = ``;
    for (let i = 0; i < articles.length; i++) {
        cartoona += ` <div class="col-md-3">
                    <div class="news-item">

                   <img src="${articles[i].urlToImage ? articles[i].urlToImage : 'imgs/download 3.jpg'}"  height="200"class="w-100 " alt="">
              <h6>${articles[i].title}</h6>
                <p>${articles[i].description}</p>
          </div>

            </div>`
    }

    document.getElementById(`rowData`).innerHTML = cartoona;
}
let lis = document.querySelectorAll('ul li');
for (let i = 0; i < lis.length; i++) {

    lis[i].addEventListener('click', function (e) {

        getNews('us', e.target.innerHTML);
    })
}