/* Los tiempos del inglés: la estructura de cada uno y su práctica (ver «LOS TIEMPOS DEL INGLÉS» en index.html).
   Pedido de la persona (29 de octubre de 2026): «la app nunca enseña estructuras de los diferentes tiempos que existen
   asegurando que la persona esté hablando en el tiempo correcto y sepa la correcta estructura».
   id: clave corta · u: temas donde se enseña · n / en: nombre en español y en inglés · use: para qué se usa
   cues: palabras que lo delatan · ans: respuestas cortas · tip: el error típico
   f: [renglón, fórmula, ejemplos en inglés, ejemplos en español]
      renglón: "+" afirmativa, "-" negativa, "?" pregunta, o un nombre propio (en los condicionales)
      fórmula: partes separadas por " + ", cada una «papel:texto» (s sujeto, a auxiliar, v verbo, r resto)
      ejemplos: «·» separa dos; en inglés, [así] va el auxiliar y {así} el verbo (se pintan de su color)
   q: «¿Cuál está bien dicha?»: [español, la buena, [las que suele decir quien habla español], (de qué tiempo es la buena,
      si es de otro: «quiero un café» va en presente simple aunque sea del presente continuo)]
      (las malas son errores de verdad, nunca otra forma correcta de decirlo)
   b: «Ármala»: [español, la buena, ficha que sobra (una forma equivocada), (otros órdenes que también están bien)]
      (si la frase tiene if, también vale con las dos partes al revés: eso lo hace la app sola) */
window.TENSES = [
  {
    id: "tb", u: ["n0u3"], n: "Presente de to be", en: "Present of to be",
    use: "Decir qué eres, cómo estás o dónde está algo: ser y estar.",
    cues: [],
    f: [
      ["+", "s:Sujeto + v:am / is / are + r:resto", "I{'m} tired. · She {is} my boss.", "Estoy cansado. · Ella es mi jefa."],
      ["-", "s:Sujeto + v:am / is / are + a:not + r:resto", "I{'m} [not] ready. · It {is}[n't] expensive.", "No estoy listo. · No es caro."],
      ["?", "v:Am / Is / Are + s:sujeto + r:resto?", "{Are} you busy? · {Is} it open?", "¿Estás ocupado? · ¿Está abierto?"]
    ],
    ans: "Yes, I am. · No, it isn't.",
    tip: "I → am · he, she, it → is · you, we, they → are. Y siempre di el sujeto: It's open, nunca solo «Is open».",
    q: [
      ["Estoy cansado.", "I'm tired.", ["I tired.", "I is tired.", "Am tired."]],
      ["Ella es mi jefa.", "She is my boss.", ["She are my boss.", "She my boss.", "Is my boss."]],
      ["No es caro.", "It isn't expensive.", ["It not expensive.", "Isn't expensive.", "It don't expensive."]],
      ["¿Estás ocupado?", "Are you busy?", ["Are busy you?", "Do you busy?", "Is you busy?"]],
      ["Ellos no están aquí.", "They aren't here.", ["They isn't here.", "They no are here.", "They don't here."]]
    ],
    b: [
      ["No estoy listo.", "I'm not ready.", "don't"],
      ["¿Está abierto?", "Is it open?", "Does"],
      ["¿Eres de aquí?", "Are you from here?", "Do"],
      ["Ella no está en la oficina.", "She isn't in the office.", "doesn't"]
    ]
  },
  {
    id: "ps", u: ["n1u1", "n1u2"], n: "Presente simple", en: "Simple present",
    use: "Hábitos, rutinas y cosas que siempre son ciertas.",
    cues: ["every day", "always", "usually", "sometimes", "never", "on Mondays"],
    f: [
      ["+", "s:Sujeto + v:verbo (con he, she, it: +s) + r:resto", "I {work} in a factory. · She {works} in sales.", "Trabajo en una fábrica. · Ella trabaja en ventas."],
      ["-", "s:Sujeto + a:don't / doesn't + v:verbo + r:resto", "I [don't] {drink} coffee. · He [doesn't] {speak} Spanish.", "No tomo café. · Él no habla español."],
      ["?", "a:Do / Does + s:sujeto + v:verbo + r:resto?", "[Do] you {work} on Sundays? · [Does] she {speak} English?", "¿Trabajas los domingos? · ¿Ella habla inglés?"]
    ],
    ans: "Yes, I do. · No, she doesn't.",
    tip: "Con he, she, it el verbo lleva -s (works). Pero con doesn't o does ya no: doesn't work, Does she work?",
    q: [
      ["Ella trabaja en ventas.", "She works in sales.", ["She work in sales.", "She is work in sales.", "She working in sales."]],
      ["Él no habla español.", "He doesn't speak Spanish.", ["He don't speak Spanish.", "He doesn't speaks Spanish.", "He no speak Spanish."]],
      ["¿Trabajas los domingos?", "Do you work on Sundays?", ["Are you work on Sundays?", "Work you on Sundays?", "Does you work on Sundays?"]],
      ["¿Ella habla inglés?", "Does she speak English?", ["Does she speaks English?", "Do she speak English?", "Is she speak English?"]],
      ["Siempre llego temprano.", "I always arrive early.", ["I arrive always early.", "I always arriving early.", "I'm always arrive early."]]
    ],
    b: [
      ["Ella no trabaja aquí.", "She doesn't work here.", "works"],
      ["¿Dónde vive ella?", "Where does she live?", "lives"],
      ["No tomo café.", "I don't drink coffee.", "doesn't"],
      ["¿Trabajas los sábados?", "Do you work on Saturdays?", "Are"]
    ]
  },
  {
    id: "pc", u: ["n2u1"], n: "Presente continuo", en: "Present continuous",
    use: "Lo que está pasando ahora mismo, y planes ya acordados.",
    cues: ["now", "right now", "at the moment", "this week", "Look!"],
    f: [
      ["+", "s:Sujeto + a:am / is / are + v:verbo-ing + r:resto", "I['m] {working}. · It['s] {raining}.", "Estoy trabajando. · Está lloviendo."],
      ["-", "s:Sujeto + a:am / is / are + a:not + v:verbo-ing + r:resto", "I['m not] {watching} TV.", "No estoy viendo la tele."],
      ["?", "a:Am / Is / Are + s:sujeto + v:verbo-ing + r:resto?", "[Are] you {listening} to me? · What [are] you {doing}?", "¿Me estás escuchando? · ¿Qué estás haciendo?"]
    ],
    ans: "Yes, I am. · No, she isn't.",
    tip: "No olvides am / is / are: «I working» está mal. Y verbos como like, know, want y need casi nunca van con -ing: I want, no «I'm wanting».",
    q: [
      ["Estoy trabajando.", "I'm working.", ["I working.", "I'm work.", "Am working."]],
      ["Está lloviendo.", "It's raining.", ["It raining.", "Is raining.", "It are raining."]],
      ["¿Qué estás haciendo?", "What are you doing?", ["What you are doing?", "What are you do?", "What do you doing?"]],
      ["No estoy viendo la tele.", "I'm not watching TV.", ["I don't watching TV.", "I'm not watch TV.", "I not watching TV."]],
      ["Quiero un café.", "I want a coffee.", ["I'm wanting a coffee.", "I wanting a coffee.", "I am want a coffee."], "ps"]
    ],
    b: [
      ["¿Me estás escuchando?", "Are you listening to me?", "Do"],
      ["Ella está hablando por teléfono.", "She's talking on the phone.", "talks"],
      ["No estamos esperando.", "We aren't waiting.", "don't"]
    ]
  },
  {
    id: "wb", u: ["n2u2"], n: "Pasado de to be", en: "Past of to be",
    use: "Cómo era o cómo estaba algo, y dónde estaba, en el pasado.",
    cues: ["yesterday", "last week", "last night", "two years ago"],
    f: [
      ["+", "s:Sujeto + v:was / were + r:resto", "I {was} sick yesterday. · We {were} in Cancun.", "Estuve enfermo ayer. · Estuvimos en Cancún."],
      ["-", "s:Sujeto + v:was / were + a:not + r:resto", "I {was}[n't] at home. · They {were}[n't] ready.", "No estaba en casa. · No estaban listos."],
      ["?", "v:Was / Were + s:sujeto + r:resto?", "{Was} it expensive? · Where {were} you?", "¿Fue caro? · ¿Dónde estabas?"]
    ],
    ans: "Yes, it was. · No, I wasn't.",
    tip: "I, he, she, it → was · you, we, they → were.",
    q: [
      ["Estuve enfermo ayer.", "I was sick yesterday.", ["I were sick yesterday.", "I am sick yesterday.", "I sick yesterday."]],
      ["Ellos no estaban listos.", "They weren't ready.", ["They wasn't ready.", "They didn't ready.", "They no were ready."]],
      ["¿Fue caro?", "Was it expensive?", ["Did it expensive?", "Were it expensive?", "Was expensive?"]],
      ["¿Dónde estabas?", "Where were you?", ["Where was you?", "Where you were?", "Where did you?"]]
    ],
    b: [
      ["No estaba en casa.", "I wasn't at home.", "didn't"],
      ["¿Cómo estuvo tu fin de semana?", "How was your weekend?", "were"],
      ["Estábamos en Cancún.", "We were in Cancun.", "was"]
    ]
  },
  {
    id: "pas", u: ["n2u3", "n2u4"], n: "Pasado simple", en: "Simple past",
    use: "Acciones que ya terminaron, en un momento del pasado.",
    cues: ["yesterday", "last week", "in 2019", "two days ago", "when I was a kid"],
    f: [
      ["+", "s:Sujeto + v:verbo en pasado (-ed o irregular) + r:resto", "I {worked} late. · I {went} to the supermarket.", "Trabajé hasta tarde. · Fui al súper."],
      ["-", "s:Sujeto + a:didn't + v:verbo + r:resto", "I [didn't] {go} to the party.", "No fui a la fiesta."],
      ["?", "a:Did + s:sujeto + v:verbo + r:resto?", "[Did] you {call} Pedro? · What [did] you {do} yesterday?", "¿Llamaste a Pedro? · ¿Qué hiciste ayer?"]
    ],
    ans: "Yes, I did. · No, I didn't.",
    tip: "Con did y didn't el verbo ya no va en pasado: I didn't go, nunca «I didn't went».",
    q: [
      ["Fui al súper.", "I went to the supermarket.", ["I go to the supermarket.", "I goed to the supermarket.", "I was go to the supermarket."]],
      ["No fui a la fiesta.", "I didn't go to the party.", ["I didn't went to the party.", "I don't went to the party.", "I no went to the party."]],
      ["¿Qué hiciste ayer?", "What did you do yesterday?", ["What did you did yesterday?", "What you did yesterday?", "What do you did yesterday?"]],
      ["Llamé al proveedor.", "I called the supplier.", ["I call the supplier.", "I did called the supplier.", "I was call the supplier."]],
      ["¿Llamaste a Pedro?", "Did you call Pedro?", ["Did you called Pedro?", "Do you called Pedro?", "Called you Pedro?"]]
    ],
    b: [
      ["No revisé mi correo.", "I didn't check my email.", "checked"],
      ["¿Viste a mi hermano?", "Did you see my brother?", "saw"],
      ["Compré un teléfono nuevo.", "I bought a new phone.", "buy"],
      ["¿A qué hora llegaste?", "What time did you arrive?", "arrived"]
    ]
  },
  {
    id: "pac", u: ["n2u16"], n: "Pasado continuo", en: "Past continuous",
    use: "Lo que estaba pasando en un momento del pasado (muchas veces, cuando algo lo interrumpió).",
    cues: ["while", "when", "at 8 last night", "all morning"],
    f: [
      ["+", "s:Sujeto + a:was / were + v:verbo-ing + r:resto", "I [was] {sleeping}. · They [were] {working}.", "Estaba durmiendo. · Estaban trabajando."],
      ["-", "s:Sujeto + a:wasn't / weren't + v:verbo-ing + r:resto", "I [wasn't] {paying} attention.", "No estaba poniendo atención."],
      ["?", "a:Was / Were + s:sujeto + v:verbo-ing + r:resto?", "[Were] you {sleeping}? · What [were] you {doing}?", "¿Estabas dormido? · ¿Qué estabas haciendo?"]
    ],
    ans: "Yes, I was. · No, we weren't.",
    tip: "La acción larga va en pasado continuo y la corta que la interrumpe, en pasado simple: I was cooking when you called.",
    q: [
      ["Estaba cocinando cuando llamaste.", "I was cooking when you called.", ["I was cook when you called.", "I were cooking when you called.", "I cooking when you called."]],
      ["¿Qué estabas haciendo?", "What were you doing?", ["What was you doing?", "What did you doing?", "What were you do?"]],
      ["Estaba lloviendo.", "It was raining.", ["Was raining.", "It raining.", "It were raining."]],
      ["No estaba poniendo atención.", "I wasn't paying attention.", ["I didn't paying attention.", "I wasn't pay attention.", "I weren't paying attention."]]
    ],
    b: [
      ["¿Estabas durmiendo?", "Were you sleeping?", "Did"],
      ["Estábamos cenando.", "We were having dinner.", "had"],
      ["Ellos no estaban trabajando.", "They weren't working.", "worked"]
    ]
  },
  {
    id: "fgt", u: ["n2u5"], n: "Futuro con going to", en: "Future with going to",
    use: "Planes que ya decidiste, o algo que ves que va a pasar.",
    cues: ["tonight", "tomorrow", "next week", "this weekend"],
    f: [
      ["+", "s:Sujeto + a:am / is / are + a:going to + v:verbo + r:resto", "I['m going to] {study} tonight. · It['s going to] {rain}.", "Voy a estudiar hoy en la noche. · Va a llover."],
      ["-", "s:Sujeto + a:am / is / are + a:not going to + v:verbo + r:resto", "I['m not going to] {go}.", "No voy a ir."],
      ["?", "a:Am / Is / Are + s:sujeto + a:going to + v:verbo + r:resto?", "[Are] you [going to] {come}? · What [are] you [going to] {do}?", "¿Vas a venir? · ¿Qué vas a hacer?"]
    ],
    ans: "Yes, I am. · No, I'm not.",
    tip: "No olvides am / is / are: «I going to study» está mal. Al hablar rápido suena «gonna».",
    q: [
      ["Voy a estudiar hoy en la noche.", "I'm going to study tonight.", ["I going to study tonight.", "I'm going to studying tonight.", "I'm go to study tonight."]],
      ["¿Qué vas a hacer este fin de semana?", "What are you going to do this weekend?", ["What you are going to do this weekend?", "What are you going to doing this weekend?", "What do you going to do this weekend?"]],
      ["No voy a ir.", "I'm not going to go.", ["I don't going to go.", "I'm not going to went.", "I not going to go."]],
      ["Va a llover.", "It's going to rain.", ["It going to rain.", "Is going to rain.", "It's going to raining."]]
    ],
    b: [
      ["Vamos a comprar una casa.", "We're going to buy a house.", "buying"],
      ["¿Vas a venir?", "Are you going to come?", "Do"],
      ["Ella no va a trabajar mañana.", "She isn't going to work tomorrow.", "doesn't"]
    ]
  },
  {
    id: "fw", u: ["n2u5"], n: "Futuro con will", en: "Future with will",
    use: "Decisiones del momento, promesas, ofrecimientos y predicciones.",
    cues: ["I think…", "maybe", "probably", "tomorrow"],
    f: [
      ["+", "s:Sujeto + a:will ('ll) + v:verbo + r:resto", "I['ll] {call} you tomorrow. · I think he['ll] {win}.", "Te llamo mañana. · Creo que va a ganar."],
      ["-", "s:Sujeto + a:won't + v:verbo + r:resto", "I [won't] {tell} anyone.", "No le voy a decir a nadie."],
      ["?", "a:Will + s:sujeto + v:verbo + r:resto?", "[Will] it {be} ready on Friday?", "¿Va a estar listo el viernes?"]
    ],
    ans: "Yes, it will. · No, it won't.",
    tip: "Después de will el verbo va en su forma normal: I'll call, nunca «I'll calling» ni «I'll to call».",
    q: [
      ["Te llamo mañana.", "I'll call you tomorrow.", ["I'll calling you tomorrow.", "I'll to call you tomorrow.", "I will calls you tomorrow."]],
      ["No le voy a decir a nadie.", "I won't tell anyone.", ["I don't will tell anyone.", "I won't to tell anyone.", "I willn't tell anyone."]],
      ["Creo que va a ganar.", "I think he'll win.", ["I think he'll wins.", "I think he will to win.", "I think he will winning."]],
      ["¿Va a estar listo el viernes?", "Will it be ready on Friday?", ["Will it ready on Friday?", "Will be it ready on Friday?", "Does it will be ready on Friday?"]]
    ],
    b: [
      ["Te ayudo.", "I'll help you.", "helping"],
      ["No va a tardar.", "It won't take long.", "doesn't"],
      ["¿Me llamas mañana?", "Will you call me tomorrow?", "Do"]
    ]
  },
  {
    id: "pp", u: ["n3u1"], n: "Presente perfecto", en: "Present perfect",
    use: "Experiencias (sin decir cuándo) y cosas que acaban de pasar o que ya pasaron.",
    cues: ["ever", "never", "already", "yet", "just"],
    f: [
      ["+", "s:Sujeto + a:have / has + v:participio + r:resto", "I['ve] {seen} that movie. · She['s] already {left}.", "Ya vi esa película. · Ella ya se fue."],
      ["-", "s:Sujeto + a:haven't / hasn't + v:participio + r:resto", "I [haven't] {eaten} yet.", "Todavía no he comido."],
      ["?", "a:Have / Has + s:sujeto + v:participio + r:resto?", "[Have] you ever {been} to New York?", "¿Alguna vez has ido a Nueva York?"]
    ],
    ans: "Yes, I have. · No, she hasn't.",
    tip: "Si dices cuándo pasó (yesterday, in 2019), usa pasado simple: I went there in 2019, no «I have gone there in 2019».",
    q: [
      ["Nunca he probado el sushi.", "I've never tried sushi.", ["I've never try sushi.", "I haven't never tried sushi.", "I've never trying sushi."]],
      ["¿Alguna vez has ido a Nueva York?", "Have you ever been to New York?", ["Did you ever been to New York?", "Have you ever go to New York?", "Has you ever been to New York?"]],
      ["Todavía no he comido.", "I haven't eaten yet.", ["I haven't ate yet.", "I haven't eat yet.", "I don't have eaten yet."]],
      ["Fui a Nueva York en 2019.", "I went to New York in 2019.", ["I've gone to New York in 2019.", "I've been to New York in 2019.", "I have go to New York in 2019."], "pas"],
      ["Ella ya se fue.", "She's already left.", ["She's already leave.", "She has already went.", "She have already left."]]
    ],
    b: [
      ["¿Ya mandaste el reporte?", "Have you sent the report yet?", "Did"],
      ["Él ha viajado mucho.", "He has traveled a lot.", "have"],
      ["Todavía no he visto esa película.", "I haven't seen that movie yet.", "saw"]
    ]
  },
  {
    id: "ppc", u: ["n3u2"], n: "Presente perfecto continuo", en: "Present perfect continuous",
    use: "Lo que empezó antes y sigue hasta ahora: llevo dos horas esperando, vivo aquí desde 2015.",
    cues: ["for (+ cuánto tiempo)", "since (+ desde cuándo)", "how long", "all day", "lately"],
    f: [
      ["+", "s:Sujeto + a:have been / has been + v:verbo-ing + r:for / since…", "I['ve been] {waiting} for two hours.", "Llevo dos horas esperando."],
      ["-", "s:Sujeto + a:haven't been / hasn't been + v:verbo-ing + r:resto", "I [haven't been] {sleeping} well.", "No he estado durmiendo bien."],
      ["?", "r:How long + a:have / has + s:sujeto + a:been + v:verbo-ing?", "How long [have] you [been] {studying} English?", "¿Cuánto tiempo llevas estudiando inglés?"],
      ["Con know, live, work…", "s:Sujeto + a:have / has + v:participio + r:for / since…", "I['ve] {known} him since college. · I['ve] {lived} here for five years.", "Lo conozco desde la universidad. · Vivo aquí desde hace cinco años."]
    ],
    ans: "For three months. · Since January.",
    tip: "«Llevo dos años aquí» o «trabajo aquí desde 2015» no van en presente: I've worked here since 2015, nunca «I work here since 2015». for = cuánto tiempo · since = desde cuándo.",
    q: [
      ["Llevo dos horas esperando.", "I've been waiting for two hours.", ["I'm waiting since two hours.", "I've been waiting since two hours.", "I'm waiting for two hours ago."]],
      ["Trabajo aquí desde 2015.", "I've worked here since 2015.", ["I work here since 2015.", "I'm working here since 2015.", "I've worked here for 2015."]],
      ["¿Cuánto tiempo llevas estudiando inglés?", "How long have you been studying English?", ["How long you have been studying English?", "How long have you been study English?", "How long since you study English?"]],
      ["Lo conozco desde la universidad.", "I've known him since college.", ["I know him since college.", "I've been knowing him since college.", "I've known him for college."]]
    ],
    b: [
      ["Hemos estado trabajando en esto todo el día.", "We've been working on this all day.", "worked", ["We've been working all day on this."]],
      ["No lo he visto desde el lunes.", "I haven't seen him since Monday.", "for"],
      ["Vivo aquí desde hace cinco años.", "I've lived here for five years.", "since"]
    ]
  },
  {
    id: "ut", u: ["n3u9"], n: "Used to", en: "Used to",
    use: "Lo que antes hacías o antes era así, y ya no.",
    cues: ["before", "as a kid", "when I was young", "not anymore"],
    f: [
      ["+", "s:Sujeto + a:used to + v:verbo + r:resto", "I [used to] {smoke}. · We [used to] {live} in Toluca.", "Antes fumaba. · Vivíamos en Toluca."],
      ["-", "s:Sujeto + a:didn't use to + v:verbo + r:resto", "I [didn't use to] {like} coffee.", "Antes no me gustaba el café."],
      ["?", "a:Did + s:sujeto + a:use to + v:verbo + r:resto?", "[Did] you [use to] {play} soccer?", "¿Jugabas futbol?"]
    ],
    ans: "Yes, I did. · No, I didn't.",
    tip: "Con didn't y did se escribe use to (sin d). Para el presente no existe: usa usually (I usually walk).",
    q: [
      ["Antes fumaba.", "I used to smoke.", ["I use to smoke.", "I used to smoking.", "I was used to smoke."]],
      ["Antes no me gustaba el café.", "I didn't use to like coffee.", ["I don't use to like coffee.", "I didn't use to liked coffee.", "I wasn't used to like coffee."]],
      ["¿Jugabas futbol de niño?", "Did you use to play soccer as a kid?", ["Do you used to play soccer as a kid?", "Did you use to playing soccer as a kid?", "Were you use to play soccer as a kid?"]],
      ["Normalmente camino al trabajo.", "I usually walk to work.", ["I use to walk to work.", "I'm used to walk to work.", "I used to walk to work now."], "ps"]
    ],
    b: [
      ["Vivíamos en Toluca.", "We used to live in Toluca.", "living"],
      ["Antes no usaba lentes.", "I didn't use to wear glasses.", "used"],
      ["Aquí había un cine.", "There used to be a movie theater here.", "was"]
    ]
  },
  {
    id: "pap", u: ["n3u12"], n: "Pasado perfecto", en: "Past perfect",
    use: "Lo que ya había pasado antes de otro momento del pasado.",
    cues: ["already", "never… before", "by the time", "when I arrived"],
    f: [
      ["+", "s:Sujeto + a:had + v:participio + r:resto", "The train [had] already {left}.", "El tren ya se había ido."],
      ["-", "s:Sujeto + a:hadn't + v:participio + r:resto", "I [hadn't] {seen} that movie.", "No había visto esa película."],
      ["?", "a:Had + s:sujeto + v:participio + r:resto?", "[Had] you {been} to Japan before?", "¿Ya habías ido a Japón?"]
    ],
    ans: "Yes, I had. · No, I hadn't.",
    tip: "Compara: When I arrived, the meeting started (empezó al llegar) vs. the meeting had started (ya había empezado).",
    q: [
      ["Cuando llegué, la junta ya había empezado.", "When I arrived, the meeting had already started.", ["When I arrived, the meeting has already started.", "When I arrived, the meeting had already start.", "When I arrived, the meeting had already starting."]],
      ["Nunca había visto la nieve.", "I had never seen snow.", ["I had never saw snow.", "I hadn't never seen snow.", "I had never see snow."]],
      ["Me di cuenta de que había olvidado mi cartera.", "I realized I had forgotten my wallet.", ["I realized I have forgotten my wallet.", "I realized I had forgetted my wallet.", "I realized I had forgetting my wallet."]],
      ["¿Ya habías ido a Japón?", "Had you been to Japan before?", ["Did you had been to Japan before?", "Had you went to Japan before?", "Had you be to Japan before?"]]
    ],
    b: [
      ["La tienda ya había cerrado.", "The store had already closed.", "has"],
      ["No había estudiado, así que reprobé.", "I hadn't studied, so I failed.", "didn't"],
      ["¿Ya habían comido?", "Had they already eaten?", "ate"]
    ]
  },
  {
    id: "c1", u: ["n3u4"], n: "Primer condicional", en: "First conditional",
    use: "Situaciones posibles y lo que va a pasar si se cumplen.",
    cues: ["if", "when", "as soon as", "unless"],
    f: [
      ["Si pasa esto…", "a:If + s:sujeto + v:presente + r:…, + s:sujeto + a:will + v:verbo", "[If] it {rains}, I['ll] {stay} home.", "Si llueve, me quedo en casa."],
      ["Al revés (sin coma)", "s:Sujeto + a:will + v:verbo + a:if + s:sujeto + v:presente", "I['ll] {call} you [if] I {hear} anything.", "Te llamo si sé algo."],
      ["Pregunta", "a:What will + s:sujeto + v:verbo + a:if + s:sujeto + v:presente?", "What [will] you {do} [if] you [don't] {get} the job?", "¿Qué vas a hacer si no te dan el trabajo?"]
    ],
    ans: "",
    tip: "Después de if, when, as soon as o unless no va will: If it rains, nunca «If it will rain».",
    q: [
      ["Si llueve, me quedo en casa.", "If it rains, I'll stay home.", ["If it will rain, I'll stay home.", "If it rained, I'll stay home.", "If it rain, I'll stay home."]],
      ["Te llamo en cuanto llegue.", "I'll call you as soon as I arrive.", ["I'll call you as soon as I'll arrive.", "I call you as soon as I will arrive.", "I'll call you as soon as I arrived."]],
      ["Si no te apuras, vas a llegar tarde.", "If you don't hurry, you'll be late.", ["If you not hurry, you'll be late.", "If you don't hurry, you'll late.", "If you doesn't hurry, you'll be late."]],
      ["No vamos a terminar a menos que nos ayuden.", "We won't finish unless they help us.", ["We won't finish unless they helps us.", "We won't finish unless they helped us.", "We not finish unless they help us."]]
    ],
    b: [
      ["Si tengo tiempo, te ayudo.", "If I have time, I'll help you.", "will"],
      ["Si pagan hoy, enviamos mañana.", "If they pay today, we'll ship tomorrow.", "paid"],
      ["¿Qué vas a hacer si no te dan el trabajo?", "What will you do if you don't get the job?", "won't"]
    ]
  },
  {
    id: "c2", u: ["n4u1"], n: "Segundo condicional", en: "Second conditional",
    use: "Situaciones imaginarias o poco probables, y lo que harías.",
    cues: ["if", "If I were you", "would"],
    f: [
      ["Si fuera así…", "a:If + s:sujeto + v:pasado + r:…, + s:sujeto + a:would ('d) + v:verbo", "[If] I {had} money, I['d] {travel} the world.", "Si tuviera dinero, viajaría por el mundo."],
      ["Con be: were", "a:If + s:I / he / she / it + v:were + r:…, + s:sujeto + a:would + v:verbo", "[If] I {were} you, I['d] {accept} the offer.", "Yo que tú, aceptaría la oferta."],
      ["Pregunta", "a:What would + s:sujeto + v:verbo + a:if + s:sujeto + v:pasado?", "What [would] you {do} [if] you {won} the lottery?", "¿Qué harías si te ganaras la lotería?"]
    ],
    ans: "",
    tip: "Después de if no va would: If I had money, nunca «If I would have money». Compara: If it rains, I'll stay (es posible) vs. If I won the lottery, I'd quit (es imaginario).",
    q: [
      ["Si tuviera dinero, viajaría por el mundo.", "If I had money, I'd travel the world.", ["If I would have money, I'd travel the world.", "If I have money, I'd travel the world.", "If I had money, I'd traveled the world."]],
      ["Yo que tú, aceptaría la oferta.", "If I were you, I'd accept the offer.", ["If I am you, I'd accept the offer.", "If I were you, I accept the offer.", "If I would be you, I'd accept the offer."]],
      ["¿Qué harías si te ganaras la lotería?", "What would you do if you won the lottery?", ["What would you do if you would win the lottery?", "What would you did if you won the lottery?", "What would you do if you win the lottery?"]],
      ["Si viviera cerca, caminaría.", "If I lived nearby, I'd walk.", ["If I live nearby, I'd walk.", "If I would live nearby, I'd walk.", "If I lived nearby, I'd walked."]]
    ],
    b: [
      ["Si fuera más barato, lo compraríamos.", "If it were cheaper, we'd buy it.", "will"],
      ["Si tuviera más tiempo, estudiaría más.", "If I had more time, I'd study more.", "have"],
      ["Yo no haría eso.", "I wouldn't do that.", "won't"]
    ]
  },
  {
    id: "fc", u: ["n4u14"], n: "Futuro continuo", en: "Future continuous",
    use: "Lo que vas a estar haciendo en un momento del futuro.",
    cues: ["this time tomorrow", "at 8 tonight", "all afternoon", "next week"],
    f: [
      ["+", "s:Sujeto + a:will be + v:verbo-ing + r:resto", "This time tomorrow, I['ll be] {flying}.", "Mañana a esta hora estaré volando."],
      ["-", "s:Sujeto + a:won't be + v:verbo-ing + r:resto", "I [won't be] {working} tomorrow.", "Mañana no voy a estar trabajando."],
      ["?", "a:Will + s:sujeto + a:be + v:verbo-ing + r:resto?", "[Will] you [be] {using} the car tonight?", "¿Vas a usar el carro hoy en la noche?"]
    ],
    ans: "Yes, I will. · No, I won't.",
    tip: "Will you be using…? es una forma muy amable de preguntar por los planes de alguien.",
    q: [
      ["Mañana a esta hora estaré volando.", "This time tomorrow, I'll be flying.", ["This time tomorrow, I'll flying.", "This time tomorrow, I'll be fly.", "This time tomorrow, I'm be flying."]],
      ["Voy a estar trabajando toda la tarde.", "I'll be working all afternoon.", ["I'll working all afternoon.", "I'll be work all afternoon.", "I will being working all afternoon."]],
      ["¿Vas a usar el carro hoy en la noche?", "Will you be using the car tonight?", ["Will you using the car tonight?", "Will be you using the car tonight?", "Are you be using the car tonight?"]]
    ],
    b: [
      ["No te preocupes, te voy a estar esperando.", "Don't worry, I'll be waiting for you.", "wait"],
      ["Vamos a estar celebrando toda la noche.", "We'll be celebrating all night.", "celebrate"]
    ]
  },
  {
    id: "fp", u: ["n4u14"], n: "Futuro perfecto", en: "Future perfect",
    use: "Lo que ya habrá pasado antes de un momento del futuro.",
    cues: ["by Friday", "by the time", "by then", "by 2030"],
    f: [
      ["+", "s:Sujeto + a:will have + v:participio + r:resto", "By Friday, we['ll have] {finished}.", "Para el viernes habremos terminado."],
      ["-", "s:Sujeto + a:won't have + v:participio + r:resto", "We [won't have] {finished} by Monday.", "Para el lunes no habremos terminado."],
      ["?", "a:Will + s:sujeto + a:have + v:participio + r:resto?", "[Will] you [have] {finished} by five?", "¿Habrás terminado para las cinco?"]
    ],
    ans: "Yes, I will. · No, I won't.",
    tip: "by = para (fecha límite) · by the time = para cuando.",
    q: [
      ["Para el viernes habremos terminado.", "By Friday, we'll have finished.", ["By Friday, we'll finished.", "By Friday, we'll have finish.", "By Friday, we'll have finishing."]],
      ["Para cuando llegues, ya me habré ido.", "By the time you arrive, I'll have left.", ["By the time you'll arrive, I'll have left.", "By the time you arrive, I'll have leave.", "By the time you arrive, I'll left."]],
      ["¿Habrás terminado para las cinco?", "Will you have finished by five?", ["Will you finished by five?", "Will you have finish by five?", "Have you will finished by five?"]]
    ],
    b: [
      ["Para entonces ya lo habrán aprobado.", "By then, they'll have approved it.", "approve", ["They'll have approved it by then."]],
      ["En junio habré trabajado aquí diez años.", "In June, I'll have worked here for ten years.", "work", ["I'll have worked here for ten years in June."]]
    ]
  },
  {
    id: "c3", u: ["n5u1"], n: "Tercer condicional", en: "Third conditional",
    use: "El pasado que ya no se puede cambiar: lo que habría pasado si…",
    cues: ["if… had", "would have", "should have", "I wish I had"],
    f: [
      ["Si hubiera…", "a:If + s:sujeto + a:had + v:participio + r:…, + s:sujeto + a:would have + v:participio", "[If] I [had] {known}, I [would have] {told} you.", "Si hubiera sabido, te habría avisado."],
      ["Negativa", "a:If + s:sujeto + a:hadn't + v:participio + r:…, + s:sujeto + a:wouldn't have + v:participio", "[If] you [hadn't] {called}, I [wouldn't have] {known}.", "Si no hubieras llamado, no me habría enterado."],
      ["Pregunta", "a:What would + s:sujeto + a:have + v:participio + a:if…?", "What [would] you [have] {done}?", "¿Qué habrías hecho?"],
      ["Debí, pude…", "s:Sujeto + a:should have / could have / must have + v:participio", "I [should have] {studied} more. · It [could have] {been} worse.", "Debí estudiar más. · Pudo ser peor."]
    ],
    ans: "",
    tip: "Después de if va had, no would have: If I had known, nunca «If I would have known». Al hablar, would have suena «would've».",
    q: [
      ["Si hubiera sabido, te habría avisado.", "If I had known, I would have told you.", ["If I would have known, I would have told you.", "If I had known, I would told you.", "If I had knew, I would have told you."]],
      ["Debí estudiar más.", "I should have studied more.", ["I should studied more.", "I should have study more.", "I should of studied more."]],
      ["Si me hubieras escuchado, no habría pasado.", "If you had listened to me, it wouldn't have happened.", ["If you listened to me, it wouldn't have happen.", "If you had listened to me, it wouldn't happened.", "If you would have listened to me, it wouldn't have happened."]],
      ["¿Qué habrías hecho?", "What would you have done?", ["What would you have did?", "What would you had done?", "What would you have do?"]]
    ],
    b: [
      ["Si hubiera salido a tiempo, habría llegado.", "If I had left on time, I would have made it.", "make"],
      ["Me debiste haber dicho.", "You should have told me.", "tell"],
      ["Pudo ser peor.", "It could have been worse.", "be"]
    ]
  },
  {
    id: "cm", u: ["n5u7"], n: "Condicionales mixtos", en: "Mixed conditionals",
    use: "Cuando la condición es de un tiempo y el resultado de otro: pasado → ahora, o ahora → pasado.",
    cues: ["now", "today", "back then", "yesterday"],
    f: [
      ["Pasado → ahora", "a:If + s:sujeto + a:had + v:participio + r:…, + s:sujeto + a:would + v:verbo + r:now", "[If] I [had] {studied} medicine, I [would] {be} a doctor now.", "Si hubiera estudiado medicina, ahora sería doctor."],
      ["Ahora → pasado", "a:If + s:sujeto + v:pasado + r:…, + s:sujeto + a:would have + v:participio", "[If] I {were} more organized, I [wouldn't have] {missed} the deadline.", "Si fuera más organizado, no se me habría pasado la fecha."],
      ["Pregunta", "r:Where + a:would + s:sujeto + v:verbo + r:now + a:if + s:sujeto + a:hadn't + v:participio?", "Where [would] you {be} now [if] you [hadn't] {moved}?", "¿Dónde estarías ahora si no te hubieras mudado?"]
    ],
    ans: "",
    tip: "Busca now, today o back then para saber qué parte es presente y cuál es pasado.",
    q: [
      ["Si hubiera tomado ese trabajo, ahora viviría en Canadá.", "If I had taken that job, I would live in Canada now.", ["If I had took that job, I would live in Canada now.", "If I had taken that job, I would have live in Canada now.", "If I would have taken that job, I would live in Canada now."]],
      ["Si hubieras dormido bien, no estarías tan cansado.", "If you had slept well, you wouldn't be so tired.", ["If you had sleep well, you wouldn't be so tired.", "If you had slept well, you wouldn't have be so tired.", "If you had slept well, you won't be so tired."]],
      ["Si hablara francés, me habrían dado el trabajo.", "If I spoke French, I would have gotten the job.", ["If I had spoke French, I would get the job.", "If I spoke French, I would have get the job.", "If I would speak French, I would have gotten the job."]]
    ],
    b: [
      ["Si hubiéramos invertido entonces, ahora seríamos ricos.", "If we had invested back then, we'd be rich now.", "have"],
      ["Si no hubiera desayunado, ahora tendría hambre.", "If I hadn't had breakfast, I'd be hungry now.", "been"]
    ]
  }
];
