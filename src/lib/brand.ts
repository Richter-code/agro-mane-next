/**
 * Configuração central da Identidade da Agropecuária do Mané.
 * ATENÇÃO: Como não há (neste ambiente) acesso direto à coleta automática de dados
 * de Facebook ou Instagram, este arquivo serve como FONTE ÚNICA DE VERDADE para
 * consolidar cores, tipografia, logos e voz da marca após você fornecer
 * referências oficiais (ex: print da capa, logotipo em SVG, fotos, hex codes).
 *
 * COMO ATUALIZAR A PALETA a partir das redes sociais:
 * 1. Baixe a imagem de perfil (logo) e a foto de capa.
 * 2. Use uma ferramenta de extração de cores (ex: coolors.co, color.adobe.com).
 * 3. Identifique: cor primária, secundária, acento, fundos claros/escuros,
 *    cor de destaque promocional (se houver) e cor de alerta/erro.
 * 4. Substitua abaixo os valores das variáveis.
 * 5. (Opcional) Adicione variações tonais (50..900) se quiser escalar no Tailwind.
 */

export const brand = {
  name: 'Agropecuária do Mané',
  tagline: 'Tudo o que você precisa em um só lugar!',
  social: {
    facebook: 'https://www.facebook.com/agropecuariadomane',
    instagram: 'https://www.instagram.com/agropecuariadomane/',
    whatsappMain: 'https://wa.me/551934377777'
  },
  palette: {
    // Valores ATUAIS (placeholders / já adotados).
    primary: '#2F6F55', // Verde médio
    primaryDark: '#0C3B2E',
    primaryLight: '#F0F7F3',
    accent: '#7ED957',
    neutral: '#101413',
    neutralAlt: '#18201D',
    danger: '#DC4F41',
    warning: '#F5A525',
    info: '#2986CC',
    success: '#3BA272'
  },
  typography: {
    display: 'Merriweather',
    body: 'Inter',
    notes: 'Usar display apenas em títulos de impacto (H1/H2).'
  },
  voice: {
    tone: 'Confiável, regional, acolhedora e especializada.',
    style: [
      'Evitar jargões técnicos sem explicação.',
      'Reforçar benefícios práticos ao cliente.',
      'Evidenciar estrutura física: consultório, estacionamento, modernidade.',
      'Mostrar proximidade com comunidade local (Piracicaba – SP).'
    ]
  },
  logo: {
    // Atualize estes caminhos quando adicionar SVGs reais.
    icon: '/assets/logo.svg',
    horizontal: '/assets/logo-horizontal.svg', // adicionar quando disponível
    monochrome: '/assets/logo-monocromatico.svg'
  }
}

export type Brand = typeof brand

/**
 * Helper para gerar meta tags sociais (pode ser usado no layout futuramente).
 */
export function getSocialMeta(){
  return {
    siteName: brand.name,
    facebookPage: brand.social.facebook,
    instagram: brand.social.instagram
  }
}
