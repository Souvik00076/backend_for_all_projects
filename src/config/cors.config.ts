export const corsConfig = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allowed?: boolean) => void,
  ) => {
    const allowedOrigins = ["http://example.com", "http://another-example.com"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
