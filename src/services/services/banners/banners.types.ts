export type TBannerItem = {
  id: number;
  title: string;
  description: string;
  position: number;
  service_id: number;
  is_public: boolean;
  image_url: string;
  created_at: string;
  updated_at: string;
};
export type TBannerChange = {
  id?: number;
  title: string;
  description: string;
  service_id: number;
  is_public: number;
  image: string;
};
