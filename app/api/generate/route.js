import { NextResponse } from "next/server";
import OpenAI from 'openai'


const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide brief, accurate answers for the back of the flashcard.
3. Focus on key concepts, definitions, and important facts.
4. Use simple language to ensure clarity and ease of understanding.
5. Avoid overly complex or lengthy explanations.
6. Create a mix of different question types (e.g., definitions, fill-in-the-blank, true/false, multiple-choice) when appropriate.
7. Ensure that each flashcard covers a single, distinct piece of information.
8. When dealing with a specific subject, use appropriate terminology and concepts relevant to that field.
9. If given a block of text, extract the most important information to create flashcards.
10. Aim to create flashcards that promote active recall and aid in long-term retention of information.
11. Only generate 10 flashcards.

Please generate flashcards based on the input provided by the user.

Return in the following JSON format
{
    "flashcard": [{
        "front": str,
        "back": str
    }]
}
`

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: "gpt-4o",
        response_format: {type: 'json_object'} 
    })


    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}