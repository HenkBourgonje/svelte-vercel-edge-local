import type { Config } from '@sveltejs/kit';

export const config: Config = {
  runtime: 'edge'
};

export async function POST(event) {
  // On a local dev environment, this logs: platform: undefined
  // On the vercel server, this logs what I expect: platform:  { context: { waitUntil: [Function: waitUntil] } } 
  console.log("platform: ", event.platform)
  return Response.json({ message: 'ok' })
}
