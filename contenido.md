# FASE 1: FUNDAMENTOS
## Entender cómo funciona la IA

---

### 1. Hackear Prompts
> **Tag:** Ingeniería inversa
> **Imagen:** img/01-hackear-prompts.jpg

#### Objetivo Educacional
**Desarrollar habilidades sobre cómo funcionan los prompts mediante ingeniería inversa: analizar una respuesta de IA para deducir qué prompt la generó y cómo optimizarla.**

#### Descripción
Esta técnica te permite "hackear" el proceso de prompting. A partir de una respuesta de IA, reconstruyes el prompt original, identificas sus debilidades y creas una versión mejorada. Es una especie de técnica forense aplicada a la ingenieria de prompts. Al desmontar la relación entre instrucción y resultado, comprendes qué elementos del prompt influyen realmente en la calidad de la respuesta: el rol asignado, el nivel de detalle, las restricciones de formato o el contexto proporcionado. Esta comprensión te convierte en un usuario más consciente y estratégico de cualquier modelo de lenguaje.

#### Info: Generar un texto previo con esta instrucción u otra parecida para experimentar
*Redacta un texto de no más de cuatro párrafos sobre la teoría del constructivismo y sus fundamentos: el aprendizaje por descubrimiento, la asimilación, la acomodación y el equilibrio. Cita a Piaget, Bruner y Vygotsky, y menciona cómo ha evolucionado la teoría en los últimos años. Evita el formato esquemático y adopta un tono académico para una audiencia de expertos en pedagogía.*

#### Prompt Principal
```
Eres un experto en ingeniería de prompts y análisis de respuestas de IA.

He recibido la siguiente respuesta de una IA:
[INSERTAR RESPUESTA]

Necesito que hagas INGENIERÍA INVERSA:

1. RECONSTRUCCIÓN DEL PROMPT ORIGINAL:
   - ¿Qué prompt probablemente generó esta respuesta?
   - Escribe 3 versiones posibles del prompt original (básica, intermedia, avanzada)

2. ANÁLISIS DE CALIDAD:
   - Elementos bien logrados en la respuesta
   - Elementos deficientes o ausentes
   - Señales de "alucinación" o información no verificable

3. OPTIMIZACIÓN:
   - Reescribe el prompt para obtener una respuesta un 50% mejor
   - Explica qué técnicas de prompting aplicaste (rol, contexto, formato, restricciones)

4. PROMPT MEJORADO FINAL:
   Proporciona el prompt optimizado listo para usar
```

#### Bonus Extra
**Desafío iterativo:** Usa el prompt mejorado para generar una nueva respuesta. Luego, aplica el análisis de ingeniería inversa a ESTA nueva respuesta. ¿Puedes mejorarla aún más? Repite el ciclo 3 veces y observa la evolución.

#### Pregunta de Reflexión
¿Qué patrones identificaste en los prompts efectivos vs. los inefectivos? ¿Cómo cambió tu comprensión sobre cómo "hablarle" a la IA después de este ejercicio?

---

### 2. Método Socrático
> **Tag:** Aprendizaje por preguntas
> **Imagen:** img/02-metodo-socratico.jpg

#### Objetivo Educacional
**Transformar la relación con la IA: en lugar de usarla para obtener respuestas directas, entrenarla para que actúe como tutor que guía el pensamiento mediante preguntas estratégicas, fomentando el razonamiento autónomo.**

#### Descripción
El concepto más poderoso de todos: la IA NO da respuestas, sino que hace preguntas que te guían a descubrir las respuestas por ti mismo. *Este método desarrolla pensamiento crítico genuino y habilidades metacognitivas, evitando la dependencia de respuestas prefabricadas* (ChatGPT dixit). A diferencia del uso habitual de la IA —donde el estudiante recibe información pasivamente—, aquí se invierte la dinámica: eres tú quien razona, argumenta y construye conocimiento, mientras la IA se limita a formular las preguntas adecuadas en el momento preciso. Esta práctica entrena la capacidad de cuestionar supuestos, considerar múltiples perspectivas y articular el propio pensamiento de forma rigurosa.

#### Info: Preguntas para experimentar el método socrático
- *"¿Debe el médico respetar siempre la decisión del paciente, incluso cuando va en contra del tratamiento recomendado?"*
- *"¿Las empresas deberían priorizar el beneficio económico por encima de su responsabilidad social?"*
- *"¿Por qué las desigualdades sociales tienden a reproducirse a lo largo de generaciones?"*
- *"¿La democracia siempre produce mejores resultados que otros sistemas políticos?"*

#### Prompt Principal
```
Actúa como un tutor socrático experto.
Tu objetivo NO es dar respuestas, sino guiar el pensamiento del estudiante paso a paso mediante preguntas estratégicas.

INSTRUCCIONES GENERALES
1. Haz solo UNA pregunta por turno.
2. Espera SIEMPRE la respuesta del estudiante antes de continuar.
3. Nunca des respuestas directas.
4. No expliques conceptos: el estudiante debe descubrirlos.
5. Usa preguntas para dividir problemas, explorar supuestos y fomentar razonamiento autónomo.
6. Si la respuesta es confusa o incorrecta, pregunta:
      "¿Estás seguro?"
      "¿Qué pasaría si…?"
      "¿Podrías pensar en un contraejemplo?"

FLUJO DE INTERACCIÓN

Cuando el estudiante pregunte: [PREGUNTA DEL ESTUDIANTE AQUÍ]

Haz lo siguiente:

1. Formula una pregunta de clarificación: "Antes de continuar, ¿qué entiendes por [algo relacionado con la pregunta del estudiante pero no directameente con el conceto clave]?"
2. Si consideras que hay ambigüedades en su respuesta, pon ejemplos y pregunta sobre ellos.
2. A partir de entonces, formula solo una pregunta guía por turno, sobre:
    * fundamentos
    * relaciones
    * aplicación
    * consecuencias
    * contraejemplos

Cuando observes que el estudiante ya tiene los elementos necesarios, formula una pregunta de síntesis:
"Con todo lo que has reflexionado, ¿cómo responderías ahora tu propia pregunta?"

TONO: Paciente, curioso, no condescendiente.

REGLA CRÍTICA: Nunca muestres todas las preguntas a la vez. Solo una por turno.
```

#### Bonus Extra
**Diálogo socrático extendido:** Mantén una conversación completa (10+ intercambios) donde la IA solo haga preguntas sobre un concepto que encuentres difícil. Guarda todas tus interacciones y respeustas en un documento. Luego pide a la IA que te elebore un resumen con los conceptos e ideas tratados.

#### Pregunta de Reflexión
¿Cómo fue tu experiencia aprendiendo por preguntas en lugar de respuestas? ¿En qué momentos del aprendizaje es más valioso este enfoque vs. obtener información directa?

---

# FASE 2: ANÁLISIS CRÍTICO
## Desarrollar pensamiento crítico

---

### 3. Transformar visualmente
> **Tag:** Texto a visualización
> **Imagen:** img/03-transformar-visual.jpg

#### Objetivo Educacional
**Aprender a transformar textos académicos densos en múltiples formatos visuales de conocimiento, facilitando la comprensión y comunicación de información compleja.**

#### Descripción
La IA convierte textos académicos complejos en representaciones visuales automáticas: mapas conceptuales, infografías de proceso, tablas comparativas, líneas de tiempo y diagramas. Lo que tomaría horas de diseño manual se genera en minutos, permitiendo múltiples iteraciones rápidas. Esta capacidad resulta especialmente valiosa cuando trabajas con textos densos cuya estructura interna no es evidente a primera vista: al solicitar distintos formatos de visualización, la IA te obliga a pensar en qué tipo de relación predomina en el contenido —jerárquica, secuencial, comparativa o temporal— y a elegir la representación más adecuada para cada caso. El resultado no es solo un recurso visual, sino una comprensión más profunda de la información.

#### Info: Temas especialmente complejos para desarrollar a la IA
Buscar textos sobre: *Teoría de la Relatividad, Programación Neurolingüística, Principio de incertidumbre de Heisenberg, Sindrome de Cushing, Interacción estructura-agencia, Filosofía del lenguaje y de la mente...*

#### Prompt Principal
```
Actúa como un diseñador instruccional experto en visualización de conocimiento.

Tengo el siguiente texto académico complejo:
[INSERTAR TEXTO]

Necesito que lo transformes en 4 FORMATOS VISUALES diferentes:

1. **MAPA CONCEPTUAL JERÁRQUICO**
   - Identifica concepto central
   - Conceptos de 2º nivel (4-6)
   - Conceptos de 3º nivel
   - Dibuja las conexiones con formato de diagrama (usa símbolos ASCII o describe para Mermaid)

2. **INFOGRAFÍA TIPO PROCESO/FLUJO**
   - Si el texto describe un proceso, conviértelo en pasos numerados
   - Incluye íconos sugeridos para cada paso
   - Añade "datos destacados" en cada fase

3. **TABLA COMPARATIVA**
   - Si hay múltiples elementos, crea una tabla que los compare
   - Mínimo 5 criterios de comparación

4. **TIMELINE/LÍNEA DE TIEMPO**
   - Si hay evolución histórica o secuencia temporal, créala
   - Incluye fechas clave y eventos

5. **DIAGRAMA DE VENN O MATRIZ 2X2**
   - Identifica dimensiones de análisis
   - Posiciona los conceptos según estas dimensiones

Para cada formato:
- Justifica por qué ese formato es apropiado
- Proporciona el código Mermaid o descripción detallada para crearlo

IMPORTANTE: Elige los 3 formatos más apropiados para ESTE texto específico
```

#### Bonus Extra
**Narrativa visual:** Toma un paper completo de 20+ páginas. Crea una secuencia de 5-6 visualizaciones que cuenten la "historia" del paper de inicio a fin. ¿Puedes explicar toda la investigación solo con estas visualizaciones?

#### Pregunta de Reflexión
¿Qué aspectos del texto se comprenden mejor visualmente vs. en prosa? ¿Cuándo es apropiado usar cada tipo de visualización según el contenido y la audiencia?

---

### 4. Auditoría de textos
> **Tag:** Detección de sesgos y falacias
> **Imagen:** img/04-auditoria-textos.jpg

#### Objetivo Educacional
**Desarrollar pensamiento crítico avanzado mediante el uso de IA como herramienta de auditoría intelectual que identifica sesgos cognitivos, falacias lógicas y debilidades metodológicas en textos académicos.**

#### Descripción
La IA actúa como un auditor especializado que analiza textos académicos, científicos... para detectar problemas argumentativos, sesgos y debilidades metodológicas que normalmente pasan desapercibidos en una lectura superficial. Es especialmente útil para revisar artículos de opinión disfrazados de científicos o textos con conclusiones discutibles. Más allá de la detección, esta actividad entrena al estudiante para leer cualquier texto con una mirada analítica: aprender a distinguir una correlación de una causalidad, reconocer cuándo una muestra es insuficiente o detectar cuándo un autor presenta como universal algo que solo aplica en un contexto limitado. Es una competencia transferible a cualquier disciplina y situación profesional.

#### Info: Ejemplos de papers con "anomalías"
- [Incidencia de la pandemia COVID en los delitos de odio en España](https://dialnet.unirioja.es/descarga/articulo/8400381.pdf)
- [Estudio de la obesidad y del sobrepeso como factores de riesgo de la prevalencia y severidad del asma en niños de Valencia](https://scielo.isciii.es/pdf/nh/v20n6/original4.pdf)
- [El enfoque de género en la intervención socioeducativa con mujeres un estudio en el medio penitenciario español](https://repositorio.ual.es/bitstream/handle/10835/10431/3474-15303-1-PB.pdf?sequence=1&isAllowed=y)
- [Republished study: long-term toxicity of a Roundup herbicide and a Roundup-tolerant genetically modified maize](https://enveurope.springeropen.com/counter/pdf/10.1186/s12302-014-0014-5.pdf)
- [Uso de la gamificación en el proceso de enseñanza aprendizaje en carreras de ingeniería: revisión sistemática](https://sinbad2.ujaen.es/sites/default/files/publications/ACEDEDOT2024_final_ready.pdf)

#### Prompt Principal
```
Actúa como un especialista en pensamiento crítico y metodología científica.

Analiza el siguiente fragmento académico [INSERTAR TEXTO] e identifica:

1. SESGOS COGNITIVOS presentes:
   - Sesgo de confirmación
   - Sesgo de disponibilidad
   - Sesgo de anclaje
   - Otros sesgos identificados

2. FALACIAS LÓGICAS:
   - Ad hominem
   - Falsa causa
   - Generalización apresurada
   - Pendiente resbaladiza
   - Otras falacias

3. DEBILIDADES METODOLÓGICAS:
   - Problemas con la muestra
   - Confusión correlación-causalidad
   - Variables no controladas

Para cada punto identificado:
- Cita textualmente el fragmento problemático
- Explica por qué es problemático
- Sugiere cómo podría reformularse

Formato: Tabla con columnas [Tipo de problema | Cita textual | Explicación | Sugerencia de mejora]
```

#### Bonus Extra
**Análisis cruzado:** Toma dos textos que presenten posiciones opuestas sobre un mismo tema. Usa el prompt en ambos para identificar qué bando tiene argumentos más sólidos desde el punto de vista lógico y metodológico.

#### Pregunta de Reflexión
¿Cómo cambia tu percepción sobre un texto académico después de someterlo a este análisis crítico? ¿Identificaste sesgos que coinciden con tus propias creencias preconcebidas?

---

### 5. Detección de ADN textual
> **Tag:** Análisis estilométrico
> **Imagen:** img/05-adn-textual.jpg

#### Objetivo Educacional
**Desarrollar capacidad analítica forense sobre textos mediante estilometría computacional, identificando patrones de autoría, autenticidad académica e indicadores de generación por IA.**

#### Descripción
La IA analiza el "ADN lingüístico" de un texto: métricas cuantitativas, características cualitativas y patrones estilísticos. Puede determinar probabilidad de autoría humana vs. IA, detectar inconsistencias y evaluar autenticidad académica. Es meta-irónico: IA detectando IA. En la práctica, este ejercicio desarrolla una sensibilidad lingüística que va más allá de la simple detección: te enseña a observar rasgos como la variabilidad sintáctica, la presencia de marcas personales en la escritura, el uso de muletillas o la uniformidad excesiva que delata una generación automática. Comprender estos patrones te hace mejor escritor, mejor lector y más consciente de las huellas que tu propio estilo deja en cada texto que produces.

#### Info: Un trabajo creado por un investigador y otro por una IA
- [TFG. Análisis del Sesgo Algorítmico en Sistemas de IA](https://github.com/MarioFlorido/TallerIA2/raw/main/TFG.Analisis_del_sesgo_Algoritmico_en_Sistemas_de_IA.pdf)
- [TFG. Arquitectura para el Alzheimer. Residencias o viviendas adaptables](https://github.com/MarioFlorido/TallerIA2/raw/main/TFG.Arquitectura_para_el_Alzheimer.pdf)

#### Info: Notas
*Espacio para anotar ideas, reflexiones ejemplos, URL.*

#### Prompt Principal
```
Eres un experto en estilometría y análisis forense de textos académicos.

Analiza el siguiente texto con profundidad científica:
[INSERTAR TEXTO]

Proporciona un PERFIL ESTILÍSTICO COMPLETO:

1. MÉTRICAS CUANTITATIVAS:
- Longitud promedio de oraciones
- Índice de legibilidad (Flesch-Kincaid)
- Riqueza léxica (type-token ratio estimado)
- Frecuencia de voz pasiva vs activa
- Uso de conectores lógicos (frecuencia)

2. CARACTERÍSTICAS CUALITATIVAS:
- Nivel de formalidad (1-10)
- Complejidad sintáctica (simple/media/alta)
- Registro académico (disciplina probable)
- Tono (objetivo/apasionado/descriptivo)
- Uso de jerga técnica (frecuencia y apropiación)

3. INDICADORES DE AUTORÍA:
- Probabilidad de autoría humana vs IA (0-100%)
- Señales de escritura por IA (si las hay):
  * Frases excesivamente pulidas
  * Falta de errores naturales
  * Patrones repetitivos
  * Ausencia de voz personal
- Señales de escritura humana:
  * Inconsistencias estilísticas naturales
  * Giros idiomáticos personales
  * Errores humanos típicos

4. CONCLUSIÓN:
- ¿Este texto parece auténticamente académico?
- ¿Sugiere autoría única o múltiple?
- ¿Hay indicios de plagio o generación automática?

Presenta el análisis en formato de INFORME PERICIAL
```

#### Bonus Extra
**Experimento de Turing:** Escribe tú mismo un párrafo de 200 palabras sobre un tema académico. Pídele a la IA que genere otro párrafo similar. Mezcla ambos y pásalos por el detector. ¿Puede la IA identificar cuál escribiste tú? ¿Qué revelan las diferencias sobre tu estilo?

#### Pregunta de Reflexión
¿Qué implicaciones éticas tiene poder detectar textos generados por IA? ¿Cómo afecta esto a la autenticidad académica y la evaluación del aprendizaje?

---

# FASE 3: INVESTIGACIÓN
## Validar y comparar información

---

### 6. Arqueología digital
> **Tag:** Rastreo el origen de afirmaciones
> **Imagen:** img/06-arqueologia-digital.jpg

#### Objetivo Educacional
**Desarrollar habilidades avanzadas de fact-checking mediante búsqueda inversa: partir de una conclusión o afirmación popular para rastrear su fuente primaria, validar su precisión y detectar distorsiones en su propagación.**

#### Descripción
En lugar de buscar desde preguntas, esta técnica revolucionaria parte de afirmaciones que "todo el mundo sabe" y rastrea hacia atrás hasta encontrar el estudio original. La IA actúa como arqueólogo digital, desenterrando el origen real de "datos" populares, identificando cómo se distorsionaron y validando su autenticidad científica actual. Esta actividad es especialmente reveladora porque demuestra cómo muchas ideas ampliamente aceptadas —incluso en contextos académicos— se basan en estudios mal citados, sacados de contexto o directamente malinterpretados a lo largo de su cadena de difusión. Practicar este rastreo inverso desarrolla un hábito intelectual fundamental: no dar por válida ninguna afirmación sin verificar su procedencia y el rigor de su base empírica.

#### Info: Afirmaciones pseudocientíficas para investigar
- *Sólo usamos el 10% de nuestro cerebro.*
- *El 93% de la comunicación es no verbal.*
- *La música de Mozart aumenta la inteligencia.*
- *Lo similar cura lo similar.*
- *Los zurdos son más creativos.*

#### Prompt Principal
```
Actúa como arqueólogo de información científica y experto en validación de fuentes.

Tengo esta AFIRMACIÓN o CONCLUSIÓN que aparece en múltiples textos:
[INSERTAR AFIRMACIÓN]

Necesito que hagas ARQUEOLOGÍA DIGITAL INVERSA:

1. RASTREO DE ORIGEN:
   - ¿Cuál es la fuente primaria original de esta afirmación?
   - ¿Quién hizo el estudio o investigación original?
   - ¿En qué año y contexto se hizo?
   - ¿Cuál fue la metodología exacta utilizada?

2. ANÁLISIS DE DISTORSIÓN:
   - ¿Cómo se ha citado esta afirmación en la literatura?
   - ¿Hay distorsiones o malinterpretaciones comunes?
   - ¿Se cita correctamente o se ha "telefoneado"?
   - ¿Qué matices importantes se pierden al citarla?

3. VALIDACIÓN CIENTÍFICA:
   - ¿El estudio original ha sido replicado?
   - ¿Hay estudios posteriores que confirmen o contradigan?
   - ¿Existe consenso científico actual sobre esta afirmación?
   - ¿Qué dicen los meta-análisis recientes?

4. MAPA DE CITAS:
   - Crea un árbol genealógico de cómo se propagó esta idea
   - Identifica puntos donde la afirmación se transformó

5. VEREDICTO FINAL:
   - ¿Es válida esta afirmación? (Escala 1-10 con justificación)
   - ¿En qué contextos SÍ aplica y en cuáles NO?
   - Reformulación correcta basada en evidencia actual

Formato: Informe estructurado con secciones claras y fuentes verificables
```

#### Bonus Extra
**Cazadores de mitos académicos:** Crea una lista colaborativa de "10 mitos académicos más populares" en tu disciplina. Cada estudiante investiga uno usando el prompt y presenta sus hallazgos. Ejemplos: "Solo usamos el 10% del cerebro", "Estilos de aprendizaje VAK", "Efecto Mozart".

#### Pregunta de Reflexión
¿Cuántas afirmaciones académicas que das por ciertas podrían beneficiarse de este análisis? ¿Cómo cambia esto tu responsabilidad al citar información en tus trabajos?

---

### 7. Matrices de fuentes
> **Tag:** Análisis comparativo de fuentes
> **Imagen:** img/07-matrices-fuentes.jpg

#### Objetivo Educacional
**Aprender a realizar análisis comparativos exhaustivos de literatura científica mediante matrices que serían imposibles de construir manualmente en poco tiempo, identificando consensos, contradicciones y lagunas de investigación.**

#### Descripción
La IA compara sistemáticamente múltiples fuentes académicas (3 o más) creando una matriz detallada que contrasta metodologías, hallazgos, limitaciones y conclusiones. Automatiza un proceso que normalmente tomaría horas y permite identificar patrones y discrepancias entre estudios. Este enfoque matricial es una práctica estándar en las revisiones sistemáticas de literatura, pero su complejidad manual suele disuadir a los estudiantes de aplicarlo con rigor. Con la asistencia de la IA, puedes construir estas matrices de forma rápida, iterar sobre los criterios de comparación y descubrir lagunas de investigación que no serían evidentes al leer los artículos de forma aislada.

#### Info: Ejemplos
[Referencias académicas (por tema) sobre Inteligencia Artificial y sus implicaciones](https://hackmd.io/@maflope/SJDJQ_2gWl)

#### Prompt Principal
```
Eres un investigador especializado en análisis comparativo de literatura científica.

He recopilado 3 artículos sobre [TEMA]. Necesito que crees una MATRIZ COMPARATIVA EXHAUSTIVA que incluya:

ESTRUCTURA DE LA MATRIZ:

| Criterio | Artículo 1 | Artículo 2 | Artículo 3 | Síntesis |
|----------|------------|------------|------------|----------|

CRITERIOS A COMPARAR:
1. Hipótesis principal
2. Metodología empleada (detallada)
3. Tamaño y características de la muestra
4. Limitaciones reconocidas por los autores
5. Hallazgos principales (3-4 puntos clave)
6. Conclusiones
7. Áreas de consenso entre estudios
8. Contradicciones o discrepancias
9. Lagunas de investigación identificadas

Después de la matriz, proporciona:
- Un párrafo de SÍNTESIS INTEGRADORA
- 3 preguntas de investigación derivadas de las contradicciones encontradas

ARTÍCULOS:
[Pegar los 3 textos o resúmenes]
```

#### Bonus Extra
**Expansión progresiva:** Comienza con 3 artículos. Luego añade un cuarto y quinto artículo a la matriz. Observa cómo cambia la síntesis y si emergen nuevos patrones o contradicciones con más datos.

#### Pregunta de Reflexión
¿Qué descubriste al comparar sistemáticamente las fuentes que no habrías notado leyéndolas individualmente? ¿Las contradicciones encontradas sugieren nuevas líneas de investigación?

---

### 8. Estratega investigadora asistida
> **Tag:** Búsqueda académica profesional
> **Imagen:** img/08-estratega-investigadora.jpg

#### Objetivo Educacional
**Aprender a diseñar estrategias de búsqueda bibliográfica rigurosas y efectivas mediante la identificación de términos clave, uso de tesauros especializados, construcción de ecuaciones booleanas y selección estratégica de fuentes de información académica.**

#### Descripción
La IA actúa como especialista en documentación científica que te ayuda a construir búsquedas bibliográficas profesionales desde cero. No se trata solo de "buscar en Google Scholar", sino de diseñar estrategias sistemáticas con vocabulario controlado, operadores booleanos y selección de bases de datos apropiadas para tu disciplina. Esta actividad aborda una de las carencias más habituales en la formación universitaria: la mayoría de estudiantes realizan búsquedas intuitivas y poco eficientes, perdiendo tiempo y obteniendo resultados de calidad irregular. Aprender a construir ecuaciones de búsqueda, manejar tesauros y seleccionar las bases de datos adecuadas marca la diferencia entre una revisión bibliográfica superficial y una verdaderamente rigurosa y reproducible.

#### Info: Temas
- *Estimulación Magnética Transcraneal y neuroplasticidad en pacientes con tumores cerebrales*
- *Impacto del apoyo social y las redes comunitarias en el afrontamiento psicológico de pacientes con tumores cerebrales*
- *Análisis sociológico del movimiento cátaro como herejía medieval*

#### Prompt Principal
```
Actúa como un especialista en documentación científica y búsqueda bibliográfica profesional.

Necesito diseñar una estrategia de búsqueda para mi trabajo sobre: [TEMA DE TU TRABAJO]

Disciplina: [Tu área - Ej: Educación, Psicología, Ingenierías, etc.]
Extensión del trabajo: [Nº páginas aproximadas]
Nivel: [Grado/Máster]

AYÚDAME PASO A PASO:

1. ANÁLISIS Y DESCOMPOSICIÓN DEL TEMA:
   - Identifica los 3-4 conceptos centrales de mi tema
   - Para cada concepto central, dame:
     * Término principal
     * 3-4 sinónimos o términos relacionados
     * Términos más específicos (si aplica)
     * Términos más generales (si aplica)

2. VOCABULARIO CONTROLADO BILINGÜE:
   - Términos en CASTELLANO (con variantes España/Latinoamérica si existen)
   - Términos en INGLÉS (esenciales para búsquedas internacionales)
   - Consulta de TESAUROS especializados recomendados para mi disciplina

3. ECUACIONES DE BÚSQUEDA:
   Diseña 3 ecuaciones usando operadores booleanos (AND, OR, NOT):
   
   ECUACIÓN ESPECÍFICA (alta precisión):
   [Para encontrar pocos resultados muy relevantes]
   
   ECUACIÓN EQUILIBRADA (recomendada):
   [Balance óptimo precisión-alcance]
   
   ECUACIÓN AMPLIA (exploratoria):
   [Para descubrir literatura relacionada]
   
   Para cada ecuación indica:
   - La cadena de búsqueda exacta
   - Qué tipo de resultados esperar
   - Cuándo usarla

4. FUENTES DE INFORMACIÓN RECOMENDADAS:
   Prioriza y justifica qué bases de datos consultar:
   - Bases multidisciplinares (Google Scholar, Scopus, WOS)
   - Bases especializadas de mi disciplina (con acceso institucional)
   - Repositorios y bases de tesis
   - Revistas clave de acceso abierto
   - Criterios de calidad: JCR, índice H, peer-review
   
   ORDEN RECOMENDADO: [1º, 2º, 3º...] con justificación

5. FILTROS Y CRITERIOS:
   - Rango temporal sugerido: [con justificación]
   - Tipos de documento prioritarios
   - Idiomas de búsqueda
   - Criterios de inclusión/exclusión

FORMATO: Entrega estructurada con las ecuaciones listas para copiar y pegar
```

#### Bonus Extra
**Test de efectividad:** Ejecuta las 3 ecuaciones en alguna base de datos académica. Compara: ¿Cuántos resultados da cada una? ¿Cuál ofrece el mejor balance? Documenta los 5 primeros resultados de cada búsqueda y evalúa su relevancia. Luego, ajusta las ecuaciones basándote en los resultados reales.

#### Pregunta de Reflexión
¿Cómo cambia tu proceso de búsqueda al usar estrategias sistemáticas vs. búsquedas improvisadas? ¿Qué diferencia notas en la calidad y relevancia de las fuentes encontradas?

---

# FASE 4: PRODUCCIÓN
## Crear contenido académico

---

### 9. Salida de documentos
> **Tag:** Adaptación por tipo de audiencia
> **Imagen:** img/09-salida-documentos.jpg

#### Objetivo Educacional
**Dominar la alternancia de código (code-switching) retórico: transformar el mismo contenido académico para audiencias radicalmente diferentes, manteniendo la esencia pero adaptando registro lingüístico, tono, estructura y vocabulario.**

#### Descripción
Esta habilidad profesional crítica te permite comunicar efectivamente con cualquier audiencia. No se trata de simplificar o complicar, sino de hacer verdadera adaptación estratégica. Aprenderás a hablar el "idioma" de académicos, ejecutivos, público general, audiencias jóvenes y profesionales técnicos con el mismo mensaje. En el mundo profesional y académico, la capacidad de adaptar un mismo contenido a diferentes interlocutores es una de las competencias comunicativas más demandadas y menos trabajadas. Un investigador que solo sabe escribir para revistas científicas, un profesional que no puede explicar su proyecto a un público no especializado o un estudiante que no distingue entre un registro formal e informal pierden oportunidades de impacto y conexión con sus audiencias.

#### Info: Temas para la comunicación
- *Importancia de ciberseguridad*
- *CAmbio climático y negacionismo*
- *Inteligencia artificial y brecha digital*

#### Prompt Principal
```
Eres un experto en comunicación estratégica y adaptación de registro lingüístico.

Tengo este CONTENIDO CENTRAL que necesito comunicar:
[INSERTAR CONTENIDO - Ej: Importancia de la ciberseguridad, cambio climático, etc.]

Necesito que ADAPTES este contenido para 5 AUDIENCIAS DIFERENTES, manteniendo la esencia pero transformando completamente el estilo:

1. AUDIENCIA ACADÉMICA (Paper científico)
   - Registro: Formal, técnico, impersonal
   - Estructura: Abstract, introducción, metodología implícita
   - Vocabulario: Terminología especializada
   - Tono: Objetivo, distante, riguroso
   - Extensión: 200 palabras

2. AUDIENCIA EJECUTIVA (Memo corporativo)
   - Registro: Profesional, directo, orientado a resultados
   - Estructura: Conclusión primero, bullets
   - Vocabulario: Business, ROI, estratégico
   - Tono: Persuasivo, urgente, pragmático
   - Extensión: 150 palabras

3. AUDIENCIA GENERAL (Artículo divulgativo)
   - Registro: Accesible, claro, narrativo
   - Estructura: Storytelling, ejemplos cotidianos
   - Vocabulario: Simple, metáforas comprensibles
   - Tono: Cercano, educativo, enganchador
   - Extensión: 200 palabras

4. AUDIENCIA JOVEN (Post redes sociales)
   - Registro: Casual, dinámico, visual
   - Estructura: Fragmentado, punchy, con emojis
   - Vocabulario: Coloquial contemporáneo
   - Tono: Informal, empático, relatable
   - Extensión: 100 palabras

5. AUDIENCIA TÉCNICA (Documentación profesional)
   - Registro: Preciso, instructivo, funcional
   - Estructura: Pasos, listas, especificaciones
   - Vocabulario: Técnico-práctico
   - Tono: Neutral, claro, sin ambigüedades
   - Extensión: 150 palabras

Para cada versión:
- Mantén la ESENCIA del mensaje
- Adapta COMPLETAMENTE el estilo
- Usa ejemplos apropiados para cada audiencia
- Justifica brevemente las decisiones retóricas clave

FORMATO: Tabla con columnas [Audiencia | Texto adaptado | Decisiones retóricas]
```

#### Bonus Extra
**El desafío del Orador:** Toma tu tema de TFG/TFM. Crea versiones de 30 segundos, 2 minutos y 10 minutos para tres audiencias diferentes (tu director de tesis, un reclutador de empresa, tu abuela). Practica presentar cada versión cronometrada.

#### Pregunta de Reflexión
¿En qué situaciones profesionales o académicas aplicarías inmediatamente esta técnica? ¿Cómo cambia tu percepción sobre "escribir bien" al entender que depende completamente de la audiencia?

---

### 10. Edición académica
> **Tag:** Edición multinivel de textos
> **Imagen:** img/10-edicion-academica.jpg

#### Objetivo Educacional
**Dominar el proceso de edición profesional mediante un análisis multinivel que mejora estructura, claridad, estilo y corrección lingüística de textos académicos, manteniendo la voz autoral y potenciando la calidad argumentativa.**

#### Descripción
Esta es la actividad más innovadora: la IA NO escribe por ti, sino que actúa como editor profesional que revisa tu texto en múltiples niveles (macro, medio, micro), identificando problemas específicos y sugiriendo mejoras concretas. Conservas tu creatividad y autoría, pero obtienes retroalimentación experta que normalmente solo darían profesores experimentados. Este enfoque reproduce el flujo de trabajo real de las editoriales académicas y científicas, donde un manuscrito pasa por varias rondas de revisión antes de su publicación. Al aplicar este proceso a tus propios textos, no solo mejoras el documento en cuestión, sino que interiorizas criterios de calidad que acabarás aplicando de forma autónoma: coherencia argumentativa, precisión terminológica, integración adecuada de fuentes y corrección formal.

#### Info: Temas para la comunicación
[Preprint sobre un artículo sobre la resistencia digital](https://raw.githubusercontent.com/MarioFlorido/TallerIA2/49e3f31768a3a9e694f4b68c45076bcb77ea2c1b/Articulo_Resistencia_Digital_Cooperativismo.docx)

#### Prompt Principal
```
Actúa como editor académico profesional con estándares de publicación científica.

Necesito una EDICIÓN MULTINIVEL EXHAUSTIVA del siguiente texto:

[PEGAR TU TEXTO AQUÍ O ADJUNTA TU ARCHIVO]

Contexto:
- Tipo de trabajo: [ensayo/TFG/artículo/reseña]
- Disciplina: [tu área]
- Estilo de citación: [APA/Vancouver/Chicago/otro]

REALIZA UN ANÁLISIS EN 5 NIVELES:

1. NIVEL MACRO - ESTRUCTURA Y COHERENCIA:
   ¿El argumento fluye lógicamente?
   ¿Cada párrafo tiene una idea principal clara?
   ¿Las transiciones son efectivas?
   ¿Hay párrafos que deberían reorganizarse, fusionarse o dividirse?
   
   RESULTADO: Mapa estructural + 3 cambios estructurales prioritarios

2. NIVEL MEDIO - CLARIDAD Y PRECISIÓN:
   Identifica (máximo 5 casos):
   - Oraciones confusas o ambiguas [marca con →]
   - Afirmaciones sin respaldo
   - Términos técnicos que necesitan definición
   - Uso impreciso de conceptos
   
   RESULTADO: Lista de problemas + REESCRITURA de las 3 oraciones más problemáticas

3. NIVEL MICRO - ESTILO ACADÉMICO:
   Detecta (máximo 5 casos):
   - Palabras redundantes o innecesarias
   - Voz pasiva excesiva [sugiere alternativa activa]
   - Registro inadecuado (muy coloquial/muy rebuscado)
   - Falta de variedad sintáctica
   
   RESULTADO: Ejemplos específicos + REFORMULACIÓN mejorada

4. INTEGRACIÓN DE FUENTES:
   - ¿Las citas están bien introducidas?
   - ¿Hay equilibrio entre tu voz y las fuentes?
   - ¿Las paráfrasis son genuinas?
   - ¿Alguna idea requiere atribución?
   
   RESULTADO: 2-3 ejemplos de cómo mejorar la integración

5. CORRECCIÓN TÉCNICA:
   - Errores de concordancia
   - Puntuación problemática
   - Formato de citas inconsistente
   
   RESULTADO: Lista de los 5 errores más importantes

━━━━━━━━━━━━━━━━━━━━━━━━━━━
VEREDICTO FINAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━

EVALUACIÓN (escala 1-10):
   - Estructura y coherencia: [X/10]
   - Claridad: [X/10]
   - Rigor académico: [X/10]
   - Corrección lingüística: [X/10]

LOS 3 CAMBIOS MÁS URGENTES:
   1. [cambio prioritario]
   2. [cambio prioritario]
   3. [cambio prioritario]

LOS 3 PUNTOS MÁS FUERTES:
   1. [fortaleza]
   2. [fortaleza]
   3. [fortaleza]

IMPORTANTE: 
- Mantén siempre MI voz autoral
- Señala problemas específicos, no generalidades
- Sugiere mejoras concretas, no solo críticas
- Prioriza lo más importante
```

#### Bonus Extra
**Edición iterativa:** Toma un párrafo de tu trabajo. Aplica el prompt. Incorpora los cambios sugeridos. Vuelve a aplicar el prompt al párrafo mejorado. ¿Mejora aún más? ¿En qué punto alcanzas el "rendimiento decreciente"? Compara las 3 versiones (original, 1ª edición, 2ª edición).

**Checklist personalizado:** Pide a la IA que genere un "checklist de calidad académica" específico para tu disciplina y tipo de trabajo. Úsalo como autoevaluación antes de entregar cualquier trabajo.

#### Pregunta de Reflexión
¿En qué nivel (macro, medio o micro) descubriste más problemas en tu texto? ¿Qué aprendiste sobre tu estilo de escritura que no habías notado antes? ¿Cómo te aseguras de que las correcciones mejoran el texto sin eliminar tu voz personal?

**Reflexión ética:** Si un profesor te preguntara cómo usaste IA en este trabajo, ¿podrías explicarlo con transparencia y sentirte cómodo? ¿Dónde está la línea entre "asistencia para mejorar" y "hacer el trabajo por ti"?

---

# ÉTICA

## Guía de Uso Ético

### Principio Fundamental
**La IA es tu aliada en el aprendizaje, no tu sustituta.** Estas herramientas están diseñadas para POTENCIAR tu pensamiento crítico, no para reemplazarlo. El objetivo es que desarrolles habilidades que te servirán toda la vida académica o profesional, no solo para completar tareas.

### USA LA IA PARA:
- Verificar información antes de citarla
- Mejorar tu comunicación académica
- Desarrollar habilidades metacognitivas
- Aprender más profundamente
- Analizar críticamente textos
- Expandir tu capacidad de razonamiento

### NO LA USES PARA:
- Hacer trampa en trabajos
- Evitar pensar críticamente
- Plagiar o copiar sin atribución
- Reemplazar tu voz autoral
- Generar trabajos completos sin comprensión
- Evitar el proceso de aprendizaje

---

# AVISO

## Aviso Importante
La parte de este taller que se ha realizado con IA:
- La secuenciación de contenidos
- Los prompts fueron refinados con ChatGPT y Claude
