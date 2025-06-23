import { Request, Response } from 'express';
import  express from 'express';

const app = express();

app.get('/', (req:Request, res:Response) => {
    res.json({message: 'Hello World!'});
});

app.post('/', (req:Request, res:Response) => {
    
    res.json({message: 'Hello World!'});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});