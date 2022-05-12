import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// create a simple server
const app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(cors());

// listen to localhost
app.listen(3000, () => {
	console.log('listening on port 3000');
});

// send a message to the client
app.get('/', (_req: express.Request, res: express.Response): express.Response => {
	return res.send('Hello ww__world!');
});

app.post('/', (_req: express.Request, res: express.Response): express.Response => {
	return res.send('Hello ww__world!');
});

// connect to mongodb server using mongoose
try {
	await mongoose.connect('mongodb://localhost/dental-database');
	console.log('connected successfully to the database');
} catch (err) {
	console.error(err);
}
const name = 'adsfads';
