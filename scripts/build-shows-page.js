const shows = [
    {
      Date: "2024-07-15",
      Venue: "Concert Hall A",
      Location: "New York"
    },
    {
      Date: "2024-08-20",
      Venue: "Theater B",
      Location: "Los Angeles"
    },
    {
      Date: "2024-09-10",
      Venue: "Club C",
      Location: "London"
    },
    {
      Date: "2024-10-05",
      Venue: "Stadium D",
      Location: "Tokyo"
    },
    {
      Date: "2024-11-12",
      Venue: "Arena E",
      Location: "Paris"
    },
    {
      Date: "2024-12-25",
      Venue: "Amphitheater F",
      Location: "Sydney"
    }
  ];

const createEl = shows.map((e) => {
    const showsContainer = document.querySelector('.shows__container');
    const divElement = document.createElement('div');
    const dateElement = document.createElement('span');
    const venueElement = document.createElement('span');
    const locationElement = document.createElement('span');
    const buttonElement = document.createElement('button');
    dateElement.innerText = e.Date;
    venueElement.innerText = e.Venue;
    locationElement.innerText = e.Location;
    buttonElement.innerText = "BUY TICKETS";

    const createdDiv = showsContainer.appendChild(divElement);
    createdDiv.classList.add('show__container');
    createdDiv.appendChild(dateElement).classList.add('shows__container--date');
    createdDiv.appendChild(venueElement);
    createdDiv.appendChild(locationElement);
    createdDiv.appendChild(buttonElement).classList.add('btn');
});
