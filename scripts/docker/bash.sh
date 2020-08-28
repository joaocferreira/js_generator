#!/bin/bash

docker run --rm -it -v=`pwd`/src:/src -w=/src node:latest bash
