const DB = require('./db.json');

const { saveToDatabase } = require("./utils");

const getAllWorkouts = async () => {
    return DB.workouts;
};

const getWorkoutById = async (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }
    return workout;
};

const createWorkout = async (newWorkout) => {
    const isWorkoutExist =  DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isWorkoutExist) {
        return;
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

const updateWorkout = async (workoutId, workoutToUpdate) => {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (workoutIndex === -1) {
        return;
    }

    const updatedWorkout = {
        ...DB.workouts[workoutIndex],
        ...workoutToUpdate,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
    };

    DB.workouts[workoutIndex] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
};

const deleteWorkout = async (workoutId) => {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (workoutIndex === -1) {
        return;
    }

    DB.workouts.splice(workoutIndex, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};