export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface Season {
  id: string;
  name: string;
  description: string;
  photos: Photo[];
}