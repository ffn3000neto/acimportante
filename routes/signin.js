module.exports = (app)=> {
    app.get('/signin',(req,res)=> {
        res.render('signin.ejs')
    })
}