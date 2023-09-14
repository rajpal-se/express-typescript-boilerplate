import express, { Request, Response } from 'express';

const app = express();

const PORT = 5000;

app.get('*', (req: Request, res: Response) => {
	const url = req.protocol + '://' + req.hostname + req.originalUrl;

	const message = `
		<div style="text-align: center;">
			<h3>Welcome!</h3>
			<p>You are visting: <b>${url}</b></p>
		</div>
	`;

	res.send(message);
});

app.listen(PORT, () => {
	console.log(`App is listening on http://localhost:${PORT}/`);
});
