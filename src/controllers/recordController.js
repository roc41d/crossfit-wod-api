const recordService = require("../services/recordService");

const getRecordForWorkout = async (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
                error: "':workoutId' is missing in request params"},
        });
    }

    try {
        const records = await recordService.getRecordForWorkout(workoutId);
        res.send({status: "OK", data: records});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getRecordForWorkout
}