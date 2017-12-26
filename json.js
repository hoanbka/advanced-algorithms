const toJsonSchema = require('to-json-schema');
 
const objToBeConverted = {
   "origin":{
      "contact":{
         "name":"STE LOG'S",
         "email":"olivier.clery@redoute.be",
         "phone":"+3256851211",
         "secondary_phone":"+32478258780"
      },
      "address":{
         "country_code":"FR",
         "locality":"Anzin",
         "postal_code":"59410",
         "address_line1":"PA EUROPESCAUT",
         "address_line2":"Acces Rue des Emailleries",
         "organisation":true
      },
      "language_code":"fr-FR"
   },
   "destination ":{
      "contact":{
         "name":"Laurent Lejeune",
         "email":"llejeune@redoute.fr",
         "phone":"0320697211",
         "secondary_phone":"+32478258780"
      },
      "address":{
         "country_code":"FR",
         "locality":"Wasquehal",
         "postal_code":"59290",
         "address_line1":"78 Rue Delerue",
         "address_line2":"Acces Rue des Emailleries",
         "organisation":false
      },
      "language_code":"fr-FR"
   },
   "packages":[
      {
         "items":[
            {
               "product":{
                  "sku":"782456-A",
                  "fragile":false,
                  "hs_code":"1234567890",
                  "cost":{
                     "amount":100.00,
                     "currency":"EUR"
                  },
                  "dimensions":{
                     "length":10,
                     "width":10,
                     "height":10,
                     "unit":"cm"
                  },
                  "weight":{
                     "value":1,
                     "unit":"kg"
                  }
               },
               "quantity":1
            },
            {
               "product":{
                  "sku":"782456-A",
                  "fragile":false,
                  "hs_code":"1234567890",
                  "cost":{
                     "amount":100.00,
                     "currency":"EUR"
                  },
                  "dimensions":{
                     "length":10,
                     "width":10,
                     "height":10,
                     "unit":"cm"
                  },
                  "weight":{
                     "value":1,
                     "unit":"kg"
                  }
               },
               "quantity":1
            }
         ]
      }
   ]
}
 
var schema = toJsonSchema(objToBeConverted);
console.log(schema)