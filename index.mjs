import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import authRoute from "./vaultApi/routes/authRoute.mjs";
import currencyRoute from "./vaultApi/routes/currencyRoute.mjs";
import cardRoute from "./vaultApi/routes/cardRoute.mjs";
import walletRoute from "./vaultApi/routes/walletRoute.mjs";
import dotenv from 'dotenv';
dotenv.config(); // This loads environment variables from the .env file into `process.env`


const app = express();
const server = http.createServer(app);
const io = new Server(server); // Initialize Socket.IO with the HTTP server

const port = process.env.PORT || 3000;

app.use(express.json());

// Define your routes
app.get('/', ()=>{
    console.log('hello');
})

app.use("/", authRoute);
app.use("/currency", currencyRoute);
app.use("/card", cardRoute);
app.use("/wallet", walletRoute);

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for messages from the client
    socket.on('request-data', async () => {
        try {
            // const data = await apiHelperController.getVaultData();  // You might need to adjust this call
            socket.emit('data-response', data);  // Send the data back to the client
        } catch (error) {
            socket.emit('data-error', { error: error.message });
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
