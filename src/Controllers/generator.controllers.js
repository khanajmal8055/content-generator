import asyncHandler from "../utils/asyncHandler.js"
import {ApiError} from  "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"

import { GoogleGenAI } from "@google/genai"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey : GEMINI_API_KEY})


const contentGeneration = asyncHandler(async(req,res)=> {
    const {idea , type , tone} = req.body;

    if(!idea && !type && !role){
        throw new ApiError(400, "All fields are required for the generation of content")
    }

    

    const prompt = `You are an expert content writer.

      Task:
      Convert the following idea into a polished ${type}.

      Rules:
      - Keep tone: ${tone}
      - Maintain original meaning
      - Improve grammar, clarity, and structure
      - Make it engaging and readable

      User Idea: ${idea}
    `;

    const response = await ai.models.generateContent({
        model : 'gemini-2.5-flash',
        contents : prompt
    })

    const ans = response.text

    res.json(
        new ApiResponse(200 , ans , "Response Generated")
    )
    
})

export {contentGeneration}