const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async () => {
    return;
};

const createWorkout = async () => {
    return;
};

const updateWorkout = async () => {
    return;
};

const deleteWorkout = async () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};