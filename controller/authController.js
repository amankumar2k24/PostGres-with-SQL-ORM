const signup = (req, res) => {
    return res.status(201).json({
        status: true,
        message: "User created successfully"
    })
}

module.exports = {
    signup
}