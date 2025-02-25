// import * as React from "react";
// import { useEffect, useState, useCallback } from "react";
// import { useUserStore } from "../store/user";
// import { useLabelStore } from "../store/label";
// import { useImageStore } from "../store/image";
// import { CircularProgress, Button, Box, LinearProgress, Typography } from "@mui/material";

// const LabelPage = () => {
//     const user = useUserStore((state) => state.user);
//     const { updateLabel } = useLabelStore();
//     const { fetchImages, images } = useImageStore();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [finished, setFinished] = useState(false);

//     useEffect(() => {
//         fetchImages();
//     }, [fetchImages]);

//     const handleNextImage = useCallback(async (newLabel) => {
//         if (finished) return;
//         const image = images[currentIndex];
//         const newUpdatedLabel = { user_id: user._id, image_id: image._id, label: newLabel };
//         await updateLabel(user._id, image._id, newUpdatedLabel);
//         setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : setFinished(true)));
//     }, [currentIndex, images, user, updateLabel, finished]);

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === "a") handleNextImage("AI");
//             if (event.key === "r") handleNextImage("Real");
//             if (event.key === "u") handleNextImage("Unsure");
//         };

//         window.addEventListener("keydown", handleKeyDown);
//         return () => window.removeEventListener("keydown", handleKeyDown);
//     }, [handleNextImage]);

//     return (
//         <Box sx={{ padding: 1, textAlign: "center", overflow: "hidden" }}>
//             {images?.length ? (
//                 finished ? (
//                     <div>
//                         <h2>Finished! 🎉</h2>
//                         <h4>Please copy the following code into Amazon Turk to indicate that you've finished!</h4>
//                         <h4>{user._id}</h4>
//                     </div>
//                 ) : (
//                     <Box>
//                         <Box textAlign="center" sx={{ maxWidth: 900, margin: "auto" }}>
//                             <h4 style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.4", marginBottom: "8px" }}>
//                                 Please label each image as either <b>"AI-generated"</b> or <b>"Real"</b>.
//                                 Select <b>"Unsure"</b> only if you are truly torn. You can also use keyboard shortcuts: <b>A</b> for AI-generated, <b>R</b> for Real, and <b>U</b> for Unsure.
//                             </h4>
//                         </Box>
//                         {/* <h3>Image {currentIndex + 1}/{images.length}</h3> */}
//                         <Box display="flex" alignItems="center" sx={{ width: "80%", margin: "auto", mb: 2 }}>
//                             <LinearProgress variant="determinate" value={(currentIndex / images.length) * 100} sx={{ flexGrow: 1, mr: 2 }} />
//                             <Typography variant="body2">{Math.round((currentIndex / images.length) * 100)}%</Typography>
//                         </Box>
//                         <Box sx={{ width: 500, height: 400, margin: "auto", overflow: "hidden", borderRadius: 2, boxShadow: 1, backgroundColor: "#f0f0f0" }}>
//                             <img src={images[currentIndex]?.image_url} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                         </Box>
//                         <Box mt={2}>
//                             <Button variant="contained" sx={{ mx: 1, backgroundColor: "#CDEAC0", color: "black", borderRadius: "20px", padding: "10px 20px", fontWeight: "bold", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} onClick={() => handleNextImage("AI")}>
//                                 AI Generated (A)
//                             </Button>
//                             <Button variant="contained" sx={{ mx: 1, backgroundColor: "#87CEEB", color: "black", borderRadius: "20px", padding: "10px 20px", fontWeight: "bold", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} onClick={() => handleNextImage("Real")}>
//                                 Real (R)
//                             </Button>
//                             <Button variant="contained" sx={{ mx: 1, backgroundColor: "#D0A3BF", color: "black", borderRadius: "20px", padding: "10px 20px", fontWeight: "bold", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} onClick={() => handleNextImage("Unsure")}>
//                                 Unsure (U)
//                             </Button>
//                         </Box>
//                     </Box>
//                 )
//             ) : (
//                 <CircularProgress />
//             )}
//         </Box>
//     );
// };

// export default LabelPage;

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { useUserStore } from "../store/user";
import { useLabelStore } from "../store/label";
import { useImageStore } from "../store/image";
import { CircularProgress, Button, Box, LinearProgress, Typography } from "@mui/material";

const LabelPage = () => {
    const user = useUserStore((state) => state.user);
    const { updateLabel } = useLabelStore();
    const { fetchImages, images } = useImageStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [isKeyboardSelected, setIsKeyboardSelected] = useState(false);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const handleLabelSelect = useCallback((newLabel, isKeyboard = false) => {
        setSelectedLabel(newLabel);
        setIsKeyboardSelected(isKeyboard);
    }, []);

    const handleNextImage = useCallback(async () => {
        if (finished || selectedLabel === null) return;

        const image = images[currentIndex];
        const newUpdatedLabel = { user_id: user._id, image_id: image._id, label: selectedLabel };
        await updateLabel(user._id, image._id, newUpdatedLabel);

        setSelectedLabel(null);
        setIsKeyboardSelected(false);
        setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : setFinished(true)));
    }, [currentIndex, images, user, updateLabel, finished, selectedLabel]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "a") handleLabelSelect("AI", true);
            if (event.key === "r") handleLabelSelect("Real", true);
            if (event.key === "u") handleLabelSelect("Unsure", true);
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
                                    ...(selectedLabel === "AI" && !isKeyboardSelected ? { border: "none" } : {})
                                }}
                                onClick={() => handleLabelSelect("AI", false)}
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
                                    ...(selectedLabel === "Real" && !isKeyboardSelected ? { border: "none" } : {})
                                }}
                                onClick={() => handleLabelSelect("Real", false)}
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
                                    ...(selectedLabel === "Unsure" && !isKeyboardSelected ? { border: "none" } : {})
                                }}
                                onClick={() => handleLabelSelect("Unsure", false)}
                            >
                                Unsure (U)
                            </Button>
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


