import React, { Component, FormEvent } from 'react';

class PublicarOferta extends Component {
  state = {
    titulo: '',
    empresa: '',
    descripcion: '',
    salario: '',
    jornada: '',
    diasLaborales: '',
    ubicacion: '',
    beneficios: '',
    requisitos: '',
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(this.state);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      titulo,
      empresa,
      descripcion,
      salario,
      jornada,
      diasLaborales,
      ubicacion,
      beneficios,
      requisitos,
    } = this.state;

    return (
      <div className="container mx-auto mt-10 ">
        <div className='mt-6 p-10 bg-gray-100'>
        <form onSubmit={this.handleSubmit} className="max-w-lg mx-auto">
          <h1 className='font-bold text-3xl mb-5'>Publicar Ofertas</h1>
          <div className="mb-4">
            <label htmlFor="titulo" className="block mb-2">
              Título de la oferta:
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="empresa" className="block mb-2">
              Empresa:
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={empresa}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block mb-2">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="salario" className="block mb-2">
              Salario:
            </label>
            <textarea
              id="salario"
              name="salario"
              value={salario}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="jornada" className="block mb-2">
              Jornada:
            </label>
            <textarea
              id="jornada"
              name="jornada"
              value={jornada}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="diaslaborales" className="block mb-2">
              Días Laborales:
            </label>
            <textarea
              id="diaslaborales"
              name="diaslaborales"
              value={diasLaborales}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
                    
          <div className="mb-4">
            <label htmlFor="ubicacion" className="block mb-2">
              Ubicación:
            </label>
            <textarea
              id="ubicacion"
              name="ubicacion"
              value={ubicacion}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

                    
          <div className="mb-4">
            <label htmlFor="beneficios" className="block mb-2">
              Beneficios:
            </label>
            <textarea
              id="beneficios"
              name="beneficios"
              value={beneficios}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

                    
          <div className="mb-4">
            <label htmlFor="requisitos" className="block mb-2">
              Requisitos:
            </label>
            <textarea
              id="requisitos"
              name="requisitos"
              value={requisitos}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

 
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Publicar oferta
            </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default PublicarOferta;