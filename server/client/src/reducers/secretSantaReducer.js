import {FETCH_SECRET_SANTA_LIST} from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SECRET_SANTA_LIST:
            return action.payload;
        default:
            return state;
    }
}