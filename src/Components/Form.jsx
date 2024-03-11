import React from "react";

export default function Form() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex flex-col md:flex-row justify-center items-center gap-4 w-2/3">
        <div className="text-5xl w-full mb-4 md:mb-36">
          <h1 className="font-quicksand">Contactanos</h1>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2 bg-gray-100 p-12 rounded-md shadow-md">
          <div className="h-12 w-full">
            <input className="p-2 w-full rounded-md shadow-sm" placeholder="Nombre completo" />
          </div>
          <div className="h-12 w-full">
            <input className="p-2 w-full rounded-md shadow-sm" placeholder="Email" />
          </div>
          <div className="h-12 w-full">
            <input className="p-2 w-full rounded-md shadow-sm" placeholder="Encabezado" />
          </div>
          <div className="h-36 w-full">
            <input className="p-2 h-full w-full rounded-md shadow-sm" placeholder="Escriba su mensaje" />
          </div>
          <button className="bg-blue-400 mt-4 h-10 w-full rounded-md">Enviar</button>
        </div>
      </form>
    </div>
  );
}
