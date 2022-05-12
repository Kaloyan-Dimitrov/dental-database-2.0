import { Schema, model } from 'mongoose';

const patientSchema: Schema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = model('Patient', patientSchema);
