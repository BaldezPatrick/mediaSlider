import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Catalog.css";
import { useItemContext } from "../context/sliderItemContext";
import Button from "../components/Button/button";

const itemsPerPage = 15;
const totalItems = 150;

interface CatalogItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  body?: string;
}

const Catalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<CatalogItem[]>([]);
  const { setItemDetails } = useItemContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photosResponse = await axios.get<CatalogItem[]>(
          "https://jsonplaceholder.typicode.com/photos"
        );

        const postsResponse = await axios.get<CatalogItem[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const combinedItems: CatalogItem[] = photosResponse.data
          .slice(0, totalItems)
          .map((photoItem) => {
            const matchingPostItem = postsResponse.data.find(
              (postItem) => postItem.id === photoItem.id
            );
            if (matchingPostItem) {
              return {
                ...photoItem,
                title: matchingPostItem.title,
                body: matchingPostItem.body,
              };
            } else {
              return {
                ...photoItem,
                body: "A API POST só vai até o elemento de número 100. Você encontrará a junção do parâmetro body a API photos apenas até o elemento 100.",
              };
            }
          });
        console.log(combinedItems);
        setItems(combinedItems);
      } catch (error) {
        console.error("API error: ", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const generatePaginationText = () => {
    const handleText =
      window.innerWidth <= 280
        ? `${currentPage}`
        : `Página ${currentPage} de ${totalPages}`;
    return handleText;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  const handleItemClick = (item: CatalogItem) => {
    setItemDetails(
      item.id,
      item.title,
      item.url,
      item.thumbnailUrl,
      item.body || ""
    );
  };

  return (
    <div className="catalog">
      <h1>Catálogo</h1>
      <div className="cardContainer">
        {itemsToDisplay.map((item) => (
          <div key={item.id} className="card">
            <Link
              to={`/artigo/${item.id}`}
              className="cardLink"
              onClick={() => handleItemClick(item)}
            >
              <div className="cardContent">
                <div className="cardContentImg">
                  <img src={item.url} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <Button
          textButton={"Anterior"}
          disabled={currentPage === 1}
          handleClick={() => handlePageChange(currentPage - 1)}
        />
        <span>{generatePaginationText()}</span>
        <Button
          handleClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          textButton={"Próxima"}
        />
      </div>
    </div>
  );
};

export default Catalog;
