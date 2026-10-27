/* Nivel 0 · Arranque (Pre-A1)
   Formato de unidad:
   g: explicación — texto = párrafo, "!texto" = consejo, ["English","Español"] = ejemplo con audio
   c: frases — ["Español","English","pronunciación","nota opcional"]
   d: diálogo — ["A" o "B","English","Español"]   (en la práctica, tú eres B) */
(window.COURSE = window.COURSE || []).push({
  id: "n0", name: "Primaria 1 · Primeras frases", short: "Primaria 1", cefr: "Pre-A1",
  desc: "Tus primeras oraciones: saludar, presentarte, el verbo to be, pronombres, describir cosas, reaccionar en una plática, el clima e instrucciones.",
  units: [
    {
      id: "n0u1", t: "Saludos y presentarte",
      goal: "Saludar, decir tu nombre y de dónde eres, y despedirte.",
      g: [
        "En inglés el saludo cambia según la hora del día. Hello es neutral; Hi es más casual.",
        ["Good morning.", "Buenos días. (hasta mediodía)"],
        ["Good afternoon.", "Buenas tardes. (de mediodía a las 6 aprox.)"],
        ["Good evening.", "Buenas noches. (al llegar)"],
        "!Good night NO es un saludo: solo se usa para despedirse en la noche o al irse a dormir.",
        "Para presentarte usa My name is… o I'm… (I'm = I am = yo soy).",
        ["I'm {name|Ana}. I'm from Mexico.", "Soy {name|Ana}. Soy de México."]
      ],
      c: [
        ["Hola, ¿cómo estás?", "Hi, how are you?", "jai, jáu ar iú", ""],
        ["Bien, gracias. ¿Y tú?", "I'm fine, thanks. And you?", "aim fáin, zenks. and iú", ""],
        ["Buenos días.", "Good morning.", "gud mórning", ""],
        ["Buenas tardes.", "Good afternoon.", "gud afternún", ""],
        ["Buenas noches (al llegar).", "Good evening.", "gud ívning", "Good night es solo para despedirse."],
        ["Me llamo {name|Ana}.", "My name is {name|Ana}.", "mai néim is {name|ána}", ""],
        ["Soy de México.", "I'm from Mexico.", "aim fram méksikou", ""],
        ["Mucho gusto.", "Nice to meet you.", "náis tu mit iú", ""],
        ["¿Cómo te llamas?", "What's your name?", "uáts iór néim", ""],
        ["¿De dónde eres?", "Where are you from?", "uér ar iú fram", ""],
        ["Adiós.", "Goodbye.", "gudbái", ""],
        ["Nos vemos luego.", "See you later.", "si iú léiter", ""]
      ],
      d: [
        ["A", "Hi! What's your name?", "¡Hola! ¿Cómo te llamas?"],
        ["B", "Hi, my name is {name|Ana}. And you?", "Hola, me llamo {name|Ana}. ¿Y tú?"],
        ["A", "I'm Carlos. Nice to meet you.", "Soy Carlos. Mucho gusto."],
        ["B", "Nice to meet you too. Where are you from?", "Igualmente. ¿De dónde eres?"],
        ["A", "I'm from Mexico.", "Soy de México."],
        ["B", "Me too! See you later.", "¡Yo también! Nos vemos luego."]
      ]
    },
    {
      id: "n0u2", t: "Números y el alfabeto",
      goal: "Contar hasta un millón, decir tu edad, tu teléfono, precios y años, y deletrear tu nombre.",
      g: [
        "Los números del 13 al 19 terminan en -teen y llevan el acento al final. Las decenas (20, 30, 40…) terminan en -ty y llevan el acento al inicio.",
        ["thirteen — thirty", "13 (zer-TÍN) — 30 (ZÉR-ti)"],
        ["fifteen — fifty", "15 (fif-TÍN) — 50 (FÍF-ti)"],
        "Del 21 al 99 se dice la decena, un guion y el número (sin «y» como en español):",
        ["twenty-one · forty-eight · ninety-nine", "21 · 48 · 99"],
        "Hundred (cien), thousand (mil) y million (millón) nunca llevan -s después de un número:",
        ["two hundred · five thousand · one million", "200 · 5,000 · 1,000,000"],
        "Para decir el orden, los tres primeros son especiales: first, second, third. Desde el cuarto se agrega -th: fourth, fifth, tenth.",
        "Los años se dicen de dos en dos: 1990 = nineteen ninety; 2026 = twenty twenty-six.",
        "Las vocales del alfabeto suenan distinto que en español: A (ei), E (i), I (ai), O (ou), U (iu). Es muy útil para deletrear nombres y correos.",
        "!La edad se dice con el verbo be, no con have: I'm 25 (years old). Nunca 'I have 25 years'.",
        "Los teléfonos se dicen dígito por dígito; el 0 suele decirse 'oh'."
      ],
      c: [
        ["uno, dos, tres", "one, two, three", "uán, tu, zri", "", "n0u2.0"],
        ["cuatro, cinco, seis", "four, five, six", "for, fáiv, siks", "", "n0u2.1"],
        ["siete, ocho, nueve, diez", "seven, eight, nine, ten", "séven, éit, náin, ten", "", "n0u2.2"],
        ["once, doce", "eleven, twelve", "iléven, tuélv", "", "n0u2.3"],
        ["trece", "thirteen", "zertín", "Acento al final: thir-TEEN.", "n0u2.4"],
        ["catorce, quince, dieciséis", "fourteen, fifteen, sixteen", "fortín, fiftín, sikstín", "", "n0u2.27"],
        ["diecisiete, dieciocho, diecinueve", "seventeen, eighteen, nineteen", "seventín, eitín, naintín", "Del 13 al 19 terminan en -teen, con el acento al final.", "n0u2.28"],
        ["veinte", "twenty", "tuénti", "Acento al inicio: TWEN-ty.", "n0u2.29"],
        ["veintiuno", "twenty-one", "tuénti-uán", "", "n0u2.18"],
        ["veintidós, veintitrés", "twenty-two, twenty-three", "tuénti-tu, tuénti-zri", "Del 21 al 99: la decena, un guion y el número.", "n0u2.30"],
        ["treinta", "thirty", "zérti", "Acento al inicio: THIR-ty.", "n0u2.5"],
        ["treinta y cinco", "thirty-five", "zérti-fáiv", "", "n0u2.19"],
        ["cuarenta", "forty", "fórti", "Se escribe sin u: forty.", "n0u2.12"],
        ["cuarenta y ocho", "forty-eight", "fórti-éit", "", "n0u2.31"],
        ["cincuenta", "fifty", "fífti", "", "n0u2.13"],
        ["sesenta", "sixty", "síksti", "", "n0u2.14"],
        ["setenta", "seventy", "séventi", "", "n0u2.15"],
        ["ochenta", "eighty", "éiti", "", "n0u2.16"],
        ["noventa", "ninety", "náinti", "", "n0u2.17"],
        ["noventa y nueve", "ninety-nine", "náinti-náin", "", "n0u2.32"],
        ["cien", "one hundred", "uán jándred", "", "n0u2.6"],
        ["doscientos", "two hundred", "tu jándred", "", "n0u2.20"],
        ["quinientos", "five hundred", "fáiv jándred", "Hundred no lleva -s después de un número: five hundred.", "n0u2.33"],
        ["mil", "one thousand", "uán záusand", "", "n0u2.21"],
        ["dos mil", "two thousand", "tu záusand", "Thousand tampoco lleva -s: two thousand.", "n0u2.34"],
        ["diez mil", "ten thousand", "ten záusand", "", "n0u2.35"],
        ["un millón", "one million", "uán mílion", "", "n0u2.36"],
        ["primero, segundo, tercero", "first, second, third", "ferst, sékond, zerd", "", "n0u2.22"],
        ["cuarto, quinto, sexto", "fourth, fifth, sixth", "forz, fifz, siksz", "Desde el cuarto se agrega -th: four → fourth.", "n0u2.37"],
        ["séptimo, octavo, noveno, décimo", "seventh, eighth, ninth, tenth", "sévenz, éitz, náinz, tenz", "", "n0u2.38"],
        ["Cuenta del uno al veinte.", "Count from one to twenty.", "káunt fram uán tu tuénti", "", "n0u2.39"],
        ["¿Cuántos años tienes?", "How old are you?", "jáu óuld ar iú", "", "n0u2.8"],
        ["Tengo veinticinco años.", "I'm twenty-five years old.", "aim tuénti-fáiv íers óuld", "La edad va con be, no con have.", "n0u2.7"],
        ["Tengo cuarenta años.", "I'm forty years old.", "aim fórti íers óuld", "", "n0u2.24"],
        ["¿Cuál es tu número de teléfono?", "What's your phone number?", "uáts iór fóun námber", "", "n0u2.9"],
        ["Mi número es cinco, cinco, uno, dos.", "My number is five, five, one, two.", "mai námber is fáiv, fáiv, uán, tu", "", "n0u2.23"],
        ["Cuesta cincuenta pesos.", "It's fifty pesos.", "its fífti péisos", "", "n0u2.25"],
        ["Son doscientos cincuenta pesos.", "It's two hundred fifty pesos.", "its tu jándred fífti péisos", "En Estados Unidos casi siempre se dice sin and: two hundred fifty.", "n0u2.40"],
        ["En 1990.", "In nineteen ninety.", "in naintín náinti", "Los años se dicen de dos en dos: 1990 = nineteen ninety; 2026 = twenty twenty-six.", "n0u2.41"],
        ["Vivo en el número veinte.", "I live at number twenty.", "ai liv at námber tuénti", "", "n0u2.26"],
        ["¿Cómo se escribe?", "How do you spell it?", "jáu du iú spel it", "", "n0u2.10"],
        ["Se escribe {nameS|A-N-A}.", "It's spelled {nameS|A-N-A}.", "its speld {nameS|ei-en-ei}", "", "n0u2.11"]
      ],
      d: [
        ["A", "What's your phone number?", "¿Cuál es tu número de teléfono?"],
        ["B", "It's five five, two three four, six seven eight nine.", "Es 55 234 6789."],
        ["A", "Thanks. How do you spell your last name?", "Gracias. ¿Cómo se escribe tu apellido?"],
        ["B", "It's spelled {lastS|L-O-P-E-Z}.", "Se escribe {lastS|L-O-P-E-Z}."],
        ["A", "And how old are you?", "¿Y cuántos años tienes?"],
        ["B", "I'm thirty years old.", "Tengo treinta años."]
      ]
    },
    {
      id: "n0u3", t: "El verbo to be (ser y estar)",
      goal: "Decir quién eres, cómo estás y dónde está algo.",
      g: [
        "To be significa ser y estar al mismo tiempo. Es el verbo más importante del inglés.",
        ["I am → I'm", "yo soy / estoy"],
        ["you are → you're", "tú eres / estás"],
        ["he is → he's · she is → she's · it is → it's", "él / ella / eso es o está"],
        ["we are → we're · they are → they're", "nosotros / ellos son o están"],
        "Para negar agrega not: I'm not, he isn't, they aren't.",
        "Para preguntar, cambia el orden: el verbo va primero.",
        ["You are busy. → Are you busy?", "Estás ocupado. → ¿Estás ocupado?"],
        "!En inglés siempre se dice el sujeto. 'Está abierto' es It's open, nunca solo 'Is open'."
      ],
      c: [
        ["Soy ingeniero.", "I'm an engineer.", "aim an enyiníer", "Con profesiones se usa a / an."],
        ["Estoy cansado.", "I'm tired.", "aim táierd", ""],
        ["Ella es mi jefa.", "She is my boss.", "shi is mai bos", ""],
        ["Él está en la oficina.", "He is in the office.", "ji is in di ófis", ""],
        ["Somos un equipo.", "We are a team.", "ui ar a tiim", ""],
        ["Ellos son de Monterrey.", "They are from Monterrey.", "déi ar fram monterréi", ""],
        ["No estoy listo.", "I'm not ready.", "aim nat rédi", ""],
        ["No es caro.", "It isn't expensive.", "it ísent ekspénsiv", ""],
        ["¿Estás ocupado?", "Are you busy?", "ar iú bísi", ""],
        ["¿Está abierto?", "Is it open?", "is it óupen", ""],
        ["Sí, sí está.", "Yes, it is.", "ies, it is", "Respuesta corta: no se repite todo."],
        ["Está bien.", "It's okay.", "its okéi", ""]
      ],
      d: [
        ["A", "Are you busy?", "¿Estás ocupado?"],
        ["B", "No, I'm not. What's up?", "No. ¿Qué pasa?"],
        ["A", "Is Mr. Ruiz in the office?", "¿Está el señor Ruiz en la oficina?"],
        ["B", "No, he isn't. He's at home.", "No, no está. Está en su casa."],
        ["A", "Is he sick?", "¿Está enfermo?"],
        ["B", "Yes, he is. He's very tired.", "Sí. Está muy cansado."]
      ]
    },
    {
      id: "n0u6", t: "Pronombres: yo, tú, él, me, te, lo",
      goal: "Usar los pronombres para no repetir nombres.",
      g: [
        "Pronombres de sujeto (hacen la acción) y de objeto (reciben la acción):",
        ["I → me · you → you · he → him · she → her", "yo → me · tú → te · él → lo / le · ella → la / le"],
        ["it → it · we → us · they → them", "eso → lo · nosotros → nos · ellos → los / les"],
        "El de objeto va DESPUÉS del verbo (en español va antes):",
        ["I love you. · Call me. · I know him.", "Te quiero. · Llámame. · Lo conozco."],
        "!it se usa para cosas y animales. Nunca omitas el sujeto: It's late (es tarde), no 'Is late'."
      ],
      c: [
        ["Te quiero.", "I love you.", "ai lav iú", ""],
        ["Llámame.", "Call me.", "col mi", ""],
        ["Lo conozco.", "I know him.", "ai nóu jim", ""],
        ["La veo todos los días.", "I see her every day.", "ai si jer évri déi", ""],
        ["Ayúdanos, por favor.", "Help us, please.", "jelp as, plís", ""],
        ["No los entiendo.", "I don't understand them.", "ai dóunt anderstánd dem", ""],
        ["Me gusta.", "I like it.", "ai láik it", "it = la cosa que te gusta."],
        ["Ella es mi amiga.", "She is my friend.", "shi is mai frend", ""],
        ["Ellos son mis vecinos.", "They are my neighbors.", "déi ar mai néibors", ""],
        ["Nosotros trabajamos juntos.", "We work together.", "ui uérk tuguéder", ""],
        ["Es tarde.", "It's late.", "its léit", "Siempre con sujeto."],
        ["Dáselo a él.", "Give it to him.", "guiv it tu jim", ""]
      ],
      d: [
        ["A", "Do you know Laura?", "¿Conoces a Laura?"],
        ["B", "Yes, I know her. She is my neighbor.", "Sí, la conozco. Es mi vecina."],
        ["A", "Can you give her this book?", "¿Le puedes dar este libro?"],
        ["B", "Sure. I see her every day.", "Claro. La veo todos los días."],
        ["A", "Thank you! Tell her to call me.", "¡Gracias! Dile que me llame."],
        ["B", "Okay, I will.", "Va, le digo."]
      ]
    },
    {
      id: "n0u4", t: "Cosas: a / an, the, this / that",
      goal: "Nombrar objetos, señalar cosas y usar plurales.",
      g: [
        "a / an = un, una. Usa an cuando la siguiente palabra empieza con sonido de vocal.",
        ["a car · an apple · an hour", "un carro · una manzana · una hora"],
        "the = el, la, los, las. No cambia nunca.",
        "this / these = esto, estos (cerca). that / those = eso, esos (lejos).",
        ["This is my phone. That is your bag.", "Este es mi teléfono. Esa es tu bolsa."],
        "El plural normalmente agrega -s. Algunos son irregulares:",
        ["man → men · person → people · child → children", "hombre · persona · niño"],
        "!Los adjetivos no tienen plural: red cars, nunca 'reds cars'."
      ],
      c: [
        ["una computadora", "a computer", "a compiúter", ""],
        ["una manzana", "an apple", "an ápol", "an antes de sonido de vocal."],
        ["una hora", "an hour", "an áuer", "La h no suena, por eso an."],
        ["la puerta", "the door", "de dor", ""],
        ["Este es mi teléfono.", "This is my phone.", "dis is mai fóun", ""],
        ["Esa es tu bolsa.", "That is your bag.", "dat is iór bag", ""],
        ["Estos son mis libros.", "These are my books.", "díis ar mai buks", ""],
        ["Esas son las llaves de ella.", "Those are her keys.", "dóus ar jer kiis", ""],
        ["dos personas", "two people", "tu pípol", ""],
        ["tres niños", "three children", "zri chíldren", ""],
        ["¿Qué es esto?", "What is this?", "uát is dis", ""],
        ["Es una pluma.", "It's a pen.", "its a pen", ""]
      ],
      d: [
        ["A", "What is this?", "¿Qué es esto?"],
        ["B", "It's a charger.", "Es un cargador."],
        ["A", "And what are those?", "¿Y qué son esos?"],
        ["B", "Those are my keys.", "Esas son mis llaves."],
        ["A", "Is this your bag?", "¿Esta es tu bolsa?"],
        ["B", "No, that is my bag. The black one.", "No, esa es mi bolsa. La negra."]
      ]
    },
    {
      id: "n0u7", t: "Describir cosas con adjetivos",
      goal: "Decir cómo es algo: grande, bonito, caro, nuevo.",
      g: [
        "El adjetivo va antes de la cosa, o después de be:",
        ["a beautiful city · The city is beautiful.", "una ciudad bonita · La ciudad es bonita."],
        "very = muy · really = muy / de verdad · a little = un poco · too = demasiado.",
        ["It's very cheap. · It's a little expensive.", "Es muy barato. · Es un poco caro."],
        "!El adjetivo nunca lleva s: two big cars. Y no se usa 'more' con 'very': very good, no 'very more'."
      ],
      c: [
        ["una ciudad bonita", "a beautiful city", "a biútiful síti", ""],
        ["Es muy barato.", "It's very cheap.", "its véri chiip", ""],
        ["Es un poco caro.", "It's a little expensive.", "its a lítol ekspénsiv", ""],
        ["Es demasiado grande.", "It's too big.", "its tu big", ""],
        ["Mi trabajo es interesante.", "My job is interesting.", "mai yab is íntresting", ""],
        ["La película es aburrida.", "The movie is boring.", "de múvi is bóring", "boring = aburrido (la cosa). bored = aburrido (la persona)."],
        ["Es una idea buenísima.", "It's a great idea.", "its a gréit aidía", ""],
        ["El examen fue fácil.", "The test was easy.", "de test uás íisi", ""],
        ["Este carro es rápido.", "This car is fast.", "dis car is fast", ""],
        ["La calle es peligrosa.", "The street is dangerous.", "de striit is déinyeros", ""],
        ["El restaurante está lleno.", "The restaurant is full.", "de réstorant is ful", ""],
        ["¡Qué bonito!", "How nice!", "jáu náis", ""]
      ],
      d: [
        ["A", "How's your new apartment?", "¿Qué tal tu departamento nuevo?"],
        ["B", "It's beautiful, but it's a little small.", "Es bonito, pero un poco pequeño."],
        ["A", "Is it expensive?", "¿Es caro?"],
        ["B", "No, it's very cheap.", "No, es muy barato."],
        ["A", "How nice! Is the street quiet?", "¡Qué bien! ¿La calle es tranquila?"],
        ["B", "Yes, it's very quiet.", "Sí, es muy tranquila."]
      ]
    },
    {
      id: "n0u5", t: "Preguntas y frases de supervivencia",
      goal: "Pedir ayuda, decir que no entiendes y hacer preguntas básicas.",
      g: [
        "Las palabras de pregunta (question words) van al inicio:",
        ["what · where · when · who · why · how", "qué · dónde · cuándo · quién · por qué · cómo"],
        ["how much · how many", "cuánto (dinero, cosas que no se cuentan) · cuántos"],
        "Con el verbo be: palabra de pregunta + be + sujeto.",
        ["Where is the bathroom?", "¿Dónde está el baño?"],
        "!Excuse me sirve para llamar la atención o pasar. Sorry es para pedir perdón."
      ],
      c: [
        ["No entiendo.", "I don't understand.", "ai dóunt anderstánd", ""],
        ["¿Qué significa esta palabra?", "What does this word mean?", "uát das dis uérd miin", ""],
        ["¿Cómo se dice 'mesa' en inglés?", "How do you say 'mesa' in English?", "jáu du iú séi 'mesa' in ínglish", ""],
        ["Hablo un poco de inglés.", "I speak a little English.", "ai spiik a lítol ínglish", ""],
        ["Más despacio, por favor.", "Slower, please.", "slóuer, plís", ""],
        ["¿Dónde está el baño?", "Where is the bathroom?", "uér is de bázrum", ""],
        ["¿Cuánto cuesta?", "How much is it?", "jáu mach is it", ""],
        ["¿Quién es él?", "Who is he?", "ju is ji", ""],
        ["¿Cuándo es la junta?", "When is the meeting?", "uén is de míiting", ""],
        ["Disculpe. (para llamar la atención)", "Excuse me.", "ekskiús mi", "Sorry es para pedir perdón."],
        ["Lo siento.", "I'm sorry.", "aim sári", ""],
        ["De nada.", "You're welcome.", "iór uélcom", ""]
      ],
      d: [
        ["A", "Excuse me, where is the bathroom?", "Disculpe, ¿dónde está el baño?"],
        ["B", "It's over there, on the left.", "Está por allá, a la izquierda."],
        ["A", "Sorry, I don't understand. Slower, please.", "Perdón, no entiendo. Más despacio, por favor."],
        ["B", "Over there. On the left.", "Por allá. A la izquierda."],
        ["A", "Ah, thank you!", "¡Ah, gracias!"],
        ["B", "You're welcome.", "De nada."]
      ]
    },
    {
      id: "n0u11", t: "Reacciones: yeah, wow, ¡suerte!",
      goal: "Reaccionar rápido a lo que te dicen, como en una plática de verdad.",
      g: [
        "En una plática real, casi todo son respuestas cortas. Con estas ya puedes reaccionar a lo que te cuentan.",
        ["Yeah, sure. · Wow, that's awesome!", "Sí, claro. · ¡Guau, qué padre!"],
        "yeah = sí, pero informal. Con amigos se dice mucho más que yes.",
        "Para saludar a varias personas: Hi, guys! (sirve para hombres y mujeres). A un cliente o a alguien mayor: sir (señor) y ma'am (señora).",
        "!I guess so = supongo que sí · Good luck! = ¡suerte! · Oh my God! = ¡Dios mío!"
      ],
      c: [
        ["Sí, claro.", "Yeah, sure.", "iéa, shur", ""],
        ["¡Guau!", "Wow!", "uáu", ""],
        ["¡Oye!", "Hey!", "jéi", ""],
        ["¡Hola, chicos!", "Hi, guys!", "jái, gáis", "guys sirve para hombres y mujeres."],
        ["¡Perfecto!", "Perfect!", "pérfekt", ""],
        ["¡Suerte!", "Good luck!", "gud lak", ""],
        ["¡Suena divertido!", "That sounds fun!", "dat sáunds fan", ""],
        ["Supongo que sí.", "I guess so.", "ai gues sóu", ""],
        ["¡Dios mío!", "Oh my God!", "óu mai gad", ""],
        ["¡Qué padre!", "That's so cool!", "dats sóu cul", ""],
        ["¡Exacto!", "Exactly!", "egzáktli", ""],
        ["Adiós, nos vemos.", "Bye, see you.", "bái, si iú", ""]
      ],
      d: [
        ["A", "Hey! How's it going?", "¡Oye! ¿Cómo te va?"],
        ["B", "Good! I have a new job.", "¡Bien! Tengo trabajo nuevo."],
        ["A", "Wow! That's awesome!", "¡Guau! ¡Qué padre!"],
        ["B", "Yeah, I'm very happy.", "Sí, estoy muy contento."],
        ["A", "Good luck, buddy!", "¡Suerte, amigo!"],
        ["B", "Thanks! Bye!", "¡Gracias! ¡Adiós!"]
      ]
    },
    {
      id: "n0u9", t: "El clima y las estaciones",
      goal: "Hablar del clima, el tema favorito para empezar una plática.",
      g: [
        "El clima siempre se dice con It's (nunca 'Is' solo, ni 'Makes').",
        ["It's hot. · It's sunny. · It's raining.", "Hace calor. · Está soleado. · Está lloviendo."],
        "!'Hace frío' NO es 'makes cold'. Es It's cold.",
        "Para preguntar: What's the weather like? (¿Cómo está el clima?)",
        ["spring · summer · fall · winter", "primavera · verano · otoño · invierno"]
      ],
      c: [
        ["¿Cómo está el clima?", "What's the weather like?", "uáts de uéder láik", ""],
        ["Hace calor.", "It's hot.", "its jat", ""],
        ["Hace frío.", "It's cold.", "its cóuld", "Nunca 'makes cold'."],
        ["Está soleado.", "It's sunny.", "its sáni", ""],
        ["Está nublado.", "It's cloudy.", "its cláudi", ""],
        ["Está lloviendo.", "It's raining.", "its réining", ""],
        ["Hace mucho viento.", "It's very windy.", "its véri uíndi", ""],
        ["Hace buen día.", "It's a nice day.", "its a náis déi", ""],
        ["primavera, verano", "spring, summer", "spring, sámer", ""],
        ["otoño, invierno", "fall, winter", "fol, uínter", "En Reino Unido otoño es autumn."],
        ["En verano hace mucho calor.", "It's very hot in summer.", "its véri jat in sámer", ""],
        ["Lleva un paraguas.", "Take an umbrella.", "téik an ambréla", ""]
      ],
      d: [
        ["A", "What's the weather like today?", "¿Cómo está el clima hoy?"],
        ["B", "It's cloudy and a little cold.", "Está nublado y hace un poco de frío."],
        ["A", "Is it raining?", "¿Está lloviendo?"],
        ["B", "Not now, but take an umbrella.", "Ahorita no, pero lleva un paraguas."],
        ["A", "Good idea. I love winter.", "Buena idea. Me encanta el invierno."],
        ["B", "Really? I prefer summer.", "¿En serio? Yo prefiero el verano."]
      ]
    },
    {
      id: "n0u10", t: "Instrucciones y peticiones",
      goal: "Dar instrucciones, pedir cosas y proponer actividades.",
      g: [
        "Para dar una instrucción se usa el verbo solo, al inicio (imperativo):",
        ["Come here. · Wait a minute.", "Ven aquí. · Espera un minuto."],
        "Para prohibir: Don't + verbo.",
        ["Don't touch it. · Don't worry.", "No lo toques. · No te preocupes."],
        "Para proponer: Let's + verbo (vamos a…).",
        ["Let's go. · Let's eat.", "Vámonos. · Vamos a comer."],
        "!Agrega please para sonar amable: Please wait / Wait, please."
      ],
      c: [
        ["Ven aquí.", "Come here.", "cam jir", ""],
        ["Espera un minuto.", "Wait a minute.", "uéit a mínit", ""],
        ["Pásale, por favor.", "Come in, please.", "cam in, plís", ""],
        ["Siéntate.", "Have a seat.", "jav a siit", "Más amable que Sit down."],
        ["No lo toques.", "Don't touch it.", "dóunt tach it", ""],
        ["No te preocupes.", "Don't worry.", "dóunt uérri", ""],
        ["Vámonos.", "Let's go.", "lets góu", ""],
        ["Vamos a comer.", "Let's eat.", "lets iit", ""],
        ["Ten cuidado.", "Be careful.", "bi kérful", ""],
        ["Apúrate.", "Hurry up.", "jéri ap", ""],
        ["Llámame más tarde.", "Call me later.", "col mi léiter", ""],
        ["Cierra la puerta, por favor.", "Please close the door.", "plís clóus de dor", ""]
      ],
      d: [
        ["A", "Hurry up! We're late.", "¡Apúrate! Vamos tarde."],
        ["B", "Wait a minute, please. Where are my keys?", "Espera un minuto, por favor. ¿Dónde están mis llaves?"],
        ["A", "They're on the table.", "Están en la mesa."],
        ["B", "Okay, let's go!", "¡Listo, vámonos!"],
        ["A", "Close the door, please.", "Cierra la puerta, por favor."],
        ["B", "Don't worry, it's closed.", "No te preocupes, ya está cerrada."]
      ]
    }
  ]
});
