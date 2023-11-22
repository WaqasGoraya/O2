import axios from "axios";

// local
// const BASE_URL = "http://localhost:8000/api";

// for live
const BASE_URL = "https://beta.o2telephonica.co.uk/api";

const apiRequest = async (
  api_url,
  method = "GET",
  data = null,
  headers = {}
) => {
  const url = `${BASE_URL}/${api_url}`;

  const response = await axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "Application/json",
      ...headers,
    },
  });

  return response.data;
};

export default apiRequest;
