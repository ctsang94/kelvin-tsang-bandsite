const shows = [
    {
      Date: "Mon Sept 09 2004",
      Venue: "Concert Hall A",
      Location: "New York"
    },
    {
      Date: "Sun Oct 09 2004",
      Venue: "Theater B",
      Location: "Los Angeles"
    },
    {
      Date: "Wed Mya 09 2004",
      Venue: "Club C",
      Location: "London"
    },
    {
      Date: "Tue Dec 09 2004",
      Venue: "Stadium D",
      Location: "Tokyo"
    },
    {
      Date: "Mon May 09 2004",
      Venue: "Arena E",
      Location: "Paris"
    },
    {
      Date: "Mon Jun 10 2025",
      Venue: "Amphitheater F",
      Location: "Sydney"
    }
  ];

const createEl = shows.map((e) => {
    const showsContainer = document.querySelector('.shows__container');

    const showContainer = document.createElement('div');
    const showContainerDate = document.createElement('div');
    const showContainerVenue = document.createElement('div');
    const showContainerLocation = document.createElement('div');
    
    showContainer.classList.add('show__container');
    showContainerDate.classList.add('show__container--date');
    showContainerVenue.classList.add('show__container--venue');
    showContainerLocation.classList.add('show__container--location');

    const dateLabel = document.createElement('span');
    dateLabel.classList.add('show__container--dateLabel');
    dateLabel.classList.add('hide');
    const dateElement = document.createElement('span');

    const venueLabel = document.createElement('span');
    venueLabel.classList.add('show__container--venueLabel');
    venueLabel.classList.add('hide');
    const venueElement = document.createElement('span');

    const locationLabel = document.createElement('span');
    locationLabel.classList.add('show__container--locationLabel');
    locationLabel.classList.add('hide');
    const locationElement = document.createElement('span');

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn');
    dateLabel.innerText = 'DATE';
    dateElement.innerText = e.Date;
    venueLabel.innerText = 'VENUE';
    venueElement.innerText = e.Venue;
    locationLabel.innerText = 'LOCATION';
    locationElement.innerText = e.Location;
    buttonElement.innerText = "BUY TICKETS";

    showsContainer.appendChild(showContainer);

    showContainer.appendChild(showContainerDate);
    showContainerDate.appendChild(dateLabel);
    showContainerDate.appendChild(dateElement);

    showContainer.appendChild(showContainerVenue);
    showContainerVenue.appendChild(venueLabel);
    showContainerVenue.appendChild(venueElement);

    showContainer.appendChild(showContainerLocation);
    showContainerLocation.appendChild(locationLabel);
    showContainerLocation.appendChild(locationElement);

    showContainer.appendChild(buttonElement);

});

const dateLabel = document.querySelector('.show__container--dateLabel');
    dateLabel.classList.remove('hide');
const venueLabel = document.querySelector('.show__container--venueLabel');
    venueLabel.classList.remove('hide');
const locationLabel = document.querySelector('.show__container--locationLabel');
    locationLabel.classList.remove('hide');


// const showClick = document.querySelectorAll('.show__container');
// showClick.addEventListener('click', () => {
//     showClick.classList.add('selected');
// });

// showClick();

function handleItemClick(event) {
  const shows = document.querySelectorAll('.show__container');
  console.log(shows);
  shows.forEach(item => item.classList.remove('hover'));
  shows.forEach(item => item.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
}

const items = document.querySelectorAll('.show__container');
items.forEach(show => {
  show.addEventListener('click', handleItemClick);
});
