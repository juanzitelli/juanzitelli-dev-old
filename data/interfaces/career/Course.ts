interface PriceDetail {
  amount: number;
  currency: string;
  price_string: string;
  currency_symbol: string;
}

interface VisibleInstructor {
  _class: string;
  title: string;
  name: string;
  display_name: string;
  job_title: string;
  image_50x50: string;
  image_100x100: string;
  initials: string;
  url: string;
}

export interface Course {
  _class: string;
  id: number;
  title: string;
  url: string;
  is_paid: boolean;
  price: string;
  price_detail: PriceDetail;
  price_serve_tracking_id: string;
  visible_instructors: VisibleInstructor[];
  image_125_H: string;
  image_240x135: string;
  is_practice_test_course: boolean;
  image_480x270: string;
  published_title: string;
  tracking_id: string;
  completed?: boolean;
}