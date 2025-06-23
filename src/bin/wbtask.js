#!/usr/bin/env node

import handleCommand from "..";

const [, , command, ...args] = process.argv;

handleCommand(command, args);
