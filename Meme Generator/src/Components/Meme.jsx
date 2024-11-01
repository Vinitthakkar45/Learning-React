import { useEffect, useState } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "/images/image.png",
    });
    const [allMemeImages, setAllMemeImages] = useState([]);

    function getMemeImage() {
        const memesArray = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    useEffect(() => {
        console.log("jk")
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                setAllMemeImages(data.data.memes);
            });
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}