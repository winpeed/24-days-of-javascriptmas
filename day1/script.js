setInterval(() => {
  let todayDate = Date.now();

  let christmasDay = new Date(2021, 11, 25).getTime();

  let difference = christmasDay - todayDate;

  const numberMonths = document.getElementById("months");
  const numberDays = document.getElementById("days");
  const numberHours = document.getElementById("hours");
  const numberMinutes = document.getElementById("minutes");
  const numberSeconds = document.getElementById("seconds");

  numberMonths.textContent = new Date(difference).getMonth();
  numberDays.textContent = new Date(difference).getDate() - 1;
  numberHours.textContent = new Date(difference).getHours();
  numberMinutes.textContent = new Date(difference).getMinutes();
  numberSeconds.textContent = new Date(difference).getSeconds();
}, 1000);
