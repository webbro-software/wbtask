#!/usr/bin/env node

import handleCommand from "../index.js";

const [, , command, ...args] = process.argv;

handleCommand(command, args);
