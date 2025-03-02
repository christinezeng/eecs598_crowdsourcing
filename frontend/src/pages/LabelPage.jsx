import * as React from "react";
import { useEffect, useState, useCallback, useRef } from "react";
import { useUserStore } from "../store/user";
import { useLabelStore } from "../store/label";
import { useImageStore } from "../store/image";
import { useAIStore } from "../store/ai"; // Import AI store
import { CircularProgress, Button, Box, LinearProgress, Typography } from "@mui/material";
import Accordian from "../components/Accordian";

const LabelPage = () => {
    const user = useUserStore((state) => state.user);
    const { updateLabel } = useLabelStore();
    const { fetchImages, images } = useImageStore();
    const { setGeneratedText, createGeneratedText } = useAIStore(); // Access AI text store

    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const processedImages = useRef(new Set()); // Store processed image URLs

    const handleLabelSelect = useCallback(async (newLabel, image_url) => {
        setSelectedLabel(newLabel);

        // Ensure `createGeneratedText` is only called once per image
        if (!processedImages.current.has(image_url)) {
            processedImages.current.add(image_url); // Mark as processed
            await createGeneratedText(image_url, newLabel);
        }
    }, [createGeneratedText]);

    const handleNextImage = useCallback(async () => {
        if (finished || selectedLabel === null) return;

        const image = images[currentIndex];
        const newUpdatedLabel = { user_id: user._id, image_id: image._id, label: selectedLabel };
        await updateLabel(user._id, image._id, newUpdatedLabel);

        setSelectedLabel(null);
        setGeneratedText("Loading...");
        setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : setFinished(true)));
    }, [currentIndex, images, user, updateLabel, finished, selectedLabel, setGeneratedText]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "a") handleLabelSelect("AI", images[currentIndex]?.image_url);
            if (event.key === "r") handleLabelSelect("Real", images[currentIndex]?.image_url);
            if (event.key === "u") handleLabelSelect("Unsure", images[currentIndex]?.image_url);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleLabelSelect]);

    return (
        <Box sx={{ padding: 1, textAlign: "center", overflow: "hidden" }}>
            {images?.length ? (
                finished ? (
                    <div>
                        <h2>Finished! 🎉</h2>
                        <h4>Please copy the following code into Amazon Turk to indicate that you've finished!</h4>
                        <h4>{user._id}</h4>
                    </div>
                ) : (
                    <Box>
                        <Box textAlign="center" sx={{ maxWidth: 900, margin: "auto" }}>
                            <h4 style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.4", marginBottom: "8px" }}>
                                Please label each image as either <b>"AI-generated"</b> or <b>"Real"</b>.
                                Select <b>"Unsure"</b> only if you are truly torn. You can also use keyboard shortcuts: <b>A</b> for AI-generated, <b>R</b> for Real, and <b>U</b> for Unsure.
                            </h4>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ width: "80%", margin: "auto", mb: 2 }}>
                            <LinearProgress variant="determinate" value={(currentIndex / images.length) * 100} sx={{ flexGrow: 1, mr: 2 }} />
                            <Typography variant="body2">{Math.round((currentIndex / images.length) * 100)}%</Typography>
                        </Box>
                        <Box sx={{ width: 500, height: 400, margin: "auto", overflow: "hidden", borderRadius: 2, boxShadow: 1, backgroundColor: "#f0f0f0" }}>
                            <img src={images[currentIndex]?.image_url} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box mt={2}>
                            <Button
                                variant={selectedLabel === "AI" ? "contained" : "outlined"}
                                sx={{
                                    mx: 1,
                                    backgroundColor: selectedLabel === "AI" ? "#CDEAC0" : "transparent",
                                    color: "black",
                                    borderRadius: "20px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => handleLabelSelect("AI", images[currentIndex]?.image_url)}
                            >
                                AI Generated (A)
                            </Button>
                            <Button
                                variant={selectedLabel === "Real" ? "contained" : "outlined"}
                                sx={{
                                    mx: 1,
                                    backgroundColor: selectedLabel === "Real" ? "#87CEEB" : "transparent",
                                    color: "black",
                                    borderRadius: "20px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => handleLabelSelect("Real", images[currentIndex]?.image_url)}
                            >
                                Real (R)
                            </Button>
                            <Button
                                variant={selectedLabel === "Unsure" ? "contained" : "outlined"}
                                sx={{
                                    mx: 1,
                                    backgroundColor: selectedLabel === "Unsure" ? "#D0A3BF" : "transparent",
                                    color: "black",
                                    borderRadius: "20px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => handleLabelSelect("Unsure", images[currentIndex]?.image_url)}
                            >
                                Unsure (U)
                            </Button>
                        </Box>

                        {/* Display AI-generated text */}
                        <Box mt = {2}>
                            {selectedLabel ? <Accordian /> : null}
                        </Box>

                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, borderRadius: "20px", padding: "10px 20px", fontWeight: "bold" }}
                                onClick={handleNextImage}
                                disabled={selectedLabel === null}
                            >
                                Next Image
                            </Button>
                        </Box>
                    </Box>
                )
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
};

export default LabelPage;
