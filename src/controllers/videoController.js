const videos = [
  {
    title: 'Video 1',
    ratings: 3,
    comements: 2,
    createdAt: '10 minutes ago',
    views: 12,
    id: 1,
  },
  {
    title: 'Video 2',
    ratings: 4,
    comements: 12,
    createdAt: '15 minutes ago',
    views: 19,
    id: 2,
  },
  {
    title: 'Video 3',
    ratings: 5,
    comements: 5,
    createdAt: '20 minutes ago',
    views: 22,
    id: 3,
  },
];

export const handleHome = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};

export const handleSearch = (req, res) => res.send('Search');

export const handleUpload = (req, res) => res.send('Upload Video');

export const handleSee = (req, res) =>
  res.render('see', { pageTitle: 'Watch' });

export const handleEdit = (req, res) =>
  res.render('edit', { pageTitle: 'Edit' });

export const handleDelete = (req, res) => res.send('Delete Video');
