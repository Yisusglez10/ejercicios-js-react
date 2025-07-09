// Componente reutilizable para estructura uniforme de tarjetas
const CardWrapper = ({ title, children }) => {
  return (
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-md p-6 h-[400px] flex flex-col justify-between transform transition duration-300 hover:scale-[1.015]">

      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      </div>
      
      <div className="flex flex-col justify-center flex-grow">
        {children}
      </div>
    </div>
  )
}

export default CardWrapper
