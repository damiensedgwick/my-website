export async function loader({ params }: { params: { id: string } }) {
  console.log(params);
  const response = await fetch(
    `https://dev.to/social_previews/article/${params.id}`
  );

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', 'public, max-age=259200');

  return new Response(response.body, {
    headers: newHeaders,
  });
}
