const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
    const workouts = await workoutService.getAllWorkouts();
    res.send({status: "success", data: workouts});
};

const getWorkoutById = async (req, res) => {
    const { 
        params: { workoutId },
    } = req;

    const workout = await workoutService.getWorkoutById(workoutId);
    res.send({status: "OK", data: workout});
};

const createWorkout = async (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,

    };
    const workout = await workoutService.createWorkout(newWorkout);
    res.status(201).send({status: "OK", data: newWorkout});
};

const updateWorkout = async (req, res) => {
    const { 
        body,
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }

    const workout = await workoutService.updateWorkout(workoutId, body);
    res.send({status: "OK", data: workout});
};

const deleteWorkout = async (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }

    await workoutService.deleteWorkout(workoutId);
    res.status(204).send({status: "OK"});
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};