// Datos verificados para la ponencia: Ciberseguridad en el entorno padres - hijos
// Fuentes principales contrastadas: INCIBE / IS4K, AEPD, UNICEF España (USC/Red.es),
// PantallasAmigas, Fundación ANAR, Policía Nacional, Guardia Civil y centros de seguridad oficiales.

const APPS_DATA = [
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'mainstream',
    minAge: '13+ años (16+ para Mensajes Directos)',
    riskLevel: 'medio-alto',
    usage: 'Vídeos cortos verticales, retos virales, directos y mensajería directa.',
    risks: [
      'Algoritmo de recomendación muy adictivo que puede encerrar en burbujas de contenido dañino o retos virales.',
      'Comentarios de desconocidos y exposición pública si la cuenta no es privada.',
      'Presión estética, desinformación y retransmisiones en directo.'
    ],
    parentalTool: 'Sincronización Familiar (Family Pairing): vincula la cuenta del adulto con la del menor para fijar límite diario, horario de descanso nocturno, Modo Restringido y desactivar o limitar mensajes directos.',
    guideUrl: 'https://support.tiktok.com/es/safety-hc/account-and-user-safety/family-pairing'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'mainstream',
    minAge: '14 años en España (LOPDGDD)',
    riskLevel: 'medio-alto',
    usage: 'Fotos, Reels, Historias efímeras de 24 h, Notas, Canales de difusión y mensajes directos.',
    risks: [
      'Cuentas secundarias ("Finsta" o cuentas B) privadas para el grupo cercano o sin supervisión adulta.',
      {
        text: 'Integración con apps de preguntas anónimas externas (como NGL) en Historias.',
        actionLabel: 'Ampliar información: cómo funcionan y riesgos →',
        modalKey: 'ngl'
      },
      'Comparación social constante, ciberacoso en comentarios/DMs y contacto con desconocidos.'
    ],
    parentalTool: 'Cuentas de Adolescentes (privadas por defecto, modo reposo nocturno 22:00-7:00 y filtro de contenido sensible) + Centro para Familias (Supervisión Parental).',
    guideUrl: 'https://help.instagram.com/658522825492278'
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    category: 'mainstream',
    minAge: '13+ años',
    riskLevel: 'alto',
    usage: 'Fotos y vídeos que desaparecen al verse ("Snaps"), rachas diarias y mapa de amigos.',
    risks: [
      'Falsa sensación de seguridad por el borrado automático: cualquiera puede hacer captura o grabar la pantalla con otro móvil.',
      'Snap Map: si no está en "Modo Fantasma", comparte la ubicación exacta en tiempo real.',
      'Riesgo elevado de sexting, grooming y presión por mantener "rachas" diarias.'
    ],
    parentalTool: 'Centro Familiar (Family Center): permite ver con qué contactos ha hablado el menor en los últimos 7 días (sin leer el contenido de los chats) y reportar cuentas sospechosas.',
    guideUrl: 'https://values.snap.com/safety/safety-center?lang=en-US'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'mensajeria',
    minAge: '13+ años en España (tras actualización de edad mínima en la UE)',
    riskLevel: 'medio',
    usage: 'Mensajería, audios, estados, videollamadas y grupos escolares o de amigos.',
    risks: [
      'Grupos masivos donde cualquiera añade al menor y se difunden insultos, bulos o imágenes sin consentimiento.',
      {
        text: 'Chats bloqueados con código/huella, mensajes temporales que se autodestruyen y fotos de "visualización única".',
        actionLabel: 'Guía INCIBE de privacidad en WhatsApp ↗',
        href: 'https://www.incibe.es/ciudadania/blog/mejora-la-privacidad-de-tus-conversaciones-en-whatsapp'
      },
      {
        text: 'Robo de cuenta mediante ingeniería social (pedir el código SMS de 6 dígitos).',
        actionLabel: 'Cómo activar la verificación en dos pasos ↗',
        href: 'https://faq.whatsapp.com/1920866721452534/?cms_platform=web&locale=es_ES'
      }
    ],
    parentalTool: 'Ajustes de Privacidad (quién puede añadirte a grupos: "Mis contactos", ocultar foto/última vez a desconocidos) + Verificación en dos pasos (PIN de 6 dígitos).',
    guideUrl: 'https://faq.whatsapp.com/1313491802751163/?locale=es_LA',
    extraGuideUrl: 'https://www.incibe.es/sites/default/files/Cuidadan%C3%ADa/Infograf%C3%ADas/2026/configuracioneswhatsapp_f.pdf',
    extraGuideLabel: 'Infografía PDF de configuración (INCIBE) ↗'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'mensajeria',
    minAge: '16+ años (términos en Europa)',
    riskLevel: 'alto',
    usage: 'Mensajería en la nube, canales masivos públicos, grupos de miles de personas y bots.',
    risks: [
      'Canales y grupos públicos sin moderación donde circulan contenidos violentos, pornográficos o bots de manipulación de imágenes.',
      'Chats secretos cifrados con autodestrucción y carpetas ocultas o múltiples cuentas.',
      'Posibilidad de buscar usuarios o grupos si no se oculta el número de teléfono y el alias.'
    ],
    parentalTool: 'No tiene control parental nativo para familias. Es clave configurar Privacidad (ocultar número de teléfono a "Nadie", restringir quién puede añadir a grupos) y código de bloqueo.',
    guideUrl: 'https://www.incibe.es/menores/familias/control-parental'
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'gaming',
    minAge: '13+ años',
    riskLevel: 'alto',
    usage: 'Servidores temáticos, chat de texto, canales de voz y compartición de pantalla mientras juegan.',
    risks: [
      'Servidores abiertos con adultos desconocidos en canales de voz en tiempo real.',
      'Estafas con enlaces falsos ("Nitro gratis") para robar cuentas o credenciales.',
      'Intercambio de archivos y enlaces externos sin filtro previo si no se restringe.'
    ],
    parentalTool: 'Centro Familiar (Family Center): muestra servidores a los que se une y contactos recientes sin leer mensajes privados. Configurar "Privacidad y seguridad" para bloquear DMs de miembros desconocidos.',
    guideUrl: 'https://discord.com/safety'
  },
  {
    id: 'twitch',
    name: 'Twitch',
    category: 'gaming',
    minAge: '13+ años',
    riskLevel: 'medio',
    usage: 'Retransmisiones en directo de videojuegos, charlas IRL y suscripciones/donaciones.',
    risks: [
      'Chat en directo sin filtro adecuado, lenguaje agresivo o enlaces maliciosos.',
      'Gastos impulsivos en suscripciones, Bits o donaciones si hay tarjeta vinculada.',
      'Menores que emiten en directo mostrando su habitación, uniforme escolar o datos identificativos.'
    ],
    parentalTool: 'Sin panel parental remoto específico: requiere activar filtros de chat, bloquear "Susurros" (mensajes privados) de desconocidos y exigir PIN/autorización en métodos de pago.',
    guideUrl: 'https://www.incibe.es/menores/familias/control-parental'
  },
  {
    id: 'roblox',
    name: 'Roblox',
    category: 'gaming',
    minAge: 'Multiedad (experiencias clasificadas por madurez)',
    riskLevel: 'medio-alto',
    usage: 'Plataforma de creación y juego multijugador con mundos virtuales e interacción por chat.',
    risks: [
      'Contacto con desconocidos en el chat de juego que luego intentan llevar la conversación a Discord o WhatsApp.',
      'Estafas de "Robux gratis" que buscan robar la cuenta o datos bancarios de los padres.',
      'Acceso a experiencias no acordes a su edad si no se limita la clasificación de contenido.'
    ],
    parentalTool: 'Cuenta de Padres vinculada (Parent Account): permite restringir o desactivar el chat, fijar nivel de madurez de experiencias y establecer límites mensuales de gasto.',
    guideUrl: 'https://about.roblox.com/parental-controls'
  },
  {
    id: 'ngl-tellonym',
    name: 'NGL y Tellonym',
    category: 'menos-conocidas',
    minAge: '13-17+ según plataforma y tienda',
    riskLevel: 'alto',
    usage: 'Aplicaciones de preguntas y mensajes anónimos que se enlazan en las Historias de Instagram o Snapchat.',
    risks: [
      'El anonimato desinhibe insultos, humillaciones y ciberacoso grupal entre compañeros.',
      'Los menores pagan micropagos por "pistas" para saber quién escribió el mensaje.',
      'Puerta de entrada a contactos extraños que escriben de forma anónima.'
    ],
    parentalTool: 'No disponen de supervisión parental eficaz. Conviene explicar cómo funciona el anonimato y revisar las aplicaciones instaladas y enlaces en biografía/historias.'
  },
  {
    id: 'character-ai',
    name: 'Character.AI y bots conversacionales',
    category: 'menos-conocidas',
    minAge: '13+ / 16+ según región y términos',
    riskLevel: 'alto',
    usage: 'Plataformas para conversar con personajes creados con inteligencia artificial (ficticios, famosos o "amigos virtuales").',
    risks: [
      'Dependencia emocional: el bot responde 24/7 simulando empatía y disponibilidad absoluta.',
      'Consejos erróneos o inapropiados ante problemas personales o emocionales.',
      'Falta de privacidad: todo lo que el menor escribe queda registrado en servidores externos.'
    ],
    parentalTool: 'Supervisión del tiempo de pantalla desde Family Link / Tiempo de uso y acompañamiento activo para diferenciar una herramienta de IA de una relación humana real.'
  },
  {
    id: 'bereal',
    name: 'BeReal',
    category: 'menos-conocidas',
    minAge: '13+ años',
    riskLevel: 'medio',
    usage: 'Publicar una foto simultánea con cámara frontal y trasera en un margen de 2 minutos al recibir la notificación diaria.',
    risks: [
      'Al hacerse en el momento exacto de la alerta, puede revelar el aula, el domicilio, la matrícula del coche o la ubicación si está activa.',
      'Presión por responder rápido incluso durante horario escolar o de estudio.'
    ],
    parentalTool: 'Revisar que la ubicación esté desactivada en cada publicación y mantener el perfil limitado únicamente a amigos añadidos reales.'
  },
  {
    id: 'vault-apps',
    name: 'Apps bóveda / Calculadoras falsas',
    category: 'menos-conocidas',
    minAge: 'No recomendadas para menores',
    riskLevel: 'alto',
    usage: 'Apps disfrazadas de calculadora, reloj o bloc de notas (p. ej., Calculator Vault) que al teclear un PIN abren una galería o navegador oculto.',
    risks: [
      'Se utilizan para ocultar fotografías, vídeos o aplicaciones a los padres o al control parental.',
      'Muchas apps gratuitas de este tipo muestran publicidad agresiva o recopilan archivos privados sin garantías de seguridad.'
    ],
    parentalTool: 'En Family Link y Tiempo de uso se puede activar la aprobación de descargas de nuevas apps, detectando si aparecen dos calculadoras o apps recién instaladas sin motivo.'
  }
];

const HIDDEN_MECHANICS = [
  {
    title: 'Cuentas secundarias ("Finsta" o cuentas B)',
    description: 'Es habitual que tengan un perfil "blanco" que siguen sus familiares y una o varias cuentas secundarias con apodos irreconocibles para su círculo íntimo o para seguir cuentas sin control.',
    tip: 'Pactar transparencia sobre qué cuentas existen y entender por qué sienten necesidad de ocultarlas.'
  },
  {
    title: 'Chats bloqueados, archivados y mensajes efímeros',
    description: 'WhatsApp permite bloquear chats con código secreto/huella y enviar fotos de visualización única. Telegram permite carpetas ocultas y chats secretos con autodestrucción.',
    tip: 'El control técnico no lee lo borrado; la clave está en los horarios, el descanso nocturno y la confianza.'
  },
  {
    title: 'Grupos masivos y canales sin filtro',
    description: 'Tanto en WhatsApp (Comunidades) como en Telegram o Discord, un enlace de invitación basta para entrar en grupos con cientos de desconocidos.',
    tip: 'Configurar siempre quién puede añadir al menor a grupos ("Mis contactos") y revisar servidores de Discord.'
  }
];

const RISKS_DATA = [
  {
    id: 'grooming',
    category: 'relacionales',
    severity: 'alto',
    title: 'Contacto con desconocidos y Grooming',
    subtitle: 'Engaño pederasta en línea',
    summary: 'Un adulto se gana la confianza de un menor (a menudo haciéndose pasar por otro joven) con el fin último de obtener material íntimo o concertar un encuentro.',
    howItWorks: [
      'Fase 1 (Amistad): contacto por videojuego o red social, halagos y escucha.',
      'Fase 2 (Aislamiento): traslada la charla a un canal privado (WhatsApp, Telegram, Discord) y pide secreto.',
      'Fase 3 (Componente sexual y chantaje): solicita una primera imagen y luego amenaza con difundirla si no envía más.'
    ],
    prevention: 'Cuentas privadas, desactivar chats con desconocidos en juegos y explicar que "nadie en internet es necesariamente quien dice ser".'
  },
  {
    id: 'sexting-sextorsion',
    category: 'relacionales',
    severity: 'alto',
    title: 'Sexting, difusión íntima y Sextorsión',
    subtitle: 'Pérdida de control de la imagen',
    summary: 'Envío voluntario de imágenes íntimas (sexting) que luego se reenvían sin consentimiento o se usan para extorsionar económicamente o exigir más material (sextorsión).',
    howItWorks: [
      'Una vez enviada la foto, se pierde el control aunque sea "temporal" o de "una sola visualización".',
      'En sextorsión financiera, perfiles falsos seducen al adolescente y amenazan con enviar capturas a su lista de seguidores de Instagram en minutos.'
    ],
    prevention: 'Si ocurre sextorsión: NO pagar ni ceder nunca, no borrar pruebas, bloquear y denunciar + usar Take It Down (NCMEC) y Canal Prioritario AEPD.'
  },
  {
    id: 'ciberacoso',
    category: 'relacionales',
    severity: 'alto',
    title: 'Ciberacoso (Ciberbullying) y humillaciones',
    subtitle: 'Acoso entre iguales 24/7',
    summary: 'Insultos repetidos, exclusión de grupos de clase, creación de cuentas para ridiculizar, stickers ofensivos o difusión de imágenes comprometedoras sin permiso.',
    howItWorks: [
      'A diferencia del acoso físico, entra en casa a través del móvil a cualquier hora y tiene audiencia potencial masiva.',
      'Los observadores que reenvían o se ríen de un meme ofensivo también amplifican el daño y pueden incurrir en responsabilidad.'
    ],
    prevention: 'Guardar capturas completas, activar el protocolo escolar de acoso si hay compañeros implicados y contactar con INCIBE (017) o ANAR.'
  },
  {
    id: 'retos-virales',
    category: 'contenidos',
    severity: 'medio',
    title: 'Retos virales y contenidos peligrosos',
    subtitle: 'Presión de grupo y algoritmos',
    summary: 'Desafíos que incitan a autolesiones, asfixia, consumo de fármacos o conductas temerarias para conseguir visitas o validación en TikTok/YouTube.',
    howItWorks: [
      'Los algoritmos refuerzan contenidos similares si el menor se detiene unos segundos a verlos.',
      'También incluye exposición temprana a violencia extrema o pornografía (edad media de primer acceso en España según estudios citados por UNICEF: 11,5 años).'
    ],
    prevention: 'Activar Modo Restringido / filtros de contenido, supervisar el historial de visualización y fomentar el pensamiento crítico.'
  },
  {
    id: 'estafas-robo',
    category: 'tecnicos',
    severity: 'medio',
    title: 'Estafas, suplantación de identidad y robo de cuentas',
    subtitle: 'Phishing, smishing y códigos robados',
    summary: 'Mensajes engañosos que prometen premios, monedas de videojuegos o avisan de un supuesto bloqueo de cuenta para robar contraseñas o códigos de verificación.',
    howItWorks: [
      'Robo de WhatsApp: un conocido (con la cuenta ya hackeada) pide "un código de 6 dígitos que te acaba de llegar por error".',
      'Suplantación de identidad: creación de perfiles falsos con el nombre y foto del menor para estafar o insultar a terceros.'
    ],
    prevention: 'Verificación en dos pasos (2FA) obligatoria en todas las cuentas, regla de oro: nunca compartir códigos SMS con nadie, y comprobar mensajes dudosos en el Chatbot de Maldita.es (+34 644 229 319).'
  },
  {
    id: 'quishing-qr',
    category: 'tecnicos',
    severity: 'medio',
    title: 'Quishing: estafas mediante códigos QR manipulados',
    subtitle: 'Enlaces ocultos a simple vista',
    summary: 'Uso de códigos QR falsos (pegatinas superpuestas en carteles, cartas o correos) para dirigir a páginas fraudulentas o descargas maliciosas.',
    howItWorks: [
      'El ojo humano no puede leer un código QR: dos QR idénticos en apariencia pueden llevar a webs totalmente distintas.',
      'Si la cámara o app abre el enlace automáticamente sin mostrar el dominio previo, el usuario entra directo en la trampa.'
    ],
    prevention: 'Usar lectores/cámaras que muestren la vista previa de la URL antes de abrirla, comprobar siempre el dominio exacto y consultar posibles fraudes en Maldito Timo (maldita.es/timo).'
  },
  {
    id: 'videojuegos',
    category: 'contenidos',
    severity: 'medio',
    title: 'Contactos y riesgos en videojuegos',
    subtitle: 'Roblox, Fortnite, Minecraft y chat de voz',
    summary: 'Las partidas online combinan chat de texto/voz en tiempo real con desconocidos, sistemas de recompensas aleatorias (cajas de botín) y comercio de objetos virtuales.',
    howItWorks: [
      'Adultos se ganan la confianza regalando skins, pases de batalla o monedas del juego.',
      'Estafas externas con generadores falsos de Robux/paVos que instalan malware o roban credenciales.'
    ],
    prevention: 'Limitar el chat a "Solo amigos", jugar en zonas comunes de la casa y exigir contraseña para cualquier compra.'
  },
  {
    id: 'deepfakes-ia',
    category: 'ia',
    severity: 'alto',
    title: 'Deepfakes y manipulación de fotos de menores con IA',
    subtitle: 'Violencia digital mediante IA generativa',
    summary: 'Aplicaciones y bots de IA que generan desnudos falsos o montajes de vídeo/voz (deepvoice) usando fotografías cotidianas extraídas de redes sociales o grupos escolares.',
    howItWorks: [
      'Basta una foto normal con ropa de Instagram, TikTok o WhatsApp para generar una imagen manipulada hiperrealista.',
      'Aunque la imagen sea sintética, su creación y difusión constituye un grave ataque contra la intimidad y el honor (y puede ser delito y acarrear sanciones de la AEPD y responsabilidad civil para los padres).'
    ],
    prevention: 'Perfiles privados, no subir fotos de menores en abierto y actuar de inmediato ante cualquier difusión con Canal Prioritario AEPD y Policía/Guardia Civil.'
  },
  {
    id: 'chatbots-ia',
    category: 'ia',
    severity: 'medio-alto',
    title: 'Chatbots y relaciones emocionales con la IA',
    subtitle: 'Falsa empatía y cesión de datos',
    summary: 'Adolescentes que confían problemas íntimos, ansiedad o decisiones personales a chatbots de compañía o asistentes de IA.',
    howItWorks: [
      'Simulan afecto y nunca ponen límites, desplazando amistades reales o generando dependencia emocional.',
      'No tienen criterio clínico ni confidencialidad garantizada: las conversaciones pueden almacenarse o usarse para entrenar modelos.'
    ],
    prevention: 'Desactivar en ajustes la opción de usar chats para entrenar modelos, explicar que la IA "predice texto, no siente" y ofrecer escucha humana.'
  },
  {
    id: 'exposicion-datos',
    category: 'ia',
    severity: 'medio',
    title: 'Exposición de datos, huella digital y Sharenting',
    subtitle: 'Lo que contamos nosotros y ellos',
    summary: 'Publicar fotos, cumpleaños, ubicación, escudo del colegio o rutinas diarias de los hijos desde pequeños (sharenting), creando una huella digital permanente.',
    howItWorks: [
      'Las fotos y vídeos revelan mucho más de lo aparente: calle, horario de salida, centro escolar y círculo familiar.',
      'Como advierte la campaña «Pause before you post», esa exposición facilita el robo de identidad, el grooming o la manipulación con IA.'
    ],
    prevention: 'Pausar antes de publicar: no subir fotos de menores en cuentas abiertas, revisar fondos/uniformes y dar ejemplo como padres.'
  }
];

const CONFIG_TABS = [
  {
    id: 'redes-privacidad',
    label: '1. Privacidad en redes',
    intro: 'Configuración mínima imprescindible antes de usar cualquier red social.',
    items: [
      { id: 'cfg-priv-1', title: 'Perfil privado por defecto en Instagram, TikTok y BeReal', detail: 'Evita que desconocidos vean publicaciones, seguidores o comenten.' },
      { id: 'cfg-priv-2', title: 'Mensajes directos solo de amigos/contactos mutuos', detail: 'Bloquea solicitudes de mensaje de desconocidos en Instagram, TikTok y Discord.' },
      { id: 'cfg-priv-3', title: 'Restringir quién puede añadirte a grupos en WhatsApp y Telegram', detail: 'En WhatsApp: Ajustes > Privacidad > Grupos > "Mis contactos" (o "Mis contactos, excepto...").' },
      { id: 'cfg-priv-4', title: 'Ocultar número de teléfono en Telegram', detail: 'Ajustes > Privacidad y seguridad > Número de teléfono > "Nadie" y desactivar búsqueda por número.' },
      { id: 'cfg-priv-5', title: 'Activar filtros de contenido sensible y Modo Restringido', detail: 'En Instagram (Cuentas de Adolescentes), TikTok (Sincronización Familiar) y YouTube.' }
    ]
  },
  {
    id: 'permisos-ubicacion',
    label: '2. Permisos y ubicación',
    intro: 'Revisar qué sensores y datos puede leer cada aplicación en Android e iPhone.',
    items: [
      { id: 'cfg-perm-1', title: 'Ubicación: "Solo al usar la app" o "Nunca" en redes sociales', detail: 'TikTok, Instagram, WhatsApp o juegos no necesitan ubicación "Siempre".' },
      { id: 'cfg-perm-2', title: 'Activar "Modo Fantasma" en Snapchat (Snap Map)', detail: 'Impide que otros usuarios vean el punto exacto donde se encuentra el menor en el mapa.' },
      { id: 'cfg-perm-3', title: 'Revisar acceso a Cámara, Micrófono y Contactos', detail: 'Revocar micrófono/cámara a juegos o apps que no los necesiten y evitar subir la agenda de contactos.' },
      { id: 'cfg-perm-4', title: 'Desactivar "Ubicación en tiempo real" salvo acuerdo familiar puntual', detail: 'Educar sobre el riesgo de compartir ubicaciones en chats grupales o estados.' }
    ]
  },
  {
    id: 'cuentas-2fa',
    label: '3. Contraseñas y 2FA',
    intro: 'El 80 % de los robos de cuenta a menores se evitan con una clave única y verificación en dos pasos.',
    items: [
      { id: 'cfg-2fa-1', title: 'Contraseñas largas y únicas (frases clave de 12+ caracteres)', detail: 'Nunca usar la fecha de nacimiento, el nombre de la mascota ni repetir la misma clave en el correo y en redes.' },
      { id: 'cfg-2fa-2', title: 'PIN de verificación en dos pasos en WhatsApp', detail: 'Ajustes > Cuenta > Verificación en dos pasos. Impide que roben el WhatsApp aunque obtengan el SMS.' },
      { id: 'cfg-2fa-3', title: 'Autenticación en dos factores (2FA) en Instagram, TikTok, Discord y Roblox', detail: 'Preferiblemente con app autenticadora (Google Authenticator / Authy) o código SMS protegido.' },
      { id: 'cfg-2fa-4', title: 'Proteger el correo principal de recuperación (Google / Apple ID)', detail: 'Si alguien entra en el correo vinculado, puede restablecer todas las demás redes sociales.' }
    ]
  },
  {
    id: 'control-parental',
    label: '4. Family Link / Tiempo de uso',
    intro: 'Herramientas nativas gratuitas para gestionar tiempo, descargas y descanso nocturno.',
    items: [
      { id: 'cfg-cp-1', title: 'Android: Configurar Google Family Link', detail: 'Permite aprobar descargas de Google Play, fijar límite diario de uso, "Hora de dormir", ubicación del dispositivo y bloquear apps concretas.' },
      { id: 'cfg-cp-2', title: 'iPhone/iPad: Configurar "En Familia" y Tiempo de uso', detail: 'Importante: Google Family Link NO controla un iPhone del menor; en iOS debe usarse "Tiempo de uso" con código parental distinto al de desbloqueo.' },
      { id: 'cfg-cp-3', title: 'Programar descanso nocturno y sacar el móvil del dormitorio', detail: 'Silenciar y bloquear apps desde 1 hora antes de dormir; cargar los móviles en el salón por la noche.' },
      { id: 'cfg-cp-4', title: 'Desactivar compras integradas sin contraseña adulta', detail: 'Evita cargos accidentales o gastos impulsivos en Roblox, Fortnite o TikTok.' }
    ]
  }
];

const WARNING_SIGNS = [
  {
    id: 'sig-1',
    group: 'Dispositivo y hábitos',
    text: 'Oculta la pantalla bruscamente, cambia de pestaña o apaga el móvil cuando entras en la habitación.'
  },
  {
    id: 'sig-2',
    group: 'Dispositivo y hábitos',
    text: 'Se conecta a escondidas de madrugada o muestra fatiga extrema e irritabilidad por falta de sueño.'
  },
  {
    id: 'sig-3',
    group: 'Dispositivo y hábitos',
    text: 'Aparecen aplicaciones desconocidas, cuentas secundarias nuevas o rechaza usar el móvil en zonas comunes.'
  },
  {
    id: 'sig-4',
    group: 'Emocional y conductual',
    text: 'Muestra ansiedad, miedo, rabia o llanto justo después de recibir una notificación o mirar el teléfono.'
  },
  {
    id: 'sig-5',
    group: 'Emocional y conductual',
    text: 'Aislamiento repentino, pérdida de interés por actividades que antes disfrutaba o bajada brusca del rendimiento escolar.'
  },
  {
    id: 'sig-6',
    group: 'Social y económico',
    text: 'Menciona nuevos "amigos" mayores o lejanos de internet, o recibe regalos virtuales/dinero sin explicación.'
  },
  {
    id: 'sig-7',
    group: 'Social y económico',
    text: 'Evita ir al colegio o a actividades extraescolares con excusas físicas frecuentes (dolor de cabeza o estómago).'
  },
  {
    id: 'sig-8',
    group: 'Social y económico',
    text: 'Solicita dinero de forma urgente y secreta o pregunta cómo eliminar fotos de internet.'
  }
];

const ACTION_PROTOCOL = [
  {
    step: '1. Calma y acogida (Sin culpabilizar)',
    detail: 'Lo primero es escuchar sin gritar ni quitarle el móvil como castigo automático: si siente miedo a perder el teléfono o a una reprimenda, ocultará el problema y el agresor ganará poder.'
  },
  {
    step: '2. NO ceder ni pagar jamás',
    detail: 'En casos de sextorsión o amenazas, pagar o enviar otra imagen nunca detiene el chantaje; al contrario, demuestra que la víctima cede y multiplica las exigencias.'
  },
  {
    step: '3. Conservar pruebas ANTES de bloquear o borrar',
    detail: 'No borrar los chats ni las cuentas de inmediato. Hacer capturas de pantalla donde se vea el perfil completo, URL o número de teléfono, fecha, hora y mensajes íntegros.'
  },
  {
    step: '4. Cortar contacto y reportar en la plataforma',
    detail: 'Una vez guardadas las evidencias, bloquear al acosador, cambiar contraseñas/privacidad y usar el botón de denuncia interna de la red social o videojuego.'
  },
  {
    step: '5. Retirada de imágenes y denuncia oficial',
    detail: 'Si hay imágenes íntimas/violentas difundidas sin permiso: solicitar retirada urgente en el Canal Prioritario de la AEPD, generar hash en Take It Down (si es menor) y denunciar ante Policía Nacional (091) o Guardia Civil (062).'
  }
];

const VIDEOS_DATA = [
  {
    id: 'rzh6bvNaxWQ',
    title: 'Internet Segura for Kids (IS4K) - Centro de Seguridad en Internet para menores',
    channel: 'INCIBE',
    category: 'familias',
    duration: 'Institucional',
    note: 'Presentación oficial del portal de referencia para familias, menores y educadores en España.'
  },
  {
    id: 'r2vQ29d5oZs',
    title: '¿Qué es la mediación parental? | #AprendeCiberseguridad con INCIBE',
    channel: 'INCIBE',
    category: 'familias',
    duration: 'Píldora formativa',
    note: 'Cómo acompañar y educar sin caer ni en la prohibición total ni en la falta de límites.'
  },
  {
    id: 'Ue2Mq3GnvPM',
    title: 'Mediación parental para proteger a los menores en Internet - IS4K',
    channel: 'Internet Segura for Kids',
    category: 'familias',
    duration: 'Guía familias',
    note: 'Estrategias prácticas de diálogo, normas y supervisión adaptadas por edades.'
  },
  {
    id: 'uEyML5tEs3E',
    title: '¿Tu hijo usa pantallas? Guía de Ciberseguridad para familias con María Aperador',
    channel: 'Malasmadres',
    category: 'familias',
    duration: 'Entrevista práctica',
    note: 'Conversación clara sobre riesgos cotidianos, señales de alerta y prevención en casa.'
  },
  {
    id: 'WqBl2zyXI7g',
    title: 'Campaña UNICEF sobre redes sociales',
    channel: 'EL PAÍS',
    category: 'familias',
    duration: 'Campaña UNICEF',
    note: 'Uso responsable de las redes y protección de menores.'
  },
  {
    id: 'UrrQaeUKcas',
    title: '¿Cuántos amigos de verdad tienes?',
    channel: 'CULTURA NOVA Bienvenidos',
    category: 'familias',
    duration: 'Reflexión educativa',
    note: 'Diferencia entre contactos virtuales y relaciones reales de confianza.'
  },
  {
    id: 'Pa2ttVRA-xU',
    title: 'Internet Grooming: ciberacoso sexual a niños/as y adolescentes y su prevención',
    channel: 'PantallasAmigas',
    category: 'grooming-acoso',
    duration: 'Animación educativa',
    note: 'Recurso visual excelente para proyectar en charla y explicar cómo actúa el groomer.'
  },
  {
    id: 'xvBB_MqkRgA',
    title: 'Ciber Grooming en Internet',
    channel: 'PantallasAmigas',
    category: 'grooming-acoso',
    duration: 'Corto de concienciación',
    note: 'Ideal para trabajar con preadolescentes y padres sobre perfiles falsos.'
  },
  {
    id: 'zrcue7gHLLg',
    title: 'Que no te líen - Grooming: cómo proteger a tus hijos en Internet | La tirita digital',
    channel: 'RTVE Play',
    category: 'grooming-acoso',
    duration: 'Reportaje',
    note: 'Explicación accesible sobre señales de captación y pautas de prevención familiar.'
  },
  {
    id: 'fcVyk8XzUiw',
    title: 'Planta cara al ciberacoso - IS4K',
    channel: 'Internet Segura for Kids',
    category: 'grooming-acoso',
    duration: 'Campaña IS4K',
    note: 'Cómo identificar el ciberbullying y activar el papel activo de testigos y familias.'
  },
  {
    id: 'eaItVLst-oM',
    title: 'Decálogo por la ciberconvivencia positiva y contra el ciberbullying',
    channel: 'PantallasAmigas',
    category: 'grooming-acoso',
    duration: 'Decálogo visual',
    note: 'Diez reglas claras de respeto digital para debatir en talleres familiares.'
  },
  {
    id: 'nfxan9p8sDI',
    title: 'Discurso del odio: tu otra cara en redes sociales',
    channel: 'Orange España',
    category: 'grooming-acoso',
    duration: 'Campaña concienciación',
    note: 'Respeto en línea, comentarios dañinos y responsabilidad al publicar.'
  },
  {
    id: 'i_92-NovRT0',
    title: 'Los peligros de internet para los niños: grooming',
    channel: 'Central Informativa TV',
    category: 'grooming-acoso',
    duration: 'Prevención grooming',
    note: 'Cómo alguien puede ganarse la confianza de un menor con fines de abuso o explotación.'
  },
  {
    id: 'Hhi1M6lnnXI',
    title: 'Cita a ciegas: el engaño en las redes sociales',
    channel: 'Red Magisterial',
    category: 'grooming-acoso',
    duration: 'Prevención engaños',
    note: 'Identidades falsas, engaños y precauciones al conocer gente en internet.'
  },
  {
    id: '3SUCAD3hdgs',
    title: '¿Qué es el sexting? | #AprendeCiberseguridad con INCIBE',
    channel: 'INCIBE',
    category: 'sexting-privacidad',
    duration: 'Píldora INCIBE',
    note: 'Definición clara de riesgos y consecuencias de compartir imágenes íntimas.'
  },
  {
    id: 'Hy9UuNNQZzk',
    title: '¿SEXTING? Piénsalo: existe riesgo de ciberbullying si la imagen se hace pública (10/10)',
    channel: 'PantallasAmigas',
    category: 'sexting-privacidad',
    duration: 'Serie educativa',
    note: 'Explica la conexión directa entre difusión no consentida y acoso posterior.'
  },
  {
    id: 'Ug4A9tG-4wg',
    title: '¿SEXTING? Piénsalo: Internet es rápida y potente (8/10)',
    channel: 'PantallasAmigas',
    category: 'sexting-privacidad',
    duration: 'Serie educativa',
    note: 'Por qué una imagen enviada deja de estar bajo control en segundos.'
  },
  {
    id: 'qkDvoSqNkxc',
    title: 'Cuidado de la imagen y la privacidad en celulares y redes sociales',
    channel: 'PantallasAmigas',
    category: 'sexting-privacidad',
    duration: 'Animación',
    note: 'Buenas prácticas de huella digital y gestión de fotografías.'
  },
  {
    id: 'MXf-YGQr6jI',
    title: '¿Tienes privacidad de verdad en las redes sociales?',
    channel: 'PantallasAmigas',
    category: 'sexting-privacidad',
    duration: 'Animación',
    note: 'Reflexión sobre perfiles públicos, metadatos y copias de terceros.'
  },
  {
    id: 'H64je_zMZu4',
    title: 'Protección del menor en Internet',
    channel: 'Agencia Española de Protección de Datos',
    category: 'sexting-privacidad',
    duration: 'Institucional AEPD',
    note: 'Derechos digitales de los menores, privacidad y protección de datos.'
  },
  {
    id: '_3pEkTmNPDE',
    title: 'Irlanda lanza una campaña sobre los peligros del Sharenting («Pause before you post»)',
    channel: 'EL PAÍS',
    category: 'sexting-privacidad',
    duration: 'Campaña concienciación',
    note: 'Impacto de que los propios padres compartan fotos y datos cotidianos de sus hijos en redes.'
  },
  {
    id: '4ZMVoDXIVuo',
    title: 'Tu vida en las redes sociales tiene público',
    channel: 'Pablo Castro Aballay',
    category: 'sexting-privacidad',
    duration: 'Concienciación',
    note: 'Privacidad, huella digital y alcance real de lo que compartimos.'
  },
  {
    id: '6Lxse84Bd7M',
    title: '«Me gusta» no es lo mismo que «me gustas»',
    channel: 'Orange España',
    category: 'sexting-privacidad',
    duration: 'Campaña consentimiento',
    note: 'Consentimiento, límites personales e interacciones digitales.'
  },
  {
    id: '24YcUO-Fpqc',
    title: 'Spot sobre sexting',
    channel: 'Manda Productora',
    category: 'sexting-privacidad',
    duration: 'Spot concienciación',
    note: 'Riesgos de compartir imágenes íntimas y la importancia del consentimiento.'
  },
  {
    id: 'MPlig5ZPMhw',
    title: 'Por esto no debes compartir fotos de tus hijos. PELIGRO REAL',
    channel: 'DFV Privacidad',
    category: 'ia-deepfakes',
    duration: 'Divulgación',
    note: 'Riesgos del sharenting y cómo una foto pública puede ser manipulada.'
  },
  {
    id: 'veCL1vsfYNk',
    title: 'EN PORTADA | PORNO IA y MENORES',
    channel: 'RTVE Noticias',
    category: 'ia-deepfakes',
    duration: 'Documental / Reportaje',
    note: 'Análisis en profundidad sobre deepfakes y violencia digital con IA hacia menores.'
  },
  {
    id: 'DdM5pqCAYa4',
    title: 'Sanciones a menores que difundieron fotos falsas generadas con IA',
    channel: 'RTVE Noticias',
    category: 'ia-deepfakes',
    duration: 'Informativo',
    note: 'Consecuencias legales y económicas reales para menores y familias en España.'
  },
  {
    id: 'BPrs40PgaME',
    title: 'Marco legal frente al contenido sexual de menores creado con IA y el grooming',
    channel: 'Europa Press',
    category: 'ia-deepfakes',
    duration: 'Actualidad legal',
    note: 'Respuesta normativa ante montajes con inteligencia artificial y captación online.'
  },
  {
    id: '37BzyZ98Ee0',
    title: 'Cómo Usar Google Family Link (Guía actualizada)',
    channel: 'TutoTec Español!',
    category: 'tutoriales',
    duration: 'Tutorial paso a paso',
    note: 'Instalación y configuración completa en Android desde el móvil de los padres.'
  },
  {
    id: 'Nv_KVz_ecrk',
    title: 'Tutorial: Configurar TIEMPO DE USO de "En Familia" de Apple',
    channel: 'Juan González Pérez',
    category: 'tutoriales',
    duration: 'Tutorial iPhone/iPad',
    note: 'Paso a paso para activar restricciones, horarios y aprobación de compras en iOS.'
  },
  {
    id: 'H5QjdpkGax8',
    title: 'Control parental en TIKTOK (cómo hacerlo más seguro)',
    channel: 'ChicaGeek',
    category: 'tutoriales',
    duration: 'Tutorial TikTok',
    note: 'Activación práctica de Sincronización Familiar y ajustes de privacidad.'
  },
  {
    id: 'jHA9g-s_tc4',
    title: 'Tutorial Control Parental Discord',
    channel: 'A Favor de lo Mejor',
    category: 'tutoriales',
    duration: 'Tutorial Discord',
    note: 'Configuración de Centro Familiar y bloqueo de mensajes de desconocidos.'
  },
  {
    id: 'kwATKy_AQhM',
    title: 'Cómo Activar el Control Parental en Roblox | Tutorial FAMILIAS',
    channel: 'Fundación Senara',
    category: 'tutoriales',
    duration: 'Tutorial Roblox',
    note: 'Cómo limitar el chat, las experiencias por edad y los pagos.'
  },
  {
    id: 'wcVCaC5b3do',
    title: 'Verificación en dos pasos: la segunda llave',
    channel: 'Ciber sin Jerga',
    category: 'estafas-2fa',
    duration: 'Explicación visual',
    note: 'Por qué una contraseña sola ya no basta y cómo funciona el segundo factor.'
  },
  {
    id: 'lsQO5k_AQaw',
    title: 'Así te roban el WhatsApp con un código (y cómo blindarlo en 5 minutos)',
    channel: 'Ojo Estafa',
    category: 'estafas-2fa',
    duration: 'Prevención práctica',
    note: 'Demostración del timo del código de 6 dígitos y activación del PIN.'
  },
  {
    id: 'K64OX8qNFIw',
    title: 'Maldita.es lanza el primer chatbot de Whatsapp en español para verificar bulos automáticamente',
    channel: 'Maldita.es',
    category: 'estafas-2fa',
    duration: 'Herramienta útil',
    note: 'Cómo usar el WhatsApp de Maldita.es (+34 644 229 319) para comprobar cadenas y timos.'
  },
  {
    id: 'fy_V2OETc90',
    title: '3 estafas que circulan por WhatsApp y SMS (y ajustes para blindarte)',
    channel: 'Don Disquete',
    category: 'estafas-2fa',
    duration: 'Prevención práctica',
    note: 'Ejemplos reales de smishing y enlaces falsos para comentar en familia.'
  }
];

const CRISIS_SCENARIOS = [
  {
    id: 'sc-1',
    title: 'Escenario 1: Chantaje tras compartir una fotografía',
    prompt: 'Tu hijo de 13 años te confiesa entre lágrimas que conoció a alguien por Instagram hace dos semanas, le envió una foto comprometida y ahora esa persona exige 150 € en tarjetas regalo o enviará la foto a todos sus seguidores del instituto.',
    options: [
      {
        text: 'Pagar los 150 € rápido para que borre la foto y quitarle el móvil un mes como castigo.',
        correct: false,
        feedback: 'Incorrecto. Pagar nunca garantiza el borrado; casi siempre piden más dinero al ver que cedes. Castigar retirando el móvil rompe la confianza y hará que la próxima vez no pida ayuda.'
      },
      {
        text: 'Tranquilizarle sin juzgar, hacer capturas de perfil/URL/chats sin borrar nada, NO pagar, bloquear al extorsionador, usar Take It Down (NCMEC) y llamar al 017 / denunciar en Policía o Guardia Civil.',
        correct: true,
        feedback: '¡Correcto! Esa es la pauta oficial de INCIBE y Fuerzas de Seguridad: contención emocional primero, preservación de pruebas antes de bloquear, cero pagos y activación de canales de retirada y denuncia.'
      },
      {
        text: 'Borrar la cuenta de Instagram inmediatamente antes de hacer capturas para que no quede rastro.',
        correct: false,
        feedback: 'Error frecuente: si borras la cuenta o el chat antes de capturar el ID/URL del perfil y los mensajes, dificultas la investigación policial y la retirada.'
      }
    ]
  },
  {
    id: 'sc-2',
    title: 'Escenario 2: Deepfake creado con una foto normal del colegio',
    prompt: 'En un grupo de WhatsApp de 1º de ESO está circulando una imagen manipulada con IA (falso desnudo) creada a partir de una foto normal de una compañera sacada de Instagram.',
    options: [
      {
        text: 'No hacer nada porque "es falsa y solo es una broma de chavales".',
        correct: false,
        feedback: 'Incorrecto. La AEPD y la jurisprudencia en España recuerdan que generar o reenviar estos montajes vulnera gravemente la intimidad del menor y conlleva sanciones económicas y responsabilidad penal/civil.'
      },
      {
        text: 'Reenviarla a otros padres por WhatsApp para avisarles de lo que está pasando.',
        correct: false,
        feedback: 'Muy grave: reenviar la imagen —incluso para "avisar"— multiplica la victimización y constituye un nuevo acto ilícito de difusión.'
      },
      {
        text: 'No reenviarla jamás, conservar evidencias del grupo/remitente, avisar a la familia afectada y dirección del centro, solicitar retirada urgente en el Canal Prioritario de la AEPD y denunciar.',
        correct: true,
        feedback: '¡Correcto! Frenar la cadena de reenvíos, apoyar a la víctima, preservar las pruebas del remitente y acudir a AEPD Canal Prioritario + Policía/Guardia Civil es la vía adecuada.'
      }
    ]
  },
  {
    id: 'sc-3',
    title: 'Escenario 3: Amistad sospechosa en Roblox y salto a Discord',
    prompt: 'Descubres que un jugador desconocido en Roblox regala objetos virtuales a tu hijo de 11 años y le pide añadirse a un servidor privado de Discord "para hablar por voz sin que tus padres molesten".',
    options: [
      {
        text: 'Es un patrón clásico de aislamiento (grooming). Revisar el historial sin alarmar, cortar el salto a plataformas privadas, limitar el chat de Roblox a "Solo amigos" y explicar cómo operan estos engaños.',
        correct: true,
        feedback: '¡Correcto! El salto de un juego público a un chat privado con petición de secreto y regalos virtuales es la señal típica de captación.'
      },
      {
        text: 'Permitirlo siempre que no quede en persona con él.',
        correct: false,
        feedback: 'Incorrecto. El grooming no necesita encuentro físico para causar daño grave ni para obtener material o datos personales.'
      }
    ]
  },
  {
    id: 'sc-4',
    title: 'Escenario 4: Robo de WhatsApp por código de 6 dígitos',
    prompt: 'Un compañero de clase escribe por WhatsApp diciendo: "Oye, me he equivocado de número y te ha llegado un SMS con un código de 6 dígitos, pásamelo porfa".',
    options: [
      {
        text: 'Reenviarle el código porque es un amigo de confianza.',
        correct: false,
        feedback: '¡Trampa! Probablemente la cuenta de ese amigo ya fue robada. Ese código es el acceso a TU cuenta de WhatsApp.'
      },
      {
        text: 'No enviarlo nunca, verificar por llamada de voz real con el amigo si le han robado la cuenta y activar la Verificación en dos pasos en WhatsApp.',
        correct: true,
        feedback: '¡Correcto! Nunca se comparte un código recibido por SMS; con la verificación en dos pasos activada, además, necesitarían tu PIN personal.'
      }
    ]
  }
];

const RESOURCES_DATA = [
  {
    name: 'INCIBE — Tu Ayuda en Ciberseguridad (017)',
    role: 'Asesoramiento técnico, psicológico y legal gratuito y confidencial',
    contact: 'Teléfono: 017 · WhatsApp: 900 116 117 · Telegram: @INCIBE017',
    schedule: 'Todos los días (365 días/año) de 8:00 a 23:00 h',
    url: 'https://www.incibe.es/linea-de-ayuda-en-ciberseguridad',
    urgent: true
  },
  {
    name: 'AEPD — Canal Prioritario',
    role: 'Retirada urgente de fotografías, vídeos o audios sexuales/violentos difundidos sin consentimiento',
    contact: 'Tramitación urgente online (formulario adaptado si hay menores)',
    schedule: 'Disponible 24/7 en sede electrónica (para webs/redes abiertas; no chats cerrados)',
    url: 'https://www.aepd.es/canalprioritario',
    urgent: true
  },
  {
    name: 'Fundación ANAR',
    role: 'Línea de ayuda psicológica, social y jurídica para menores y familias',
    contact: 'Menores: 900 20 20 10 (o 116 111) · Familias y colegios: 600 50 51 52',
    schedule: '24 horas, todos los días del año, gratuito y confidencial',
    url: 'https://www.anar.org/',
    urgent: true
  },
  {
    name: 'Policía Nacional (UIT / Ciberdelincuencia)',
    role: 'Denuncia de delitos: grooming, sextorsión, amenazas, suplantación y estafas',
    contact: 'Emergencias: 091 / 112 · Denuncia presencial en comisaría (con pruebas)',
    schedule: '24 horas en comisaría y emergencias',
    url: 'https://www.policia.es/_es/denuncias.php',
    urgent: true
  },
  {
    name: 'Guardia Civil (Grupo de Delitos Telemáticos / EMUME)',
    role: 'Investigación tecnológica y atención especializada a menores',
    contact: 'Emergencias: 062 · Atención ciudadana: 900 101 062',
    schedule: '24 horas en puestos y emergencias',
    url: 'https://web.guardiacivil.es/es/tramites/denuncias/denuncia-electronica/',
    urgent: true
  },
  {
    name: 'Take It Down (NCMEC) y StopNCII',
    role: 'Bloqueo preventivo mediante huella digital (hash) sin subir la foto a internet',
    contact: 'Take It Down (menores de 18 años) · StopNCII.org (mayores de 18 años)',
    schedule: 'Herramientas web gratuitas compatibles con Meta, TikTok y plataformas adheridas',
    url: 'https://stopncii.org/?lang=es',
    urgent: false
  },
  {
    name: 'INCIBE / IS4K — Familias y Pactos Digitales',
    role: 'Guías, controles parentales y plantillas de pacto familiar por edades',
    contact: 'Portal oficial de Internet Segura for Kids integrado en INCIBE',
    schedule: 'Recursos gratuitos descargables',
    url: 'https://www.incibe.es/menores/familias',
    urgent: false
  },
  {
    name: 'PantallasAmigas y Empantallados',
    role: 'Animaciones educativas, guías prácticas y escuela de familias digitales',
    contact: 'Material audiovisual para trabajar en casa o en el aula',
    schedule: 'Acceso abierto online',
    url: 'https://www.pantallasamigas.net/',
    urgent: false
  },
  {
    name: 'Maldita.es — Maldito Timo y Chatbot WhatsApp',
    role: 'Verificación de estafas digitales, phishing, cadenas virales y guías de tecnología para familias',
    contact: 'Chatbot WhatsApp: +34 644 229 319 · Sección Maldito Timo y Maldita Tecnología',
    schedule: 'Consulta gratuita 24/7 por WhatsApp y web',
    url: 'https://maldita.es/timo/',
    urgent: false
  }
];

const SPEAKER_TIMELINE = [
  { time: '00 - 10 min', block: 'Apertura y mapa real de uso (Bloque 1)', points: 'Datos UNICEF España (10,8 años primer móvil). Repaso visual de apps que sí conocen vs apps ocultas (NGL, Character.AI, calculadoras bóveda, cuentas B).' },
  { time: '10 - 25 min', block: 'Riesgos clásicos y nuevas amenazas IA (Bloques 2 y 3)', points: 'Fases del grooming (proyectar vídeo PantallasAmigas), sexting/sextorsión, ciberacoso, videojuegos y el salto cualitativo de los deepfakes escolares y chatbots.' },
  { time: '25 - 45 min', block: 'Taller práctico en directo: El móvil en 10 minutos (Bloque 4)', points: 'Sacar el móvil en la sala: revisar permisos de ubicación/cámara, activar PIN 2FA en WhatsApp y enseñar Family Link vs Tiempo de Uso de Apple.' },
  { time: '45 - 60 min', block: 'Señales de alerta, Pacto Familiar y Ruta SOS (Bloques 5, 6 y 7)', points: 'Cómo hablar sin castigar el primer día, conservación de pruebas, 017 de INCIBE, Canal Prioritario AEPD y turno de preguntas.' }
];

const SPEAKER_FAQ = [
  {
    q: '¿A qué edad es recomendable dar el primer teléfono móvil con conexión?',
    a: 'No hay una única edad universal; depende de la madurez del menor y la necesidad real de comunicación. Sin embargo, pediatras, psicólogos e instituciones como INCIBE y UNICEF recomiendan retrasar el smartphone propio con acceso libre a redes todo lo posible (idealmente hacia los 14-16 años para redes sociales, respetando la edad legal de consentimiento de datos en España de 14 años) y empezar con acuerdos progresivos sin acceso nocturno.'
  },
  {
    q: '¿Sirve de algo revisar el móvil a escondidas?',
    a: 'Espiar a escondidas suele destruir la confianza y empuja al adolescente a crear cuentas B, usar apps bóveda o borrar chats. En preadolescentes (10-13 años) se recomienda una supervisión abierta y anunciada ("este móvil es compartido y revisaremos juntos ajustes y descargas"), evolucionando hacia la autonomía responsable con normas claras.'
  },
  {
    q: '¿Puedo usar Google Family Link si mi hijo tiene un iPhone?',
    a: 'No. Como padre puedes gestionar desde un iPhone el Android de tu hijo usando Family Link, pero Apple no permite que apps de terceros bloqueen el sistema iOS al nivel de Family Link. Si el menor usa iPhone o iPad, debes configurar "En Familia" y "Tiempo de uso" nativo de Apple.'
  },
  {
    q: '¿Qué responsabilidad legal tienen los padres si su hijo crea o reenvía un deepfake o acosa por WhatsApp?',
    a: 'En España, la responsabilidad penal juvenil comienza a los 14 años (LORPM), pero la responsabilidad civil (indemnizaciones económicas por daños) recae solidariamente sobre los padres o tutores legales incluso con menores de 14 años, además de posibles sanciones administrativas de la AEPD.'
  }
];

const NEWS_DATA = [
  {
    id: 'news-almendralejo-cgpj',
    category: 'deepfakes',
    topicLabel: 'Deepfakes e IA',
    source: 'Poder Judicial (CGPJ)',
    title: 'Imponen la medida de libertad vigilada durante un año a los 15 menores acusados de manipular y difundir imágenes de menores desnudas en Badajoz',
    summary: 'El Juzgado de Menores de Badajoz declaró responsables penales a 15 menores por 20 delitos de pornografía infantil y 20 contra la integridad moral tras manipular fotos con IA y difundirlas por WhatsApp.',
    url: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/Imponen-la-medida-de-libertad-vigilada-durante-un-ano-a-los-15-menores-acusados-de-manipular-y-difundir-imagenes-de-menores-desnudas-en-Badajoz'
  },
  {
    id: 'news-deepfake-aepd',
    category: 'deepfakes',
    topicLabel: 'Deepfakes e IA',
    source: 'Newtral',
    title: '‘Deepfakes’ como objeto de multa: la sanción de la AEPD',
    summary: 'Resolución sancionadora pionera de la Agencia Española de Protección de Datos (2.000 €, reducida a 1.200 € por pronto pago) por la difusión sin consentimiento de imágenes manipuladas con IA.',
    url: 'https://www.newtral.es/deepfakes-sancion-aepd/20251107/'
  },
  {
    id: 'news-sextorsion-valencia',
    category: 'grooming',
    topicLabel: 'Sextorsión',
    source: 'Europa Press',
    title: 'Detenidos cinco menores por exigir dinero a otros a cambio de no publicar sus imágenes sexuales en redes sociales',
    summary: 'Caso de sextorsión entre menores en la Comunitat Valenciana donde los implicados coaccionaban a las víctimas amenazando con difundir su material íntimo.',
    url: 'https://www.europapress.es/comunitat-valenciana/noticia-detenidos-cinco-menores-exigir-dinero-otros-cambio-no-publicar-imagenes-sexuales-redes-sociales-20220929134146.html'
  },
  {
    id: 'news-grooming-videojuego',
    category: 'grooming',
    topicLabel: 'Grooming y Videojuegos',
    source: 'Europa Press',
    title: 'Detenido en Linares (Jaén) por difundir contenido pedófilo de un menor al que captó a través de un videojuego',
    summary: 'La investigación policial acreditó que el detenido utilizó un videojuego online como vía de acercamiento inicial para ganarse la confianza del menor.',
    url: 'https://www.europapress.es/andalucia/noticia-detenido-linares-jaen-acusado-captar-menor-traves-videojuego-difundir-contenido-pedofilo-20261104100940.html'
  },
  {
    id: 'news-grooming-almeria',
    category: 'grooming',
    topicLabel: 'Grooming en Redes',
    source: 'Europa Press',
    title: 'Detenido en Almería un hombre acusado de contactar sexualmente con una menor a través de redes sociales',
    summary: 'Actuación policial frente al engaño y captación sexual de una menor mediante contacto iniciado en plataformas sociales.',
    url: 'https://www.europapress.es/andalucia/almeria-00350/noticia-detenido-almeria-hombre-acusado-contactar-sexualmente-menor-traves-redes-sociales-20261117084624.html'
  },
  {
    id: 'news-roblox-incibe',
    category: 'grooming',
    topicLabel: 'Caso real INCIBE 017',
    source: 'INCIBE (017)',
    title: 'Un adulto finge ser un menor en Roblox para acercarse a una niña',
    summary: 'Caso real atendido por la Línea de Ayuda en Ciberseguridad (017) que muestra cómo operan los perfiles falsos en videojuegos y cómo actuar en familia.',
    url: 'https://www.incibe.es/linea-de-ayuda-en-ciberseguridad/casos-reales/un-adulto-finge-ser-un-menor-en-roblox-para-acercarse-una-nina'
  },
  {
    id: 'news-cuentas-curis-sevilla',
    category: 'acoso',
    topicLabel: 'Ciberbullying',
    source: 'Diario de Sevilla',
    title: 'La Fiscalía de Sevilla investiga 16 denuncias de cuentas ‘curis’ que ridiculizan a profesores y alumnos',
    summary: 'Investigación de la Fiscalía ante la proliferación de perfiles anónimos en redes sociales creados para humillar, insultar o difundir montajes de miembros de centros escolares.',
    url: 'https://www.diariodesevilla.es/juzgado_de_guardia/actualidad/fiscalia-sevilla-investiga-16-casos-cuentas-curis-ridiculizan-profesores-alumnos_0_2008413628.html'
  },
  {
    id: 'news-multas-padres-ciberacoso',
    category: 'acoso',
    topicLabel: 'Ciberacoso y Ley',
    source: '20minutos',
    title: 'Vigila las redes sociales de tu hijo: puedes recibir multas de hasta 10.000 euros por sus comportamientos ilegales',
    summary: 'Análisis sobre la responsabilidad administrativa y civil que recae sobre padres y tutores por conductas de ciberacoso, extorsión o difusión de imágenes por menores.',
    url: 'https://www.20minutos.es/tecnologia/ciberseguridad/los-peligros-ciberacoso-las-redes-sociales-5176925/'
  },
  {
    id: 'news-estafa-fortnite-incibe',
    category: 'estafas',
    topicLabel: 'Estafa a menores',
    source: 'INCIBE (017)',
    title: 'Un menor es estafado al realizar la compra de una cuenta de Fortnite',
    summary: 'Caso real de fraude a través de TikTok con petición de pago mediante tarjetas regalo para adquirir cuentas de videojuegos.',
    url: 'https://www.incibe.es/linea-de-ayuda-en-ciberseguridad/casos-reales/un-menor-es-estafado-al-realizar-la-compra-de-una-cuenta-de-fortnite'
  },
  {
    id: 'news-ciberestafas-jovenes-rtve',
    category: 'estafas',
    topicLabel: 'Ciberestafas',
    source: 'RTVE Noticias',
    title: 'Las ciberestafas se disparan y ponen su diana en los jóvenes',
    summary: 'Reportaje sobre el aumento de fraudes digitales dirigidos a menores y jóvenes en compras online, redes sociales y mensajería.',
    url: 'https://www.rtve.es/noticias/20241202/ciberestafas-jovenes-compras-internet-consumo-espana/16294373.shtml'
  },
  {
    id: 'news-mafias-videojuegos-voz',
    category: 'estafas',
    topicLabel: 'Videojuegos',
    source: 'La Voz de Galicia',
    title: 'Las mafias detrás de Roblox, Fortnite, Steam... Así le deja el videojuego de su hijo en números rojos',
    summary: 'Cómo operan los fraudes con monedas virtuales falsas, micropagos no autorizados y robo de datos bancarios vinculados a dispositivos familiares.',
    url: 'https://www.lavozdegalicia.es/noticia/sociedad/2026/07/08/mafias-detras-roblox-fortnite-steam-deja-videojuego-hijo-numeros-rojos/00031783496237211935362.htm'
  },
  {
    id: 'news-reto-viral-aeped',
    category: 'redes-retos',
    topicLabel: 'Retos virales',
    source: 'AEPED (EnFamilia)',
    title: 'Alerta sobre los peligros de un reto viral en TikTok que pone en riesgo la salud',
    summary: 'Advertencia de la Asociación Española de Pediatría sobre desafíos virales en redes sociales que inducen conductas de riesgo físico entre menores.',
    url: 'https://www.aeped.es/enfamilia/actualidad/alerta-sobre-peligros-un-reto-viral-en-tiktok-que-pone-en-riesgo'
  },
  {
    id: 'news-ue-tiktok-rtve',
    category: 'redes-retos',
    topicLabel: 'Redes sociales',
    source: 'RTVE Noticias',
    title: 'La UE señala a TikTok por fallos en la seguridad de los menores',
    summary: 'Cobertura sobre la investigación europea acerca del diseño algorítmico, la protección frente a la adicción y la exposición de menores en la plataforma.',
    url: 'https://www.rtve.es/noticias/20260724/bruselas-acusa-tiktok-incumplir-ley-exponer-menores-ciberacoso-comportamiento-depredador/17168379.shtml'
  },
  {
    id: 'news-maldita-ia-ciberacoso',
    category: 'deepfakes',
    topicLabel: 'Deepfakes e IA',
    source: 'Maldita Tecnología',
    title: 'Inteligencia artificial y ciberacoso: imágenes sexuales, memes humillantes y perfiles falsos. ¿Qué pueden hacer padres y profesores?',
    summary: 'Guía práctica de Maldita.es con recomendaciones concretas para familias y docentes frente al uso de IA en el acoso escolar y montajes falsos.',
    url: 'https://maldita.es/malditatecnologia/20250908/ciberacoso-inteligencia-artificial-recomendaciones/'
  },
  {
    id: 'news-maldita-ia-violencia',
    category: 'deepfakes',
    topicLabel: 'Deepfakes e IA',
    source: 'Maldita Tecnología',
    title: 'Las dos caras de la IA: cómo se usa para ejercer violencia digital contra menores y cómo puede ser parte de la solución',
    summary: 'Análisis sobre el uso de bots y herramientas de IA para generar contenido no consentido de menores, las vías legales de denuncia y sus límites.',
    url: 'https://maldita.es/malditatecnologia/20250922/inteligencia-artificial-violencia-digital-menores-solucion/'
  },
  {
    id: 'news-maldita-micropagos-juegos',
    category: 'estafas',
    topicLabel: 'Videojuegos',
    source: 'Maldita Tecnología',
    title: 'Micropagos, compras y fraudes en los videojuegos: qué son y cómo proteger a los menores',
    summary: 'Explicación clara de los riesgos económicos asociados a monedas virtuales, cajas de botín y estafas en videojuegos populares.',
    url: 'https://maldita.es/malditatecnologia/20230207/micropagos-proteger-menores-videojuegos/'
  }
];

window.CIBER_DATA = {
  APPS_DATA,
  HIDDEN_MECHANICS,
  RISKS_DATA,
  CONFIG_TABS,
  WARNING_SIGNS,
  ACTION_PROTOCOL,
  VIDEOS_DATA,
  NEWS_DATA,
  CRISIS_SCENARIOS,
  RESOURCES_DATA,
  SPEAKER_TIMELINE,
  SPEAKER_FAQ
};
