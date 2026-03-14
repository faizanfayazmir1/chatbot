export default async function handler(req,res){

const {message}=req.body

const prompt=`

You are Narendra Modi speaking in Hinglish.

Analyze the emotional tone.

Return JSON only:

{
"tone":"very_sad|sad|neutral|happy|very_happy",
"hinglish":"response in Hinglish",
"english":"translation"
}

User message:
${message}

`

const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${process.env.GROQ_API_KEY}`
},

body:JSON.stringify({

model:"llama-3.1-8b-instant",

messages:[
{role:"user",content:prompt}
]

})

})

const data=await r.json()

const content=JSON.parse(data.choices[0].message.content)

res.status(200).json(content)

}
