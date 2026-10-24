/* Nivel 0 · Arranque (Pre-A1)
   Formato de unidad:
   g: explicación — texto = párrafo, "!texto" = consejo, ["English","Español"] = ejemplo con audio
   c: frases — ["Español","English","pronunciación","nota opcional"]
   d: diálogo — ["A" o "B","English","Español"]   (en la práctica, tú eres B) */
(window.COURSE = window.COURSE || []).push({
  id: "n0", name: "Nivel 0 · Arranque", cefr: "Pre-A1",
  desc: "Desde cero: saludar, presentarte, contar, el verbo to be y frases para sobrevivir.",
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
        ["I'm Ana. I'm from Mexico.", "Soy Ana. Soy de México."]
      ],
      c: [
        ["Hola, ¿cómo estás?", "Hi, how are you?", "jai, jáu ar iú", ""],
        ["Bien, gracias. ¿Y tú?", "I'm fine, thanks. And you?", "aim fáin, zenks. and iú", ""],
        ["Buenos días.", "Good morning.", "gud mórning", ""],
        ["Buenas tardes.", "Good afternoon.", "gud áfternun", ""],
        ["Buenas noches (al llegar).", "Good evening.", "gud ívning", "Good night es solo para despedirse."],
        ["Me llamo Ana.", "My name is Ana.", "mai néim is ána", ""],
        ["Soy de México.", "I'm from Mexico.", "aim from méksikou", ""],
        ["Mucho gusto.", "Nice to meet you.", "náis tu mit iú", ""],
        ["¿Cómo te llamas?", "What's your name?", "uáts iór néim", ""],
        ["¿De dónde eres?", "Where are you from?", "uér ar iú from", ""],
        ["Adiós.", "Goodbye.", "gudbái", ""],
        ["Nos vemos luego.", "See you later.", "si iú léiter", ""]
      ],
      d: [
        ["A", "Hi! What's your name?", "¡Hola! ¿Cómo te llamas?"],
        ["B", "Hi, my name is Ana. And you?", "Hola, me llamo Ana. ¿Y tú?"],
        ["A", "I'm Carlos. Nice to meet you.", "Soy Carlos. Mucho gusto."],
        ["B", "Nice to meet you too. Where are you from?", "Igualmente. ¿De dónde eres?"],
        ["A", "I'm from Mexico.", "Soy de México."],
        ["B", "Me too! See you later.", "¡Yo también! Nos vemos luego."]
      ]
    },
    {
      id: "n0u2", t: "Números y el alfabeto",
      goal: "Decir números, tu edad, tu teléfono y deletrear tu nombre.",
      g: [
        "Los números del 13 al 19 terminan en -teen y llevan el acento al final. Las decenas (20, 30, 40…) terminan en -ty y llevan el acento al inicio.",
        ["thirteen — thirty", "13 (zer-TÍN) — 30 (ZÉR-ti)"],
        ["fifteen — fifty", "15 (fif-TÍN) — 50 (FÍF-ti)"],
        "Las vocales del alfabeto suenan distinto que en español: A (ei), E (i), I (ai), O (ou), U (iu). Es muy útil para deletrear nombres y correos.",
        "!La edad se dice con el verbo be, no con have: I'm 25 (years old). Nunca 'I have 25 years'.",
        "Los teléfonos se dicen dígito por dígito; el 0 suele decirse 'oh'."
      ],
      c: [
        ["uno, dos, tres", "one, two, three", "uán, tu, zri", ""],
        ["cuatro, cinco, seis", "four, five, six", "for, fáiv, siks", ""],
        ["siete, ocho, nueve, diez", "seven, eight, nine, ten", "séven, éit, náin, ten", ""],
        ["once, doce", "eleven, twelve", "iléven, tuélv", ""],
        ["trece", "thirteen", "zertín", "Acento al final: thir-TEEN."],
        ["treinta", "thirty", "zérti", "Acento al inicio: THIR-ty."],
        ["cien", "one hundred", "uán jándred", ""],
        ["Tengo veinticinco años.", "I'm twenty-five years old.", "aim tuénti-fáiv íers óuld", "La edad va con be, no con have."],
        ["¿Cuántos años tienes?", "How old are you?", "jáu óuld ar iú", ""],
        ["¿Cuál es tu número de teléfono?", "What's your phone number?", "uáts iór fóun námber", ""],
        ["¿Cómo se escribe?", "How do you spell it?", "jáu du iú spel it", ""],
        ["Se escribe A-N-A.", "It's spelled A-N-A.", "its speld ei-en-ei", ""]
      ],
      d: [
        ["A", "What's your phone number?", "¿Cuál es tu número de teléfono?"],
        ["B", "It's five five, two three four, six seven eight nine.", "Es 55 234 6789."],
        ["A", "Thanks. How do you spell your last name?", "Gracias. ¿Cómo se escribe tu apellido?"],
        ["B", "It's spelled L-O-P-E-Z.", "Se escribe L-O-P-E-Z."],
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
        ["Somos un equipo.", "We are a team.", "ui ar a tim", ""],
        ["Ellos son de Monterrey.", "They are from Monterrey.", "déi ar from monterréi", ""],
        ["No estoy listo.", "I'm not ready.", "aim not rédi", ""],
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
        ["¿Qué significa esta palabra?", "What does this word mean?", "uát das dis uérd min", ""],
        ["¿Cómo se dice 'mesa' en inglés?", "How do you say 'mesa' in English?", "jáu du iú séi 'mesa' in ínglish", ""],
        ["Hablo un poco de inglés.", "I speak a little English.", "ai spik a lítol ínglish", ""],
        ["Más despacio, por favor.", "Slower, please.", "slóuer, plís", ""],
        ["¿Dónde está el baño?", "Where is the bathroom?", "uér is de bázrum", ""],
        ["¿Cuánto cuesta?", "How much is it?", "jáu mach is it", ""],
        ["¿Quién es él?", "Who is he?", "ju is ji", ""],
        ["¿Cuándo es la junta?", "When is the meeting?", "uén is de míting", ""],
        ["Disculpe. (para llamar la atención)", "Excuse me.", "ekskiús mi", "Sorry es para pedir perdón."],
        ["Lo siento.", "I'm sorry.", "aim sóri", ""],
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
    }
  ]
});
