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
            <h4 class="display-9">${response.city.name}</h4>
            <p class="lead"></p>
            <hr class="my-4">
            <p>Temperature: ${response.list[0].main.temp} F</p>
            <p>Humidity:${response.list[0].main.humidity} %</p>
            <p>Wind Speed: ${response.list[0].wind.speed} mph </p>
          </div>`
            $("#today").append(jumbotron);
        })
});