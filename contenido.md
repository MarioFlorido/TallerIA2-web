# FASE 1: FUNDAMENTOS
## Entender cómo funciona la IA

---

### 1. Hackear Prompts
> **Tag:** Ingeniería inversa
> **Imagen:** img/01-hackear-prompts.jpg

#### Objetivo Educacional
**Desarrollar habilidades sobre cómo funcionan los prompts mediante ingeniería inversa: analizar una respuesta de IA para deducir qué prompt la generó y cómo optimizarla.**

#### Descripción
Normalmente escribes un prompt y esperas a ver qué pasa. Este ejercicio funciona al revés: partes de una respuesta ya generada e intentas deducir qué instrucción la produjo.

Es una forma de aprender ingeniería de prompts desde dentro. Al reconstruir el prompt original, identificar por qué funciona o falla y reescribirlo para obtener algo mejor, entiendes qué elementos influyen realmente en el resultado: el rol que asignas, el contexto que das, el formato que pides, los límites que estableces. No como teoría, sino comprobándolo directamente.

Quien sabe desmontar un prompt sabe construir uno mejor.

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
**Desafío:** Genera un texto con alguna errata. Por ejemplo, en el ejercicio anterior, incluye un autor nuevo como Mickey Mouse. Verás que la IA lo incluye en el texto. Indícale a la IA que reconstruya el prompt original indicando por qué lo ha incluido.

---

### 2. Método Socrático
> **Tag:** Aprendizaje por preguntas
> **Imagen:** img/02-metodo-socratico.jpg

#### Objetivo Educacional
**Transformar la relación con la IA: en lugar de usarla para obtener respuestas directas, entrenarla para que actúe como tutor que guía el pensamiento mediante preguntas estratégicas, fomentando el razonamiento autónomo.**

#### Descripción
La mayoría de las veces usas la IA para obtener respuestas. Este ejercicio invierte esa lógica: la IA no te da nada, solo te pregunta. Y esas preguntas son las que te obligan a pensar.

Es incómodo al principio. Estás acostumbrado a recibir información, no a construirla. Pero ahí está precisamente el valor: razonas tú, argumentas tú, llegas a las conclusiones tú. La IA solo aparece para empujarte un poco más lejos con la pregunta adecuada en el momento oportuno.

El resultado no es solo entender mejor un concepto. Es aprender a cuestionar lo que das por sentado, a considerar otras perspectivas y a sostener tus propios argumentos. Una habilidad que, una vez desarrollada, se queda.

#### Info: Preguntas para experimentar el método socrático
- *"¿Debe el médico respetar siempre la decisión del paciente, incluso cuando va en contra del tratamiento recomendado?"*
- *"¿Las empresas deberían priorizar el beneficio económico por encima de su responsabilidad social?"*
- *"¿Por qué las desigualdades sociales tienden a reproducirse a lo largo de generaciones?"*
- *"¿La democracia siempre produce mejores resultados que otros sistemas políticos?"*

#### Prompt Principal
```
Actúa como un tutor socrático experto.
Tu objetivo NO es dar respuestas, sino guiar el pensamiento del estudiante paso a paso mediante preguntas estratégicas. Nunca proporciones respuestas, definiciones ni soluciones.

INSTRUCCIONES GENERALES
1. Haz solo UNA pregunta por turno.
2. Espera SIEMPRE la respuesta del estudiante antes de continuar.
3. Usa preguntas para dividir problemas, explorar supuestos y fomentar razonamiento autónomo.
4. Si la respuesta es confusa o incorrecta, haz preguntas del tipo:
      "¿Estás seguro?", "¿Qué pasaría si…?", "¿Ocurre siempre así?"...
5.

FLUJO DE INTERACCIÓN

Cuando el estudiante pregunte: [PREGUNTA DEL ESTUDIANTE AQUÍ]

Haz lo siguiente:

1. Formula una pregunta de clarificación: "Antes de continuar, ¿qué entiendes por [algo relacionado con la pregunta del estudiante pero no directamente con el concepto clave]?"
2. Si consideras que hay ambigüedades en su respuesta, pon ejemplos y pregunta sobre ellos.
3. A partir de entonces, formula solo una pregunta guía por turno, sobre:
    * fundamentos
    * relaciones
    * aplicación
    * consecuencias

Cuando observes que el estudiante ya tiene los elementos necesarios, formula una pregunta de síntesis:
"Con todo lo que has reflexionado, ¿cómo responderías ahora tu propia pregunta?"


REGLAS CRÍTICAS: Nunca muestres todas las preguntas a la vez. Solo una por turno. Prohibido usar listas de viñetas o múltiples preguntas en un mismo mensaje. Mantén un tono paciente, curioso y profesional. Si el estudiante se desvía del tema, reconduce la conversación sutilmente hacia el objetivo de aprendizaje. No prolongues en exceso el diálogo con preguntas vacias, redundantes...
```

#### Pregunta de Reflexión
¿Cómo fue tu experiencia aprendiendo por preguntas en lugar de respuestas? ¿En qué momentos del aprendizaje es más valioso este enfoque vs. obtener información directa?

---

# FASE 2: ANÁLISIS
## Desarrollar pensamiento crítico

---

### 3. Transformar visualmente
> **Tag:** Texto a visualización
> **Imagen:** img/03-transformar-visual.jpg

#### Objetivo Educacional
**Aprender a transformar textos académicos densos en múltiples formatos visuales de conocimiento, facilitando la comprensión y comunicación de información compleja.**

#### Descripción
Un texto denso no siempre se entiende mejor leyéndolo más veces. A veces lo que necesitas es verlo de otra forma.

La IA puede convertir cualquier texto complejo en un mapa conceptual, una línea de tiempo, una tabla comparativa o un diagrama de flujo. En minutos, y con tantas iteraciones como quieras. Pero lo más valioso no es la velocidad: es que para pedir la visualización correcta, primero tienes que preguntarte qué tipo de relación describe el texto. ¿Es una secuencia? ¿Una jerarquía? ¿Una comparación? Esa pregunta, aparentemente técnica, es en realidad una pregunta de comprensión. Y responderla bien significa que ya has entendido algo importante del contenido.

La visualización es el resultado. El aprendizaje ocurre antes.

#### Info: Temas especialmente complejos para trabajar con la IA
Buscar textos sobre: *Teoría de la Relatividad, Programación Neurolingüística, Principio de incertidumbre de Heisenberg, Síndrome de Cushing, Interacción estructura-agencia, Filosofía del lenguaje y de la mente...*

#### Prompt Principal
```
Actúa como un diseñador instruccional experto en visualización de conocimiento.

Tengo el siguiente texto académico complejo:
[INSERTAR TEXTO]

Tarea a realizar:
1. SÍNTESIS PREVIA: Identifica en 3 puntos clave el núcleo lógico del texto (tesis, proceso principal o categorías centrales).
2. SELECCIÓN ESTRATÉGICA: Elige los 3 formatos visuales de la siguiente lista que mejor representen la estructura del texto. Justifica brevemente tu elección.
3. GENERACIÓN: Proporciona el código Mermaid (o descripción detallada) para cada uno.

Formatos disponibles:
A. MAPA CONCEPTUAL (Mermaid: `graph TD`): Enfocado en la jerarquía y relaciones ontológicas. Máximo 15 nodos para mantener claridad.
B. DIAGRAMA DE FLUJO/PROCESO (Mermaid: `graph LR` o `sequenceDiagram`): Ideal si hay una secuencia lógica, causal o temporal. Incluye hitos de decisión.
C. TABLA COMPARATIVA ESTRUCTURADA: Crea una tabla Markdown con al menos 5 criterios de comparación transversales.
D. MATRIZ DE ANÁLISIS 2x2: Identifica dos variables críticas (ejes X e Y) y posiciona los elementos del texto en los cuadrantes.
E. TIMELINE (Mermaid: `timeline`): Solo si el factor cronológico es el eje vertebrador del texto.

Para cada formato:
- Justifica por qué ese formato es apropiado
- Evita frases largas dentro de los nodos de los diagramas (máximo 4-5 palabras por nodo).
- Usa diferentes formas de nodos en Mermaid para distinguir conceptos de ejemplos o procesos.
- Entrega cada diagrama en un bloque de código separado para facilitar la copia.

IMPORTANTE: Si el texto es contradictorio o presenta debates, prioriza la Matriz 2x2 o la Tabla Comparativa para mostrar las diferentes perspectivas.
```

#### Bonus Extra
**Mermaid:** Es una sencilla codificación, con un lenguaje muy sencillo, que posibilita crear grafos, diagramas... algunas IA pueden interpretarlo o pueden generar el código para su visualización. Internet está repleto de visualizadores, tanto gratuitos como de pago y Microsoft dispone de plugins para su integración en Word, PowerPoint...

---

### 4. Auditoría de textos
> **Tag:** Detección de sesgos y falacias
> **Imagen:** img/04-auditoria-textos.jpg

#### Objetivo Educacional
**Desarrollar pensamiento crítico avanzado mediante el uso de IA como herramienta de auditoría intelectual que identifica sesgos cognitivos, falacias lógicas y debilidades metodológicas en textos académicos.**

#### Descripción
Leer un texto académico no es lo mismo que leerlo bien. La mayoría de los sesgos, las falacias y los problemas metodológicos pasan desapercibidos precisamente porque el texto tiene forma de rigor aunque no lo tenga.

Este ejercicio te entrena para ver lo que está debajo: si una conclusión se sostiene realmente en los datos, si la muestra es suficiente, si el autor está presentando como universal algo que solo ocurrió en un contexto muy concreto, o si hay una correlación disfrazada de causa. La IA actúa aquí como un auditor que señala dónde mirar, pero la lectura crítica la haces tú.

Con el tiempo, ese filtro se vuelve automático. Y se aplica a cualquier texto, de cualquier disciplina, en cualquier situación profesional.

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

#### Terminología empleada:

### SESGOS COGNITIVOS

- **Sesgo de confirmación** — Buscar solo lo que confirma lo que ya crees, ignorando lo que lo contradice. *Ejemplo: un investigador que solo cita estudios favorables a su hipótesis.*
- **Sesgo de disponibilidad** — Sobrevalorar lo que te viene fácilmente a la mente. *Ejemplo: creer que los accidentes aéreos son más frecuentes que los de tráfico porque generan más noticias.*
- **Sesgo de anclaje** — Dejarse influir demasiado por el primer dato que recibes. *Ejemplo: valorar un estudio como "bueno" porque el primero que leíste del mismo autor era excelente.*

### FALACIAS LÓGICAS

- **Ad hominem** — Atacar a quien dice algo en lugar de lo que dice. *Ejemplo: "Este estudio no es fiable porque su autor tiene intereses comerciales."*
- **Falsa causa** — Asumir que si B ocurre después de A, A lo ha causado. *Ejemplo: "Desde que se legalizó el cannabis, aumentó el consumo de alcohol. El cannabis lleva al alcohol."*
- **Generalización apresurada** — Sacar conclusiones amplias de pocos casos. *Ejemplo: entrevistar a tres estudiantes y concluir cómo estudia "la juventud española".*
- **Pendiente resbaladiza** — Suponer que un primer paso lleva inevitablemente a consecuencias extremas. *Ejemplo: "Si permitimos el uso de IA en clase, nadie volverá a pensar por sí mismo."*

### DEBILIDADES METODOLÓGICAS

- **Problemas con la muestra** — Muestra demasiado pequeña, sesgada o no representativa. *Ejemplo: estudiar hábitos de lectura encuestando solo a usuarios de bibliotecas universitarias.*
- **Confusión correlación-causalidad** — Dos variables se mueven juntas, pero eso no significa que una cause la otra. *Ejemplo: los países con más chocolatinas per cápita tienen más premios Nobel... pero el chocolate no da premios.*
- **Variables no controladas** — Factores externos que influyen en el resultado y no se han tenido en cuenta. *Ejemplo: un estudio sobre rendimiento académico que no controla el nivel socioeconómico de los participantes.*

---

### 5. Detección de ADN textual
> **Tag:** Análisis estilométrico
> **Imagen:** img/05-adn-textual.jpg

#### Objetivo Educacional
**Desarrollar capacidad analítica forense sobre textos mediante estilometría computacional, identificando patrones de autoría, autenticidad académica e indicadores de generación por IA.**

#### Descripción
Todo texto deja huellas. La forma en que construyes las frases, si varías o repites estructuras, si aparece tu voz o si el texto suena demasiado pulido para ser humano. Esos patrones son tu ADN lingüístico, y son más reveladores de lo que parece.

En este ejercicio usas la IA para analizar textos e identificar esos rasgos: si hay demasiada uniformidad sintáctica, si faltan las pequeñas imperfecciones naturales de quien escribe de verdad, si el tono es consistente o cambia sin razón. Sí, hay algo de paradoja en pedirle a una IA que detecte textos escritos por IA. Pero funciona, y el proceso te enseña más de lo que esperas.

Porque al final no se trata solo de detección. Se trata de entender qué hace que un texto suene auténtico, y usar eso para escribir mejor.

#### Info: Un trabajo creado por un investigador y otro por una IA
- [TFG. Análisis del Sesgo Algorítmico en Sistemas de IA](https://github.com/MarioFlorido/TallerIA2/raw/main/TFG.Analisis_del_sesgo_Algoritmico_en_Sistemas_de_IA.pdf)
- [TFG. Arquitectura para el Alzheimer. Residencias o viviendas adaptables](https://github.com/MarioFlorido/TallerIA2/raw/main/TFG.Arquitectura_para_el_Alzheimer.pdf)

#### Prompt Principal
```
Actua un experto en Estilometría Computacional y Lingüística Forense. Tu objetivo es realizar un "Análisis de ADN Textual" para determinar la autenticidad y el origen de un texto.

Este es el texto a analizar
[INSERTAR TEXTO]

TAREA: INFORME PERICIAL ESTILOMÉTRICO
Analiza basándote exclusivamente en evidencias observables, estructurado en:

1. ARQUITECTURA SINTÁCTICA Y LÉXICA
- Variabilidad de la longitud de oraciones: ¿Hay ritmo o es monótono?  
- Densidad de conectores lógicos: ¿La transición entre ideas es orgánica o forzada/repetitiva?  
- Riqueza de vocabulario: identifica términos inusuales o tecnicismos; comenta si predominan palabras comodín típicas de modelos de lenguaje.

2. HUELLAS DE AUTORÍA (IA vs HUMANO)
- Indicadores de IA: pulido excesivo, estructuras simétricas, ausencia de sesgos cognitivos, falta de anclaje personal/emocional.  
- Indicadores humanos: idiosincrasias, errores sutiles de puntuación, giros idiomáticos, inconsistencias narrativas naturales.

3. PRUEBA DE EVIDENCIA
- Para cada afirmación anterior, extrae una cita textual que la respalde.

4. JUICIO DE AUTENTICIDAD ACADÉMICA
- ¿El texto presenta una voz autoral única o parece collage de múltiples fuentes?  
- Evalúa el uso de jerga: ¿es apropiación profunda del concepto o uso superficial de palabras clave?

5. CONCLUSIÓN Y METADATOS DEL ANÁLISIS
- Grado de confianza (Bajo/Medio/Alto).  
- Hipótesis final: [Autoría Humana / Generación IA / Escritura Híbrida].  
- Limitaciones: aspectos del texto que impiden una conclusión definitiva.  

Como complemento:
- ¿Qué métricas o métodos computacionales podrían validar tu análisis?
```

#### Bonus Extra
**Experimento de Turing:** Escribe tú mismo un párrafo de 200 palabras sobre un tema académico. Pídele a la IA que genere otro párrafo similar. Pásalos por el detector. ¿Puede la IA identificar cuál escribiste tú? ¿Qué revelan las diferencias sobre tu estilo?

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
"Solo usamos el 10% del cerebro." "El 93% de la comunicación es no verbal." Todo el mundo lo ha oído. Casi nadie ha comprobado de dónde viene.

Este ejercicio convierte a la IA en un arqueólogo digital: parte de afirmaciones que circulan como verdades establecidas y excava hacia atrás hasta encontrar —o no encontrar— el estudio original. ¿Quién lo hizo? ¿Cuándo? ¿Con qué muestra? ¿Qué decía realmente? Muchas veces lo que encuentras no es el dato que se repite, sino algo bastante más matizado que se fue distorsionando cada vez que alguien lo citó de memoria.

El hábito que desarrollas es el más valioso: no dar por válida ninguna afirmación sin preguntarte de dónde viene.

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


#### Pregunta de Reflexión
¿Cuántas afirmaciones académicas que das por ciertas podrían beneficiarse de este análisis?

---

### 7. Matrices de fuentes
> **Tag:** Análisis comparativo de fuentes
> **Imagen:** img/07-matrices-fuentes.jpg

#### Objetivo Educacional
**Aprender a realizar análisis comparativos exhaustivos de literatura científica mediante matrices que serían imposibles de construir manualmente en poco tiempo, identificando consensos, contradicciones y lagunas de investigación.**

#### Descripción
Leer varios artículos sobre un mismo tema no es lo mismo que compararlos. Puedes terminar todos y seguir sin saber bien en qué coinciden, en qué se contradicen o qué pregunta importante ninguno responde.

La matriz de fuentes resuelve eso: obliga a confrontar los estudios criterio por criterio —metodología, muestra, hallazgos, limitaciones, conclusiones— y hace visible lo que una lectura lineal oculta. Es una herramienta estándar en las revisiones sistemáticas de literatura, pero construirla a mano con rigor lleva horas. Con la IA, el proceso es rápido y puedes iterar: cambiar los criterios, añadir más fuentes, afinar la comparación.

Lo más interesante suele aparecer en las contradicciones. Ahí es donde están las preguntas que todavía nadie ha respondido bien.

#### Info: Ejemplos
[Referencias académicas (por tema) sobre Inteligencia Artificial y sus implicaciones](https://hackmd.io/@maflope/SJDJQ_2gWl)

#### Prompt Principal
```
Eres un investigador especializado en análisis comparativo de literatura científica.

He recopilado artículos sobre [TEMA]. Necesito que crees una MATRIZ COMPARATIVA EXHAUSTIVA que incluya:

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
[Pegar los textos o resúmenes]
```

#### Bonus Extra
**Expansión progresiva:** Comienza con unos pocos artículos. Luego añade más a la matriz. Observa cómo cambia la síntesis y si emergen nuevos patrones o contradicciones con más datos. Este proceso puedes hacerlo en una hoja de cálculo

#### Pregunta de Reflexión
¿Qué descubriste al comparar sistemáticamente las fuentes que no habrías notado leyéndolas individualmente? ¿Las contradicciones encontradas sugieren nuevas líneas de investigación?

---

### 8. Estratega investigadora asistida
> **Tag:** Búsqueda académica profesional
> **Imagen:** img/08-estratega-investigadora.jpg

#### Objetivo Educacional
**Aprender a diseñar estrategias de búsqueda bibliográfica rigurosas y efectivas mediante la identificación de términos clave, uso de tesauros especializados, construcción de ecuaciones booleanas y selección estratégica de fuentes de información académica.**

#### Descripción
Buscar bibliografía no es lo mismo que buscar bien. La mayoría de estudiantes escriben unas palabras en un buscador, cogen los primeros resultados y dan el tema por resuelto. El problema es que así se pierden estudios importantes y se cuela material de poca calidad.

Este ejercicio te enseña a hacerlo de otra manera: eligiendo las palabras exactas, combinándolas con criterio y sabiendo en qué base de datos buscar según tu disciplina. La IA te guía en ese proceso paso a paso, desde cero.

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
Esta habilidad profesional crítica te permite comunicar efectivamente con cualquier audiencia. No se trata de simplificar o complicar, sino de hacer verdadera adaptación estratégica. Aprenderás a hablar el "idioma" de académicos, ejecutivos, público general, audiencias jóvenes y profesionales técnicos con el mismo mensaje.

En el mundo profesional y académico, la capacidad de adaptar un mismo contenido a diferentes interlocutores es una de las competencias comunicativas más demandadas y menos trabajadas. Un investigador que solo sabe escribir para revistas científicas, un profesional que no puede explicar su proyecto a un público no especializado o un estudiante que no distingue entre un registro formal e informal pierden oportunidades de impacto y conexión con sus audiencias.

#### Info: Temas para la comunicación
- *Importancia de la ciberseguridad*
- *Cambio climático y negacionismo*
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
Escribir un texto es solo la mitad del trabajo. La otra mitad es revisarlo bien, y eso es mucho más difícil de lo que parece.

La IA no escribe por ti en este ejercicio: lee lo que has escrito y te da retroalimentación como haría un editor profesional. Qué argumentos no se sostienen, qué frases son confusas, dónde tu voz desaparece, qué errores se repiten. En varios niveles y con señalamientos concretos, no comentarios vagos.

El texto sigue siendo tuyo. Pero cada revisión te enseña algo que la próxima vez aplicarás solo, sin necesitar que nadie te lo señale.

#### Info: Texto de ejemplo
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
Si un profesor te preguntara cómo usaste IA en este trabajo, ¿podrías explicarlo con transparencia y sentirte cómodo? ¿Dónde está la línea entre "asistencia para mejorar" y "hacer el trabajo por ti"?

---

# ÉTICA

## Guía de Uso Ético

### Principio Fundamental
**La IA es tu aliada en el aprendizaje, no tu sustituta.** Estas herramientas están diseñadas para POTENCIAR tu pensamiento crítico, no para reemplazarlo. El objetivo es que desarrolles habilidades que te servirán toda la vida académica o profesional, no solo para completar tareas.

### USA LA IA PARA:
-  Verificar información antes de citarla
-  Mejorar tu comunicación académica
-  Desarrollar habilidades metacognitivas
-  Aprender más profundamente
-  Analizar críticamente textos
-  Expandir tu capacidad de razonamiento

### NO LA USES PARA:
-  Hacer trampa en trabajos
-  Evitar pensar críticamente
-  Plagiar o copiar sin atribución
-  Reemplazar tu voz autoral
-  Generar trabajos completos sin comprensión
-  Evitar el proceso de aprendizaje
 
---

# AVISO

## Aviso Importante
Como habrás deducido parte de este taller que se ha realizado con IA:
- La secuenciación de contenidos. La IA ha asistido a darle una coherencia al itinerario de aprendizaje.
- Los prompts fueron refinados con ChatGPT y Claude.
