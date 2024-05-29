//All products from the store in a slider//
import React, { useState, useEffect } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import Card from './Card'; // Importing the Card component
import DummyCard from './DummyCard';
import Board from './Board';

const SliderComponent = () => {
  const [products, setProducts] = useState([]);
  const [draggedProductId, setDraggedProductId] = useState(null);

  // Fetch products from Shopify store
  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch products from Shopify store
        const response = await fetch('YOUR_SHOPIFY_API_ENDPOINT');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products); // Assuming products are in an array called 'products' in the response
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleDragStart = (e, productId) => {
    setDraggedProductId(productId);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, productId) => {
    e.preventDefault();
    // Add your logic for handling the drop event here
    console.log('Product dropped:', productId);
    setDraggedProductId(null);
  };

  return (
    <div
      style={{ overflowX: 'auto', width: '100%', whiteSpace: 'nowrap' }}
      onDragOver={handleDragOver}
      onDrop={e => handleDrop(e, draggedProductId)}
    >
      <Board id="board" className="board" onDrop={handleDrop} onDragOver={handleDragOver}>
        <ReactCardSlider slides={products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            weight={product.weight}
            className="card"
            draggable="true"
            onDragStart={e => handleDragStart(e, product.id)}
          />
        ))}/>
      </Board>
    </div>
  );
}

export default SliderComponent;
