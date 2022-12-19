export const handleHome = (req, res) =>
  res.render('home', { pageTitle: 'Home' });

export const handleSearch = (req, res) => res.send('Search');

export const handleUpload = (req, res) => res.send('Upload Video');

export const handleSee = (req, res) =>
  res.render('see', { pageTitle: 'Watch' });

export const handleEdit = (req, res) =>
  res.render('edit', { pageTitle: 'Edit' });

export const handleDelete = (req, res) => res.send('Delete Video');
