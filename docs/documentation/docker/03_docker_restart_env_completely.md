# Restarting Docker Environment Completely

- Stop everything and remove containers and networks:

```bash
docker-compose down
```

- Stop everything and remove containers, networks, and volumes:

```bash
docker-compose down -v
```

- Stop everything, remove containers, networks, and images:

```bash
docker-compose down --rmi all
```

- Rebuild and start everything from scratch:

```bash
docker-compose up --build
```

With these steps, you should be able to "restart" your Docker environment completely, starting from scratch.