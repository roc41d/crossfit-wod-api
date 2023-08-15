const { v4: uuid } = require("uuid")
const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    const workouts = await Workout.getAllWorkouts();
    return workouts;
};

const getWorkoutById = async (workoutId) => {
    const workout = await Workout.getWorkoutById(workoutId);
    return workout;
};

const createWorkout = async (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
    };

    try {
        const createdWorkout = await Workout.createWorkout(workoutToInsert);
        return createdWorkout;

    } catch (error) {
        throw error;
    }
};

const updateWorkout = async (workoutId, workoutToUpdate) => {
    const updatedWorkout = await Workout.updateWorkout(workoutId, workoutToUpdate);
    return updatedWorkout;
};

const deleteWorkout = async (workoutId) => {
    await Workout.deleteWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};