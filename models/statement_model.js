import { Schema, model } from "mongoose";

// const {Schema, model } = mongoose;

// Define the schema for a statement
const statementSchema = new Schema({
    incidentType: {
        type: String,
        enum: ['non-criminal', 'criminal']
    },
    civilianStatus: {
        type: String,
        enum: ['suspect', 'complainant', 'witness']
    },
    statement: { type: String },
    caseStatus: {
        type: String,
        enum: ['open', 'close']
    },
    // civilianId: {type: String},
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
})

export const StatementModel = model('statement', statementSchema)
