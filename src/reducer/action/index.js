import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/constants";

export const getFlight = createAsyncThunk("flight/getFlight", async () => {
  //* API istek at
  const res = await axios.request(options);

  //* API'den gelen cevabı formatlayıp ihgtiyacımız olanı alıp nesneye cevirdik
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lang: item[3],
  }));

  //* Aksiyonun payload'ını retur et
  return formatted;
});
