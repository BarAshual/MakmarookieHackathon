import { Typography, AppBar, Toolbar, FormGroup, FormControlLabel, Box, Accordion, AccordionSummary, AccordionDetails, Checkbox } from '@mui/material';
import moment from 'moment';

import Info from '../../components/soldier/Info';
import dbConnect from '../../db/dbConnect';
import {model} from '../../models/MandatorySoldier';

export const getStaticPaths = async () => {
	await dbConnect();
	const a = await model.find({});
	
	return {
		paths: a.map(y => ({params: {id: `${y.id}`}})),
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	await dbConnect();
	console.log(params)
	const soldier = (await model.find({id: Number(params.id)}))[0];

	return {
			props: {
				soldier: {
					name: soldier.fullName,
					id: soldier.id,
					recruitDate: new Date(soldier.recruitDate).toString(),
					arrivalDate: new Date(soldier.arrivalDate).toString(),
					course: soldier.course || 'תכנות',
					tasks: [
						{
							name: 'עמדה', 
							description: 'אצל אסא', 
							subTasks: [{name: 'מסך', isDone: false},
							{name: 'מחשב', isDone: false},
							{name: 'שולחן', isDone: false}], isDone: false
						},
						{
							name: 'כרטיס רשת',
							description: 'אצל שביט',
							isDone: false
						}
					],
				}
		}
	}
};

const SoldierPage = ({ soldier }) => {
	console.log(soldier)
	return (
		<Box sx={{display: 'flex', justifyContent: 'center'}}>
			<Box sx={{margin: '8px', border: 'black solid 1px', width: '50vw', height: '100vh'}}>
				<Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', height: '100%', width: '100%'}}>
						<Box sx={{width: '100%', marginBottom: '8px', paddding: '8px'}}>
							<Info soldier={soldier} />
						</Box>
						<Box sx={{width: '80%', overflow: 'auto', padding: '5px'}}>
							{soldier?.tasks?.map(task => (
								<Accordion sx={{marginBottom: '5px'}} key={task.name}>
									<AccordionSummary>
										<FormGroup>
											<FormControlLabel key={task.name} label={`${task.name} - ${task.description}`} control={<Checkbox onClick={e => {e.stopPropagation();}} defaultChecked={task.isDone} />} />
										</FormGroup>
									</AccordionSummary>
									<AccordionDetails>{task.subTasks?.map(subTask =>
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