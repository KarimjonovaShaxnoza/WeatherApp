let search_btn = document.getElementById("search-btn");
let input = document.querySelector("input");

search_btn.addEventListener("click", () => {
  let option = {};

  if (input.value.trim() == "") {
    alert("shaxar kiriting");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=eaa5545307881ec088c9e8f0a377b6f5`,
      option
    )
      .then((res) => res.json())
      .then((data) => getData(data));
  }
});

function getData(params) {
  let img = document.querySelector("img");

  let rasm = params?.weather[0].main;
  console.log(rasm);
  console.log(params);

  let temp = document.getElementById("temperature");
  temp.textContent = params.main.temp;

  let location = document.getElementById("location");
  location.textContent = params.name;

  let detail = document.getElementById("detail");
  detail.textContent = `Max:${params.main.temp_max}`;

  let details = document.getElementById("details");
  details.textContent = `Min:${params.main.temp_min}`;

  if (rasm == "Smoke") {
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXaxioaIwiD3SfgNKwM_xaam5k3aOzvqwQA&s";
  } else if (rasm == "Summary") {
  } else if (rasm == "Clouds") {
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcShr-cwfKDR0THwvbWSEl01rhRzZNKQuLA&s";
  } else if (rasm == "Clear") {
    img.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
  } else if (rasm == "Snow") {
    img.src =
      "https://static.vecteezy.com/system/resources/thumbnails/012/806/416/small_2x/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png";
  }
}
