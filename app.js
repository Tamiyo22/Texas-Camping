var express= require("express")
var app= express();
var bodyParser= require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds=[
        
        {name:"Big Bend National Park",image:"https://files.tripstodiscover.com/files/2016/09/bigstock-126816986-1.jpg"},
        {name:"Big Thicket National Preserve",image:"https://files.tripstodiscover.com/files/2017/03/7880811612_0bbf3fbd20_o-1.jpg"},
        {name:"Colorado Bend State Park",image:"https://files.tripstodiscover.com/files/2017/08/Gorman-Falls.jpg"},
        {name:"Garner State Park",image:"https://files.tripstodiscover.com/files/2017/04/GARNER-SP_3950_HDR-1.jpg"},
        {name:"Enchanted Rock State Natural Area",image:"https://files.tripstodiscover.com/files/2017/04/Enchanted-Rock_0784-1.jpg"},
        {name:"Big Thicket National Preserve",image:"https://files.tripstodiscover.com/files/2017/03/7880811612_0bbf3fbd20_o-1.jpg"},
        {name:"Guadalupe River State Park",image:"https://files.tripstodiscover.com/files/2017/04/13990934180_7358c44a2f_o-1.jpg"},
        {name:"Padre Island National Seashore",image:"https://files.tripstodiscover.com/files/2017/02/4438643531_beaffd3f77_o-1.jpg"},
        {name:"Caprock Canyons State Park",image:"https://files.tripstodiscover.com/files/2017/04/Caprock_hiking_16943-1.jpg"},
        {name:"Lost Maples State Natural Area",image:"https://files.tripstodiscover.com/files/2017/04/LostMaples2005025-1.jpg"},
        {name:"Palo Duro Canyon State Park",image:"https://files.tripstodiscover.com/files/2017/04/PaloDuro_106-1.jpg"},
        {name:"Inks Lake State Park",image:"https://files.tripstodiscover.com/files/2017/04/Inks-Lake_0100-1.jpg"},
        ]


app.get("/", function(req,res){
    res.render("landing")
})

app.get("/campgrounds", function(req,res){
    
        
        res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req,res){
    
    //get data from from and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground={name: name, image:image}
    
    campgrounds.push(newCampground)
    
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req,res){
    
      res.render("new.ejs");
    
    
})



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YelpCamp has started!")
    
})