const DB = require('./db.json');

const getAllWorkouts = async () => {
    return DB.workouts;
};

module.exports = {
    getAllWorkouts
};