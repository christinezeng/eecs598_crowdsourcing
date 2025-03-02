import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAIStore } from "../store/ai"; // Import AI store

const Accordian = () => {
	const { text } = useAIStore();
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<h4 style={{ fontWeight: 'bold', textAlign: 'center', margin: '0'}}>
						Click the dropdown for the AI's best guess based on your label. The AI is still learning how to best respond, so it can make mistakes.
					</h4>
				</AccordionSummary>
				<AccordionDetails>
					{text}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Accordian;
