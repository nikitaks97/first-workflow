// Import GitHub Actions core and GitHub context libraries
const core = require("@actions/core");
const github = require("@actions/github");

try {
  // Log messages for debugging, warnings, and errors
  core.debug("Debug Message");     // Only shown if ACTIONS_STEP_DEBUG=true
  core.warning("Warning message");
  core.error("Error message");

  // Get the input "who_to_greet" (defined in action.yml)
  const name = core.getInput("who_to_greet");

  // Print greeting to the console
  console.log(`Hello ${name}`);

  // Create a timestamp of the greeting
  const time = new Date();

  // Set the "time" output variable (used in workflows)
  core.setOutput("time", time.toTimeString());

  // Export a custom environment variable for other steps
  core.exportVariable("HELLO_TIME", time);

  // Group log output for GitHub context (nicer formatting in logs)
  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();

} catch (error) {
  // If any error occurs, mark the action as failed
  core.setFailed(error.message);
}
