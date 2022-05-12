import { Schema, model } from 'mongoose';
const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = model('Patient', patientSchema);
//# sourceMappingURL=Patient.js.map