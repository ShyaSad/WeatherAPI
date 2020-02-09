$("#search-button").on("click", function () {
    let userInput = $(".form-control").val()
    console.log(userInput);
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=04d1faa1ca8bf65e3e55b742a828000b"
    // let jumboExist = true;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            let jumbotron = `<div class="jumbotron">
            <h4 class="display-9">${response.city.name} ${response.list[0].dt_txt}</h4>
            <p class="lead"></p>
            <hr class="my-4">
            <p>Temperature: ${response.list[0].main.temp} F</p>
            <p>Humidity:${response.list[0].main.humidity} %</p>
            <p>Wind Speed: ${response.list[0].wind.speed} mph </p>
          </div>`
            $("#today").append(jumbotron);
            $("#forecast").append(row);

            let i = 0;
            for (let i = 0; i < 40; i += 10) {
                let card = ` <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${response.list[i].dt_txt}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${response.list[i].weather[0].icon}</h6>
              <p class="card-text">Temperature: ${response.list[i].main.temp} F</p>
              <p class="card-text">Humidity: ${response.list[i].main.humidity} % </p>
            </div>
          </div>`
                $("#forecast").append(card);
            }
        })
});