const handler = (error, res) => {
    console.log(error);
    res.status(error.status || 500);
    res.send('Error');
};

module.exports = handler;
