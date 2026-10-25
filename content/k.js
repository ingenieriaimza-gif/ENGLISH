/* Kínder · Primeras palabras (desde cero absoluto)
   Formato de unidad:
   g: explicación — texto = párrafo, "!texto" = consejo, ["English","Español"] = ejemplo con audio
   c: frases — ["Español","English","pronunciación","nota opcional"]
   d: diálogo — ["A" o "B","English","Español"]   (en la práctica, tú eres B) */
(window.COURSE = window.COURSE || []).push({
  id: "k", name: "Kínder · Primeras palabras", short: "Kínder", cefr: "Inicio",
  desc: "Desde cero absoluto: sonidos, colores, números, animales, cuerpo, familia, comida, casa y tus primeras frases.",
  units: [
    {
      id: "k1", t: "El alfabeto",
      goal: "Conocer el nombre de las letras en inglés para deletrear.",
      g: [
        "El inglés usa las mismas letras que el español (sin la ñ), pero se llaman distinto.",
        "No te preocupes por aprenderlas todas hoy. Escúchalas y repítelas en voz alta.",
        ["A, B, C, D, E, F, G", "ei, bi, si, di, i, ef, yi"],
        ["H, I, J, K, L, M, N", "eich, ai, yei, kei, el, em, en"],
        ["O, P, Q, R, S, T, U", "ou, pi, kiu, ar, es, ti, iu"],
        ["V, W, X, Y, Z", "vi, dábol-iu, eks, uái, zi"],
        "!Las que más confunden a los hispanohablantes: la E se dice 'i', la I se dice 'ai', la G se dice 'yi' y la J se dice 'yei'.",
        "Las letras sirven para deletrear (spell) tu nombre o tu correo, algo que vas a hacer mucho."
      ],
      c: [
        ["A, B, C", "A, B, C", "ei, bi, si", ""],
        ["D, E, F", "D, E, F", "di, i, ef", "La E se dice 'i'."],
        ["G, H, I", "G, H, I", "yi, eich, ai", "La I se dice 'ai'."],
        ["J, K, L", "J, K, L", "yei, kei, el", ""],
        ["M, N, O", "M, N, O", "em, en, ou", ""],
        ["P, Q, R", "P, Q, R", "pi, kiu, ar", ""],
        ["S, T, U", "S, T, U", "es, ti, iu", ""],
        ["V, W", "V, W", "vi, dábol-iu", "W = 'doble u'."],
        ["X, Y, Z", "X, Y, Z", "eks, uái, zi", ""],
        ["Deletrea tu nombre, por favor.", "Spell your name, please.", "spel iór néim, plís", ""],
        ["Se escribe {nameS|M-A-R-Í-A}.", "It's {nameS|M-A-R-I-A}.", "its {nameS|em-ei-ar-ai-ei}", ""],
        ["arroba (en un correo)", "at", "at", "ana@gmail.com = ana at gmail dot com"]
      ],
      d: [
        ["A", "What's your name?", "¿Cómo te llamas?"],
        ["B", "My name is {name|Ana}.", "Me llamo {name|Ana}."],
        ["A", "Spell your name, please.", "Deletrea tu nombre, por favor."],
        ["B", "It's {nameS|A-N-A}.", "Es {nameS|A-N-A}."],
        ["A", "Thank you, {name|Ana}.", "Gracias, {name|Ana}."],
        ["B", "You're welcome.", "De nada."]
      ]
    },
    {
      id: "k2", t: "Sonidos que no existen en español",
      goal: "Escuchar y producir los sonidos del inglés que más cuestan.",
      g: [
        "El inglés tiene sonidos que el español no tiene. Si los practicas desde el principio, te van a entender mucho mejor.",
        "TH: pon la punta de la lengua entre los dientes y sopla.",
        ["think · three · thank you", "pensar · tres · gracias"],
        "SH: como cuando pides silencio: shhh.",
        ["she · shoe · shop", "ella · zapato · tienda"],
        "V: los dientes de arriba tocan el labio de abajo. No es igual a la B.",
        ["very · van · five", "muy · camioneta · cinco"],
        "Vocal corta y vocal larga: cambian el significado.",
        ["ship — sheep · live — leave", "barco — oveja · vivir — irse"],
        "!Exagera los sonidos al practicar. Al principio se siente raro: es normal."
      ],
      c: [
        ["gracias", "thank you", "zénk iú", "TH: lengua entre los dientes."],
        ["tres", "three", "zri", "TH + R."],
        ["pensar", "think", "zink", ""],
        ["madre", "mother", "máder", "TH suave, casi como una d."],
        ["ella", "she", "shi", "SH = shhh."],
        ["zapato", "shoe", "shu", ""],
        ["muy", "very", "véri", "V: dientes sobre el labio."],
        ["cinco", "five", "fáiv", ""],
        ["barco", "ship", "ship", "i corta."],
        ["oveja", "sheep", "shiip", "i larga."],
        ["sombrero", "hat", "jat", "La h suena como una j suave."],
        ["casa", "house", "jáus", ""]
      ],
      d: [
        ["A", "Say 'three'.", "Di 'three'."],
        ["B", "Three.", "Tres."],
        ["A", "Very good! Now say 'thank you'.", "¡Muy bien! Ahora di 'thank you'."],
        ["B", "Thank you.", "Gracias."],
        ["A", "Excellent! Say 'she sells shoes'.", "¡Excelente! Di 'she sells shoes'."],
        ["B", "She sells shoes.", "Ella vende zapatos."]
      ]
    },
    {
      id: "k3", t: "Los colores",
      goal: "Nombrar colores y preguntar de qué color es algo.",
      g: [
        "En inglés el color va ANTES de la cosa (al revés que en español).",
        ["a red car", "un carro rojo"],
        ["a blue shirt", "una camisa azul"],
        "Para preguntar el color:",
        ["What color is it? It's green.", "¿De qué color es? Es verde."],
        "!Los colores no cambian en plural: red cars, nunca 'reds cars'."
      ],
      c: [
        ["🔴 rojo", "red", "red", ""],
        ["🔵 azul", "blue", "blu", ""],
        ["🟡 amarillo", "yellow", "iélou", ""],
        ["🟢 verde", "green", "griin", ""],
        ["⚫ negro", "black", "blak", ""],
        ["⚪ blanco", "white", "uáit", ""],
        ["🟠 naranja", "orange", "óranch", ""],
        ["🩷 rosa", "pink", "pink", ""],
        ["🟣 morado", "purple", "pérpol", ""],
        ["🟤 café", "brown", "bráun", ""],
        ["gris", "gray", "gréi", ""],
        ["¿De qué color es?", "What color is it?", "uát cálor is it", ""]
      ],
      d: [
        ["A", "What color is your car?", "¿De qué color es tu carro?"],
        ["B", "My car is white.", "Mi carro es blanco."],
        ["A", "What color is your house?", "¿De qué color es tu casa?"],
        ["B", "My house is yellow.", "Mi casa es amarilla."],
        ["A", "What's your favorite color?", "¿Cuál es tu color favorito?"],
        ["B", "My favorite color is blue.", "Mi color favorito es el azul."]
      ]
    },
    {
      id: "k4", t: "Los números del 0 al 20",
      goal: "Contar del 0 al 20 y decir cuántas cosas hay.",
      g: [
        "Los números del 1 al 10 son la base de todo. Repítelos hasta que salgan solos.",
        ["one, two, three, four, five", "1, 2, 3, 4, 5"],
        ["six, seven, eight, nine, ten", "6, 7, 8, 9, 10"],
        "El 11 y el 12 son especiales: eleven, twelve. Del 13 al 19 terminan en -teen (con fuerza al final) y el 20 es twenty.",
        ["eleven, twelve, thirteen, fourteen, fifteen", "11, 12, 13, 14, 15"],
        ["sixteen, seventeen, eighteen, nineteen, twenty", "16, 17, 18, 19, 20"],
        "Para el plural, casi siempre se agrega una -s:",
        ["one apple · two apples", "una manzana · dos manzanas"],
        "Para preguntar cuántos: How many…?",
        "!'one' suena 'uán', 'two' suena 'tu' y 'eight' suena 'éit'."
      ],
      c: [
        ["1 uno", "one", "uán", ""],
        ["2 dos", "two", "tu", ""],
        ["3 tres", "three", "zri", ""],
        ["4 cuatro", "four", "for", ""],
        ["5 cinco", "five", "fáiv", ""],
        ["6 seis", "six", "siks", ""],
        ["7 siete", "seven", "séven", ""],
        ["8 ocho", "eight", "éit", ""],
        ["9 nueve", "nine", "náin", ""],
        ["10 diez", "ten", "ten", ""],
        ["dos manzanas", "two apples", "tu ápols", ""],
        ["¿Cuántos?", "How many?", "jáu méni", ""]
      ],
      d: [
        ["A", "How many apples?", "¿Cuántas manzanas?"],
        ["B", "Three apples.", "Tres manzanas."],
        ["A", "How many books?", "¿Cuántos libros?"],
        ["B", "Five books.", "Cinco libros."],
        ["A", "Count to ten, please.", "Cuenta hasta diez, por favor."],
        ["B", "One, two, three, four, five, six, seven, eight, nine, ten!", "¡1, 2, 3, 4, 5, 6, 7, 8, 9, 10!"]
      ]
    },
    {
      id: "k5", t: "Los animales",
      goal: "Nombrar animales y decir qué animal es.",
      g: [
        "Para decir qué es algo: It's a… (Es un…, es una…).",
        ["It's a dog.", "Es un perro."],
        ["It's an elephant.", "Es un elefante."],
        "Usa an cuando la palabra empieza con sonido de vocal: an elephant, an animal.",
        "!fish (pez) y sheep (oveja) no cambian en plural: one fish, two fish."
      ],
      c: [
        ["🐶 perro", "dog", "dog", ""],
        ["🐱 gato", "cat", "kat", ""],
        ["🐦 pájaro", "bird", "berd", ""],
        ["🐟 pez", "fish", "fish", ""],
        ["🐴 caballo", "horse", "jors", ""],
        ["🐮 vaca", "cow", "káu", ""],
        ["🐷 cerdo", "pig", "pig", ""],
        ["🐔 gallina", "chicken", "chíken", "También significa pollo (comida)."],
        ["🐭 ratón", "mouse", "máus", "Plural: mice."],
        ["🐘 elefante", "elephant", "élefant", ""],
        ["🦁 león", "lion", "láion", ""],
        ["Es un perro.", "It's a dog.", "its a dog", ""]
      ],
      d: [
        ["A", "What's that?", "¿Qué es eso?"],
        ["B", "It's a cat.", "Es un gato."],
        ["A", "Do you have a pet?", "¿Tienes mascota?"],
        ["B", "Yes, I have a dog.", "Sí, tengo un perro."],
        ["A", "What color is your dog?", "¿De qué color es tu perro?"],
        ["B", "My dog is brown.", "Mi perro es café."]
      ]
    },
    {
      id: "k6", t: "Mi cuerpo",
      goal: "Nombrar las partes del cuerpo y decir qué te duele.",
      g: [
        "En inglés se usa my (mi) con las partes del cuerpo, no 'the'.",
        ["my hand · my head", "mi mano · mi cabeza"],
        "Para decir que algo te duele: My … hurts.",
        ["My head hurts.", "Me duele la cabeza."],
        "!Plurales irregulares: one foot → two feet · one tooth → two teeth."
      ],
      c: [
        ["cabeza", "head", "jed", ""],
        ["ojos", "eyes", "áis", ""],
        ["oreja", "ear", "íer", ""],
        ["nariz", "nose", "nóus", ""],
        ["boca", "mouth", "máuz", "TH al final."],
        ["dientes", "teeth", "tiiz", "Singular: tooth."],
        ["mano", "hand", "jand", ""],
        ["brazo", "arm", "arm", ""],
        ["pierna", "leg", "leg", ""],
        ["pies", "feet", "fiit", "Singular: foot."],
        ["estómago", "stomach", "stámak", ""],
        ["Me duele la mano.", "My hand hurts.", "mai jand jerts", ""]
      ],
      d: [
        ["A", "Are you okay?", "¿Estás bien?"],
        ["B", "No. My head hurts.", "No. Me duele la cabeza."],
        ["A", "Oh no! Do you need water?", "¡Ay, no! ¿Necesitas agua?"],
        ["B", "Yes, please.", "Sí, por favor."],
        ["A", "Here you go.", "Aquí tienes."],
        ["B", "Thank you.", "Gracias."]
      ]
    },
    {
      id: "k7", t: "Mi familia",
      goal: "Nombrar a los miembros de tu familia.",
      g: [
        "Para presentar a alguien: This is my… (Este es mi… / Esta es mi…).",
        ["This is my mom.", "Esta es mi mamá."],
        ["This is my brother.", "Este es mi hermano."],
        "!parents = papás (mamá y papá juntos). No significa 'parientes'; eso es relatives."
      ],
      c: [
        ["mamá", "mom", "mam", ""],
        ["papá", "dad", "dad", ""],
        ["papás (los dos)", "parents", "pérents", "No es 'parientes'."],
        ["hermano", "brother", "bráder", ""],
        ["hermana", "sister", "síster", ""],
        ["abuela", "grandma", "grándma", ""],
        ["abuelo", "grandpa", "grándpa", ""],
        ["bebé", "baby", "béibi", ""],
        ["tío", "uncle", "ánkol", ""],
        ["tía", "aunt", "ant", ""],
        ["primo, prima", "cousin", "cásen", "Igual para hombre y mujer."],
        ["Esta es mi mamá.", "This is my mom.", "dis is mai mam", ""]
      ],
      d: [
        ["A", "Who is she?", "¿Quién es ella?"],
        ["B", "This is my sister.", "Es mi hermana."],
        ["A", "And who is he?", "¿Y quién es él?"],
        ["B", "He's my dad.", "Es mi papá."],
        ["A", "Do you have a brother?", "¿Tienes un hermano?"],
        ["B", "No, I don't. I have two sisters.", "No. Tengo dos hermanas."]
      ]
    },
    {
      id: "k8", t: "Comida y frutas",
      goal: "Nombrar comida y decir qué te gusta.",
      g: [
        "Para decir lo que te gusta: I like… · lo que no te gusta: I don't like…",
        ["I like apples.", "Me gustan las manzanas."],
        ["I don't like fish.", "No me gusta el pescado."],
        "Para pedir algo: I want… (quiero) o, más amable, Can I have…?",
        "!En inglés se dice 'I like apples' (en plural) para hablar de la fruta en general."
      ],
      c: [
        ["🍎 manzana", "apple", "ápol", ""],
        ["🍌 plátano", "banana", "banána", ""],
        ["🍊 naranja", "orange", "óranch", ""],
        ["🍞 pan", "bread", "bred", ""],
        ["🥚 huevo", "egg", "eg", ""],
        ["🧀 queso", "cheese", "chiis", ""],
        ["🥛 leche", "milk", "milk", ""],
        ["💧 agua", "water", "uáter", "En EE. UU. suena casi 'uárer'."],
        ["🍚 arroz", "rice", "ráis", ""],
        ["🍗 pollo", "chicken", "chíken", ""],
        ["Me gustan las manzanas.", "I like apples.", "ai láik ápols", ""],
        ["Tengo hambre.", "I'm hungry.", "aim jángri", ""]
      ],
      d: [
        ["A", "Are you hungry?", "¿Tienes hambre?"],
        ["B", "Yes, I'm hungry.", "Sí, tengo hambre."],
        ["A", "Do you want bread or rice?", "¿Quieres pan o arroz?"],
        ["B", "Rice and chicken, please.", "Arroz y pollo, por favor."],
        ["A", "Do you like cheese?", "¿Te gusta el queso?"],
        ["B", "Yes, I like cheese.", "Sí, me gusta el queso."]
      ]
    },
    {
      id: "k9", t: "La ropa",
      goal: "Nombrar la ropa y decir qué traes puesto.",
      g: [
        "Para decir lo que traes puesto: I'm wearing… (Traigo puesto…).",
        ["I'm wearing a blue shirt.", "Traigo una camisa azul."],
        "Algunas prendas siempre van en plural porque tienen 'dos partes': pants, jeans, shorts, glasses.",
        "!pants en EE. UU. = pantalones. shoes = zapatos; sneakers = tenis."
      ],
      c: [
        ["👕 playera", "T-shirt", "tí-shert", ""],
        ["camisa", "shirt", "shert", ""],
        ["👖 pantalón", "pants", "pants", "Siempre en plural."],
        ["👗 vestido", "dress", "dres", ""],
        ["falda", "skirt", "skert", ""],
        ["👟 tenis", "sneakers", "sníkers", ""],
        ["👞 zapatos", "shoes", "shus", ""],
        ["🧦 calcetines", "socks", "saks", ""],
        ["🧢 gorra", "cap", "kap", ""],
        ["🧥 chamarra", "jacket", "yáket", ""],
        ["👓 lentes", "glasses", "gláses", ""],
        ["Traigo una camisa azul.", "I'm wearing a blue shirt.", "aim uéring a blu shert", ""]
      ],
      d: [
        ["A", "It's cold today.", "Hace frío hoy."],
        ["B", "Yes. I'm wearing a jacket.", "Sí. Traigo chamarra."],
        ["A", "I like your sneakers.", "Me gustan tus tenis."],
        ["B", "Thank you! They're new.", "¡Gracias! Son nuevos."],
        ["A", "What color are they?", "¿De qué color son?"],
        ["B", "They're white and red.", "Son blancos con rojo."]
      ]
    },
    {
      id: "k10", t: "Mi casa",
      goal: "Nombrar los cuartos y objetos de la casa.",
      g: [
        "Para decir dónde está alguien o algo: in the… (en el / la…).",
        ["I'm in the kitchen.", "Estoy en la cocina."],
        ["The keys are on the table.", "Las llaves están en la mesa."],
        "in = adentro · on = encima · under = debajo.",
        "!house = la construcción; home = tu hogar. 'Estoy en casa' es I'm at home."
      ],
      c: [
        ["🏠 casa", "house", "jáus", ""],
        ["cocina", "kitchen", "kíchen", ""],
        ["recámara", "bedroom", "bédrum", ""],
        ["baño", "bathroom", "bázrum", ""],
        ["sala", "living room", "líving rum", ""],
        ["🚪 puerta", "door", "dor", ""],
        ["🪟 ventana", "window", "uíndou", ""],
        ["mesa", "table", "téibol", ""],
        ["🪑 silla", "chair", "cher", ""],
        ["🛏️ cama", "bed", "bed", ""],
        ["Estoy en la cocina.", "I'm in the kitchen.", "aim in de kíchen", ""],
        ["Estoy en casa.", "I'm at home.", "aim at jóum", ""]
      ],
      d: [
        ["A", "Where are you?", "¿Dónde estás?"],
        ["B", "I'm in the kitchen.", "Estoy en la cocina."],
        ["A", "Where are my keys?", "¿Dónde están mis llaves?"],
        ["B", "They're on the table.", "Están en la mesa."],
        ["A", "Thanks! See you later.", "¡Gracias! Nos vemos al rato."],
        ["B", "Bye!", "¡Adiós!"]
      ]
    },
    {
      id: "k11", t: "Acciones: verbos básicos",
      goal: "Conocer los verbos que usas todos los días.",
      g: [
        "Un verbo es una acción: comer, dormir, caminar. En inglés el verbo casi no cambia.",
        ["I eat. · You eat. · We eat.", "Yo como. · Tú comes. · Nosotros comemos."],
        "Para decirle a alguien que haga algo, usa el verbo solo:",
        ["Eat! · Sit down, please.", "¡Come! · Siéntate, por favor."],
        "!I can + verbo = puedo / sé: I can swim (sé nadar)."
      ],
      c: [
        ["comer", "eat", "iit", ""],
        ["beber, tomar", "drink", "drink", ""],
        ["dormir", "sleep", "sliip", ""],
        ["caminar", "walk", "uók", "La l no suena."],
        ["correr", "run", "ran", ""],
        ["leer", "read", "riid", ""],
        ["escribir", "write", "ráit", "La w no suena."],
        ["hablar", "speak", "spiik", ""],
        ["escuchar", "listen", "lísen", "La t no suena."],
        ["trabajar", "work", "uérk", ""],
        ["Siéntate, por favor.", "Sit down, please.", "sit dáun, plís", ""],
        ["Sé nadar.", "I can swim.", "ai can suím", ""]
      ],
      d: [
        ["A", "What do you do in the morning?", "¿Qué haces en la mañana?"],
        ["B", "I eat breakfast and I walk to work.", "Desayuno y camino al trabajo."],
        ["A", "Do you read?", "¿Lees?"],
        ["B", "Yes, I read at night.", "Sí, leo en la noche."],
        ["A", "Can you swim?", "¿Sabes nadar?"],
        ["B", "Yes, I can.", "Sí, sí sé."]
      ]
    },
    {
      id: "k12", t: "Cómo me siento",
      goal: "Decir cómo te sientes y preguntar cómo está alguien.",
      g: [
        "Los sentimientos van con I'm (yo estoy).",
        ["I'm happy. · I'm tired.", "Estoy feliz. · Estoy cansado."],
        "Para preguntar: Are you okay? (¿Estás bien?) · How are you? (¿Cómo estás?)",
        "!En inglés el hambre, la sed, el frío y el calor también van con I'm: I'm hungry, I'm cold."
      ],
      c: [
        ["😀 feliz", "happy", "jápi", ""],
        ["😢 triste", "sad", "sad", ""],
        ["😴 cansado", "tired", "táierd", ""],
        ["😠 enojado", "angry", "ángri", ""],
        ["😨 asustado", "scared", "skerd", ""],
        ["🤒 enfermo", "sick", "sik", ""],
        ["😑 aburrido", "bored", "bord", ""],
        ["😳 nervioso", "nervous", "nérvos", ""],
        ["🥶 Tengo frío.", "I'm cold.", "aim cóuld", ""],
        ["🥵 Tengo calor.", "I'm hot.", "aim jat", ""],
        ["Estoy muy feliz.", "I'm very happy.", "aim véri jápi", ""],
        ["¿Estás bien?", "Are you okay?", "ar iú okéi", ""]
      ],
      d: [
        ["A", "Are you okay?", "¿Estás bien?"],
        ["B", "I'm tired.", "Estoy cansado."],
        ["A", "Are you sick?", "¿Estás enfermo?"],
        ["B", "No. I'm tired and hungry.", "No. Estoy cansado y tengo hambre."],
        ["A", "Let's eat!", "¡Vamos a comer!"],
        ["B", "Yes! Now I'm happy.", "¡Sí! Ahora estoy feliz."]
      ]
    },
    {
      id: "k13", t: "Opuestos: grande y pequeño",
      goal: "Describir cosas con adjetivos básicos.",
      g: [
        "Los adjetivos describen: grande, pequeño, caliente, frío. Van ANTES de la cosa:",
        ["a big house · a small dog", "una casa grande · un perro pequeño"],
        "O después de is / are:",
        ["The house is big.", "La casa es grande."],
        "!Aprende los adjetivos en pares de opuestos: se recuerdan el doble de rápido."
      ],
      c: [
        ["grande / pequeño", "big / small", "big / smol", ""],
        ["caliente / frío", "hot / cold", "jat / cóuld", ""],
        ["nuevo / viejo", "new / old", "nu / óuld", ""],
        ["rápido / lento", "fast / slow", "fast / slóu", ""],
        ["bueno / malo", "good / bad", "gud / bad", ""],
        ["alto / bajo", "tall / short", "tol / short", ""],
        ["abierto / cerrado", "open / closed", "óupen / clóusd", ""],
        ["lleno / vacío", "full / empty", "ful / émpti", ""],
        ["limpio / sucio", "clean / dirty", "cliin / dérti", ""],
        ["fácil / difícil", "easy / difficult", "íisi / dífikolt", ""],
        ["Mi casa es pequeña.", "My house is small.", "mai jáus is smol", ""],
        ["El café está caliente.", "The coffee is hot.", "de káfi is jat", ""]
      ],
      d: [
        ["A", "Is your house big?", "¿Tu casa es grande?"],
        ["B", "No, it's small, but it's new.", "No, es pequeña, pero es nueva."],
        ["A", "Is the coffee hot?", "¿El café está caliente?"],
        ["B", "Yes, it's very hot.", "Sí, está muy caliente."],
        ["A", "Is English difficult?", "¿El inglés es difícil?"],
        ["B", "No, it's easy!", "¡No, es fácil!"]
      ]
    },
    {
      id: "k14", t: "En el salón de clases",
      goal: "Entender las instrucciones de una clase y pedir ayuda.",
      g: [
        "Estas frases las vas a oír en cualquier clase o curso de inglés.",
        ["Open your book. · Listen and repeat.", "Abre tu libro. · Escucha y repite."],
        "Y estas te sirven para pedir ayuda:",
        ["I have a question. · Can you repeat, please?", "Tengo una pregunta. · ¿Puede repetir, por favor?"],
        "!Nunca te quedes con la duda. Preguntar es la forma más rápida de aprender."
      ],
      c: [
        ["Abre tu libro.", "Open your book.", "óupen iór buk", ""],
        ["Cierra tu libro.", "Close your book.", "clóus iór buk", ""],
        ["Escucha y repite.", "Listen and repeat.", "lísen and ripít", ""],
        ["Mira el pizarrón.", "Look at the board.", "luk at de bord", ""],
        ["Levanta la mano.", "Raise your hand.", "réis iór jand", ""],
        ["Tengo una pregunta.", "I have a question.", "ai jav a kuéschon", ""],
        ["¿Qué página?", "What page?", "uát péich", ""],
        ["No sé.", "I don't know.", "ai dóunt nóu", ""],
        ["Ya terminé.", "I'm done.", "aim dan", ""],
        ["¿Puedo ir al baño?", "Can I go to the bathroom?", "can ai góu tu de bázrum", ""],
        ["lápiz / pluma", "pencil / pen", "pénsil / pen", ""],
        ["cuaderno", "notebook", "nóutbuk", ""]
      ],
      d: [
        ["A", "Good morning, class. Open your books.", "Buenos días, grupo. Abran sus libros."],
        ["B", "What page?", "¿Qué página?"],
        ["A", "Page ten. Listen and repeat.", "Página diez. Escuchen y repitan."],
        ["B", "I have a question.", "Tengo una pregunta."],
        ["A", "Yes?", "¿Sí?"],
        ["B", "How do you say 'cuaderno' in English?", "¿Cómo se dice 'cuaderno' en inglés?"]
      ]
    }
  ]
});
