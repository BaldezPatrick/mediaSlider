import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ItemContextType {
  id: number | null;
  title: string | null;
  url: string | null;
  thumbnailUrl: string | null;
  body: string | null;
  setItemDetails: (
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
    body: string
  ) => void;
}

interface ItemProviderProps {
  children: ReactNode;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("Error context");
  }
  return context;
};

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [body, setBody] = useState<string | null>(null);

  const setItemDetails = (
    itemId: number,
    itemTitle: string,
    itemUrl: string,
    itemThumbnailUrl: string,
    itemBody: string
  ) => {
    setId(itemId);
    setTitle(itemTitle);
    setUrl(itemUrl);
    setThumbnailUrl(itemThumbnailUrl);
    setBody(itemBody);

    const itemData = {
      id: itemId,
      title: itemTitle,
      url: itemUrl,
      thumbnailUrl: itemThumbnailUrl,
      body: itemBody,
    };
    localStorage.setItem("itemData", JSON.stringify(itemData));
  };

  useEffect(() => {
    const storedItemData = localStorage.getItem("itemData");
    if (storedItemData) {
      const parseData = JSON.parse(storedItemData);
      setItemDetails(
        parseData.id,
        parseData.title,
        parseData.url,
        parseData.thumbnailUrl,
        parseData.body
      );
    }
  }, []);

  return (
    <ItemContext.Provider
      value={{ id, title, url, thumbnailUrl, body, setItemDetails }}
    >
      {children}
    </ItemContext.Provider>
  );
};
