function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGFobWVkMTUiLCJhIjoiY2ttYXpuMDkxMTduNTJ1cWZqaHk1Mjk3MyJ9.dXYHLLCI3OBzhRRQrXH-_g'
}).addTo(mymap);
  console.log('mymap',mymap)
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers

    async function windowActions() {
      console.log('window loaded');
      
      const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
      const request = await fetch(endpoint);
      const zips = await request.json();
      
      function findMatches(wordToMatch, zips) {
          return zips.filter(restaurant => {
              const regex = new RegExp(wordToMatch, 'gi');
              return restaurant.zip.match(regex)
      })
      }

      function displayMatches(event) {
          const matchArray = findMatches(event.target.value, zips);
          const html = matchArray.map(restaurant => {
              const regex = new RegExp(event.target.value, 'gi');
              const zipCode = restaurant.zip.replace(regex, `<span class="h1">${event.target.value}</span>`);
              return `
              <li>
              <span class="name">${restaurant.name}</span></br>
              <span class="category">${restaurant.category}</span></br>
              <span class="address">${restaurant.address_line_1}</span></br>
              <span class="city state">${restaurant.city}, ${restaurant.state}</span></br>
              <span class="zipcode>${zipCode}</span></br>
              </li>
              `;
          }).join('');
          suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
      displayMatches(evt)
  });

}
window.onload = windowActions;

}

//end

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;