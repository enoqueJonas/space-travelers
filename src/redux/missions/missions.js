export const MISSIONS_RETRIEVED = 'MISSIONS_RETRIEVED';

const missionsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case `${MISSIONS_RETRIEVED}/fulfilled`:
      return payload.map((mission) => {
        const { mission_id: id, mission_name: name, description } = mission;
        return {
          id,
          name,
          description,
        };
      });
    default:
      return state;
  }
};

export default missionsReducer;