const { v4: uuid } = require("uuid")
const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    try {
        const workouts = await Workout.getAllWorkouts();
        return workouts;
    } catch (error) {
        throw error;
    }
};

const getWorkoutById = async (workoutId) => {
    try {
        const workout = await Workout.getWorkoutById(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
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
    try {
        const updatedWorkout = await Workout.updateWorkout(workoutId, workoutToUpdate);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteWorkout = async (workoutId) => {
    try {
        await Workout.deleteWorkout(workoutId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};