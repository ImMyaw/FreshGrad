const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the CV file
app.use('/ITPathArabic/ITPathArabic/attached_assets', express.static(path.join(__dirname, 'ITPathArabic', 'ITPathArabic', 'attached_assets')));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});