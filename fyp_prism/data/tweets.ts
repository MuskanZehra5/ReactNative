const tweets = [
    {
        id: '1',
        user:
        {
            id:'u1',
            username:'_casanova',
            name:'Vincenzo Casano',
            image:"https://static.toiimg.com/thumb/msid-84068560,imgsize-153309,width-800,height-600,resizemode-75/84068560.jpg",
        
        },
        createdAt:'2023-01-17T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'data:image/jpeg;base64,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',
        numberofComments:120,
        numberofLikes:875,
        numberofRetweets:9283,

    },

    {
        id: '2',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-10T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '3',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-11T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '4',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-12T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '5',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-16T10:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '6',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-17T11:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '7',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-14T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '8',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-15T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '9',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-09T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },

    {
        id: '10',
        user:
        {
            id:'u1',
            username:'muskanz',
            name:'muskan zehra',
            image:'https://todaysparent.mblycdn.com/tp/resized/2018/04/767x431/can-you-drink-when-youre-trying-to-get-pregnant-1280x960.jpg',            
        },
        createdAt:'2023-01-01T12:00:00.000Z',
        content:'Lorem Ipsum is simply dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ions of Lorem Ipsum.',
        image:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_665037880_362508.jpg',
        numberofComments:1200,
        numberofLikes:600,
        numberofRetweets:832,

    },
];

export default tweets;