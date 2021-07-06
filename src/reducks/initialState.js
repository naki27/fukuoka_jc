const initialState = {
    registMatchResult: {
        selectedDepartment: "",
        selectedRoundGame: "",
        // init で登録履歴を描画させる
        progress: "init",   // init, department done, roundGame done
    },
    users: {
        isSignedIn: false,
        uid: "",
        username: ""
    }
};

export default initialState;
