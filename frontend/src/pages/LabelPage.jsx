import * as React from "react";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/user";
import { useLabelStore } from "../store/label";
import { useImageStore } from "../store/image";
import { CircularProgress, Button, Box } from "@mui/material";

const LabelPage = () => {
    const user = useUserStore((state) => state.user);
    const { updateLabel } = useLabelStore();
    const { fetchImages, images } = useImageStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const handleNextImage = async (newLabel) => {
        const image = images[currentIndex];
        const newUpdatedLabel = { user_id: user._id, image_id: image._id, label: newLabel };
        await updateLabel(user._id, image._id, newUpdatedLabel);
        setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : setFinished(true)));
    };

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
                        <h3>Image {currentIndex + 1}/200</h3>
                        <Box sx={{ width: 500, height: 400, margin: "auto", overflow: "hidden", borderRadius: 2, boxShadow: 1, backgroundColor: "#f0f0f0" }}>
                            <img src={images[currentIndex]?.image_url} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box mt={2}>
                            <Button variant="contained" sx={{ mx: 1, backgroundColor: "#CDEAC0", color: "black", borderRadius: "20px", padding: "10px 20px", fontWeight: "bold", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} onClick={() => handleNextImage("AI")}>
                                AI Generated
                            </Button>
                            <Button variant="contained" sx={{ mx: 1, backgroundColor: "#87CEEB", color: "black", borderRadius: "20px", padding: "10px 20px", fontWeight: "bold", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} onClick={() => handleNextImage("Real")}>
                                Real
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
