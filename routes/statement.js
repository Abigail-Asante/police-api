import { Router } from "express";

import {addStatement, getStatementId, updateStatement, getStatement, deleteStatement } from "../controllers/statement_controller.js";

const statementRouter = Router();

// Define route
// statementRouter.get('/statement', (req,res) => {
//     res.json('statement given');
// });

statementRouter.get('/statement', getStatement);

statementRouter.post('/statement', addStatement);

statementRouter.get('/statement/:id', getStatementId);

statementRouter.patch('/statement/:id', updateStatement);

statementRouter.delete('/statement/:id', deleteStatement);

export default statementRouter;