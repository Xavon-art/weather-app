async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (data === undefined || data === null) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Paris returns an error object — treat non-200 cod as failure
  if (data.cod && Number(data.cod) !== 200) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const w = data.weather?.[0];
  const m = data.main;
  const wind = data.wind;

  document.getElementById('location').textContent         = data.name !== undefined        ? data.name        : 'N/A';
  document.getElementById('weather-main').textContent     = w?.main !== undefined          ? w.main           : 'N/A';
  document.getElementById('main-temperature').textContent = m?.temp !== undefined          ? m.temp           : 'N/A';
  document.getElementById('feels-like').textContent       = m?.feels_like !== undefined    ? m.feels_like     : 'N/A';
  document.getElementById('humidity').textContent         = m?.humidity !== undefined      ? m.humidity       : 'N/A';
  document.getElementById('wind').textContent             = wind?.speed !== undefined      ? wind.speed       : 'N/A';
  document.getElementById('wind-gust').textContent        = wind?.gust !== undefined       ? wind.gust        : 'N/A';

  const icon = document.getElementById('weather-icon');
  icon.src = w?.icon ?? '';
  icon.alt = w?.description ?? 'weather icon';

  document.getElementById('weather-result').style.display = 'flex';
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-select').value;
  if (!city) return;
  showWeather(city);
});
