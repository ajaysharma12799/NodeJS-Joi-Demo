const registerUser = (req, res) => {
    try {
        res.status(201).json({
            data: "User Registered Successfully",
        });
    } catch (error) {
        console.log("registerUser Error --> ", error);

        res.status(500).json({
            error: error.message,
        });
    }
};

const loginUser = (req, res) => {
    try {
        res.status(201).json({
            data: "User LoggedIn Successfully",
        });
    } catch (error) {
        console.log("loginUser Error --> ", error);

        res.status(500).json({
            error: error.message,
        });
    }
};

export { registerUser, loginUser };
