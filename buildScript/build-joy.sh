#!/bin/bash

docker stop joyfront

docker rm joyfront

cd /home/ec2-user/front

mv ../next/.env ./.env

docker build -t joyfront .

docker run -p 3000:3000 -d --name joylog joyfront