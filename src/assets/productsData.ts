
export interface Product {
  id: number;
  name: string;
  category: string;
  image?: string;
  dimensions?: string;
  weight?: string;
  voltage?: string;
  certificacao?: string;
  description: string;
}

export const categories = ['Todos', 'VNA', 'CM', 'Quadros Montáveis'] as const;
export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: 1,
    name: 'Quadro de Comando VNA-10',
    category: 'VNA',
    image: '/assets/video-painel.mp4', // Usando vídeo como "imagem"
    dimensions: '800 mm á 1200 mm',
    weight: '2.8 kg ou Proteção',
    voltage: 'Até 4000A',
    certificacao: 'IEC 61439-1/2 | NBR IEC 60439-1',
    description: 'As caixas de montagem VNA-10 são fabricadas com processos de última geração, garantindo alta durabilidade, segurança e exlente custo-benefício.'
  },
  {
    id: 2,
    name: 'Quadro de Comando VNA-20',
    category: 'VNA',
    image: undefined,
    dimensions: '340×430×170 mm',
    weight: '3.1 kg',
    voltage: '220/380V',
    certificacao: 'Certificação',
    description: 'Quadro de distribuição de baixa tensão com barramentos de cobre eletrolítico e suportes de policarbonato técnico.'
  },
  {
    id: 3,
    name: 'Quadro de Comando VNA-30',
    category: 'VNA',
    image: undefined,
    dimensions: '360×445×180 mm',
    weight: '3.4 kg',
    voltage: '380/440V',
    certificacao: 'Certificação',
    description: 'Conjunto de manobra e proteção conforme NBR IEC 61439, com disjuntores termomagéticos e régua de bornes.'
  },
    {
      id: 4,
      name: 'Caixa de Comando CM',
      category: 'CM',
      image: undefined,
      dimensions: '380×460×190 mm',
      weight: '3.7 kg',
      voltage: '220V',
      certificacao: 'INMETRO',
      description: 'Caixa metálica de distribuição de enfiação (CM), com fundo perfurado, trilho DIN e régua de bornes multi-camadas.'
    },
    {
      id: 5,
      name: 'Quadro Montável QM',
      category: 'Quadros Montáveis',
      image: undefined,
      dimensions: '400×480×200 mm',
      weight: '4.0 kg',
      voltage: 'N/A',
      certificacao: 'ISO 9001',
      description: 'Armário metálico montável IP65, estrutura modular em chapa de 1,5mm, acabamento RAL 7035.'
    },
    // Adicione outros produtos manualmente abaixo, editando cada campo conforme necessário
  ];
