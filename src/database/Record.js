const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
    try {
        const records = DB.records.filter((record) => record.workout === workoutId);
        if (!records) {
            throw {
                status: error?.status || 500,
                message: error?.message || error,
            }
        }
        return records;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
};

module.exports = {
    getRecordForWorkout
}