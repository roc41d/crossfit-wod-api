const { v4: uuid } = require("uuid")
const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async () => {
    return;
};

const createWorkout = async (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
    };

    const createdWorkout = await Workout.createWorkout(workoutToInsert);
    return createdWorkout;
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