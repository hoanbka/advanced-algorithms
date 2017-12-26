{ type: 'object',
  properties: 
   	{ 
   		'origin': { type: 'object', 
   					properties: {

				       'contact':{
				         	type : 'object',
				         	properties:{
				         		'name': string,
				         		'email': string,
				         		'phone':string,
				         		'secondary_phone':string
				         	}
				         }
				      },
				      'address':{
				       
				         type: 'object',
				         properties:{
				         	'country_code': string,
				         	'locality': string,
				         	'postal_code': string,
				         	'address_line1': string,
				         	'address_line2': string,
				         	'organisation' : boolean
				         }
				      },
				      "language_code":string
   					}

   				  },

     'destination ': 
		     	{ 	type: 'object', 
		     		properties: [Object] },

     'packages': { 
     				type: 'array', 
     				items: [Object] } 

 	} 
}
