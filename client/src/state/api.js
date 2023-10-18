import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import dotenv from 'dotenv';

//dotenv.config();
// const REACT_APP_BASE_URL = 'http://localhost:5001';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products', 'Customers'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ['Products'],
    }),
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api;
