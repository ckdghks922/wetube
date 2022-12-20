const videos = [
  {
    title: 'Video 1',
    ratings: 3,
    comements: 2,
    createdAt: '10 minutes ago',
    views: 1,
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
  return res.render('home', { pageTitle: 'Home', videos });
};

export const handleWatch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watch ${video.title}`, video });
};

export const handleGetEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};

export const handlePostEdit = (req, res) => {};
