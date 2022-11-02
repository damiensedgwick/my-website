export async function loader({ params }: { params: { id: string } }) {
  console.log(params);
  const response = await fetch(
    `https://dev.to/social_previews/article/${params.id}`
  );

  return new Response(response.body, {
    headers: {
      ...response.headers,
      'Cache-Control': 'public, max-age=259200',
    },
  });
}
