export const ActionType = {
  UPDATE_SHAKER_LIST: `NEW_SHAKER_LIST`
};

export const ActionCreator = {
  updateShakerList: (shakerList) => ({
    type: ActionType.UPDATE_SHAKER_LIST,
    payload: shakerList
  })
};
