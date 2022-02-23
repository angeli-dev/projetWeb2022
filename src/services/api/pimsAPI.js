import { encode } from "base-64";

const getPimsData = async function () {
  const response = await fetch("https://sandbox.pims.io/api/v1/events", {
    method: "get",
    headers: new Headers({
      Authorization:
        "Basic " + encode("sandbox:c5jI1ABi8d0x87oWfVzvXALqkf0hToGq"),
    }),
    mode: "no-cors",
  });
  console.log(response.status);
  if (response.status == 200) {
    return response.json();
  } else {
    new Error(response.statusText);
  }
};

console.log(getPimsData());

export default { getPimsData };
