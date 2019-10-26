const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "card text 1"
            },
            {
                id: 1,
                text: "card text 2"
            },
            {
                id: 2,
                text: "card text 3"
            }
        ]
    },
    {
        title: "This Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "card text 1"
            },
            {
                id: 1,
                text: "card text 2"
            }
        ]
    }
];
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listReducer;
