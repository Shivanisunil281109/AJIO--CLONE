
export const registerController = (req, res) => {
    try {
        return res.status(201).json({
            success: true,
            message: "Registration successful."
        });
    } catch (error) {
        return res.status(500).json({
            error,
            success: false
        });
    }
};