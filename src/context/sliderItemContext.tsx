import { ReactNode, createContext, useContext, useState } from "react";

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
    throw new Error("useItemContext must be used within an ItemProvider");
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
  };

  return (
    <ItemContext.Provider
      value={{ id, title, url, thumbnailUrl, body, setItemDetails }}
    >
      {children}
    </ItemContext.Provider>
  );
};
