import {ADD_PLACE, DESELECT_PLACE, DELETE_PLACE, SELECT_PLACE} from "../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null,
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.name,
                    key: Math.round(Math.random()*100),
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    image: {
                        uri: 'https://via.placeholder.com/150/5EB1BF/EEF4D4?text='+action.name.substring(0,1),
                    },
                }),
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null,
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.key;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null,
            };
        default: return state;
    }
};

export default placesReducer;