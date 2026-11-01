// 갤러리 페이지 섹션 — colClass는 사진 칸의 Bootstrap 열 클래스입니다.

export interface GallerySection {
  id: string;
  title: string;
  years?: string;
  colClass: string;
  images: string[];
}

export const gallerySections: GallerySection[] = [
  {
    id: 'characters',
    title: 'ZINI CHARACTERS',
    colClass: 'col-6 col-sm-4 col-md-3',
    images: [
      'gallery1.jpg',
      'gallery2.jpg',
      'gallery3.jpg',
      'gallery4.jpg',
      'gallery5.jpg',
      'gallery6.jpg',
      'gallery_logo1.jpg',
      'gallery_logo2.jpg',
    ],
  },
  {
    id: 'case-design',
    title: 'CASE DESIGN',
    colClass: 'col-6 col-sm-4 col-md-3',
    images: [
      'gallery_cd1.jpg',
      'gallery_cd2.jpg',
      'gallery_cd3.jpg',
      'gallery_cd4.jpg',
      'gallery_cd5.jpg',
      'gallery_cd6.jpg',
      'gallery_logo3.jpg',
      'gallery7.jpg',
    ],
  },
  {
    id: 'venus-berlin',
    title: 'Venus Berlin(독일 베를린) 참가',
    years: '2009 / 2010',
    colClass: 'col-6 col-md-3',
    images: [
      '11-00.jpg',
      '11-01.jpg',
      '11-02.jpg',
      '11-03.jpg',
      '12-00.jpg',
      '12-01.jpg',
      '12-02.jpg',
      '12-03.jpg',
      '15-00.jpg',
      '15-01.jpg',
      '15-02.jpg',
      '15-03.jpg',
    ],
  },
  {
    id: 'avn-show',
    title: '2010 AVN Show(미국 라스베가스) 참가',
    years: '2010',
    colClass: 'col-6 col-md-4',
    images: ['13-00.jpg', '13-01.jpg', '13-02.jpg'],
  },
  {
    id: 'aae-show',
    title: 'AAE Show(홍콩) 참가',
    years: '2014',
    colClass: 'col-6 col-md-4',
    images: ['21-00.jpg', '21-02.jpg', '21-03.jpg'],
  },
  {
    id: 'adc-show',
    title: 'ADC Show(중국 상해) 참가',
    years: '2013 / 2015',
    colClass: 'col-6 col-md-4',
    images: ['23-00.jpg', '23-01.jpg', '23-02.jpg', '18-00.jpg', '18-01.jpg', '18-02.jpg'],
  },
];
