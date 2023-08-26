export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const signupSuccess = user => ({
    type: SIGNUP_SUCCESS,
    payload: user,
});

export const signupAction = userData => dispatch => {
  // Perform API call or any async operation here
  // Simulating async operation for demonstration
    setTimeout(() => {
        const newUser = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
        };

        dispatch(signupSuccess(newUser));
    }, 1000);
};