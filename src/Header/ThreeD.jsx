import React from 'react';
import './ThreeD.css'; // 确保 CSS 文件的路径正确

function ThreeD() {
    const images = [
        "https://i.postimg.cc/BQcRL38F/pexels-photo-761963.jpg",
        "https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg",
        "https://i.postimg.cc/T1rDCpVT/beautiful-1274056-960-720.jpg" ,
        "https://i.postimg.cc/SNf99YQr/woman-1807533-960-720.jpg",
        "https://i.postimg.cc/CxBzNcjw/Opera-Snapshot-2020-07-03-162022-www-freepik-com.png",
        "https://i.postimg.cc/2SHBcpZL/pexels-photo-4664520.jpg",
        "https://i.postimg.cc/0QckxSpt/Opera-Snapshot-2020-07-03-161422-www-freepik-com.png",
        "https://i.postimg.cc/CxBzNcjw/Opera-Snapshot-2020-07-03-162022-www-freepik-com.png"
    ];

    return (
        <div>
            <div className="image-carousel">
                {images.map((imgUrl, index) => (
                    <span key={index} style={{ '--i': index + 1 }}>
                        <img src={imgUrl} alt={`Gallery image ${index + 1}`} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ThreeD;
