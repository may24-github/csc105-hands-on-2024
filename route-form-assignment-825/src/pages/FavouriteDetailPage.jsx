import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function FavouriteDetailPage() {
  const { id } = useParams(); // Get the post ID from the route parameter
  const [searchParams] = useSearchParams(); // Get query parameters

  const q = searchParams.get('q'); // Get the "q" query parameter
  const size = searchParams.get('size'); // Get the "size" query parameter

  return (
    <div>
      Your favourite post is <b>{q}</b>. Post ID is <b>{id}</b>. Size is <b>{size}</b>.
    </div>
  );
}

export default FavouriteDetailPage;