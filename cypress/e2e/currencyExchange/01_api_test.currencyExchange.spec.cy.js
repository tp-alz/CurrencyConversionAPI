
import { getExchangeData } from "../../helpers/dataGenerator";
import { getExchange } from "../../service/exchangeService";

var params = getExchangeData();


describe('get currency exchange', () => {
    it('Positive: Get an exchange rate with all valid fields', () => {
        getExchange(params).then(response => {
            cy.task('log', response);
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('from');
            expect(response.body.from).to.have.property('currency', params.from);
            expect(response.body).to.have.property('to');
            expect(response.body.to).to.have.property('currency', params.to);
        })
    })

})


