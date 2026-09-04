export const projects = [
  {
    slug: 'estudo-descritivo-varejo',
    order: 6,
    category: 'Estatística',
    title: 'Estudo Descritivo Vendas de Roupas',
    hook: 'Análise estatística descritiva de vendas e devoluções no setor de vestuário.',
    coverImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80',
    tags: ['Estatística Descritiva', 'R', 'LaTeX', 'Análise de Dados'],
    actions: [
      { label: 'Ver relatório completo ↗', url: 'https://drive.google.com/file/d/1fNUpNxkvfCgcJE0_gVCSeZZpS61MPRo4/view?usp=share_link' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'Para ingressar na ESTAT (Empresa Júnior de Estatística da UnB), o **processo seletivo exigia** atuar como consultor em um **projeto simulado**. Recebi um banco de dados fictício de **vendas e devoluções de uma loja de roupas** para realizar um estudo estatístico descritivo completo, indo da **limpeza dos dados brutos** até a **elaboração de um relatório executivo** final.',
      },
      {
        eyebrow: 'Análises',
        text: 'Direcionei as técnicas estatísticas para **responder problemas reais de negócio**. O cálculo do **coeficiente V de Cramer**, por exemplo, foi utilizado para provar que a **preferência de cor não dependia do gênero** do consumidor. Já a **correlação de Pearson** serviu para medir como o **preço da peça ditava a percepção de qualidade** e a satisfação do cliente.',
        image: '/images/projects/roupas-1.png',
      },
      {
        eyebrow: 'Relatório e Entregas',
        text: 'Para garantir uma entrega com padrão de mercado, diagramei o **relatório utilizando LaTeX através do Overleaf**. O estudo conseguiu detalhar desde a sazonalidade do faturamento da loja ao longo dos meses até a identificação de quais marcas apresentavam as maiores taxas de devolução por defeito.',
        images: [
          '/images/projects/roupas-2.png',
          '/images/projects/roupas-3.png',
        ],
      },
      {
        eyebrow: 'Aprendizados',
        text: 'Esse foi meu **projeto de entrada** no mundo da estatística e de dados. A principal lição que ficou foi a **necessidade de "criar intimidade" com os dados** antes de tentar qualquer modelagem complexa. Aprendi a **valorizar uma estatística descritiva** bem feita, entendendo que é preciso primeiro **investigar a base** e **mergulhar no contexto** do problema para, só então, utilizar ferramentas estatísticas mais robustas.',
      },
    ],
  },
  {
    slug: 'sbjr-2026',
    order: 1,
    category: 'Negócios',
    title: 'Sábado Júnior 2026',
    hook: 'Como fechei mais de 20 parcerias empresariais e desenvolvi uma inovação pra um evento de +800 pessoas.',
    coverImage: '/images/projects/sbjr-2026-cover.png',
    tags: ['Gestão de Parcerias', 'Liderança de Equipe', 'Pipefy', 'Desenvolvimento de Produto'],
    metrics: [
      { value: '20+', label: 'Empresas Parceiras' },
      { value: '4,37', label: 'CSAT' },
      { value: '800+', label: 'Participantes no evento' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'Empresas juniores são consultorias geridas por estudantes de graduação, parte do Movimento Empresa Júnior (MEJ). A Concentro é a federação que reúne essas empresas no DF, e o Sábado Júnior é seu **maior evento anual, com mais de 800 congressistas** em um único dia.',
      },
      {
        eyebrow: 'O Convite',
        text: 'Os empresários juniores do DF sentiam a qualidade dos eventos da Concentro em queda. Pela minha passagem pela Diretoria de Negócios na Estat, fui **convidado para assumir a Coordenadoria de Relacionamentos**, ao lado de outros 4 coordenadores.',
      },
      {
        eyebrow: 'Pré-evento',
        text: 'Com um **time de 6 pessoas e menos de dois meses**, montei um funil de captação do zero, guiado por um propósito: um evento disruptivo o bastante pra mudar a imagem da federação. Abandonamos o modelo de cotas fechadas e passamos a ler cada parceiro antes de propor, oferecendo só o que fazia sentido pra cada empresa e ao evento.',
        image: '/images/projects/sbjr-time.jpg'
      },
      {
        eyebrow: 'sbjr.com.br',
        text: '**Desenvolvi um web app** que cruzava o perfil de cada participante com a dor da sua empresa e recomendava uma trilha com base no conteúdo das palestras. Obtive uma adesão de **mais de 350 respostas (47% do público)**, hoje uma **base real de dados** para a Federação entender as dores dos congressistas.',
        cta: { label: 'Ver site ↗', url: 'https://sbjr.com.br' },
        image: '/images/projects/sbjr-2026-app.png',
      },
      {
        eyebrow: 'Dia do evento',
        text: 'O planejamento prévio garantiu **zero parceiros ausentes e zero imprevistos críticos**, com kit de recepção, grupo no WhatsApp e acompanhamento individual do time pra cada parceiro, do início ao fim.',
        image: '/images/projects/sbjr-2026-dia-evento.png',
      },
      {
        eyebrow: 'Resultados',
        text: '**CSAT de 4,37** (alta de 8% sobre a edição anterior) e **NPS de +64**, com **mais de 20 empresas parceiras fechadas** e **7+ mentorias entregues** no pós-evento. Os estandes interativos, nossa aposta inédita para essa edição, responderam por mais da metade dos elogios recebidos.',
      },
      {
        eyebrow: 'Aprendizados',
        text: 'Meu grande aprendizado foi liderar, com menos de dois meses, um time voluntário. Aprendi a **equilibrar a rotina de cada um fora do evento**, e não só cobrar entrega. Outro aprendizado foi **trocar processos engessados por autonomia ao time**: alimentar a equipe com o problema, e resolver juntos.',
      },
      {
        eyebrow: null,
        text: 'O que mais me confirma que valeu a pena foi ver empresas juniores de todo o DF **postando nas redes sociais** sobre as **experiências que conseguimos proporcionar** naquele dia.',
      },
    ],
    gallery: [
      '/images/projects/sbjr-2026-1.png',
      '/images/projects/sbjr-2026-2.png',
      '/images/projects/sbjr-2026-3.png',
      '/images/projects/sbjr-2026-4.png',
    ],
  },
  {
    slug: 'mgb-processos-estocasticos',
    order: 4,
    category: 'Estatística',
    title: 'Simulação de Ações com Movimento Geométrico Browniano',
    hook: 'Simulação de Monte Carlo pra projetar preços de ações reais usando Movimento Geométrico Browniano.',
    coverImage: '/images/projects/mgb-cover.png',
    tags: ['Estocástico', 'Movimento Browniano', 'R Shiny', 'Backtesting'],
    actions: [
      { label: 'Ver relatório completo ↗', url: 'https://drive.google.com/file/d/1Fbs3xENExeqI5gSmY4wU9ObSXcB_ELj5/view?usp=share_link' },
      { label: 'Ver simulador MGB ↗', url: 'https://fadulgabriel.shinyapps.io/simulador-mgb/' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'Apresentei um **seminário** na disciplina de **Processos Estocásticos**, na UnB, que teve como tema o Movimento Geométrico Browniano (MGB). Focamos na **aplicação desse modelo** para descrever como se comportam os **preços de ativos na bolsa** de valores.',
      },
      {
        eyebrow: 'Motivação prática',
        text: 'Um processo estocástico como esse carrega uma propriedade central: o **valor de amanhã depende só do valor de hoje**, não do caminho percorrido até ali. Aplicada à bolsa, essa ideia permite tratar o preço de uma ação como algo que já carrega, a cada instante, toda a informação relevante pra estimar, dentro de uma margem de incerteza, o que vem a seguir.',
      },
      {
        eyebrow: 'Metodologia',
        text: 'Duas ações reais foram selecionadas: **VALE3** (mineração) e **ITUB4** (bancário). A partir do **histórico real de preços** de cada uma, **estimamos dois parâmetros** que resumem o comportamento da ação: a tendência **média de crescimento** e a **volatilidade**, o quanto o preço costuma oscilar no dia a day. Todo esse processo, incluindo as demonstrações matemáticas por trás dos estimadores usados, está **detalhado no relatório completo**.',
        images: [
          '/images/projects/pagina-16-15.jpg',
          '/images/projects/pagina-17-16.jpg',
          '/images/projects/pagina-18-17.jpg',
        ],
      },
      {
        eyebrow: 'O Simulador MGB',
        text: 'Desenvolvi um **dashboard em R Shiny**: o Simulador MGB, uma ferramenta interativa que roda esse processo inteiro de forma visual. Basta **selecionar o período** desejado, e a ferramenta calcula, a partir do histórico de preços, os parâmetros de tendência e volatilidade daquele ativo. Com base neles, ela roda uma **simulação de Monte Carlo**: gera centenas de **trajetórias futuras** de preço, cada uma um cenário aleatório igualmente possível dentro do modelo, formando uma faixa de resultados plausíveis em vez de uma previsão única.',
        images: [
          '/images/projects/mgb-1.png',
          '/images/projects/mgb-2.png',
        ],
      },
      {
        eyebrow: 'Suposição por trás',
        text: 'O modelo depende de uma hipótese: os **retornos diários** de uma ação **seguem uma distribuição normal**, a curva em sino onde variações pequenas são comuns e extremas são raras. É essa suposição que gera, a cada passo da simulação. O **dashboard testa isso** na prática pelo teste de **Shapiro-Wilk**, verificando se o período selecionado realmente se comporta como uma normal antes de confiar na simulação.',
        image: '/images/projects/mgb-dist.png',
      },
      {
        eyebrow: 'Backtesting',
        text: 'O dashboard também faz o **backtesting do modelo**: uma forma de **prever o passado** pra testar se a **previsão bate** com o que já se sabe **que aconteceu**. A ferramenta separa o histórico em dois pedaços, estima os parâmetros usando só a parte mais antiga, e simula as trajetórias futuras a partir dali, como se estivesse no passado e sem saber o que vinha depois. Comparando essa projeção com o que já é conhecido, é possível verificar se o **modelo teria sido confiável** na prática, e não só na teoria.',
        image: '/images/projects/mgb-back.png',
      },
    ],
  },
  {
    slug: 'pipoca-experimento',
    order: 2,
    category: 'Estatística',
    title: 'Qualidade do Cozimento de Milho de Pipoca',
    hook: 'Delineamento experimental comparando grãos não estourados entre três marcas de pipoca com preços diferentes.',
    coverImage: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80',
    tags: ['Delineamento de Experimentos', 'ANOVA', 'R', 'Experimento Controlado'],
    actions: [
      { label: 'Ver relatório completo ↗', url: 'https://drive.google.com/file/d/1FEm2NfNO34lStG4_5kXsprnGEQFfcRNR/view?usp=share_link' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'O projeto surgiu a partir da **disciplina de Delineamento e Análise de Experimentos**, do curso de Estatística da UnB. Foi proposto um **experimento real** pra simular, na prática, como se conduz um delineamento controlado do início ao fim.',
      },
      {
        eyebrow: 'Objetivo',
        text: 'Comparar a quantidade de **grãos não estourados entre três marcas de pipoca** de faixas de preço diferentes.',
      },
      {
        eyebrow: 'Protocolo de Execução',
        text: 'Comparamos três marcas: Comum, Premium e Super Premium, usando **5 repetições** de **25g de milho** por marca, cozidas na mesma **pipoqueira elétrica**, com **ordem sorteada** entre execuções e tempo de resfriamento fixo entre elas pra não viesar o resultado.',
        image: '/images/projects/pagina-04-marcas-05.jpg',
      },
      {
        eyebrow: 'Etapa I',
        text: 'Primeiro testamos apenas o efeito da marca, com **tempo de cozimento fixo** em 4 minutos. Os dados atenderam a todos os pressupostos estatísticos: normalidade e variância constante, o que nos permitiu rodar uma **ANOVA** direta para comparar as médias das três marcas.',
        image: '/images/projects/pagina-08-etapa1-09.jpg',
      },
      {
        eyebrow: 'Etapa II',
        text: 'Na segunda etapa, cruzamos marca com **diferentes tempos de cozimento** (2, 3 e 4 minutos). Dessa vez os dados **não atenderam ao pressuposto** de normalidade exigido, então testamos **transformações nos dados** até encontrar a que menos violava esse pressuposto, e conduzimos a análise nessa escala ajustada.',
        image: '/images/projects/pagina-20-qqplot-21.jpg',
      },
      {
        eyebrow: 'Resultados',
        text: 'Na Etapa I, **nenhuma diferença** estatística entre as marcas: a mais barata estourou tão bem quanto a que custa 6x mais. Na Etapa II, o tempo de cozimento determinou o resultado: a partir de 3 minutos a diferença entre as marcas praticamente desaparecia. Na prática a **pipoca cara não garante mais grãos estourados**.',
        images: [
          '/images/projects/pagina-12-boxplot-etapa1-13.jpg',
          '/images/projects/pagina-19-boxplot-etapa2-20.jpg',
          '/images/projects/pagina-21-anova-tabela-22.jpg',
        ],
      },
      {
        eyebrow: null,
        text: 'O estudo mediu a qualidade **apenas pelo estouro dos grãos**, não avaliamos sabor, textura ou tamanho. Durante a execução, inclusive, notamos que os grãos da marca mais cara pareciam maiores, uma percepção que não chegamos a medir e que **fica como extensão** dessa pesquisa.',
      },
    ],
  },
  {
    slug: 'prova-multivariada-cedulas',
    order: 5,
    category: 'Estatística',
    title: 'Detecção de Notas Falsificadas com Análise Multivariada',
    hook: 'Aplicação de técnicas de clusterização e classificação multivariada para distinguir cédulas reais de falsas usando medidas físicas do papel.',
    coverImage: '/images/projects/notas-cover.jpg',
    tags: ['Análise Multivariada', 'Machine Learning', 'R', 'Clusterização'],
    actions: [
      { label: 'Ver relatório completo ↗', url: 'https://drive.google.com/file/d/1h6_erRcI3itg5_oWmoVr48_sARGYkhcq/view?usp=share_link' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'Projeto para a disciplina de **Análise Multivariada** na UnB. O objetivo era **detectar fraudes** analisando seis **medidas físicas de cédulas** (metade genuínas e metade falsificadas) para **distinguir sua autenticidade**.',
      },
      {
        eyebrow: 'Metodologia',
        text: 'O grande diferencial **não foi rodar um único modelo**, mas aplicar um **arsenal multivariado** no R para avaliar diferentes cenários. Conduzi a análise partindo da exploração das **matrizes de covariância**, avançando para testes com **algoritmos de agrupamento** (Hierárquico, K-means e Mistura de Normais) e técnicas de **classificação supervisionada** (LDA, QDA e Regressão Logística).',
        images: [
          '/images/projects/notas-1.png',
          '/images/projects/notas-2.png',
        ],
      },
      {
        eyebrow: 'Resultados',
        text: 'Mais do que gerar classificações corretas, o projeto entregou um **comparativo sobre os limites de cada algoritmo**. Isolei as variáveis com maior poder discriminatório e auditei o desempenho dos modelos, concluindo que o **LDA entregava a solução mais estável** e parcimoniosa para o problema. Em contrapartida, diagnostiquei que a **Regressão Logística**, apesar de parecer promissora, **sofria instabilidade devido à separação perfeita** dos dados, evidenciando os riscos de adotar modelos baseando-se unicamente em métricas de precisão.',
        images: [
          '/images/projects/notas-3.png',
          '/images/projects/notas-4.png',
        ],
      },
      {
        eyebrow: 'Aprendizados',
        text: 'O maior ganho foi **ir além de apenas rodar modelos prontos** e entender a fundo a **matemática por trás dos algoritmos de classificação e agrupamento**. Compreender as limitações reais de cada técnica contribui para saber qual método aplicar de acordo com a estrutura dos dados.',
      },
    ],
  },
  {
    slug: 'estat-diretoria-negocios',
    order: 3,
    category: 'Negócios',
    title: 'Diretoria de Negócios ESTAT',
    hook: 'Como levei a ESTAT ao maior faturamento da sua história, unificando Vendas e Marketing e reestruturando CRM, tráfego e time comercial em um ano de gestão.',
    coverImage: '/images/projects/estat-diretoria-negocios-cover.jpg',
    tags: ['Liderança de Equipe', 'Vendas & Marketing', 'R Shiny', 'Tráfego Pago'],
    metrics: [
      { value: 'R$270 mil', label: 'Faturamento' },
      { value: '70+', label: 'Projetos' },
      { value: '16%', label: 'Conversão' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'A ESTAT é a **maior empresa júnior de estatística do Brasil**, ligada à Universidade de Brasília. É uma consultoria estatística gerida inteiramente por estudantes de graduação, aplicando em **projetos reais** o que se aprende em sala.',
      },
      {
        eyebrow: 'Diagnóstico dos Problemas',
        text: 'Identifiquei algumas falhas principais: sem rotina de cobrança comercial, poucas métricas de desempenho, e um CRM desorganizado. **Propus soluções** numa carta de planejamento completa, fui sabatinado e eleito **Diretor de Negócios** de 2025.\n\nA mudança mais estrutural foi **unir Vendas e Marketing**, até então áreas separadas. Responsável pela **captação de leads**, conversão comercial e trazer **bons projetos** pra executar.',
        image: '/images/projects/estat-diretoria-negocios-discurso.jpg',
      },
      {
        eyebrow: 'Reconstrução do CRM',
        text: 'Implementei um **CRM novo** no Pipefy, com integrações automáticas que reduziam o tempo de alocação de vendedores a cada lead novo. Desenvolvi também um **dashboard em R Shiny** pra acompanhar as métricas de forma visual e prática.',
        cta: { label: 'Ver dashboard ↗', url: 'http://fadulgabriel.shinyapps.io/metricas_pipefy' },
        images: [
          '/images/projects/estat-diretoria-negocios-dashboard-1.jpg',
          '/images/projects/estat-diretoria-negocios-dashboard-2.jpg',
          '/images/projects/estat-diretoria-negocios-dashboard-3.jpg',
        ],
      },
      {
        eyebrow: 'Gestão de Tráfego',
        text: 'Assumi a operação semanal do **Google Ads**, com apoio de uma mentoria especializada. O canal virou a maior fonte de leads da empresa, com **ROI de mais de 100%**. Pra reduzir a dependência de um único canal, expandi também pro **LinkedIn Ads**, com planejamento de estruturar melhor na gestão seguinte.',
      },
      {
        eyebrow: 'Transição de mercado',
        text: 'O "boom" da **IA vinha reduzindo a demanda pelas análises estatísticas** acadêmicas, nosso principal produto. Lemos esse movimento e migramos o foco pra projetos de ticket médio maior e que envolviam mais as áreas de Machine Learning e ciência de dados, vendidos principalmente pra **empresas**.\n\n**Reestruturei o site** com uma equipe terceirizada como parte do **reposicionamento de marca**, com técnicas de venda que passassem mais confiança ao novo público. Deu certo: chegamos a **apresentar o case** num pitch pra outras Empresas Juniores.',
        image: '/images/projects/estat-diretoria-negocios-pitch.png',
      },
      {
        eyebrow: 'Liderança',
        text: 'Com a rotação semestral dos membros entre diferentes áreas da empresa, tive um **time de 7 pessoas** no primeiro semestre e 5 no segundo. Muitos eram **novos em vendas** e na própria estatística, então acompanhei cada um de perto, ensinando ao mesmo tempo técnica comercial e o **produto estatístico** que estávamos vendendo.',
        image: '/images/projects/estat-diretoria-negocios-time.jpg',
      },
      {
        eyebrow: 'Resultados',
        text: 'Alcançamos o **recorde de faturamento** e de mais **projetos vendidos** na história da ESTAT: **R$270 mil faturados com +70 projetos**. O ticket médio cresceu 40%, chegando aos R$3.500, e a conversão saltou de 6% para 16%, puxada pela qualificação do tráfego e pelo acompanhamento próximo de cada vendedor aos leads.',
      },
      {
        eyebrow: 'Aprendizados',
        text: 'Desenvolvi bastante **minha oratória** e a capacidade de **apresentar dados** de forma estratégica. Também passei a valorizar processos bem definidos, onde todos sabem como fazer cada coisa. No lado técnico, aprendi a **diagnosticar o problema do cliente** para depois oferecê-lo a melhor solução estatística.',
      },
      {
        eyebrow: null,
        text: 'Foi, sem dúvida, o **maior desafio que já enfrentei** até então, e em nenhum case caberia tudo que aprendi com as **pessoas** que conheci pela **ESTAT**...',
      },
    ],
    gallery: [
      '/images/projects/estat-diretoria-negocios-1.jpg',
      '/images/projects/estat-diretoria-negocios-2.jpg',
      '/images/projects/estat-diretoria-negocios-3.jpg',
    ],
  },
  {
    slug: 'carros-chineses',
    order: 5,
    category: 'Estatística',
    title: 'Proporção de Carros Chineses na UnB',
    hook: 'Pesquisa em campo utilizando técnicas de Amostragem para estimar a proporção de veículos chineses no estacionamento da Faculdade de Saúde na UnB.',
    coverImage: 'images/projects/carros-capa.jpg',
    tags: ['Amostragem', 'Pesquisa de Campo', 'SAS', 'Teste de Hipóteses'],
    actions: [
      { label: 'Ver relatório completo ↗', url: 'https://drive.google.com/file/d/1Ue5q4txmcJChGdLkJ4BtOaU2WNw7aGgQ/view?usp=share_link' },
    ],
    sections: [
      {
        eyebrow: 'Contexto',
        text: 'Projeto da disciplina de **Técnicas de Amostragem** na UnB, com o objetivo de **estimar a proporção** de veículos de marca chinesa no estacionamento da Faculdade de Saúde (FS), no campus Darcy Ribeiro.',
      },
      {
        eyebrow: 'Metodologia Amostral',
        text: 'Com a **população de vagas conhecida**, calculamos o tamanho da amostra necessária pela fórmula padrão de amostragem, com **95% de confiança** e margem de **erro de 7%**, no cenário mais conservador possível. **Corrigido para a população finita** de 188 vagas, o cálculo indicou que seria necessário sortear **96 vagas em cada dia** de coleta, planejada em turnos diferentes, pra não viciar o resultado por horário.',
        image: '/images/projects/carros-amostra.png',
      },
      {
        eyebrow: 'Pré-coleta',
        text: 'Antes de sortear, mapeamos o estacionamento e enumeramos as **188 vagas existentes**, criando um **mapa de referência** pra guiar quais vagas foram sorteadas e **facilitar na hora da coleta**.',
        image: '/images/projects/carros-mapa.png',
      },
      {
        eyebrow: 'Coleta em campo',
        text: '**Sorteamos as 96 vagas** para cada dia com um programa em Python que lia números aleatórios de um livro especializado. Em campo, um **formulário único padronizou o registro** de cada vaga sorteada: ocupada ou vazia, marca, cor, tipo e motor do veículo.',
      },
      {
        eyebrow: 'Resultados',
        text: '**2,08%** dos veículos observados eram de **marca chinesa**, com intervalo de confiança de 95% entre **0,07% e 4,10%**.\n\nComo achado extra, houve significância estatística para a **associação entre marca e cor** do veículo (europeus tendem ao branco, japoneses ao cinza), mas **nenhuma associação entre marca e tipo de veículo**.',
        images: [
          '/images/projects/carros-result2.png',
          '/images/projects/carros-result3.png',
        ],
      },
      {
        eyebrow: 'Observação',
        text: 'O escopo do projeto foi **específico** para **Amostragem Aleatória Simples**, então foi essa a técnica usada. Mas com quase **40% das vagas sorteadas vazias**, ficou claro que uma amostragem inversa, por exemplo, teria sido mais eficiente nesse cenário.',
      },
    ],
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
