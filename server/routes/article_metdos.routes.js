const Router = require("express");
const Article = require("../models/article")
const config = require("config")
const router = new Router()



router.post('/add-article',
    async (req, res) => {
    try {
        const {name, tags, file_name} = req.body

        const is_article_exist = await Article.findOne({file_name})

        if(is_article_exist) {
            return res.status(400).json({message: `article with file name ${file_name} already exist`})
        }

        const article = new Article({"name": name, "file_name": file_name, "tags": tags})
        await article.save()

        res.json({message: "article was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/get-articles',
    async (req, res) => {
    try {
		 let {search_input, skip, count} = req.body

		 search_input=".*"+search_input+".*"
		 const articles = await Article.find({name: {$regex:search_input}}).skip(skip).limit(count)

		 if(articles.length==0) {
			 return res.status(400).json({message: `article with name or tag ${search_input} didn't exist`})
		 }

		 res.json({"message": "articles founded", "count":articles.length, "articles":articles})

    } catch (e) {
		 console.log(e)
		 res.send({message: "Server error"})
    }
})


module.exports = router
