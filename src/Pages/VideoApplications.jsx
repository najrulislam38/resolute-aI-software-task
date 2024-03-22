const VideoApplications = () => {
  return (
    <div className="px-10">
      <h3 className="text-2xl font-medium">Applications Video</h3>
      <div className="my-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fzWzPXEhPvA?si=8wbCPGd39c21aMlL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoApplications;
