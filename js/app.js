const weatherConteiner = document.querySelector('.weather__conteiner')
function wheather(city,elem){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbb98b533e4420a4815892d965a70f85`)// получает масив данныю из API 
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);/// 
        let ic = data['weather']['0']['icon']
        elem.querySelector('.city').textContent = data.name
        elem.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)}&deg;`
        elem.querySelector('.description').textContent = data['weather']['0']['description']
        elem.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${ic.slice(0, -1)}d@2x.png" alt="">`
        elem.querySelector('.clouds').innerHTML = `${data.clouds.all}%`
        elem.querySelector(".humidity").innerHTML = data.main.humidity + '%'
        elem.querySelector('.wind').innerHTML = data.wind.speed + 'm/s'

    })
    .catch(function(){
        // catch any errors
    })
    weatherConteiner.insertBefore(elem_w,document.querySelector('.elem_plus'))
}

// это функция создает блок погоды
function createWeater(){
    let div = document.createElement('div')// Содание элемента 
    div.innerHTML = `<div class="weather sunny">
    <div class="city"></div>
    <div class="img"></div>
    <h2 class="temp"></h2>
    <span class="description"></span>
    <div class="cost">
        <div class="blog clouds_blog">
            <img src="img/4181c8035b6f18bd6ab0308e8e4709e8.svg" alt="">
            <h2>Clouds</h2>
            <div class="clouds"></div>
        </div>
        <div class="blog humidity_blog">
            <img src="img/humidity-svgrepo-com.svg" alt="">
            <h2>humidity</h2>
            <div class="humidity"></div>
        </div>
        <div class="wind_blog">
            <img src="img/wind-svgrepo-com.svg" alt="">
            <h2>wind</h2>
            <div class="wind"></div>
        </div>

    </div>
    </div>` // это Html разметка блока
    return div.firstChild // возврашает элемент внутри блока
}


// Отслеживает нажатие на кнопку и вызывает функции создание и настройки погодного блока
document.querySelector('.Popap_btn').onclick = ()=>{
    let name = document.querySelector('.name_city')// поле ввода для названия города 
    wheather(name.value,createWeater())
    name.value = ''// обнуление значение для поли ввода)
}