// @ts-check
const assert = require("assert");
const createFromBuffer = require("@dprint/formatter").createFromBuffer;
const getPath = require("./index").getPath;

const buffer = require("fs").readFileSync(getPath());
const formatter = createFromBuffer(buffer);
const result = formatter.formatText("file.json", "{ test: 2, }");

assert.strictEqual(result, "{ \"test\": 2 }\n");
