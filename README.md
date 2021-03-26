# oliverdavies-uk-fractal

## Running Locally with Docker

Run `docker-compose up -d` to start the containers in the background.

This will automatically run `npm clean-install` to download all of the dependencies and also start separate services for serving Fractal and compiling assets.

Go to http://localhost:3000 to view Fractal once the containers have started.

To access the `fractal` CLI tool, run `docker-compose run --rm cli` with an optional command (e.g. `docker-compose run --rm cli info`).
