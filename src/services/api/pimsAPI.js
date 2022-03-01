const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Basic " + btoa("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq")
);
console.log("1 : " + myHeaders.get("Authorization"));
/*
const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "no-cors",
  cache: "default",
};
console.log("2 : " + myInit.headers.get("Authorization"));

const myRequest = new Request("https://sandbox.pims.io/api/v1/events");*/

const getPimsData = async function () {
  //const response = await fetch(myRequest, myInit);
  const response = await fetch("https://sandbox.pims.io/api/v1/events", {
    method: "GET", // or GET, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json", // to have JSON content in body
      "Authorization":
        "Basic " + btoa("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq"), // set JWT token
    },
    mode: "no-cors",
  });
  if (response.status == 200) {
    //console.log(response.json());
    return response.json();
  } else {
    console.log(response.status);
    new Error(response.statusText);
  }
};

console.log(getPimsData());

export { getPimsData };
