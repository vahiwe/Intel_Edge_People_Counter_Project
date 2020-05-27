// actions
const TOGGLE_STATS = "features/stats/TOGGLE_STATS";
const TOGGLE_COUNT = "features/stats/TOGGLE_COUNT";
const TOGGLE_CAMERA = "features/camera-feed/TOGGLE_CAMERA";

// initial state
const initialState = {
  cameraOn: true,
  statsOn: false,
  totalCountOn: false,
  peopleSeen: [],
  currentCount: 0,
  currentDuration: null,
};


// Reducer
export default function reducer( state = initialState, action = {} ) {
  switch ( action.type ) {
    case TOGGLE_STATS:
      return {
        ...state,
        statsOn: !state.statsOn,
      };
    case TOGGLE_COUNT:
      return {
        ...state,
        totalCountOn: !state.totalCountOn,
      };
    case TOGGLE_CAMERA:
      return {
        ...state,
        cameraOn: !state.cameraOn,
      };
    default: return state;
  }
}

// action creators
export function toggleStats() {
  return { type: TOGGLE_STATS };
}

export function toggleTotalCount() {
  return { type: TOGGLE_COUNT };
}

export function toggleCamera() {
  return { type: TOGGLE_CAMERA };
}