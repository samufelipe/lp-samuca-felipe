import gladysLogo from '@/assets/gladys-logo.jpg';
import becharaLogo from '@/assets/bechara-logo.png';
import fasLogo from '@/assets/fas-logo.png';
import ciatripLogo from '@/assets/ciatrip-logo.jpg';
import ituranLogo from '@/assets/ituran-logo.jpg';
import valemLogo from '@/assets/valem-logo.png';
import al7Logo from '@/assets/al7-logo.png';
import porscheLogo from '@/assets/porsche-logo.png';
import mercedesLogo from '@/assets/mercedes-logo.png';
import agvLogo from '@/assets/agv-logo.png';

export type Sector =
  | 'Todos'
  | 'Automotivo'
  | 'Educação'
  | 'Saúde & Estética'
  | 'E-commerce'
  | 'Indústria'
  | 'Serviços'
  | 'Turismo';

export interface CaseItem {
  id: string;
  name: string;
  niche: string;
  sector: Sector;
  desc: string;
  result: string;
  services: string[];
  url: string;
  logo?: string;
}

export const allCases: CaseItem[] = [
  {
    id: 'moveis-bechara',
    name: 'Móveis Bechara',
    niche: 'Indústria Moveleira',
    sector: 'Indústria',
    desc: 'Líder na fabricação de móveis modernos com design funcional e distribuição nacional.',
    result: 'Escala Nacional',
    services: ['Google Ads', 'Meta Ads', 'Landing Page'],
    url: 'https://moveisbechara.com.br/',
    logo: becharaLogo,
  },
  {
    id: 'fas-iluminacao',
    name: 'FAS Iluminação',
    niche: 'Design & Luxo',
    sector: 'Indústria',
    desc: 'Curadoria de iluminação técnica e decorativa internacional de alto padrão.',
    result: 'Posicionamento Premium',
    services: ['Meta Ads', 'Google Ads', 'Branding'],
    url: 'https://fasiluminacao.com.br/',
    logo: fasLogo,
  },
  {
    id: 'grupo-al7',
    name: 'Grupo AL7 Motos',
    niche: 'Setor Automotivo',
    sector: 'Automotivo',
    desc: 'Concessionária Dafra com venda de motos 0km, seminovas, peças, consórcio e seguros.',
    result: 'Autoridade Local',
    services: ['Google Ads', 'Meta Ads', 'Tráfego Local'],
    url: 'https://grupoal7.com.br/',
    logo: al7Logo,
  },
  {
    id: 'inovando-obra',
    name: 'Inovando na sua Obra',
    niche: 'Educação & Arquitetura',
    sector: 'Educação',
    desc: 'Mentoria para arquitetas e designers de interiores sobre gerenciamento lucrativo de obras.',
    result: 'Captação Qualificada',
    services: ['Meta Ads', 'Google Ads', 'Landing Page', 'Funil de Vendas'],
    url: 'https://www.inovandonasuaobra.com.br/',
  },
  {
    id: 'lu-guerra',
    name: 'Lu Guerra',
    niche: 'Iluminação & Arquitetura',
    sector: 'Educação',
    desc: 'Arquiteta especialista em lighting design com projetos autorais e cursos para profissionais da iluminação.',
    result: 'Branding de Luxo',
    services: ['Meta Ads', 'Branding', 'Landing Page'],
    url: 'https://www.luguerra.com/',
  },
  {
    id: 'valem',
    name: 'VALEM Benefícios',
    niche: 'Gestão de Saúde',
    sector: 'Saúde & Estética',
    desc: 'Administradora líder em benefícios e planos de saúde corporativos.',
    result: 'Lead B2B',
    services: ['Google Ads', 'Lead Gen B2B'],
    url: 'https://www.valem.com.br/',
    logo: valemLogo,
  },
  {
    id: 'hdi-brasil',
    name: 'HDI Brasil',
    niche: 'Padrões de TI',
    sector: 'Serviços',
    desc: 'Autoridade global em suporte técnico e melhores práticas de tecnologia.',
    result: 'Educação Corporativa',
    services: ['Google Ads', 'Meta Ads'],
    url: 'https://hdibrasil.com.br/',
  },
  {
    id: 'instituto-embelleze',
    name: 'Instituto Embelleze',
    niche: 'Educação Profissional',
    sector: 'Educação',
    desc: 'Maior rede mundial de cursos profissionalizantes na área da beleza.',
    result: 'Conversão em Massa',
    services: ['Google Ads', 'Meta Ads', 'Funil de Vendas'],
    url: 'https://institutoembelleze.com/',
  },
  {
    id: 'colina-dos-ipes',
    name: 'Colina dos Ipês',
    niche: 'Planos Funerários',
    sector: 'Serviços',
    desc: 'Planos funerários com atendimento humanizado e clube de benefícios com mais de 500 parceiros.',
    result: 'Acolhimento Digital',
    services: ['Meta Ads', 'Landing Page'],
    url: 'https://www.colinadosipes.com.br/',
  },
  {
    id: 'ituran',
    name: 'Ituran Seguros',
    niche: 'Segurança Veicular',
    sector: 'Automotivo',
    desc: 'Líder em rastreamento veicular, seguros e proteção automotiva com tecnologia de ponta.',
    result: 'Performance Global',
    services: ['Google Ads', 'Meta Ads', 'Lead Gen'],
    url: 'https://ituran.com.br/',
    logo: ituranLogo,
  },
  {
    id: 'sao-jose-confeccoes',
    name: 'São José Confecções',
    niche: 'Produtos Promocionais',
    sector: 'E-commerce',
    desc: 'Fábrica de bonés, viseiras, camisetas e ecobags personalizados para ações promocionais e eventos.',
    result: 'Venda Direta',
    services: ['Meta Ads', 'Lead Gen'],
    url: 'https://www.saojoseconfeccoes.com.br/',
  },
  {
    id: 'ciatrip',
    name: 'Ciatrip',
    niche: 'Turismo Premium',
    sector: 'Turismo',
    desc: 'Agência especializada em roteiros personalizados e experiências internacionais.',
    result: 'Ticket Médio Alto',
    services: ['Google Ads', 'Meta Ads'],
    url: 'https://ciatrip.com/',
    logo: ciatripLogo,
  },
  {
    id: 'paula-romao',
    name: 'Paula Romão',
    niche: 'Estética & Saúde',
    sector: 'Saúde & Estética',
    desc: 'Fisioterapeuta especializada em pós-operatório de cirurgia plástica, com atendimento domiciliar personalizado.',
    result: 'Agenda Lotada',
    services: ['Google Ads', 'Meta Ads', 'Landing Page'],
    url: 'https://www.paulacromao.com.br/',
  },
  {
    id: 'gladys-religiosos',
    name: 'Gladys Religiosos',
    niche: 'Varejo Especializado',
    sector: 'E-commerce',
    desc: 'Principal e-commerce de artigos sacros e religiosos do mercado brasileiro.',
    result: 'E-commerce Escalonável',
    services: ['Google Ads', 'Meta Ads', 'E-commerce'],
    url: 'https://www.gladysreligiosos.com.br/',
    logo: gladysLogo,
  },
  {
    id: 'porsche-center-bh',
    name: 'Porsche Center BH',
    niche: 'Luxo & Lifestyle',
    sector: 'Automotivo',
    desc: 'E-commerce oficial de vestuário e acessórios Porsche com estratégia de conversão para o público de alta renda.',
    result: 'ROI Premium',
    services: ['Google Ads', 'Meta Ads', 'E-commerce'],
    url: 'https://loja.porschecenterbh.com.br/',
    logo: porscheLogo,
  },
  {
    id: 'mercedes-benz-collection',
    name: 'Mercedes-Benz Collection',
    niche: 'Moda & Luxo',
    sector: 'Automotivo',
    desc: 'Loja online da coleção de roupas e acessórios Mercedes-Benz com posicionamento de marca e performance em mídia paga.',
    result: 'Branding + Vendas',
    services: ['Meta Ads', 'Branding', 'E-commerce'],
    url: 'https://www.mercedes-benzcollection.com.br/',
    logo: mercedesLogo,
  },
  {
    id: 'agv-protege',
    name: 'Universo AGV Protege',
    niche: 'Proteção Veicular',
    sector: 'Automotivo',
    desc: 'Associação de proteção veicular com estratégias digitais para captação de leads e crescimento de base de associados.',
    result: 'Escala de Leads',
    services: ['Meta Ads', 'Landing Page', 'Lead Gen'],
    url: 'https://agvprotege.com.br/',
    logo: agvLogo,
  },
];

export const sectors: Sector[] = [
  'Todos',
  'Automotivo',
  'Educação',
  'Saúde & Estética',
  'E-commerce',
  'Indústria',
  'Serviços',
  'Turismo',
];

export const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return '';
  }
};
