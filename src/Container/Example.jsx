import React from 'react';
import './Example.css';
import {FaThumbsDown,FaThumbsUp  } from 'react-icons/fa'; 

function BookCard({ image, title, description, age, tags }) {
  const handleDislike = () => {
    console.log('User does not like this.');
  };

  const handleLike = () => {
    console.log('User likes this.');
  };

  const handleLove = () => {
    console.log('User loves this.');
  }
  // 這裡可以進一步拆分成更小的組件，如BookCover, BookInfo等
  return (
      <div className="book-container">
        <div className="book-content">
        <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="book-cover" className="book-cover" />

          <div className="book-details">
            <h2>Title of the Book</h2>
            <p className="book-description">這項技術利用深度學習來理解和視覺化文字描述的概念，從而能夠創造出獨特且通常非常創意的圖像。例如，如果你給出“在月球表面跳舞的機器人”的描述，DALL·E 就可以創造出一幅相應的圖像。這項技術在設計、藝術創作和創意表達等領域有著廣泛的應用。。當然可以！DALL·E 是一個由 OpenAI 開發的人工智能系統，專門用於根據文字提示創建圖像。用戶提供一段描述性文字，DALL·E 能夠根據這些描述生成相應的圖像。這項技術利用深度學習來理解和視覺化文字描述的概念，從而能夠創造出獨特且通常非常創意的圖像。例如，如果你給出“在月球表面跳舞的機器人”的描述，DALL·E 就可以創造出一幅相應的圖像。這項技術在設計、藝術創作和創意表達等領域有著廣泛的應用。</p>

            <div className="book-actions">
              <button className="add-to-list">+</button>
              <button className="play">Play</button>
              <button className="info">Info</button>
            </div>

            {/* <img src={image} alt={title} className="book-cover" />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Age: {age}</p>
        <p>Tags: {tags.join(', ')}</p>
      </div> */}
            
        <div className="feedback-buttons">
          <button onClick={handleDislike}>
            <FaThumbsDown /> Not for me
          </button>
          <button onClick={handleLike}>
            <FaThumbsUp /> I like this
          </button>
          <button onClick={handleLove}>
            <FaThumbsUp /> Love this!
          </button>
        </div>


          </div>
        </div>

        <div className="book-thumbnails">
        <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="thumbnails"/>
        <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="thumbnails"/>
        <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="thumbnails"/>
        <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="thumbnails"/>
        </div>

      </div>

  );
}

function RecommendationSection({ recommendations }) {
  // 這裡可以使用map函數來渲染每本推薦的書籍
  return (
    <div className="recommendations">
      <h2>YOU MAY ALSO LIKE...</h2>
      {recommendations.map(book => (
        <BookCard key={book.id} {...book} />
      ))}

    </div>
  );
}

// 假設這是您的App組件
function App() {
  const book = {
    image: 'path-to-book-cover.jpg',
    title: '書籍標題',
    description: '書籍描述',
    age: '7-10',
    tags: ['Self-exploration', 'Life education']
  };

  const recommendations = [/* ...推薦書籍的數據... */];

  return (
    <div>
      <BookCard {...book} />
      <RecommendationSection recommendations={recommendations} />
    </div>
  );
}

export default App;
