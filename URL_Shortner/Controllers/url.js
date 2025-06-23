import { nanoid } from "nanoid";
import { Url } from "../Models/Url.js";

export const shortUrl = async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).send("Original URL is required");
    }

    const shortCode = nanoid(8); // ✅ Generate short ID

    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();

    res.render("index.ejs", { shortUrl: `http://localhost:5000/${shortCode}` });
};
