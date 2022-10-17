module.exports = (app)=> {
    app.get('/post',(req,res)=> {
        res.render('post.ejs')
    })
}