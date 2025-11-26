import dotenv from "dotenv"
import {app} from './app.js'

dotenv.config({
    path : "./.env"
})

app.on("error" , (error) => {
    console.log("error",error)
    throw error
})

app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server is running at port ${process.env.PORT}`);
    
})
