const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint for adding two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }

    const Sum = num1 + num2;
    const Subtraction_Result = num1 - num2;
    const Remainder = num1/num2;
    const Multiplication_Result = num1*num2;
    
    res.json({ Sum });
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }

    const Subtraction_Result = num1 - num2;

    res.json({ Subtraction_Result });

});
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }

    const Multiplication_Result = num1*num2;

    res.json({ Multiplication_Result });
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }

    const Remainder = num1/num2;

    res.json({ Remainder });

});


app.listen(port, () => {
    console.log(`Check on http://localhost:${port}`);
});
