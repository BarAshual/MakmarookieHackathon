import { FormGroup, FormControlLabel, Box, Accordion, AccordionSummary, AccordionDetails, Checkbox } from '@mui/material';
import Info from '../../components/soldier/Info';
import {model} from '../../models/MandatorySoldier';

export const getStaticPaths = async () => ({
	paths: [{params: {id: '8004001'}}],
	fallback: false,
})

export const getStaticProps = async ({ params }) => ({
	props: {
		soldier: {
			name: 'אני',
			id: 1234567,
			recruitDate: new Date().toString(),
			arrivalDate: new Date().toString(),
			course: 'fuck',
			tasks: [{
			name: 'עמדה', 
			description: 'אצל אסא', 
			subTasks: [{name: 'מסך', isDone: false}], isDone: false}
		]},
	},
});

const SoldierPage = ({ soldier }) => {
	// soldier = 
	console.log(soldier);
	return (
		<Box sx={{display: 'flex', justifyContent: 'center'}}>
			<Box sx={{margin: '8px', border: 'black solid 1px', width: '50vw', height: '100vh'}}>
				<Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', height: '100%', width: '100%'}}>
						<Box sx={{width: '100%', marginBottom: '8px', paddding: '8px'}}>
							<Info soldier={soldier} />
						</Box>
						<Box sx={{width: '80%', overflow: 'auto', padding: '5px'}}>
							{soldier.tasks.map(task => (
								<Accordion sx={{marginBottom: '5px'}} key={task.name}>
									<AccordionSummary>
										<FormGroup>
											<FormControlLabel key={task.name} label={`${task.name} - ${task.description}`} control={<Checkbox onClick={e => {e.stopPropagation();}} defaultChecked={task.isDone} />} />
										</FormGroup>
									</AccordionSummary>
									<AccordionDetails>{task.subTasks.map(subTask =>
										<FormGroup key={subTask.name} >
											<FormControlLabel key={subTask.name} label={subTask.name} control={<Checkbox defaultChecked={subTask.isDone} />} />
										</FormGroup>
									)}</AccordionDetails>
								</Accordion>
							))}
						</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SoldierPage;