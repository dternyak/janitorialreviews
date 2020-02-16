import ImagePreload from './modules/imagePreload';
import WeatherWidget from './modules/weatherWidget';
import ScrollHint from './modules/scrollHint';
import NavbarToggleButton from './modules/navbarToggleButton';
import Search from './modules/search';
import MapWidget from './modules/mapWidget';
import InstagramWidget from './modules/instagramWidget';
import Dropdown from './modules/dropdown';
import ResponsiveVideo from './modules/responsiveVideo';
import Gallery from './modules/gallery';
import Bookmark from './modules/bookmark';
import Alerts from './modules/alerts';

ImagePreload.init();
WeatherWidget.init();
ScrollHint.init();
NavbarToggleButton.init();
Search.init();
MapWidget.init();
InstagramWidget.init();
Dropdown.init();
ResponsiveVideo.init();
Gallery.init();
Bookmark.init();
Alerts.init();

/**
 * Workaround for vh100 bug
 */
const header = document.getElementById('header');
if (!header.classList.contains('header-hidden') && !header.classList.contains('header-naked')) {
  header.style.height = `${window.innerHeight}px`;
  header.classList.remove('header-vh100');
}
