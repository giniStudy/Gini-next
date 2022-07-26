#!/bin/bash

docker rm -f joyfront

docker rmi joyfront

cd /home/ec2-user/front

cp ../next/.env ./.env

docker build -t joyfront .

docker run -p 3000:3000 -d --name joyfront joyfront