import './styles.css';

const Videos = ({ title, date, videoUrl, embedUrl, width, height }) => (
  <div className="video">
    {title ? (
      <div className="margin-bottom-xs">
        <a target="_blank" className="video-link" href={videoUrl}>
          <strong>{title}</strong>
        </a>
        <br />
        {date}
      </div>
    ) : null}
    <div className="video-container margin-bottom-sm">
      <iframe
        width={width || '560'}
        height={height || '315'}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default Videos;
