/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const subdomain = url.hostname.split('.')[0]
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Username</title>
          <style>
              body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
              }
              h1 {
                  font-size: 3rem;
                  color: #333;
              }
          </style>
      </head>
      <body>
          <h1>${subdomain}</h1>
      </body>
      </html>
      `;

    return new Response(html, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  })
  },
};
