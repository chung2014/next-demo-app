#! /bin/bash  

PORT=${1:-3000}

echo "PORT: $PORT"

existing_conatiner_id=$(docker ps -f name=next-demo-app -q)

echo "checking if container name with next-demo-app is existed"
if [ -z "$existing_conatiner_id" ]
then
  echo "next-demo-app is not existed"
else
  echo "next-demo-app is existed with id $existing_conatiner_id"
  echo "killing the previous container"
  docker kill $existing_conatiner_id;
  docker rm $existing_conatiner_id;
fi

echo "starting container..."
docker run --name next-demo-app -p $PORT:3000 -d your_dockerhub_username/next-demo-app

echo "container started"
echo "open http://localhost:$PORT to see the app"