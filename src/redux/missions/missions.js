export const MISSIONS_RETRIEVED = 'MISSIONS_RETRIEVED';
export const MISSION_JOINED = 'MISSION_JOINED';
export const MISSION_LEFT = 'MISSION_LEFT';

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
    case MISSION_JOINED:
      return state.map((mission) => {
        if (payload === mission.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case MISSION_LEFT:
      return state.map((mission) => {
        if (payload.className === 'danger' && payload.id === mission.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export const missionJoined = (missionID) => ({
  type: MISSION_JOINED,
  payload: missionID,
});

export const missionLeft = (button) => ({
  type: MISSION_LEFT,
  payload: { id: button.id, className: button.className },
}
);

export default missionsReducer;