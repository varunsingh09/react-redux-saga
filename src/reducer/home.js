import {
    HOMEPAGE_BANNER, BLOGS_LIST
} from "./../actions/types/";
const initial_state = {
    dataList: [],
    blogList:[]
};

export const HomeReducer = function (state = [initial_state], action) {
    //console.log("home reducer========",action.type,"__________")
    switch (action.type) {

        case HOMEPAGE_BANNER:
            return { ...state, dataList: action.paylod };
       
        case BLOGS_LIST:
            return { ...state, blogList: action.paylod };
    
        default:
            return state;
    }
}
