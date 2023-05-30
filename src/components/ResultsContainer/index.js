import ProductCard from '../ProductCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader';

function ResultsContainer() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = () => {
    if (items.length >= 400) {
      setHasMore(false);
      return;
    }

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/families?skip=${items.length}&take=35`
      )
      .then((res) => {
        setItems(items.concat(res.data));
      });
  };

  return (
    <section className="mt-4 mb-10 md:mb-0 px-4 h-auto  md:px-20 lg:px-40 w-full h-24 flex items-start flex-col">
      <div className="mt-8 text-2xl font-medium">Resultados</div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="h-full mt-4 flex items-center justify-center overflow-y-hidden md:mt-20 mb-10">
            <Loader />
          </div>
        }
        endMessage={
          <div className="mt-20 mb-10">
            <p className="text-center text-gray-500 text-sm">
              Não há mais resultados
            </p>
          </div>
        }
      >
        <div className="mt-4 w-full gap-8 grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 gap-6 xl:grid-cols-6 gap-6">
          {items.map((i, index) => {
            console.log(i);
            return (
              <ProductCard
                src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${i.id}.jpg`}
                title={i.details.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </section>
  );
}

export default ResultsContainer;
