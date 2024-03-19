import { API_HOST, API_KEY, API_URL } from "./apiSettings";

export const getExchange = (params, autoControl = true) => {
    return cy.request({
        method: 'GET',
        url: `${API_URL}?from=${params.from}&to=${params.to}`,
        params: params,
        headers: {
            'X-RapidAPI-Key' : API_KEY,
            'X-RapidAPI-Host' : API_HOST
        } ,
        failOnStatusCode: autoControl,
    })
}
