const DB = require('./db.json');

const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */
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