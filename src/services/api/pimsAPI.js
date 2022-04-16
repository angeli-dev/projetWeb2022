const myInit = {
  method: "GET",
  headers: {
    Authorization: "Basic " + btoa("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq"),
  },
  queries: { page_size: 4 },
};

export async function getEventsInCity(city) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events?" +
      new URLSearchParams({
        page_size: 4,
        venue_city: city,
        expand: "*",
        from_datetime: new Date(new Date().toString().split("GMT")[0] + " UTC")
          .toISOString()
          .split(".")[0],
      })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data._embedded.events;
    });
  return reponse;
}

export async function getEventById(eventId) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events/" + eventId + "?" +
      new URLSearchParams({
        expand: "*"
      })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data;
    });
  return reponse;
}

export async function getTicketCountsByEventId(eventId) {
  const myRequest = new Request(
    "https://sandbox.pims.io/api/v1/events/" + eventId + "/ticket-counts?" +
    new URLSearchParams({
      page_size: 1
    })
  );
  const reponse = await fetch(myRequest, myInit)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    })
    .then((data) => {
      return data._embedded.ticket_counts[0].sales;
    });
  return reponse;
}
