# Welcome to Oliver's Garden

This is my digital garden, a space where I cultivate and share my thoughts, ideas, and knowledge. Here, you'll find a collection of interconnected notes and articles on various topics that interest me.

## About This Site

Oliver's Garden is built using Quartz, a powerful tool for publishing digital gardens. It's designed to be:

- **Interconnected**: Ideas are linked together, allowing for exploration and discovery.
- **Ever-growing**: Like a real garden, this space is constantly evolving and expanding.
- **Open**: Feel free to explore and draw inspiration from the content here.

## What You'll Find Here

- **Notes**: Bite-sized thoughts and observations on various subjects.
- **Articles**: More in-depth explorations of topics I'm passionate about.
- **Projects**: Showcases of my work and ongoing endeavors.

## Navigation

Feel free to start your journey from the homepage and follow the links that interest you. You can also use the search function to find specific topics.

## Stay Connected

If you'd like to connect or have any questions, feel free to reach out. You can find my contact information on the site.

## Building and Deploying Quartz

To build and deploy this Quartz site, use the following commands:

### Local Development
1. Build and serve the site locally: `npx quartz build --serve`
2. Open a web browser and visit `http://localhost:8080/` to view it

### Setting up GitHub Repository
1. Create a new repository on GitHub.com (without initializing it)
2. Copy the remote repository URL
3. In your terminal, navigate to the root of your Quartz folder
4. Run the following commands (replace REMOTE-URL with your repository URL):
   ```
   git remote -v
   git remote set-url origin REMOTE-URL
   git remote add upstream https://github.com/jackyzha0/quartz.git
   ```
5. Sync your content: `npx quartz sync --no-pull`

### Deployment
For production deployment, refer to the Quartz documentation on hosting options.

Note: The `--serve` mode is intended for local previews only and should not be used for production.

Happy exploring!
