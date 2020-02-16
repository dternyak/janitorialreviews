const module = {
  init: () => {
    const bookmarks = document.querySelectorAll('.kg-bookmark-title');
    bookmarks.forEach((bookmark) => {
      const icon = document.createElement('i');
      icon.classList.add('fa');
      icon.classList.add('fa-bookmark');
      bookmark.insertBefore(icon, bookmark.firstChild);
    });
  },
};

export default module;
