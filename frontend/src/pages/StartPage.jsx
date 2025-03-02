// import * as React from 'react';
// import Button from '@mui/material/Button';

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import { useUserStore } from '../store/user';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const theme = createTheme({
// 	typography: {
// 		fontFamily: "'Inter', 'Arial', sans-serif", // Change to your preferred font
// 	},
// });

// const StartPage = () => {
// 	const { createUser, user } = useUserStore();
// 	const navigate = useNavigate();

// 	const handleAddUserNextPage = async () => {
// 		const { success, message } = await createUser();
// 		console.log("Success:", success);
// 		console.log("Message:", message);

// 		if (success) {
// 			navigate("/label");
// 		} else {
// 			console.log("User creation failed:", message);
// 		}
// 	};

// 	useEffect(() => {
// 		if (user) {
// 			console.log("user_id accessed:", user._id); // This will run when `user` state changes
// 		}
// 	}, [user]); 

// 	return (
// 		<div>
// 			<h1>start page</h1>
// 			<div>
// 				In the following task, you will be given 200 images to label as either AI generated or human created.
// 			</div>
// 			<ThemeProvider theme={theme}>
// 				<Typography>
// 					<Button variant="contained" onClick={handleAddUserNextPage}>Get Started</Button>
// 				</Typography>
// 			</ThemeProvider>
// 		</div>
// 	)
// }

// export default StartPage;

import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Typography, Box, Container, Paper } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "'Inter', 'Arial', sans-serif",
	},
});

const StartPage = () => {
	const { createUser, user } = useUserStore();
	const navigate = useNavigate();

	const handleAddUserNextPage = async () => {
		const { success, message } = await createUser();
		console.log("Success:", success);
		console.log("Message:", message);

		if (success) {
			navigate("/label");
		} else {
			console.log("User creation failed:", message);
		}
	};

	useEffect(() => {
		if (user) {
			console.log("🚀 user_id modified:", user._id); // Runs when `user` state changes
		} else {
			console.log("🚀 user and user_id is not yet available:", user);
		}
	}, [user]);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					minHeight="100vh"
				>
					<Paper elevation={3} sx={{ padding: 4, textAlign: "center", borderRadius: 4 }}>
						<Typography variant="h2" sx={{fontWeight: 400}} gutterBottom>
							Welcome to the Image Labeling Task!
						</Typography>
						<Typography variant="body1">
							In the following task, you will be given <strong>10 images</strong> to label as either
							AI-generated, Real, or Unsure. <strong>Please label all 10 images in one go. </strong> 
							After you have finished, you will receive a unique code to paste into Amazon MTurk survey to receive credit for doing this task.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							onClick={handleAddUserNextPage}
							sx={{ marginTop: 2, padding: "10px 24px", fontSize: "16px" }}
						>
							Get Started
						</Button>
					</Paper>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default StartPage;
