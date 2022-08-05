const objectPicker = (obj, arr) => arr.reduce((acc, record) =>
        (record in obj && (acc[record] = obj[record]), acc),
    {});


module.exports = objectPicker;
