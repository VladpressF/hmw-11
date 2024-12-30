// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
let bankAccount = {
  ownerName: "Влад",
  accountNumber: "123456789",
  balance: 1000,
  deposit: function (amount) {
    this.balance += amount;
    document.getElementById(
      "output"
    ).textContent = `Баланс рахунку після депозиту: ${this.balance}`;
  },
  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      document.getElementById(
        "output"
      ).textContent = `Баланс рахунку після зняття: ${this.balance}`;
    } else {
      document.getElementById("output").textContent = "Недостатньо коштів";
    }
  }
};

document.getElementById("btn1").addEventListener("click", function () {
  let amount = parseFloat(prompt("Введіть суму для депозиту:"));
  bankAccount.deposit(amount);
});

document.getElementById("btn2").addEventListener("click", function () {
  let amount = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(amount);
});

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
let weather = {
  temperature: 0,
  humidity: "10%",
  windSpeed: "5m/s",
  checkWeatherFunc: function () {
    this.temperature = parseInt(document.getElementById("checkWeather").value);
    return this.temperature < 0;
  },
};

document.getElementById("checkBtn").addEventListener("click", function () {
  if (weather.checkWeatherFunc()) {
    document.getElementById("weatherOutput").textContent =
      "температура нижче 0 градусів Цельсія";
  } else {
    document.getElementById("weatherOutput").textContent =
      "температура вище 0 градусів Цельсія";
  }
});

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

let user = {
  name: "Vlad",
  email: "test@gmail.com",
  password: 123,
  login: function (email, password) {
  
        if (
          this.email === document.getElementById("loginInput").value &&
          this.password === document.getElementById("passwordInput").value
        ) {
          document.getElementById("loginOutput").textContent =
            "Ви успішно увійшли";
        } else {
          document.getElementById("loginOutput").textContent =
            "Ви ввели неправильний email або пароль";
        }
      },
  }

document.getElementById("checkLoginButton").addEventListener("click", function () {
    let email = document.getElementById("loginInput").value;
    let password = document.getElementById("passwordInput").value;
    user.login(email, password);
});

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const movie = {
    title: "Vlad_TheMovie",
    director: "vlad_novak",
    year: 2010,
    rating: 9,
    
    checkRating: function() {
        return this.rating > 8;
    }
};
document.getElementById('movieTitle').textContent = `Назва: ${movie.title}`;
document.getElementById('movieOutput').textContent = `Режисер: ${movie.director}, Рік: ${movie.year}`;

document.getElementById('checkMovieBtn').addEventListener('click', function() {
    let ratingInput = document.getElementById('movieRatingInput').value;
    movie.rating = Number(ratingInput);
    
    if (movie.checkRating()) {
        document.getElementById('movieTitle').style.color = 'green';
    } else {
        document.getElementById('movieTitle').style.color = 'black';
    }
});
