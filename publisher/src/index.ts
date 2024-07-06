import { connect } from "mqtt";
import dotenv from "dotenv";
dotenv.config();

var client = connect(process.env.MQTT_BROKER_URL || "mqtt://localhost:1883");

client.on("connect", function() {
    console.log("Publisher connected");
    var count = 1;
    setInterval(() => {
        client.publish("topic1", "Hello MQTT, Count: " + count++);
    }, 10000);
})