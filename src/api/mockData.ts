import { Season } from '@/types';

export const MOCK_SEASONS: Season[] = [
  {
    id: 'spring-2024',
    name: 'Spring 2024 Collection',
    description: 'A collection of vibrant photos capturing the essence of spring.',
    photos: [
      {
        id: 'p1',
        url: 'https://picsum.photos/seed/spring1/800/600',
        title: 'Cherry Blossoms',
        description: 'Delicate cherry blossoms in full bloom.',
      },
      {
        id: 'p2',
        url: 'https://picsum.photos/seed/spring2/800/600',
        title: 'Morning Dew',
        description: 'A close-up of a flower petal with morning dew.',
      },
      {
        id: 'p3',
        url: 'https://picsum.photos/seed/spring3/800/600',
        title: 'Green Fields',
        description: 'Lush green fields under a clear blue sky.',
      },
    ],
  },
  {
    id: 'summer-2024',
    name: 'Summer 2024 Collection',
    description: 'Bright and sunny moments from the heart of summer.',
    photos: [
      {
        id: 'p4',
        url: 'https://picsum.photos/seed/summer1/800/600',
        title: 'Beach Sunset',
        description: 'A breathtaking sunset over the ocean.',
      },
      {
        id: 'p5',
        url: 'https://picsum.photos/seed/summer2/800/600',
        title: 'Mountain Hike',
        description: 'A view from the top of a mountain on a sunny day.',
      },
    ],
  },
  {
    id: 'autumn-2024',
    name: 'Autumn 2024 Collection',
    description: 'The warm and rustic colors of the autumn season.',
    photos: [
      {
        id: 'p6',
        url: 'https://picsum.photos/seed/autumn1/800/600',
        title: 'Fallen Leaves',
        description: 'A carpet of colorful autumn leaves on the forest floor.',
      },
      {
        id: 'p7',
        url: 'https://picsum.photos/seed/autumn2/800/600',
        title: 'Misty Morning',
        description: 'A misty morning in an autumn forest.',
      },
      {
        id: 'p8',
        url: 'https://picsum.photos/seed/autumn3/800/600',
        title: 'Pumpkin Patch',
        description: 'A vibrant pumpkin patch ready for harvest.',
      },
    ],
  },
];