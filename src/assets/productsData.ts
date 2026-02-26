import type { Product } from '../components/ProductCard'

const VNA_DESCRIPTIONS = [
  'Painel de seccionamento compacto, fabricado em chapa de aço SAE 1020, tratamento fosfatizado e pintura eletrostática epóxi.',
  'Quadro de distribuição de baixa tensão com barramentos de cobre eletrolítico e suportes de policarbonato técnico.',
  'Conjunto de manobra e proteção conforme NBR IEC 61439, com disjuntores termomagéticos e régua de bornes.',
  'Painel modular com kit de ventilação forçada e filtro G4, ideal para ambientes com índice de contaminação elevado.',
  'Subestação compacta em módulo metálico, equipada com transformador a seco Classe F e cubículo de MT.',
]

const CM_DESCRIPTIONS = [
  'Caixa metálica de distribuição de enfiação (CM), com fundo perfurado, trilho DIN e régua de bornes multi-camadas.',
  'Quadro de comando industrial com diagrama elétrico incluso, CLPs Siemens S7-1200 e IHM colorida touch.',
  'Painel de controle de bombas hidráulicas com soft-starter WEG SSW10 e automação por CLP Allen-Bradley.',
  'Centro de controle de motores (CCM) com gavetas plug-in de 18A a 400A e barra de neutro isolada.',
  'Painel de comando para esteira transportadora com inversor de frequência WEG CFW11 e encoders absolutos.',
]

const QM_DESCRIPTIONS = [
  'Armário metálico montável IP65, estrutura modular em chapa de 1,5mm, acabamento RAL 7035.',
  'Quadro montável com porta dupla e trinco duplo de segurança, acompanha placa de montagem perfurada.',
  'Gabinete industrial de poliéster reforçado, resistente a UV, ideal para instalações externas.',
  'Caixa de junção estanque IP67 em policarbonato, com membrana respiratória e prensa-cabos integrados.',
  'Painel de distribuição para data center, com rails de 19" integrados e gestão de cabos 1U.',
]

function gen(
  startId: number,
  category: string,
  skuPrefix: string,
  namePrefix: string,
  descriptions: string[],
  count: number,
  voltages: string[]
): Product[] {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    sku: `${skuPrefix}${String(i + 10).padStart(3, '0')}`,
    name: `${namePrefix} – Mod. ${String.fromCharCode(65 + (i % 26))}${i + 1}`,
    category,
    dimensions: `${300 + i * 20}×${400 + i * 15}×${150 + i * 10} mm`,
    weight: `${(2.5 + i * 0.3).toFixed(1)} kg`,
    voltage: voltages[i % voltages.length],
    norma: 'NBR IEC 61439 / NR-10',
    description: descriptions[i % descriptions.length],
  }))
}

export const products: Product[] = [
  ...gen(1, 'VNA10-50', 'VNA', 'Painel de Seccionamento VNA', VNA_DESCRIPTIONS, 40, ['127/220V', '220/380V', '380/440V']),
  ...gen(41, 'CM', 'CM', 'Caixa de Comando CM', CM_DESCRIPTIONS, 35, ['220V', '380V', '440/760V']),
  ...gen(76, 'Quadros Montáveis', 'QM', 'Quadro Montável QM', QM_DESCRIPTIONS, 30, ['N/A', '220V', '380V']),
]

export const categories = ['Todos', 'VNA10-50', 'CM', 'Quadros Montáveis'] as const
export type Category = (typeof categories)[number]
