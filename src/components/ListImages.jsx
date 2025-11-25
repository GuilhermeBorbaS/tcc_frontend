"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CoordenatesMap from "./CoordenatesMap";
import { Button, Paper } from "@mui/material";
// 1. Importar o DataGrid
import { DataGrid } from "@mui/x-data-grid";

// 2. Definir as colunas (estrutura da tabela)
const columns = [
  // Assumindo que seus dados têm um campo 'id' ou você pode criar um
  { field: "name", headerName: "NOME", width: 500 }, 
  {
    field: "modified_time",
    headerName: "DATA-HORA",
    width: 300,
    renderCell: (params) => {
        return formatDateBR(params.value);
    }
    },
  {
    field: "status", 
    headerName: "SITUAÇÃO", 
    width: 100, 
    editable: false,
    renderCell: (params) => {
        return (
            <div>
                <span className={`${params.value ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600'} text-xs font-semibold rounded-md px-3 py-1`}>{params.value ? 'Alagado' : 'Normal'}</span>
            </div>
        )
    }
  },
  {
    field: "web_view_link",
    headerName: "IMAGEM",
    width: 150,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: (params) => { // ⭐️ AQUI ESTÁ A MUDANÇA PRINCIPAL
      const handleClick = () => {
        // Abre a URL em uma nova aba
        window.open(params.value, '_blank');
      };

      return (
        <Button
          variant="contained" // Ou "outlined", "text"
          color="primary"
          size="small"
          onClick={handleClick}
          // Opcional: Adicione um ícone, se tiver o @mui/icons-material instalado
          // startIcon={<ImageIcon />} 
        >
          Ver Imagem
        </Button>
      );
    },
  },
  // Adicione outras colunas aqui se sua API retornar mais campos
];

const formatDateBR = (isoString) => {
  if (!isoString) return "—";

  const date = new Date(isoString);
  if (isNaN(date)) return "Data inválida";

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo"
  });
};


export default function ListImages() {
    const [images, setImages] = useState([]);
    
    const rows = images;

    // A definição de paginationModel já estava correta
    const paginationModel = { page: 0, pageSize: 5 };

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        const { data } = await axios.get("/api/images");
        console.log(data);
        
        // Mapeia os dados para garantir que cada linha tenha uma propriedade 'id'
        const dataWithIds = data.map((item, index) => ({
            ...item,
            id: item.id || index + 1, // Usa o 'id' existente ou cria um baseado no índice
        }));
        setImages(dataWithIds);
    };
    
    return (
        <div className="w-full flex justify-center items-start bg-[#393be7] z-0">
            <div className="w-[70%] flex flex-col gap-5 py-10">
                <span className="text-white font-semibold text-5xl">Confira os pontos de alagamento abaixo:
                </span>
                <div id='list-flooding' className="w-full flex flex-col gap-2">
                    <Paper sx={{ height: 400, width: '100%' }}>
                        {/* 3. Agora o DataGrid tem todas as variáveis definidas em seu escopo */}
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            sx={{ border: 0 }}
                        />
                    </Paper>
                    <div id='map' className="w-full">
                        <CoordenatesMap data={images}/>
                    </div>
                </div>
            </div>
        </div>
    );
}