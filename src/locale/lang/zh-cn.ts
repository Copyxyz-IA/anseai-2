import type { language } from '..'

export const en = {
  name: 'pt',
  desc: 'Português',
  locales: {
    settings: {
      title: 'Configurações',
      save: 'Salvar',
      general: {
        title: 'Geral',
        requestWithBackend: 'Solicitação com back-end',
        locale: 'Alterar idioma',
      },
      openai: {
        title: 'OpenAI',
        key: '',
      },
      replicate: {},
    },
    conversations: {
      title: 'Conversas',
      add: 'Nova',
      recent: 'Recentes',
      noRecent: 'Nenhum recente',
      untitled: 'Sem título',
      promopt: {
        system: 'Informação do sistema,
        desc: 'Você é um assistente prestativo, responda da forma mais concisa possível...'',
      },
      emoji: 'Pesquise um emoji ~',
      confirm: {
        title: 'Excluir todas as mensagens',
        desc: 'Esta ação não pode ser cancelada.',
        message: 'Excluir este registro',
        btn: 'confirmar',
        cancel: 'cancelar',
        submit: 'Enviar',
      },
      share: {
        title: 'Compartilhar conversa',
        link: {
          title: 'Compartilhe com link',
          copy: 'Copiar Link',
          create: 'Criar Link',
        },
        save: 'Salvar',
        copy: 'Copiar Contexto',
        messages: {
          title: 'Selecionar Mensagem',
          selected: 'Mensagens selecionadas',
          selectAll: 'Selecionar tudo',
        },
        tabs: {
          context: 'Compartilhar contexto',
          image: 'Compartilhar imagem',
        },
        image: {
          btn: 'Generar Imagem',
          open: 'Abrir em nova guia',
          loading: 'Gerando...',
          copy: 'Copiar imagem',
        },
      },
    },
    docs: '',
    github: '',
    scroll: 'Scroll to bottom',
    empty: 'No data',
    send: {
      placeholder: 'Digite algo...',
      button: 'Enviar',
    },
    copyed: 'Copiado',
  },
} as language
