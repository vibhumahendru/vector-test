# Coding Assignment - Vector.ai

Below are instructions to run the application locally

## Steps to run locally

1. Clone the application
2. Run ```cd vector-test```
3. Ensure you have Docker installed and running
4. Run ```docker-compose up```
5. Visit http://localhost:3000/ for the demo

## Answers to General Questions
1. I would use django rest frameworks out-of-the-box solution for all CRUD operations for additional elements. Maintenance wise, this is very efficient and requires minimal customised code.
2. To allow multiple users to edit the board in real time, we can use 2 solutions -
    a. Add a websocket component couple with a redis channel that updates the board for all connected users whenever the board is changed and positions are updated in the database.
    b. A less elegant but simpler solution would be to poll the database every second or so from the frontend to retrieve any changes in the boards order and render corresponding changes. This only simulates "real-time" changes.

