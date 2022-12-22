import { CardActionArea } from "@material-ui/core";
import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (CardActionArea.type) {
        case AUTH:
            console.log(action.data);
            return state;
        case LOGOUT:
            return state;
        default:
            return state;
    }
};

export default authReducer;