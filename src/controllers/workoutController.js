const getAllWorkouts = async (req, res) => {
    res.send("Get all workouts");
};

const getWorkoutById = async (req, res) => {
    res.send(`Get workout with id ${req.params.workoutId}`);
};

const createWorkout = async (req, res) => {
    res.send("Create new workout");
};

const updateWorkout = async (req, res) => {
    res.send(`Update workout with id ${req.params.workoutId}`);
};

const deleteWorkout = async (req, res) => {
    res.send(`Delete workout with id ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};