import { uiActions } from "../slices/ui-slice";

const httpAction = (data) => async (dispatch) => {
  dispatch(uiActions.startLoading());

  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.body ? JSON.stringify(data.body) : null,
      headers: data.token
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          }
        : { "Content-Type": "application/json" },
    });

    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message);
    }

    return resData;
  } catch (error) {
    dispatch(uiActions.showError(error.message));
  } finally {
    dispatch(uiActions.stopLoading());
  }
};

export default httpAction;
