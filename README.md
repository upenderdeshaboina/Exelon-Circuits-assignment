# City Management API

## Overview

This project is a RESTful API for managing cities. It allows you to add, update, delete, and retrieve city records. The API uses MongoDB for data storage and Node.js with Express for the server.

## 1. Initialize the Project

    To get started, clone the repository and install the necessary dependencies:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    npm install

## start server

    npm start

## API checking with postman

    1. Add city
        1. End Point: POST /api/cities
        2. Description: Adds a new city to the database

        3. postman sample data :
            - headers : Content-Type: application/json
            - sample data : {
                "name":"hyderabad",
                "population":746286,
                "country":"india",
                latitude:70.1546,
                longitude:63.3874
            }
    
    2. update city
        1. End Point: PUT /api/cities/:id
        2. Description:  Updated an existing city by id

        3. postman sample data :
            - headers : Content-Type: application/json
            - sample data : {
                "population":7474986
            }
    
    3. Get Cities
        1. Endpoint: GET /api/cities
        1. Description: Retrieves all cities with support for pagination, filtering, sorting, and searching.

        3. Query Parameters:

            1. page (default: 1) - Page number for pagination.
            2. limit (default: 10) - Number of cities per page.
    
    4. Delete City
        1. Endpoint: DELETE /api/cities/:id
        2. Description: Deletes a city by ID.
        
