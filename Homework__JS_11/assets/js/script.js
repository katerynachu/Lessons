window.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form')

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let modal = document.querySelector(".weather__modal");
            modal.style.opacity = '1';
            let titleField = form.querySelector('input[type=search]')
            if (titleField.value.length === 0 && titleField.value === '') {
                modal.style.opacity = '0';
                return;
            }
            findCity(titleField.value)
            modal.innerHTML = '';
            setCookie('city', titleField.value, 7200)

        })
    }
    let container = document.querySelector(".main__container")
    let main = document.createElement('div')
    main.classList.add('weather__main')
    container.append(main)
    function getCity(city) {
        let cityName = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68651a1f53f5f02289bbd95c73d197b8`
        fetch(cityName,{
            method:"GET",
            authority: '',
            path:'/'

        })
        .then(function (resp) { return resp.json() }).then(function (data) {
            let mainWeather = document.querySelector('.weather__main')
            let item = document.createElement('div')
            item.setAttribute("id", "item")
            item.classList.add(`weather__item-${city}`)
            mainWeather.append(item)
            let title = document.createElement('h2')
            title.classList.add(`weather__city-${city}`)
            title.setAttribute('id', 'title')
            title.textContent = data.name;
            item.append(title)
            let paramBlock = document.createElement('div')
            paramBlock.classList.add('weather__block-param')
            item.append(paramBlock)
            let deg = document.createElement('p')
            deg.classList.add(`weather__forecast-${city}`)
            deg.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            paramBlock.append(deg)
            let desc = document.createElement('p')
            desc.classList.add(`weather__desc-${city}`)
            desc.textContent = data.weather[0]['description'];
            paramBlock.append(desc)
            let icon = document.createElement('div')
            icon.classList.add(`weather__icon-${city}`)
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            paramBlock.append(icon)
            return (paramBlock)

        })
            .catch(function () {
                let title = document.getElementById('title');
                if (!title) {
                    return;
                }

                title.innerHTML = 'Error!'
            });
    }
    let myCity = ["London", "Paris", "Belgrade", "Venice", "Shelomi", "Cudgee", "Kyiv", "Cambridge", "Francistown", "Tokyo", "Sydney"]

    myCity.forEach(item => {
        getCity(item)

    });
    function findCity(city) {
        let cityName = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68651a1f53f5f02289bbd95c73d197b8`
        fetch(cityName,{
            method:"GET",
            authority: '',
            path:'/'

        }).then(function (resp) { return resp.json() }).then(function (data) {
            let mainWeather = document.querySelector('.weather__modal')
            let item = document.createElement('div')
            item.setAttribute("id", "modal")
            let btn = document.createElement('span')
            btn.classList.add("modal__btn")
            if (btn) {
                btn.addEventListener('click', (e) => {
                    mainWeather.style.opacity = '0'
                })
            }
            mainWeather.append(btn)
            item.classList.add(`weather__item-${city}`)
            mainWeather.append(item)
            let title = document.createElement('h2')
            title.classList.add(`weather__city-${city}`)
            title.setAttribute('id', 'title')
            title.textContent = data.name;
            item.append(title)
            let paramBlock = document.createElement('div')
            paramBlock.classList.add('weather__block-param')
            item.append(paramBlock)
            let deg = document.createElement('p')
            deg.classList.add(`weather__forecast-${city}`)
            deg.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            paramBlock.append(deg)
            let desc = document.createElement('p')
            desc.classList.add(`weather__desc-${city}`)
            desc.textContent = data.weather[0]['description'];
            paramBlock.append(desc)
            let icon = document.createElement('div')
            icon.classList.add(`weather__icon-${city}`)
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            paramBlock.append(icon)
            return (paramBlock)
        })
            .catch(function () {
                let title = document.getElementById('title');
                if (!title) {
                    return;
                }

                title.innerHTML = `Unable to find a city with a name "${city}" `
            });
    }
    function setCookie(name, value, time) {
        let expires = '';

        if (time) {
            let date = new Date();
            date.setTime(date.getTime() + (time))
            expires = '; expires=' + date.toUTCString()
        } else {
            expires = '; expires=Thu, 01 Jan 1900 00:00:01 GTM;'
        }

        document.cookie = name + "=" + value + expires + "; path=/"
    }
})















