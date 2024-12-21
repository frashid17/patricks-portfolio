interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
      <img
        src={imageUrl}
        alt={alt}
        className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
      />
    </div>
  );
};

export default Avatar;