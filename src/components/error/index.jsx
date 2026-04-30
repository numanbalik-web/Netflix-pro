import { ShieldAlert } from "lucide-react";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col justify-center gap-4 my-20 backdrop-blur-md bg-red-500/10 border-red-500/30 rounded-3xl p-10 mx-auto max-w-2xl items-center text-center">
      <ShieldAlert className="text-red-500 size-16 drop-shadow-2xl" />

      <h1 className="text-2xl font-bold text-red-500">
        Üzgünüz bir sorun oluştu
      </h1>

      <p className="text-gray-300">{message}</p>
    </div>
  );
};

export default Error;
