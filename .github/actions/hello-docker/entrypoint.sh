#!/bin/sh
# Shebang: tells the system to run this script with the 'sh' shell

echo "::debug::Running entrypoint.sh"
# GitHub Actions debug message (only visible when debugging is enabled)

echo "Hello $1"
# Print a greeting message using the first argument passed to the script (from action input)

echo "INPUT_WHO_TO_GREET: $INPUT_WHO_TO_GREET"
# Print the environment variable automatically set by GitHub for the input 'who_to_greet'

echo "HELLO: $HELLO"
# Print a custom environment variable defined in the action metadata (HELLO=WORLD)

time=$(date)
# Get the current system time and save it in a variable

echo "time=$time" >> $GITHUB_OUTPUT
# Set the 'time' output so it can be used in later steps (saved to GitHub Actions special file)

echo "HELLO_TIME=$time" >> $GITHUB_ENV
# Export the time as an environment variable so future workflow steps can access it
