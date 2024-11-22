import { useState } from "react";

const MovieUpload = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    year: '',
    genre: '',
  });
  const [poster, setPoster] = useState(null);
  const [preview, setPreview] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPoster(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra tính hợp lệ của các trường
    if (!movieData.title || !movieData.description || !movieData.year || !poster) {
      setError("Please fill in all fields and upload a poster.");
      return;
    }

    setIsLoading(true);
    setError(""); // Reset lỗi trước khi bắt đầu gửi

    const formData = new FormData();
    formData.append('title', movieData.title);
    formData.append('description', movieData.description);
    formData.append('year', movieData.year);
    formData.append('genre', movieData.genre);
    formData.append('poster', poster);

    try {
      const response = await fetch('http://your-api-url.com/classify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload movie data');
      }

      const data = await response.json();
      setResult(data.genre); // Ví dụ model trả về 'Action', 'Drama'...
    } catch (error) {
      setError('Error uploading movie: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6 font-bold text-yellow-400">Upload Movie Information</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-lg mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Description:</label>
          <textarea
            name="description"
            value={movieData.description}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Year:</label>
          <input
            type="number"
            name="year"
            value={movieData.year}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Genre (Optional):</label>
          <input
            type="text"
            name="genre"
            value={movieData.genre}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Poster:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
          {preview && (
            <img
              src={preview}
              alt="Poster Preview"
              className="mt-4 max-w-xs rounded-lg"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-yellow-500 text-black font-bold rounded-md"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {result && <h2 className="mt-6 text-xl font-semibold">Predicted Genre: {result}</h2>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default MovieUpload;
