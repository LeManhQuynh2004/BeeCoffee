export const DATA_PRODUCT = [
    {
        name: 'Latte',
        spice: 'With Steamed Milk',
        price: 4.50,
        star: 4.3,
        uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
    },
    {
        name: 'Espresso',
        spice: 'Strong Black Coffee',
        price: 3.80,
        star: 4.0,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_4.jpg'
    },
    {
        name: 'Mocha',
        spice: 'With Chocolate',
        price: 5.00,
        star: 4.8,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino.jpg'
    },
    {
        name: 'Americano',
        spice: 'Diluted Espresso',
        price: 3.50,
        star: 4.2,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_2.jpg'
    },
    {
        name: 'Macchiato',
        spice: 'And Milk',
        price: 5.20,
        star: 4.5,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_3.jpg'
    },
    {
        name: 'Flat White',
        spice: 'with Microfoam',
        price: 4.80,
        star: 4.7,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_4.jpg'
    },
    {
        name: 'Affogato',
        spice: 'Ice Cream',
        price: 6.00,
        star: 4.6,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_5.jpg'
    },
    {
        name: 'Cortado',
        spice: 'Espresso with a Small Amount of Warm Milk',
        price: 4.00,
        star: 4.1,
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_6.jpg'
    },
    {
        name: 'Iced Coffee',
        spice: 'Chilled Coffee with Ice Cubes',
        price: 4.00,
        star: 4.4,
        uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
    },
    {
        name: 'Irish Coffee',
        spice: 'Coffee with Irish',
        price: 6.50,
        star: 4.9,
        uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
    }
]
export const DATA_CATEGORY =
    [
        {
            name: 'All',
            status: false
        },
        {
            name: 'Cappuccino',
            status: true
        },
        {
            name: 'Espresso',
            status: false
        },
        {
            name: 'Americano',
            status: false
        },
        {
            name: 'Americano',
            status: false
        },
    ]

export const DATA_ORDER = [
    {
        id: '1',
        name: 'Latte',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'S',
                quantity: 1,
            },
            {
                size: 'M',
                quantity: 1,
            },
            {
                size: 'L',
                quantity: 1,
            },
        ],
        uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
    },
    {
        id: '2',
        name: 'Cappuccino',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'S',
                quantity: 2
            },

        ],
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino.jpg'
    },
    {
        id: '3',
        name: 'Americano',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'M',
                quantity: 2
            },
            {
                size: 'L',
                quantity: 1
            },
        ],
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_2.jpg'
    },
    {
        id: '4',
        name: 'Americano',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'L',
                quantity: 1
            },
        ],
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_3.jpg'
    },
    {
        id: '5',
        name: 'Latte',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'S',
                quantity: 1
            },
            {
                size: 'M',
                quantity: 1
            },
            {
                size: 'L',
                quantity: 1
            },
        ],
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_4.jpg'
    }, {
        id: '6',
        name: 'Americano',
        spice: 'With Steamed Milk',
        price: 4.50,
        sizeOrder: [
            {
                size: 'M',
                quantity: 1
            },
        ],
        uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino_3.jpg'
    },
]

export const DATA_HISTORY = [
    {
        id: '1',
        day: '20/11/2023',
        time: '16:25',
        totalAmount: 123,
        orderItem: [
            {
                id: '1',
                name: 'Latte',
                spice: 'With Steamed Milk',
                price: 4.50,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'L',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
            {
                id: '2',
                name: 'Latte',
                spice: 'With Steamed Milk',
                price: 4.50,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
        ]
    },
    {
        id: '2',
        day: '20/11/2023',
        time: '16:25',
        totalAmount: 123,
        orderItem: [
            {
                id: '1',
                name: 'Latte',
                spice: 'With Steamed Milk',
                price: 4.50,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'L',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
            {
                id: '2',
                name: 'Latte',
                spice: 'With Steamed Milk',
                price: 4.50,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
        ]
    },
    {
        id: '3',
        day: '21/11/2023',
        time: '17:30',
        totalAmount: 150,
        orderItem: [
            {
                id: '1',
                name: 'Cappuccino',
                spice: 'With Steamed Milk',
                price: 5.00,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 2,
                        totalPrice: 5.00 * 2
                    },
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 5.00 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
        ]
    },
    {
        id: '4',
        day: '22/11/2023',
        time: '18:45',
        totalAmount: 85,
        orderItem: [
            {
                id: '1',
                name: 'Espresso',
                spice: 'Double Shot',
                price: 3.75,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 3.75 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
            {
                id: '2',
                name: 'Cappuccino',
                spice: 'With Steamed Milk',
                price: 5.00,
                sizeOrder: [
                    {
                        size: 'L',
                        quantity: 1,
                        totalPrice: 5.00 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
        ]
    },
    {
        id: '5',
        day: '23/11/2023',
        time: '19:15',
        totalAmount: 95,
        orderItem: [
            {
                id: '1',
                name: 'Americano',
                spice: 'Single Shot',
                price: 4.25,
                sizeOrder: [
                    {
                        size: 'M',
                        quantity: 1,
                        totalPrice: 4.25 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
            {
                id: '2',
                name: 'Latte',
                spice: 'With Steamed Milk',
                price: 4.50,
                sizeOrder: [
                    {
                        size: 'S',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                    {
                        size: 'L',
                        quantity: 1,
                        totalPrice: 4.50 * 1
                    },
                ],
                uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
            },
        ]
    },
];



