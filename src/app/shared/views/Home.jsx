import React, { useState, useEffect } from 'react';
import '../style/Home.css'

export function Home()
{
    const url = 'https://localhost:44387/ifc/report/masivo'

    const data = {
      periodoAcademicoId: 36,
      areaUnidadAcademicaId: 5698,
      subAreaUnidadAcademicaId: 5709,
      cursoUnidadAcademicaId: 0,
      language: "es-PE",
      college: "Default",
      estado: "0"
    }

    async function abrirModal() {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
            var resource = data.resource
            var nombre = resource.fileName
            var bytesBase64 = resource.fileBytes

            const bytes = Uint8Array.from(atob(bytesBase64), c => c.charCodeAt(0));
            const blob = new Blob([bytes], { type: 'application/octet-stream' });
            const blobURL = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobURL;
            a.download = nombre;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobURL);
        })
        .catch(error => {
            console.error('Error al descargar el archivo:', error);
        });
    }
  
    return (
      <div>
        <button onClick={abrirModal}>Abrir Documento</button>
      </div>
    );
}