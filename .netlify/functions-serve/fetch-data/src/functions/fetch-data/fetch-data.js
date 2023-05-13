// functions/fetch-data/fetch-data.js
var handler = async (event) => {
  const API_KEY = process.env.VITE_API_KEY;
  const { type, input } = event.queryStringParameters;
  console.log(type);
  const genericURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
  const domainSearchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${input}`;
  const IpSearchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${input}`;
  const URL = type === "ip" ? IpSearchURL : type === "domain" ? domainSearchURL : genericURL;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
module.exports = { handler };
//# sourceMappingURL=fetch-data.js.map
