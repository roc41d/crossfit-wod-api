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

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout
};