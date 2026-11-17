(function () {
  const {
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
  } = window.CIBER_DATA;

  const STORAGE_KEY = 'ciber_familia_checklist_v1';
  let checkedItems = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  let activeConfigTab = CONFIG_TABS[0].id;
  let activeWorkshop = 'taller-1';

  const pactoState = {
    childName: 'Alex',
    ageGroup: '12-14 años',
    weekdayLimit: '1 hora y 30 minutos al día (tras tareas escolares)',
    curfew: '21:30 h (carga en el salón toda la noche)',
    noPhoneZones: 'Dormitorio, mesa de comidas y cuarto de baño',
    parentName: 'Mamá / Papá'
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function severityBadge(level) {
    if (level === 'alto') return '<span class="badge badge-high">Riesgo Alto</span>';
    if (level === 'medio-alto') return '<span class="badge badge-high">Riesgo Medio-Alto</span>';
    return '<span class="badge badge-med">Riesgo Medio</span>';
  }

  // -------------------- BLOQUE 1: APPS Y MECÁNICAS --------------------
  function renderApps(filter = 'all') {
    const grid = document.getElementById('appsGrid');
    const list = filter === 'all' ? APPS_DATA : APPS_DATA.filter((a) => a.category === filter);

    grid.innerHTML = list
      .map(
        (app) => `
      <article class="card" data-app-id="${escapeHtml(app.id)}">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(app.name)}</h3>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.15rem;">Edad: ${escapeHtml(app.minAge)}</div>
          </div>
          ${severityBadge(app.riskLevel)}
        </div>
        <p><strong>Para qué la usan:</strong> ${escapeHtml(app.usage)}</p>
        <div>
          <strong style="font-size:0.85rem;">Principales riesgos:</strong>
          <ul class="card-list">
            ${app.risks.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}
          </ul>
        </div>
        <div class="callout teal" style="margin-top:auto;padding:0.75rem 0.9rem;font-size:0.85rem;">
          <strong>Control parental / Ajuste clave:</strong>
          ${escapeHtml(app.parentalTool)}
          ${
            app.guideUrl
              ? `<div style="margin-top:0.4rem;"><a href="${escapeHtml(app.guideUrl)}" target="_blank" rel="noopener noreferrer">Ver guía oficial ↗</a></div>`
              : ''
          }
        </div>
      </article>`
      )
      .join('');
  }

  function renderMechanics() {
    const grid = document.getElementById('mechanicsGrid');
    grid.innerHTML = HIDDEN_MECHANICS.map(
      (m) => `
      <article class="card">
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.description)}</p>
        <div class="callout" style="margin-top:auto;padding:0.75rem 0.9rem;font-size:0.85rem;">
          <strong>Qué hacer:</strong> ${escapeHtml(m.tip)}
        </div>
      </article>`
    ).join('');
  }

  // -------------------- BLOQUES 2 Y 3: RIESGOS E IA --------------------
  function renderRisks(filter = 'all') {
    const grid = document.getElementById('risksGrid');
    const baseRisks = RISKS_DATA.filter((r) => r.category !== 'ia');
    const list = filter === 'all' ? baseRisks : baseRisks.filter((r) => r.category === filter);

    grid.innerHTML = list.map(renderRiskCard).join('');
  }

  function renderAiRisks() {
    const grid = document.getElementById('aiRisksGrid');
    const list = RISKS_DATA.filter((r) => r.category === 'ia');
    grid.innerHTML = list.map(renderRiskCard).join('');
  }

  function renderRiskCard(r) {
    return `
      <article class="card" data-risk-id="${escapeHtml(r.id)}">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(r.title)}</h3>
            <div style="font-size:0.8rem;color:var(--text-muted);">${escapeHtml(r.subtitle)}</div>
          </div>
          ${severityBadge(r.severity)}
        </div>
        <p>${escapeHtml(r.summary)}</p>
        <div>
          <strong style="font-size:0.85rem;">Cómo ocurre:</strong>
          <ul class="card-list">
            ${r.howItWorks.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
          </ul>
        </div>
        <div class="callout teal" style="margin-top:auto;padding:0.75rem 0.9rem;font-size:0.85rem;">
          <strong>Prevención práctica:</strong> ${escapeHtml(r.prevention)}
        </div>
      </article>`;
  }

  // -------------------- BLOQUE 4: CONFIGURADOR DEL MÓVIL --------------------
  function updateChecklistProgress() {
    const allItems = CONFIG_TABS.flatMap((t) => t.items);
    const total = allItems.length;
    const done = allItems.filter((item) => checkedItems.has(item.id)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    document.getElementById('checklistSummary').textContent = `${done} de ${total} ajustes completados (${pct} %)`;
    document.getElementById('checklistProgressFill').style.width = `${pct}%`;
  }

  function renderConfigTabs() {
    const nav = document.getElementById('configTabsNav');
    const panel = document.getElementById('configTabPanel');

    nav.innerHTML = CONFIG_TABS.map(
      (t) => `
      <button type="button" class="tab-btn ${t.id === activeConfigTab ? 'active' : ''}" data-tab="${escapeHtml(t.id)}" role="tab">
        ${escapeHtml(t.label)}
      </button>`
    ).join('');

    const current = CONFIG_TABS.find((t) => t.id === activeConfigTab) || CONFIG_TABS[0];
    panel.innerHTML = `
      <p style="color:var(--text-secondary);margin-top:0;">${escapeHtml(current.intro)}</p>
      <div class="grid-2">
        ${current.items
          .map((item) => {
            const isChecked = checkedItems.has(item.id);
            return `
            <label class="check-item ${isChecked ? 'checked' : ''}">
              <input type="checkbox" data-check-id="${escapeHtml(item.id)}" ${isChecked ? 'checked' : ''} />
              <div>
                <div class="check-title" style="font-weight:700;font-size:0.94rem;">${escapeHtml(item.title)}</div>
                <div style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.2rem;">${escapeHtml(item.detail)}</div>
              </div>
            </label>`;
          })
          .join('')}
      </div>`;

    updateChecklistProgress();
  }

  // -------------------- BLOQUE 5: DETECTOR DE SEÑALES --------------------
  function renderSignals() {
    const grid = document.getElementById('signalsGrid');
    grid.innerHTML = WARNING_SIGNS.map(
      (s) => `
      <label class="check-item">
        <input type="checkbox" class="signal-checkbox" value="${escapeHtml(s.id)}" />
        <div>
          <span class="badge badge-info" style="margin-bottom:0.25rem;">${escapeHtml(s.group)}</span>
          <div style="font-weight:600;font-size:0.92rem;">${escapeHtml(s.text)}</div>
        </div>
      </label>`
    ).join('');
  }

  function updateSignalSummary() {
    const count = document.querySelectorAll('.signal-checkbox:checked').length;
    const box = document.getElementById('detectorSummary');
    if (count === 0) {
      box.innerHTML = `
        <strong>Resultado orientativo (0 señales marcadas):</strong>
        <p style="margin:0.35rem 0 0;color:var(--text-secondary);">Marca cualquier cambio observado para ver pautas recomendadas de conversación y revisión.</p>`;
      box.style.borderColor = 'var(--border-strong)';
    } else if (count <= 2) {
      box.innerHTML = `
        <strong>Resultado orientativo (${count} señal/es marcada/s — Observación y diálogo):</strong>
        <p style="margin:0.35rem 0 0;color:var(--text-secondary);">Un cambio aislado no confirma un incidente grave, pero sí invita a abrir una conversación tranquila, revisar juntos horarios de sueño y comprobar la privacidad de sus cuentas.</p>`;
      box.style.borderColor = 'var(--warning)';
    } else {
      box.innerHTML = `
        <strong style="color:var(--danger);">Resultado orientativo (${count} señales marcadas — Atención prioritaria):</strong>
        <p style="margin:0.35rem 0 0;color:var(--text-secondary);">La acumulación de varias señales justifica actuar con calma y cercanía cuanto antes: habla sin culpabilizar, no borres posibles pruebas y consulta de forma gratuita y confidencial con <strong>INCIBE (017)</strong> o <strong>Fundación ANAR Familias (600 50 51 52)</strong>.</p>`;
      box.style.borderColor = 'var(--danger)';
    }
  }

  // -------------------- BLOQUE 6: PROTOCOLO --------------------
  function renderActionProtocol() {
    const container = document.getElementById('actionProtocolList');
    container.innerHTML = ACTION_PROTOCOL.map(
      (p) => `
      <div class="card" style="padding:1rem 1.15rem;">
        <h4 style="margin:0;font-family:var(--font-display);color:var(--primary);">${escapeHtml(p.step)}</h4>
        <p style="margin-top:0.3rem;">${escapeHtml(p.detail)}</p>
      </div>`
    ).join('');
  }

  // -------------------- TALLERES PRÁCTICOS --------------------
  function renderWorkshop(id) {
    activeWorkshop = id;
    document.querySelectorAll('.workshop-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.workshop === id);
    });

    const panel = document.getElementById('workshopPanel');

    if (id === 'taller-1') {
      panel.innerHTML = `
        <h3 style="font-family:var(--font-display);margin-top:0;">Taller 1: Auditoría exprés del móvil en 15 minutos</h3>
        <p style="color:var(--text-secondary);">Actividad guiada de 15 minutos para realizar junto con tu hijo o hija.</p>
        <div class="grid-3" style="margin-top:1rem;">
          <div class="card">
            <span class="badge badge-info">Minutos 0–5</span>
            <h4>1. Inventario de apps y cuentas</h4>
            <ul class="card-list">
              <li>Revisar juntos la biblioteca de aplicaciones instaladas (comprobar si hay apps ocultas o duplicadas).</li>
              <li>Preguntar qué perfiles secundarios o servidores de Discord utilizan habitualmente.</li>
            </ul>
          </div>
          <div class="card">
            <span class="badge badge-teal">Minutos 5–10</span>
            <h4>2. Limpieza de permisos</h4>
            <ul class="card-list">
              <li>Ir a Ajustes > Privacidad (iOS) o Gestor de permisos (Android).</li>
              <li>Quitar ubicación «Siempre» a redes sociales y revisar qué apps acceden a cámara, micrófono y contactos.</li>
            </ul>
          </div>
          <div class="card">
            <span class="badge badge-high">Minutos 10–15</span>
            <h4>3. Doble llave (2FA) y descanso</h4>
            <ul class="card-list">
              <li>Activar el PIN de verificación en dos pasos en WhatsApp y 2FA en Instagram/TikTok.</li>
              <li>Programar modo descanso o «Hora de dormir» a partir de la hora pactada.</li>
            </ul>
          </div>
        </div>`;
    } else if (id === 'taller-2') {
      panel.innerHTML = `
        <h3 style="font-family:var(--font-display);margin-top:0;">Taller 2: Blindaje paso a paso de 5 apps clave</h3>
        <p style="color:var(--text-secondary);">Ruta exacta de menús en las cinco plataformas más habituales en preadolescencia.</p>
        <div class="grid-2" style="margin-top:1rem;">
          <div class="card">
            <h4>TikTok — Sincronización Familiar</h4>
            <p>Perfil > Menú (☰) > Ajustes y privacidad > <strong>Sincronización Familiar</strong>. Escanear código QR desde el móvil del adulto para fijar tiempo diario, Modo Restringido y bloquear mensajes directos.</p>
          </div>
          <div class="card">
            <h4>Instagram — Cuentas de Adolescentes y Supervisión</h4>
            <p>Perfil > Menú > <strong>Supervisión</strong> (Centro para Familias). Verificar cuenta privada, filtro de palabras ocultas, límite de mensajes solo a seguidores mutuos y modo reposo nocturno.</p>
          </div>
          <div class="card">
            <h4>WhatsApp — Grupos y PIN de seguridad</h4>
            <p>Ajustes > Privacidad > <strong>Grupos: «Mis contactos»</strong>. Foto de perfil y última vez: «Mis contactos». Ajustes > Cuenta > <strong>Verificación en dos pasos</strong> (activar PIN de 6 dígitos).</p>
          </div>
          <div class="card">
            <h4>Roblox y Discord — Chat y Centro Familiar</h4>
            <p>En Roblox: Configuración > <strong>Controles parentales</strong> (vincular cuenta de padres y restringir experiencias/chat). En Discord: Ajustes > <strong>Centro familiar</strong> + Privacidad > desactivar DMs de miembros de servidores.</p>
          </div>
        </div>`;
    } else if (id === 'taller-3') {
      panel.innerHTML = `
        <div class="pacto-form-grid">
          <div class="no-print">
            <h3 style="font-family:var(--font-display);margin-top:0;">Taller 3: Generador de Pacto Digital Familiar</h3>
            <p style="color:var(--text-secondary);font-size:0.9rem;">Personaliza los acuerdos con tu hijo/a e imprímelo o guárdalo en PDF para firmarlo juntos en casa (inspirado en los Pactos Familiares de INCIBE).</p>
            <div class="form-group">
              <label for="pactoChild">Nombre del menor</label>
              <input id="pactoChild" class="form-control" type="text" value="${escapeHtml(pactoState.childName)}" />
            </div>
            <div class="form-group">
              <label for="pactoAge">Franja de edad</label>
              <select id="pactoAge" class="form-control">
                <option value="9-11 años" ${pactoState.ageGroup === '9-11 años' ? 'selected' : ''}>9–11 años (inicio supervisado)</option>
                <option value="12-14 años" ${pactoState.ageGroup === '12-14 años' ? 'selected' : ''}>12–14 años (transición a la ESO)</option>
                <option value="15-17 años" ${pactoState.ageGroup === '15-17 años' ? 'selected' : ''}>15–17 años (autonomía responsable)</option>
              </select>
            </div>
            <div class="form-group">
              <label for="pactoLimit">Tiempo máximo entre semana</label>
              <input id="pactoLimit" class="form-control" type="text" value="${escapeHtml(pactoState.weekdayLimit)}" />
            </div>
            <div class="form-group">
              <label for="pactoCurfew">Hora de desconexión nocturna</label>
              <input id="pactoCurfew" class="form-control" type="text" value="${escapeHtml(pactoState.curfew)}" />
            </div>
            <div class="form-group">
              <label for="pactoZones">Espacios libres de pantallas</label>
              <input id="pactoZones" class="form-control" type="text" value="${escapeHtml(pactoState.noPhoneZones)}" />
            </div>
            <div class="form-group">
              <label for="pactoParent">Firmado por (madre/padre/tutor)</label>
              <input id="pactoParent" class="form-control" type="text" value="${escapeHtml(pactoState.parentName)}" />
            </div>
            <button type="button" class="btn btn-teal" id="printPactoBtn">Imprimir / Guardar PDF del Pacto</button>
          </div>
          <div class="pacto-preview" id="pactoPreview"></div>
        </div>`;

      updatePactoPreview();
      bindPactoInputs();
    } else if (id === 'taller-4') {
      panel.innerHTML = `
        <h3 style="font-family:var(--font-display);margin-top:0;">Taller 4: Simulacro interactivo — «¿Qué harías si...?»</h3>
        <p style="color:var(--text-secondary);">Pon a prueba la reacción familiar ante cuatro situaciones reales de riesgo digital.</p>
        <div class="grid-2" style="margin-top:1rem;">
          ${CRISIS_SCENARIOS.map(
            (sc) => `
            <div class="scenario-card" data-scenario="${escapeHtml(sc.id)}">
              <h4 style="margin:0 0 0.45rem;font-family:var(--font-display);">${escapeHtml(sc.title)}</h4>
              <p style="font-size:0.9rem;color:var(--text-secondary);margin:0;">${escapeHtml(sc.prompt)}</p>
              <div class="scenario-options">
                ${sc.options
                  .map(
                    (opt, idx) => `
                  <button type="button" class="scenario-opt" data-sc="${escapeHtml(sc.id)}" data-idx="${idx}">
                    ${escapeHtml(opt.text)}
                  </button>`
                  )
                  .join('')}
              </div>
              <div class="scenario-feedback" id="fb-${escapeHtml(sc.id)}" style="display:none;"></div>
            </div>`
          ).join('')}
        </div>`;
    }
  }

  function updatePactoPreview() {
    const box = document.getElementById('pactoPreview');
    if (!box) return;
    box.innerHTML = `
      <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--teal);font-weight:800;">Acuerdo de Convivencia Digital</div>
      <h4>Pacto Digital Familiar (${escapeHtml(pactoState.ageGroup)})</h4>
      <p style="font-size:0.9rem;color:var(--text-secondary);">
        Acordado entre <strong>${escapeHtml(pactoState.childName)}</strong> y <strong>${escapeHtml(pactoState.parentName)}</strong> para usar Internet y el móvil de forma segura, respetuosa y saludable.
      </p>
      <ul class="card-list" style="margin-top:0.75rem;">
        <li><strong>Horario entre semana:</strong> ${escapeHtml(pactoState.weekdayLimit)}.</li>
        <li><strong>Descanso nocturno:</strong> desconexión a las ${escapeHtml(pactoState.curfew)}.</li>
        <li><strong>Zonas sin móvil:</strong> ${escapeHtml(pactoState.noPhoneZones)}.</li>
        <li><strong>Privacidad y descargas:</strong> cuentas privadas, 2FA activa y consulta previa antes de instalar nuevas apps o aceptar desconocidos.</li>
        <li><strong>Compromiso de confianza (hijo/a):</strong> si alguien me incomoda, amenaza, pide fotos o veo algo raro, pediré ayuda a mi familia de inmediato.</li>
        <li><strong>Compromiso de apoyo (padres):</strong> escuchar con calma sin gritar ni castigar quitando el teléfono cuando acudas a pedir ayuda, y dar ejemplo sin pantallas en la mesa.</li>
      </ul>
      <div class="pacto-signatures">
        <div>
          <div class="sig-line"></div>
          <div style="font-size:0.8rem;color:var(--text-muted);">Firma de ${escapeHtml(pactoState.childName)}</div>
        </div>
        <div>
          <div class="sig-line"></div>
          <div style="font-size:0.8rem;color:var(--text-muted);">Firma de ${escapeHtml(pactoState.parentName)}</div>
        </div>
      </div>`;
  }

  function bindPactoInputs() {
    const map = {
      pactoChild: 'childName',
      pactoAge: 'ageGroup',
      pactoLimit: 'weekdayLimit',
      pactoCurfew: 'curfew',
      pactoZones: 'noPhoneZones',
      pactoParent: 'parentName'
    };
    Object.entries(map).forEach(([elId, key]) => {
      const el = document.getElementById(elId);
      if (el) {
        el.addEventListener('input', (e) => {
          pactoState[key] = e.target.value;
          updatePactoPreview();
        });
      }
    });
    const printBtn = document.getElementById('printPactoBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  }

  // -------------------- VIDEOTECA YOUTUBE --------------------
  function renderVideos(filter = 'all') {
    const grid = document.getElementById('videosGrid');
    const list = filter === 'all' ? VIDEOS_DATA : VIDEOS_DATA.filter((v) => v.category === filter);

    grid.innerHTML = list
      .map(
        (v) => `
      <article class="video-card">
        <div class="video-thumb-wrap">
          <img
            src="https://i.ytimg.com/vi/${escapeHtml(v.id)}/hqdefault.jpg"
            alt="Miniatura del vídeo: ${escapeHtml(v.title)}"
            loading="lazy"
          />
          <button
            type="button"
            class="video-play-badge"
            data-play-video="${escapeHtml(v.id)}"
            data-video-title="${escapeHtml(v.title)}"
            aria-label="Reproducir ${escapeHtml(v.title)}"
            style="border:none;width:100%;"
          >
            <span class="play-circle" aria-hidden="true">▶</span>
          </button>
        </div>
        <div class="video-body">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
            <span class="video-channel">${escapeHtml(v.channel)}</span>
            <span class="badge badge-info">${escapeHtml(v.duration)}</span>
          </div>
          <h3 class="video-title">${escapeHtml(v.title)}</h3>
          <p style="font-size:0.86rem;color:var(--text-secondary);margin:0;">${escapeHtml(v.note)}</p>
          <div class="video-actions">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-play-video="${escapeHtml(v.id)}"
              data-video-title="${escapeHtml(v.title)}"
            >
              Ver aquí
            </button>
            <a
              href="https://www.youtube.com/watch?v=${escapeHtml(v.id)}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-sm"
            >
              Abrir en YouTube ↗
            </a>
          </div>
        </div>
      </article>`
      )
      .join('');
  }

  // -------------------- NOTICIAS Y CASOS REALES --------------------
  function renderNews(filter = 'all') {
    const grid = document.getElementById('newsGrid');
    const list = filter === 'all' ? NEWS_DATA : NEWS_DATA.filter((n) => n.category === filter);

    grid.innerHTML = list
      .map(
        (n) => `
      <article class="card">
        <div class="card-top">
          <span class="badge badge-info">${escapeHtml(n.topicLabel)}</span>
          <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);">${escapeHtml(n.source)}</span>
        </div>
        <h3>${escapeHtml(n.title)}</h3>
        <p>${escapeHtml(n.summary)}</p>
        <div style="margin-top:auto;padding-top:0.5rem;">
          <a href="${escapeHtml(n.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            Leer noticia comprobada ↗
          </a>
        </div>
      </article>`
      )
      .join('');
  }

  // -------------------- BLOQUE 7: RECURSOS --------------------
  function renderResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = RESOURCES_DATA.map(
      (r) => `
      <article class="card">
        <div class="card-top">
          <h3>${escapeHtml(r.name)}</h3>
          ${
            r.urgent
              ? '<span class="badge badge-high">Ayuda / Denuncia urgente</span>'
              : '<span class="badge badge-teal">Prevención y Guías</span>'
          }
        </div>
        <p>${escapeHtml(r.role)}</p>
        <div style="font-size:0.88rem;">
          <div><strong>Contacto:</strong> ${escapeHtml(r.contact)}</div>
          <div style="color:var(--text-muted);margin-top:0.2rem;"><strong>Disponibilidad:</strong> ${escapeHtml(r.schedule)}</div>
        </div>
        <div style="margin-top:auto;padding-top:0.4rem;">
          <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            Ir al recurso oficial ↗
          </a>
        </div>
      </article>`
    ).join('');
  }

  // -------------------- PREGUNTAS FRECUENTES --------------------
  function renderFaq() {
    const faqEl = document.getElementById('speakerFaq');
    if (!faqEl) return;
    faqEl.innerHTML = SPEAKER_FAQ.map(
      (f, idx) => `
      <div class="accordion-item ${idx === 0 ? 'open' : ''}">
        <button type="button" class="accordion-trigger">
          <span>${escapeHtml(f.q)}</span>
          <span aria-hidden="true">▾</span>
        </button>
        <div class="accordion-content">
          <p style="margin:0;">${escapeHtml(f.a)}</p>
        </div>
      </div>`
    ).join('');
  }

  // -------------------- MODAL (VÍDEO Y SOS) --------------------
  const modal = document.getElementById('appModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  function openVideoModal(videoId, title) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <div class="iframe-16-9">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0"
          title="${escapeHtml(title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-top:0.9rem;">
        <span style="font-size:0.85rem;color:var(--text-muted);">Si algún reproductor restringe la inserción en local, ábrelo directamente en YouTube.</span>
        <a href="https://www.youtube.com/watch?v=${escapeHtml(videoId)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Abrir en YouTube ↗
        </a>
      </div>`;
    modal.classList.add('open');
  }

  function openSosModal() {
    modalTitle.textContent = 'Protocolo rápido de emergencia SOS';
    modalBody.innerHTML = `
      <div class="callout danger" style="margin-bottom:1rem;">
        <strong>Si un menor está sufriendo amenazas, sextorsión o difusión de imágenes ahora mismo:</strong>
        Mantén la calma, no le culpes y sigue estos 4 pasos en orden.
      </div>
      <ol class="card-list" style="font-size:0.95rem;display:grid;gap:0.55rem;">
        <li><strong>No pagues ni envíes nada más</strong> y <strong>no borres los chats ni perfiles</strong> antes de hacer capturas completas (con usuario, URL, fecha y hora).</li>
        <li><strong>Llama gratis a INCIBE (017)</strong> (8:00–23:00, 365 días; WhatsApp <strong>900 116 117</strong>) o a <strong>ANAR Familias (600 50 51 52 / Menores 900 20 20 10, 24h)</strong>.</li>
        <li><strong>Solicita retirada urgente:</strong> en <a href="https://www.aepd.es/canalprioritario" target="_blank" rel="noopener noreferrer">Canal Prioritario de la AEPD</a> (webs/redes abiertas) y genera huella digital local en <a href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noopener noreferrer">NCMEC / Take It Down</a>.</li>
        <li><strong>Denuncia con las pruebas guardadas</strong> en Comisaría de Policía Nacional (<strong>091</strong>) o Puesto de la Guardia Civil (<strong>062</strong>). En urgencia física inmediata llama al <strong>112</strong>.</li>
      </ol>`;
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
    modalBody.innerHTML = '';
  }

  // -------------------- BUSCADOR GLOBAL --------------------
  function buildSearchIndex() {
    const entries = [];
    APPS_DATA.forEach((a) =>
      entries.push({
        type: 'App / Red',
        title: a.name,
        desc: a.usage,
        target: '#bloque-1'
      })
    );
    RISKS_DATA.forEach((r) =>
      entries.push({
        type: r.category === 'ia' ? 'IA / Tecnología' : 'Riesgo',
        title: r.title,
        desc: r.summary,
        target: r.category === 'ia' ? '#bloque-3' : '#bloque-2'
      })
    );
    VIDEOS_DATA.forEach((v) =>
      entries.push({
        type: 'Vídeo YouTube',
        title: v.title,
        desc: `${v.channel} · ${v.note}`,
        videoId: v.id
      })
    );
    NEWS_DATA.forEach((n) =>
      entries.push({
        type: `Noticia (${n.source})`,
        title: n.title,
        desc: n.summary,
        target: '#noticias'
      })
    );
    RESOURCES_DATA.forEach((res) =>
      entries.push({
        type: 'Recurso oficial',
        title: res.name,
        desc: res.contact,
        target: '#bloque-7'
      })
    );
    return entries;
  }

  const SEARCH_INDEX = buildSearchIndex();

  function handleSearch(query) {
    const box = document.getElementById('searchResultsBox');
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      box.classList.remove('open');
      box.innerHTML = '';
      return;
    }

    const matches = SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    ).slice(0, 8);

    if (matches.length === 0) {
      box.innerHTML = `<div class="search-result-item"><span>No hay coincidencias para «${escapeHtml(query)}».</span></div>`;
      box.classList.add('open');
      return;
    }

    box.innerHTML = matches
      .map(
        (m, idx) => `
      <div class="search-result-item" data-search-idx="${idx}">
        <div>
          <strong style="font-size:0.92rem;">${escapeHtml(m.title)}</strong>
          <div style="font-size:0.8rem;color:var(--text-secondary);">${escapeHtml(m.desc.slice(0, 110))}...</div>
        </div>
        <span class="badge badge-info">${escapeHtml(m.type)}</span>
      </div>`
      )
      .join('');
    box.classList.add('open');

    box.querySelectorAll('.search-result-item').forEach((el, idx) => {
      el.addEventListener('click', () => {
        const match = matches[idx];
        box.classList.remove('open');
        if (match.videoId) {
          openVideoModal(match.videoId, match.title);
        } else if (match.target) {
          const dest = document.querySelector(match.target);
          if (dest) dest.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // -------------------- EVENTOS GLOBALES --------------------
  function initEvents() {
    // Filtros Apps
    document.getElementById('appFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#appFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderApps(btn.dataset.filter);
    });

    // Filtros Riesgos
    document.getElementById('riskFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#riskFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderRisks(btn.dataset.filter);
    });

    // Filtros Vídeos
    document.getElementById('videoFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#videoFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderVideos(btn.dataset.filter);
    });

    // Filtros Noticias
    document.getElementById('newsFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#newsFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderNews(btn.dataset.filter);
    });

    // Tabs Bloque 4 y Checkboxes
    document.getElementById('configTabsNav').addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      activeConfigTab = btn.dataset.tab;
      renderConfigTabs();
    });

    document.getElementById('configTabPanel').addEventListener('change', (e) => {
      const cb = e.target.closest('input[data-check-id]');
      if (!cb) return;
      const id = cb.dataset.checkId;
      if (cb.checked) checkedItems.add(id);
      else checkedItems.delete(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedItems]));
      cb.closest('.check-item').classList.toggle('checked', cb.checked);
      updateChecklistProgress();
    });

    document.getElementById('resetChecklistBtn').addEventListener('click', () => {
      checkedItems = new Set();
      localStorage.removeItem(STORAGE_KEY);
      renderConfigTabs();
    });

    // Detector Bloque 5
    document.getElementById('signalsGrid').addEventListener('change', updateSignalSummary);

    // Talleres
    document.querySelector('.workshop-tabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.workshop-tab');
      if (!tab) return;
      renderWorkshop(tab.dataset.workshop);
    });

    // Simulacro de crisis (Taller 4)
    document.getElementById('workshopPanel').addEventListener('click', (e) => {
      const optBtn = e.target.closest('.scenario-opt');
      if (!optBtn) return;
      const scId = optBtn.dataset.sc;
      const idx = Number(optBtn.dataset.idx);
      const scenario = CRISIS_SCENARIOS.find((s) => s.id === scId);
      if (!scenario) return;

      const card = optBtn.closest('.scenario-card');
      card.querySelectorAll('.scenario-opt').forEach((b, i) => {
        b.classList.remove('is-correct', 'is-wrong');
        if (i === idx) {
          b.classList.add(scenario.options[i].correct ? 'is-correct' : 'is-wrong');
        }
      });

      const fb = document.getElementById(`fb-${scId}`);
      const chosen = scenario.options[idx];
      fb.style.display = 'block';
      fb.style.background = chosen.correct ? 'var(--success-soft)' : 'var(--danger-soft)';
      fb.style.color = chosen.correct ? 'var(--success)' : 'var(--danger)';
      fb.innerHTML = `<strong>${chosen.correct ? 'Decisión recomendada:' : 'Atención:'}</strong> ${escapeHtml(chosen.feedback)}`;
    });

    // Reproductor de vídeo
    document.getElementById('videosGrid').addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-play-video]');
      if (!trigger) return;
      openVideoModal(trigger.dataset.playVideo, trigger.dataset.videoTitle);
    });

    // Modal SOS y cierre
    document.getElementById('openSosBtn').addEventListener('click', openSosModal);
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // FAQ Acordeón
    document.getElementById('speakerFaq').addEventListener('click', (e) => {
      const trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;
      trigger.closest('.accordion-item').classList.toggle('open');
    });

    // Revelar destinos QR (Quishing)
    const revealQrBtn = document.getElementById('revealQrBtn');
    if (revealQrBtn) {
      revealQrBtn.addEventListener('click', () => {
        const expanded = revealQrBtn.getAttribute('aria-expanded') === 'true';
        const nextState = !expanded;
        revealQrBtn.setAttribute('aria-expanded', String(nextState));
        revealQrBtn.textContent = nextState ? 'Ocultar destinos' : 'Revelar destinos';
        document.querySelectorAll('.qr-reveal').forEach((el) => {
          el.style.display = nextState ? 'block' : 'none';
        });
      });
    }

    // Menú móvil
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });

    // Scroll-spy para resaltar el elemento activo del menú
    if ('IntersectionObserver' in window) {
      const navItems = Array.from(document.querySelectorAll('#navLinks .nav-link'));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navItems.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
              });
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      document.querySelectorAll('main > section[id]').forEach((sec) => observer.observe(sec));
    }

    // Buscador global
    const searchInput = document.getElementById('globalSearch');
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hero-search-wrap')) {
        document.getElementById('searchResultsBox').classList.remove('open');
      }
    });
  }

  // Inicialización
  renderApps('all');
  renderMechanics();
  renderRisks('all');
  renderAiRisks();
  renderConfigTabs();
  renderSignals();
  renderActionProtocol();
  renderWorkshop('taller-1');
  renderVideos('all');
  renderNews('all');
  renderResources();
  renderFaq();
  initEvents();
})();
