#!/bin/bash

# Function to find and remove numbered duplicates
cleanup_duplicates() {
    local dir="$1"
    
    # Find base files (without numbers)
    find "$dir" -type f -not -name "* [0-9]*" -not -name "* [0-9]" | while read -r base_file; do
        local base_name="${base_file%.*}"
        local extension="${base_file##*.}"
        
        # Remove numbered versions of this file
        rm -f "$base_name [0-9].$extension" "$base_name [0-9][0-9].$extension"
    done
}

# Main content directory
CONTENT_DIR="content"

# Run cleanup
cleanup_duplicates "$CONTENT_DIR"