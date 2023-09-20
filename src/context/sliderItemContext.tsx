import { ReactNode, createContext, useContext, useState } from "react";

interface ItemContextType {
  albumId: number | null;
  id: number | null;
  title: string | null;
  url: string | null;
  thumbnailUrl: string | null;
  setItemDetails: (
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
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
  const [albumId, setAlbumId] = useState<number | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const setItemDetails = (
    itemAlbumId: number,
    itemId: number,
    itemTitle: string,
    itemUrl: string,
    itemThumbnailUrl: string
  ) => {
    setAlbumId(itemAlbumId);
    setId(itemId);
    setTitle(itemTitle);
    setUrl(itemUrl);
    setThumbnailUrl(itemThumbnailUrl);
  };

  return (
    <ItemContext.Provider
      value={{ albumId, id, title, url, thumbnailUrl, setItemDetails }}
    >
      {children}
    </ItemContext.Provider>
  );
};
