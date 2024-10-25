module.exports = {
    getRovers: (req, res) => {
        console.log('Get Rovers')
        res.render('rovers.ejs')
    }
}