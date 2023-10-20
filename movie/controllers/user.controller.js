const Movie = require("../models/movie.schema")
const User = require("../models/user.schema")

const signupuser=async(req,res)=>{
    let data=await User.create(req.body)
    res.status(201).send(data)
}
const deleteuser=async(req,res)=>{
    let{id}=req.params
    let data=await User.findByIdAndDelete(id)
    res.status(200).send({message: 'User deleted successfully'})
}
const loginuser=async(req,res)=>{
    let{username,password}=req.body
    let data=await User.findOne({username:username})
    
    if(!data || password!=data.password){
        res.status(401).json({error:"Invalid username or password"})
    }
    else{
        res.status(200).send({message: 'Logged in successfully'})
        let data=await User.create(req.body)
    }
}
const userdata=async(req,res)=>{
    let data = await User.find()
    res.status(200).send(data)
}

const addmovie=async(req,res)=>{
    let data=await Movie.create(req.body)
    res.status(201).send(data)
}
const updatemovie=async(req,res)=>{
    let {id}=req.params
    let data=await Movie.findByIdAndUpdate(id,req.body)
    data=await Movie.findById(id)
    res.status(200).send(data)
}
const moviedelete = async (req, res) => {
    const { id } = req.params;
    const movies = await movie.findById(id);
    if (!movies) {
        return res.status(404).json({ error: "Movie not found" });
    }
    await movie.findByIdAndDelete(id);
    res.json({ message: "Movie deleted" });
};

const movierating = async (req, res) => {
    let { id } = req.params
    let { rating } = req.body
    if (rating < 0 || rating > 10) {
        return res.status(400).json({ error: 'Invalid rating. Rating must be between 0 and 10.' });
    }

    let movies = await movie.findById(id)

    if (!movies) {
        res.send({ error: "movie not found" })
    }
    movies.ratings.push({ value: rating })

    let updatemovie = await movies.save()
    res.json(updatemovie)
}

const moviecomment = async (req, res) => {
    let { id } = req.params
    let { text } = req.body

    let movies = await movie.findById(id)

    if (!movies) {
        res.send({ error: "movie not found" })
    }
    movies.comments.push({ text })

    let updatemovie = await movies.save()
    res.json(updatemovie)
}

const filter = async(req , res) =>{
    let {title , addedBy , releaseDate , category} = req.query;
    let filter = {}

    if(title){
        filter.title = title;
    }
    if(addedBy){
        filter.addedBy = addedBy;
    }
    if(releaseDate){
        filter.releaseDate = releaseDate;
    }
    if(category){
        filter.category = category;
    }
    const movies = await movie.find(filter)
    res.json(movies)
}
module.exports={signupuser,deleteuser,loginuser,userdata,addmovie,updatemovie,moviedelete,movierating,moviecomment,filter}