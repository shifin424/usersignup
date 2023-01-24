var express = require('express');
const session = require('express-session');
var router = express.Router();
const validatesession=require('../middleware/validateSession')

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    let Error=req.query
    if(req.query.Error){
        res.render('login',Error?{Error}:{Error:false})
    }
   let  session=req.session.user
   console.log(session);
   if(session){

    res.redirect('/home')
   }else{
    res.render('login');
   }
    
});

//    Dummy works-----------------  start ------------>

//dummy cards
router.get('/card',validatesession,(req,res)=>{

    let cards =[{
        name:"Ferrari",
        description:"Shop new & used cars, research & compare models, find local dealers/sellers,calculate payments, value your car, sell/trade in your car & more at Cars.com.",
        image:"https://imgs.search.brave.com/pethlZit7ugeFDLoTeVbNO_jBHhVMgGgb--DE76qsCY/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9JWjdm/cEpOU2VFTzF2MnZO/YXBWbExZbENXemM9/LzIxNHgwOjEwMzd4/NTQ5LzEyMDB4ODAw/L2ZpbHRlcnM6Zm9j/YWwoMjE0eDA6MTAz/N3g1NDkpL2Nkbi52/b3gtY2RuLmNvbS91/cGxvYWRzL2Nob3J1/c19pbWFnZS9pbWFn/ZS80NTIwMDA3Mi9u/ZXctZm9yZC1ndC1z/dXBlcmNhci0wMDA2/LjAuMC5qcGc"
    },{
        name:"Cevennes",
        description:"Shop new & used cars, research & compare models, find local dealers/sellers,calculate payments, value your car, sell/trade in your car & more at Cars.com.",
        image:"https://imgs.search.brave.com/aJBulGCeRNp82h1b4KF_xvzQm96gcb6J9nxUWlqOlJ0/rs:fit:1024:707:1/g:ce/aHR0cHM6Ly9pbWcu/eGNpdGVmdW4ubmV0/L3VzZXJzLzIwMTMv/MDYvMzI0OTc4LHhj/aXRlZnVuLXBnby1j/ZXZlbm5lcy0zLmpw/Zw"
    },{
        name:"Gt-500",
        description:"Shop new & used cars, research & compare models, find local dealers/sellers,calculate payments, value your car, sell/trade in your car & more at Cars.com.",
        image:"https://imgs.search.brave.com/Sl61rHPR-T0gnOGpE0eXyhHX8VvaxdFxNQvCQ8Pd-64/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bGFtYm9jYXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNC93cDgwMDM1/MzAtc2NhbGVkLmpw/ZWc"
    },{
        name:"Race car",
        description:"Shop new & used cars, research & compare models, find local dealers/sellers,calculate payments, value your car, sell/trade in your car & more at Cars.com.", 
        image:"https://imgs.search.brave.com/DTEK7FzENYRsD6GIHbuvLoCjqFD6iz2IvAP_mdHr9Ns/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/aGRjYXJ3YWxscGFw/ZXJzLmNvbS93YWxs/cy8yMDEzX3NydF92/aXBlcl9yYWNlX2Nh/ci1IRC5qcGc"
    }]
    res.render("card",{cards})
})

//dummy list 

router.get('/list',validatesession,(req,res)=>{
    let laptop =[{
        number:"1",
        model:"Ausus",
        description:"An ASUS Studiobook laptop is a mighty powerhouse that bring ideas to life.",
        version:"Asus vivo book"
    },{
        number:"2",
        model:"lenovo",
        description:"Lenovo India official site and buy online the best laptops, notebooks, tablets, data centers & desktops for your home and business",
        version:"Idea pad slim"
    },{
        number:"3",
        model:"hp",
        description:"Find a great collection of Laptops at HP and choose the right one for you. Enjoy Low Prices and Free Shipping when you buy now online",
        version:"hp pavalion"
    },{
        number:"4",
        model:"Mac book",
        description:"most powerful laptops, MacBook Pros are supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch ID, and brilliant Retina display.", 
        version:"mac book pro"
    }]
    res.render("list",{laptop})
})


//dummy list
router.get('/table',validatesession,(req,res)=>{

    let table=[{
        name:"White",
    },{
        name:"Blue",
    },{
        name:"Red",
    },{
        name:"Yellow",
    },{
        name:"Black",
    }]
   res.render("table",{table}) 
})



//  Dummy works-----------------  Ends ------------>



router.post('/login', (req, res) => {
    console.log(req.body);
    const {
        username,
        password
    } = req.body;
    if (username === "shifin" && password == "12345678") {
       req.session.user = req.body.username
    //    console.log(req.session.user)
        res.redirect("/home")
    } else {
        res.redirect("/?Error=Incorrect Username or Password")
    }
    
})

// logout section;

router.get("/logout",(req,res)=>{
     req.session.destroy()
    res.redirect("/");
});



router.get('/home', (req, res) => {
   let   session=req.session.user
    if(session){
        let products =[{
            name:'I phone 14',
            description:"Both models are available in deep purple, silver, gold, and space black.",
            image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.news_app_ed.jpg"
        },{
            name:"I phone 12",
            description:"Both models are available in light blue, white, red, and space black",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWm1yCSKaARXbtnOxg5sLAHp9yHz9OaFFtLw&usqp=CAU"
        },{
            name:"I phone 13",
            description:"Both models are available in dark red, green, red, and space black",
            image:"https://www.cnet.com/a/img/resize/689c8608c76dbdee719538dcead29854f436eebb/hub/2022/09/14/3da9516b-02bc-4648-806f-e17671626b61/iphone-14-pro-iphone-14-8709.jpg?auto=webp&fit=crop&height=299&width=532"
        },{
            name:"I phone 11",
            description:"Both models are available in shade yellow, green, red, and space black", 
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUat0SSHvWpQ9xekgWDmVavuPjIFYEmf_5A&usqp=CAU"
        }]
        res.render('home',{products})
    }else{
        res.redirect('/')
    }
   

})

module.exports = router;