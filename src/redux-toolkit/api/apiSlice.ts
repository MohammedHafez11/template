import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from '../config/config.json';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
  endpoints: (builder) => ({}),
});