const dbConfig = {
  driver: "msnodesqlv8",
  server: "localhost\\SQLEXPRESS",
  database: "EMS",
  options: {
    trustedConnection: true,
  },
  port: 1433,
};

module.exports = dbConfig;
