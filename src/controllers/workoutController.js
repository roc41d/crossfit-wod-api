const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
    const workouts = await workoutService.getAllWorkouts();
    res.send("Get all workouts");
};

const getWorkoutById = async (req, res) => {
    const workout = await workoutService.getWorkoutById();
    res.send(`Get workout with id ${req.params.workoutId}`);
};

const createWorkout = async (req, res) => {
    const workout = await workoutService.createWorkout();
    res.send("Create new workout");
};

const updateWorkout = async (req, res) => {
    const workout = await workoutService.updateWorkout();
    res.send(`Update workout with id ${req.params.workoutId}`);
};

const deleteWorkout = async (req, res) => {
    const workout = await workoutService.deleteWorkout();
    res.send(`Delete workout with id ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};