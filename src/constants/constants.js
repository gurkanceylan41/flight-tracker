export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "36.606771",
    bl_lng: "27.463506",
    tr_lat: "41.572104",
    tr_lng: "42.810352",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

export const detailOpt = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/detail",
  params: { flight: null },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};
