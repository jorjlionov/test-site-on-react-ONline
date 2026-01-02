// src/App.jsx
import { useState } from 'react';

function App() {
  // 1. Список видео — названия файлов ДОЛЖНЫ совпадать с именами в папке anime/
  const videos = [
    { title: "Наруто", file: "naruto.mp4" },
    { title: "Блич", file: "(1).mp4" },
    // 🔁 Добавляй сюда свои видео!
    // Пример: { title: "Твой тайтл", file: "имя-файла.mp4" }
  ];

  // 2. Выбранное видео (по умолчанию — первый файл из списка)
  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.file || '');

  // 3. ⚠️ ОБЯЗАТЕЛЬНО замени на IP-адрес ТВОЕГО ПК в локальной сети!
  const SERVER_IP = '192.168.0.106'; // ← СЮДА ТВОЙ IP!

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      <img src="server/logo/logo.png" alt="" />
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
        🍿 Мой Аниме-Кинотеатр
      </h1>

      {/* Список видео */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
        {videos.map((video) => (
          <button
            key={video.file}
            onClick={() => setSelectedVideo(video.file)}
            className={`p-4 rounded-xl text-left transition-all duration-200 transform hover:scale-[1.02] ${
              selectedVideo === video.file
                ? 'bg-blue-600 border-2 border-white ring-2 ring-blue-400'
                : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            <h2 className="text-lg md:text-xl font-semibold">{video.title}</h2>
            <p className="text-gray-400 text-sm mt-1">Нажми, чтобы выбрать</p>
          </button>
        ))}
      </div>

{/* Плеер — компактный */}
{selectedVideo && (
  <div className="max-w-sm mx-auto mt-8 bg-gray-800 p-4 rounded-xl shadow-2xl">
    <h2 className="text-xl font-bold mb-3">
      {videos.find(v => v.file === selectedVideo)?.title || 'Видео'}
    </h2>
    <video
      src={`http://${SERVER_IP}:3001/${selectedVideo}`}
      controls
      autoPlay
      preload="metadata"
      className="w-100 rounded-lg"
      style={{ aspectRatio: '16 / 9' }}
    >
      Твой браузер не поддерживает видео.
    </video>
  </div>
)}

      {/* Подсказка, если видео нет */}
      {!selectedVideo && videos.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Добавь видео в массив 'videos' в файле App.jsx
        </p>
      )}
    </div>
  );
}

export default App;