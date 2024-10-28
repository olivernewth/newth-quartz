#!/bin/bash

# Directory containing markdown files
DIRECTORY="content"

# Loop through all markdown files in the specified directory
for file in "$DIRECTORY"/*.md; do
    # Create a temporary file to store modified content
    temp_file=$(mktemp)

    # Read each line of the markdown file
    while IFS= read -r line; do
        # Check if the line starts with '# '
        if [[ $line == "# "* ]]; then
            # Extract the title by removing the '# ' prefix
            title="${line:2}"
            # Write frontmatter to the temporary file
            echo -e "---\ntitle: $title\n---" >> "$temp_file"
        else
            # Write the original line to the temporary file
            echo "$line" >> "$temp_file"
        fi
    done < "$file"

    # Replace the original file with the modified content
    mv "$temp_file" "$file"
done

echo "Conversion complete!"