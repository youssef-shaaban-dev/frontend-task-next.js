export const middleware = (request: Request) => {
  console.log('Middleware executed for request to:', request.url);
//   return new Response('Middleware response', { status: 200 });
}