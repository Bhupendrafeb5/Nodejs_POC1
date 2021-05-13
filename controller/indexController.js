class IndexController {



    static index(req, res) {

        console.log('inside index controller ', req)

        res.send('Hello from IndexController')

    }

    static home(req, res) {

        res.send('Hello from HomeController')

    }

}



module.exports = IndexController