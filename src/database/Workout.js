const DB = require('./db.json');

const { saveToDatabase } = require("./utils");

const getAllWorkouts = async (filterParams) => {
    try {
        let workouts = DB.workouts;
        if (filterParams.mode) {
            workouts = DB.workouts.filter((workout) =>
                workout.mode.toLocaleLowerCase().includes(filterParams.mode.toLocaleLowerCase())
            );
        }

        if (filterParams.equipment) {
            workouts = DB.workouts.filter((workout) => {
                return workout.equipment.some((item) =>
                    item.toLocaleLowerCase() === filterParams.equipment.toLocaleLowerCase()
                )
            });
        }
        return workouts;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        }
    }
};

const getWorkoutById = async (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Workout with id ${workoutId} not found`,
            }
        }
        return workout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        }
    }
};

const createWorkout = async (newWorkout) => {
    const isWorkoutExist =  DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isWorkoutExist) {
        throw {
            status: 400,
            message: `Workout  with the name ${newWorkout.name} already exists`,
        }
    }

    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const updateWorkout = async (workoutId, workoutToUpdate) => {
    try {
        const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (workoutIndex === -1) {
            throw {
                status: 400,
                message: `Workout with id ${workoutId} not found`,
            }
        }

        const updatedWorkout = {
            ...DB.workouts[workoutIndex],
            ...workoutToUpdate,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
        };

        DB.workouts[workoutIndex] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        }
    }
};

const deleteWorkout = async (workoutId) => {
    try {
        const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (workoutIndex === -1) {
            throw {
                status: 400,
                message: `Workout with id ${workoutId} not found`,
            }
        }

        DB.workouts.splice(workoutIndex, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        }
    }
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};