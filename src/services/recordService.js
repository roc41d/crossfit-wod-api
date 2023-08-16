const Record = require("../database/Record");

const getRecordForWorkout = async (workoutId) => {
    try {
        const records = await Record.getRecordForWorkout(workoutId);
        return records;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getRecordForWorkout
}