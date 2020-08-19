const functions = require("firebase-functions");
const axios = require("axios");

const WEATHER_API_KEY = "66bf323c67df1d193539fdb13c4f8198";

const responseBuilder = (msg) => ({
  fulfillmentMessages: [ { text: { text: [ msg ] } } ],
});

exports.chatWebhook = functions.https.onRequest((req, res) => {
  let body = req.body;
  // let { parameters, action } = body.queryResult;

  // if (action !== "askWeather") return res.json(responseBuilder("Unable to process your query"));
  // let city = parameters[ "geo-city" ];
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;

  // return axios.post(url)
  //   .then((result) => result.data)
  //   .then((data) => `The temperature is  ${Math.round(data.main.temp - 273.15)} °C`)
  //   .then((message) => res.json(responseBuilder(message)))
  //   .catch((err) => res.json(responseBuilder(err.message)));
});

