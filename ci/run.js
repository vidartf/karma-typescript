var spawn = require("cross-spawn");

var command = "npm run dev:ci";

var commands = [
    ["examples/angular2", command],
    ["examples/angularjs", command],
    ["examples/mocha", command],
    ["examples/typescript-1.6.2", command],
    ["examples/typescript-latest", command],

    ["tests/integration-1.8.10", command],
    ["tests/integration-1.8.10", command + ":angular2"],
    ["tests/integration-1.8.10", command + ":react"],

    ["tests/integration-latest", command],
    ["tests/integration-latest", command + ":angular2"],
    ["tests/integration-latest", command + ":core"],
    ["tests/integration-latest", command + ":emptyfile"],
    ["tests/integration-latest", command + ":no-module"],
    ["tests/integration-latest", command + ":react"],
];

function execute(dir, cmd, callback) {

    var x = cmd.split(" ");
    var runner = spawn(x[0], x.splice(1), { cwd: dir, stdio: "inherit" });

    runner.on("close", function(code) {
        callback(code);
    });
}


// FIXME: Try to avoid recursing for every step
var i = 0;
function step(code) {
    if (i >= commands.length) return;
    var dir = commands[i][0];
    var cmd = commands[i][1];
    ++i;
    // TODO: Use code?
    execute(dir, cmd, step);
}

step();
