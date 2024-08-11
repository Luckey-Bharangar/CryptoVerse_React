import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	'x-rapidapi-key': 'bfe962299dmsh6e4c2cfbc76c1e7p1785acjsn07c095f8adff',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery : fetchBaseQuery({ baseUrl }),
//     endpoints : (builder) => ({
//         getCryptos: builder.query({
//             query: () => createRequest('/coins')
//         })
//     })
// })

// export const {useGetCryptosQuery} = cryptoApi