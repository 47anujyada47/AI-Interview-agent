import mongoose from "mongoose";
import dns from "dns";

try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
    console.log("DNS setServers warning:", e.message);
}
dns.setDefaultResultOrder("ipv4first");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb