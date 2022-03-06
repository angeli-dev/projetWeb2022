const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Basic " + btoa("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq")
);

const myInit = {
  method: "GET",
  headers: myHeaders,
};

const myRequest = new Request("https://sandbox.pims.io/api/v1/events");

const getPimsData = async function () {
  const response = await fetch(myRequest, myInit);
  if (response.status == 200) {
    return response.json();
  } else {
    new Error(response.statusText);
  }
};

console.log(getPimsData());

export default { getPimsData };
