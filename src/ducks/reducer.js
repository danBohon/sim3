const initialState = {
    username: "",
    id: null,
    pic: ""
};

const LOGIN = 'LOGIN';

export default function reducer(state = initialState, action) {
    console.log('REDUCER HIT: ACTION --->', action );

    switch (action.type){
        case LOGIN:
            return {...state, pic: action.payload.pic, id: action.payload.id, username: action.payload.username }
        default:
            return state;
    }
}

export function userLogin(username, id, pic) {
    return {
        type: LOGIN,
        payload: {
            username: username,
            id: id,
            pic: pic
        }
    }
}