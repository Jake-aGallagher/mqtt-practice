import { connect } from "mqtt";
import dotenv from "dotenv";
dotenv.config();

var client = connect(process.env.MQTT_BROKER_URL || "mqtt://localhost:1883");

client.on("connect", function() {
    client.subscribe("topic1");
    console.log("Subscriber connected");
});

client.on("message", function(topic: string, message: Buffer) {
    console.log("New message: ", message.toString());
});