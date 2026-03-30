// Database configuration placeholder
// This file will contain MongoDB connection setup

const mongodbConfig = {
  development: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/complaint-hub',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  production: {
    uri: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default mongodbConfig[process.env.NODE_ENV || 'development'];
