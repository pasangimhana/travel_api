// config file to connect to MySQL database
const express = require("express");
const mysql = require("mysql");

// Details of the table
// Database gola_app_db tables
// accommodation_details
// adventure_details
// booking
// package
// services
// service_provider
// transport_details
// traveler

const databaseConfig = {
    // Host
    host: "localhost",
    user: "root",
    password: "",
    database: "gola_app_db",
    connectionLimit: 10,
};

const connection = mysql.createConnection(databaseConfig);

module.exports = connection;