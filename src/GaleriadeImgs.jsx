import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://jornal.unesp.br/wp-content/uploads/2022/02/Depositphotos_9816115_S-1.jpg',
    'https://img.freepik.com/fotos-premium/um-planeta-com-planetas-e-sol-no-fundo_1108514-166438.jpg?semt=ais_hybrid',
    'https://ichef.bbci.co.uk/images/ic/512xn/p0cljv27.jpg.webp'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://via.placeholder.com/150']);
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img 
            key={index} 
            src={imagem} 
            alt={`Imagem ${index + 1}`} 
            style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '5px' }} 
          />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;