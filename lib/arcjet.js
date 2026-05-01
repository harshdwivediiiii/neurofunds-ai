import arcjet, { tokenBucket } from "@arcjet/next";

const aj =
  process.env.NODE_ENV === "development"
    ? null
    : arcjet({
        key: process.env.ARCJET_KEY,
        characteristics: ["userId"],
        rules: [
          tokenBucket({
            mode: "LIVE",
            refillRate: 10,
            interval: 3600,
            capacity: 10,
          }),
        ],
      });

export default aj;
