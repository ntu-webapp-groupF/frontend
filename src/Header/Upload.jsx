import React, { useState } from 'react';

function Upload() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const submitForm = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    images.forEach((image, index) => {
      formData.append('image' + index, image);
    });

    // 假设您的后端接口是 "/upload"
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful');
        // 处理上传成功的逻辑，例如跳转到成功页面或显示成功消息
      } else {
        console.error('Upload failed');
        // 处理上传失败的逻辑
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <h1>Title name</h1>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title name"
      />

      <h2>Introduction</h2>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Introduction"
      />
      <button onClick={submitForm}>Submit</button>

      <label htmlFor="imageInput">Choose pictures</label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
}

export default Upload;
