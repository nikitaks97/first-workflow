// Import the GitHub Actions core module
// This gives access to functions like getInput(), setOutput(), exportVariable(), etc.
const core = require("@actions/core");

// Import the GitHub context module
// Provides information about the event that triggered the workflow, the repo, actor, etc.
const github = require("@actions/github");

try {
  // Logs a debug message - visible only when debug logging is enabled (ACTIONS_STEP_DEBUG=true)
  core.debug("Debug Message");

  // Logs a warning message - will appear in the logs with a yellow warning icon
  core.warning("Warning message");

  // Logs an error message - will appear in the logs with a red error icon
  core.error("Error message");

  // Retrieves the value of the input parameter "who_to_greet" passed into the action
  // This input is defined in action.yml and defaults to "World" if not provided
  const name = core.getInput("who_to_greet");

  // Print a personalized greeting to the Actions log
  // This helps confirm that the input was received and processed correctly
  console.log(`Hello ${name}`);

  // Get the current system time when the greeting is made
  const time = new Date();

  // Set the output value named "time" that other steps in the workflow can access
  // This allows subsequent steps to use the exact time the greeting occurred
  core.setOutput("time", time.toTimeString());

  // Export an environment variable named "HELLO_TIME" with the current time
  // Any subsequent steps in the job can access this environment variable
  core.exportVariable("HELLO_TIME", time);

  // Start a new collapsible log group in the GitHub Actions log viewer
  // This is useful for organizing verbose logs, like context data
  core.startGroup("Logging github context");

  // Log the GitHub context as a nicely formatted JSON string
  // This includes info like the event name, actor, repo, commit SHA, etc.
  console.log(JSON.stringify(github.context, null, 2));

  // End the collapsible log group
  core.endGroup();

} catch (error) {
  // If any error occurs in the try block above, catch it here
  // Mark the step as failed and include the error message in the log
  core.setFailed(error.message);
}
