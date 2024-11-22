import { Link } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import MovieList from './MovieList';

function Home() {
  return (
    <div>
      <Header />  
      <Banner /> 
      <MovieList title="Featured Today" />  
      <MovieList title="Fan Favorites" /> 
      
      {/* Thêm liên kết đến trang MovieUpload */}
      <div className="p-4">
        <Link 
          to="/upload" 
          className="text-white bg-blue-500 p-2 rounded-md"
        >
          Go to Movie Upload
        </Link>
      </div>   
    </div>
  );
}

export default Home;