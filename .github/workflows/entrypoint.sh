#!/bin/sh

npm run build

npx serve -s dist -l 80
