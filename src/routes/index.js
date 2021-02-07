module.exports = app => {

    app.get('/', (req, res) => {
        res.end('<h1>Index Pages</h1>');
    });

}