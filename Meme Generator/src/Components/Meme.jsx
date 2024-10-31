import memesData from "../data/memesData.js"
import { useState } from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [top, setTop] = useState("One does not simply")
    const [bottom, setBottom] = useState("Walk into Mordor")
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleTop(event) {
       setTop(event.target.value)
    }
    
    function handleBottom(event) {
        setBottom(event.target.value)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={top}
                    onChange={handleTop}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={bottom}
                    onChange={handleBottom}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{top}</h2>
                <h2 className="meme--text bottom">{bottom}</h2>
            </div>
        </main>
    )
}