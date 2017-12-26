{
    "id": "http://temando.com/schemas/location",
    'type': 'object',

    'properties': {

        'type': 'object',
        'properties': {
            'contact': {
                'type': 'object',
                'properties': {
                    'name': {
                        'type': 'string'
                    },
                    'email': {
                        'type': 'string',
                        'format': 'email'
                    },
                    'phone': {
                        'type': 'string',
                        'format': 'phone'
                    },
                    'secondary_phone': {
                        'type': 'string',
                        'format': 'phone'
                    }
                },
                'required': ['name', 'email']
            },

            'address': {
                'type': 'object',
                'properties': {
                    'country_code': {
                        'type': 'string'
                    },
                    'locality': {
                        'type': 'string'

                    },
                    'postal_code': {
                        'type': 'string'
                    },
                    'address_line1': {
                        'type': 'string'
                    },
                    'address_line2': {
                        'type': 'string'
                    },
                    'organisation': {
                        'type': 'boolean'
                    }
                },
                'language_code': {
                    'type': 'string'
                },
                'required': ['country_code', 'postal_code', 'locality']

            }
        }
    }

}