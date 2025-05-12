# Use Alpine Linux 3.18 as the base image
# Alpine is a lightweight Linux distribution, commonly used for small container images
FROM alpine:3.18

# Copy the entrypoint script from your local directory to the container's root
COPY entrypoint.sh /entrypoint.sh

# Copy a cleanup script into the container (not executed automatically, but can be used manually or called by entrypoint)
COPY cleanup.sh /cleanup.sh

# Set the entrypoint script that will run when the container starts
# This replaces the shell and runs the script directly
ENTRYPOINT ["/entrypoint.sh"]

# Provide a default argument to the entrypoint script
# If no argument is given at container runtime, "World" will be passed
CMD ["World"]
