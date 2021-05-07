Build
```
docker build -t how-to:v1 .
```
Run
```
docker run -it --rm -v "${PWD}:/app" -v /app/node_modules -p 3000:3000 how-to:v1


docker run \
    -it \ (name)
    --rm \ (remove when done)
    -v ${PWD}:/app \ (bind volume)
    -v /app/node_modules \ (bind volume)
    -p 3001:3000 \ (exposed port -- internalPort:exposedPort)
    how-to:v1
```