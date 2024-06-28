import { StatementModel } from "../models/statement_model.js";

export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body)
        const addData = await StatementModel.create(req.body)
        // res.send("statement Added");
        res.status(200).send(addData);

    } catch (error) {
        console.log(error)

    }

};

export const getStatement = async (req, res, next) => {
    try {
        const allStatement = await StatementModel.find();
        res.status(200).send(allStatement);

    } catch (error) {
        next(error);

    }

};

// find a statement in the database
export const getStatementId = async (req, res,) => {
    try {
        const statementId = await StatementModel.findById(req.params.id);
        res.status(200).send(statementId);

    } catch (error) {
        console.log(error);

    }

};

// changing the caseStatus

export const updateStatement = async (req, res,) => {
    try {
        const status = req.body.caseStatus;
        console.log("request", status);
        const addUpdate = await StatementModel.findByIdAndUpdate(req.params.id, { caseStatus: status });
        res.status(200).send(addUpdate);

    } catch (error) {
        console.log(error);

    }

};

// deleting a statement
export const deleteStatement = async (req, res,) => {
    try {
        const takingOut = req.body.incidentType;
        console.log("incident type deleted", takingOut);
        const deleteIncidentType = await StatementModel.findByIdAndDelete(req.params.id, { incidentType: takingOut });
        res.status(200).send(deleteIncidentType);

    } catch (error) {
        console.log(error);

    }

};
