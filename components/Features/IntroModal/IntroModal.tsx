import Image from 'next/image';

function IntroModal() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Image
        id="welcome-gif"
        src="/assets/videos/video_farox_gif.gif"
        alt="Welcome GIF"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

export default IntroModal;
