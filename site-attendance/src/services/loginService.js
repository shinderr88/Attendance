import { BASE_URL, URLS, API_METHODS, headers } from "../constants/webConstants";

export async function login(request) {
  const url = BASE_URL + URLS.loginUrl;
  try {
    const response = await makeApiCall(request, url, API_METHODS.post, headers);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function makeApiCall(request, url, methodType, headers) {
  console.log("API request :: ", request);
  try {
    const response = await fetch(url, {
      method: methodType,
      headers: headers,
      body: getFormDataFrom(request),
    });
    console.log("API Response before prasing ", response);
    const json = await response.json();
    console.log("API Response: ", json);
    return json;
  } catch (err) {
    console.log("API Error: ", err);
    throw err;
  }
}

function getFormDataFrom(data) {
  var bodyFormData = new FormData();
  var keys = Object.keys(data);
  keys.forEach((element) => {
    bodyFormData.append(element, data[element]);
  });
  return bodyFormData;
}
