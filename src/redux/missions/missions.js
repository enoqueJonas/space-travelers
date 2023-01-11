export const MISSIONS_RETRIEVED = 'MISSIONS_RETRIEVED';

const missionsReducer = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case `${MISSIONS_RETRIEVED}/fulfilled`:
            console.log(payload);
            return payload;
        default:
            return state;
    }
}

export default missionsReducer;