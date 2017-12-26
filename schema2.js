{
    type: 'object',
    properties: {
        'origin': {
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
                        'required': ['name', 'email', 'phone']
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
                        }

                    }
                }
            }

        },

        'destination': {
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
                        }
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
                        }

                    }
                }
            }

        },


        'packages': {
            'type': 'array',
            'items': {
                'type': 'array',
                'properties': {
                    'items': {
                        'type': 'object',
                        'properties': {
                            'product': {

                                'type': 'object',
                                'properties': {
                                    "sku": {
                                        'type': 'string'
                                    },
                                    "fragile": {
                                        'type': 'boolean'
                                    },
                                    "hs_code": {
                                        'type': 'string'
                                    },
                                    "cost": {

                                        'type': 'object',
                                        'properties': {
                                            "amount": {
                                                'type': 'Number'
                                            },
                                            "currency": {
                                                'type': 'string'
                                            }
                                        }
                                    },
                                    'dimensions': {
                                        'type': 'object',
                                        'properties': {
                                            "length": {
                                                'type': 'Number'
                                            },
                                            "width": {
                                                'type': 'Number'
                                            },
                                            "height": {
                                                'type': 'Number'
                                            },
                                            "unit": {
                                                'type': 'string'
                                            }
                                        }
                                    },
                                    'weight': {
                                        'type': 'object',
                                        'properties': {
                                            "value": {
                                                'type': 'Number'
                                            },
                                            "unit": {
                                                'type': 'string'
                                            }
                                        }
                                    }
                                },
                                'required': ['dimensions', 'weight']

                            },
                            'quantity': {
                                'type': 'Integer',
                                'minimum': 1
                            }


                        }
                    }

                }

            }

        }

    }