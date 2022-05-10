import express from 'express';

// create a simple server
const app = express();

// listen to localhost
app.listen(3000, () => {
	console.log('listening on port 3000');
});

// send a message to the client
app.get('/', (_req: express.Request, res: express.Response): express.Response => {
	return res.send('Hello World!');
});
