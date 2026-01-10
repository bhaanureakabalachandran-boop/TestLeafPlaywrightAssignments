// 1. Create an enum named Environment
enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

// 2 & 3. Function that accepts Environment and returns void
function runTests(env: Environment): void {
    console.log(`Running tests in the ${Environment[env]} environment`);
}

// 4. Example calls to the function
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);