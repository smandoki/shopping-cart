import { useEffect, useState } from 'react';

function useFetchProducts() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://fakestoreapi.com/products/category/electronics', {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e.name === 'TypeError' || e.name === 'AbortError') return;
        console.log(e.name, e.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return [products, isLoading];
}

export default useFetchProducts;
