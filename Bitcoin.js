var http = require('http');

http.get({
        host: 'api.coindesk.com',
        path: '/v1/bpi/currentprice.json'
        },
        function(response) {
                var body = '';
                response.on('data', function(d) { body += d; });
                response.on('end', function() {


                        var parsed = JSON.parse(body);
                        console.log('Valor en dolar' , parsed.bpi.USD.rate);
                        console.log('Valor en libra esterlina' , parsed.bpi.GBP.rate);
                        console.log('Valor en euro' , parsed.bpi.EUR.rate);
                });
        }
);