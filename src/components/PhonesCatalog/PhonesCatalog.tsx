import './PhonesCatalog.scss';
import React, { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard/ProductCard';
import { getPhones } from '../../api/phones';

// Need to create .env file and migrate base server URL

export const PhonesCatalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    getPhones()
      .then(data => setPhones(data))
      .catch(error => console.error(error));
  }, []);

  const sortedPhones = [...phones].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest':
        return a.priceDiscount - b.priceDiscount;
      case 'mostExpensive':
        return b.priceDiscount - a.priceDiscount;
      case 'newest':
      default:
        return 0;
    }
  });

  const visiblePhones = sortedPhones.slice(0, itemsPerPage);

  return (
    <div className="container">
      <div className="phones-catalog">
      <h1 className="phones-catalog__title">Mobile phones</h1>
      <p className="phones-catalog__count">{phones.length} models</p>

      <div className="phones-catalog__filters">
        <div className="phones-catalog__filter">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="cheapest">Cheapest</option>
            <option value="mostExpensive">Most Expensive</option>
          </select>
        </div>

        <div className="phones-catalog__filter">
          <label htmlFor="itemsOnPage">Items on page</label>
          <select
            id="itemsOnPage"
            value={itemsPerPage}
            onChange={(event) => setItemsPerPage(+event.target.value)}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>

      <div className="phones-catalog__list">
        {visiblePhones.map(phone => (
          <ProductCard
            key={phone.id}
            product={{
              name: phone.name,
              fullPrice: phone.priceRegular,
              price: phone.priceDiscount,
              screen: phone.screen,
              capacity: phone.capacity,
              ram: phone.ram,
              image: phone.images[0],
              itemId: phone.id,
              category: 'phones',
            }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};
