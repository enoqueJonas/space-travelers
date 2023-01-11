export const MISSIONS_RETRIEVED = 'MISSIONS_RETRIEVED';

const missionsReducer = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case `${MISSIONS_RETRIEVED}/fulfilled`:
            return payload.map((mission) => {
                const {mission_id, mission_name, description} = mission;
                return {
                    mission_id,
                    mission_name,
                    description
                }
            });
        default:
            return state;
    }
}

export default missionsReducer;