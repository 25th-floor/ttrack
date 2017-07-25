# TTrack

[![Build Status](https://travis-ci.org/25th-floor/ttrack.svg?branch=master)](https://travis-ci.org/25th-floor/ttrack)

A Time Tracking application. Needs a Postgres Database.

The code is splitted into separate repositories:
* https://github.com/25th-floor/ttrack-client
* https://github.com/25th-floor/ttrack-server

## Getting Stated

* First run `git submodule init` to initialize the submodules. 
* Then you have to install everything within those submodule using `yarn run install`.
* Next running `yarn run build` will create the client artifacts needed for deployment.
* Finally running `docker-compose up` will start the whole setup.
 
## Development

Missing in Action. We are currently rewriting the server. Things are changing.

## Contributors

Since because of security concerns we needed to purge the git commit history, here are the contributors of the project.

* Marcus Artner <ma@25th-floor.com>
* Phillip Bisson <pb@25th-floor.com>
* Andreas de Pretis <ad@25th-floor.com>
* Stefan Oestreicher <so@25th-floor.com>
* Martin Prebio <martin.prebio@gmail.com>
* Robert Prosenc <rp@25th-floor.com>
* Ali Sharif <as@25th-floor.com>
* Pierre Strohmeier <ps@25th-floor.com>
* Thomas Subera <thomas.subera@gmail.com>

## History

It all started as a fun project and never majored of it. It is strictly a tool for tracking our times with our needs. (f.e. Austrian Holidays, no Administration, ...)
