/* Kínder · vocabulario extra (v) y lectura (r) de cada unidad
   v: ["Español","English","pronunciación","nota"]  — se agregan DESPUÉS de las frases base de la unidad
   r: { t: título, en: texto (párrafos con \n), es: traducción, q: [[pregunta, [opciones], índice correcto]] }
   Para agregar frases nuevas, ponlas AL FINAL de v (así no se mueve el avance guardado). */
Object.assign(window.EXTRA = window.EXTRA || {}, {
  k1: {
    v: [
      ["¿Cómo se escribe?", "How do you spell it?", "jáu du iú spel it", ""],
      ["mayúscula", "capital letter", "cápital léter", ""],
      ["minúscula", "lowercase letter", "lóuerkeis léter", ""],
      ["punto (en un correo)", "dot", "dat", "gmail dot com"],
      ["guion bajo", "underscore", "ánderskor", "ana_lopez"],
      ["guion", "dash", "dash", ""],
      ["doble L", "double L", "dábol el", "Para letras repetidas: double."],
      ["B de «boy»", "B as in boy", "bi as in bói", "Para aclarar una letra: «as in» + una palabra en inglés con esa letra (B as in boy, V as in victory). «Burro» no se usa."],
      ["¿Con B o con V?", "With a B or a V?", "uíz a bi or a vi", ""],
      ["letra", "letter", "léter", "También significa carta."],
      ["palabra", "word", "uérd", ""],
      ["nombre", "first name", "ferst néim", ""],
      ["apellido", "last name", "last néim", ""],
      ["¿Me lo repite, por favor?", "Can you repeat that, please?", "can iú ripít dat, plís", ""],
      ["Es correcto.", "That's correct.", "dats corréct", ""]
    ],
    r: {
      t: "At the swim school",
      en: "Rosa and her son Leo go to a swim school. The woman at the desk says, \"Spell your name, please.\" Rosa spells it: R-O-S-A.\nHer email is rosa underscore lopez at gmail dot com. It's all lowercase letters.\nThe teacher's name is Bruno. Rosa asks, \"With a B or a V?\" He says, \"With a B. B as in boy.\"\nLeo sings the alphabet, from A to Z. He knows all the letters!",
      es: "Rosa y su hijo Leo van a una escuela de natación. La muchacha de la recepción le dice: «Deletree su nombre, por favor». Rosa lo deletrea: R-O-S-A.\nSu correo es rosa guion bajo lopez arroba gmail punto com. Todo va con minúsculas.\nEl maestro se llama Bruno. Rosa pregunta: «¿Con B o con V?». Él dice: «Con B. B de boy».\nLeo canta el abecedario, de la A a la Z. ¡Se sabe todas las letras!",
      q: [
        ["¿Adónde van Rosa y Leo?", ["A una escuela de natación", "Al doctor", "A una escuela de inglés"], 0],
        ["¿Cómo se escribe el correo de Rosa?", ["Con mayúsculas", "Con minúsculas", "Sin arroba"], 1],
        ["¿Cómo se escribe el nombre del maestro?", ["Con B", "Con V", "Con doble L"], 0],
        ["¿Qué canta Leo?", ["Una canción de natación", "El abecedario", "Los números"], 1]
      ]
    }
  },
  k2: {
    v: [
      ["este, esta", "this", "dis", "TH suave."],
      ["eso, esa", "that", "dat", ""],
      ["jueves", "Thursday", "zérsdei", ""],
      ["pulgar", "thumb", "zam", "La b no suena."],
      ["tienda", "shop", "shap", ""],
      ["pescado", "fish", "fish", "SH al final."],
      ["silla", "chair", "cher", "CH igual que en español."],
      ["queso", "cheese", "chiis", "i larga."],
      ["camioneta", "van", "van", "V con los dientes."],
      ["voz", "voice", "vóis", ""],
      ["sentarse", "sit", "sit", "i corta."],
      ["asiento", "seat", "siit", "i larga."],
      ["cama", "bed", "bed", ""],
      ["malo", "bad", "bad", "a abierta, casi 'ea'."],
      ["junio, julio", "June, July", "yun, yulái", "J suena 'y' fuerte."]
    ],
    r: {
      t: "A day on the ship",
      en: "It's Thursday. Pablo, his mother and his son go on a ship.\nIt's very sunny, so Pablo has a big hat.\nOn the ship, they see fish in the water and a white sheep on an island.\nFor lunch, Pablo eats cheese and his mother eats fish.\nAt night, his son is in bed. He says, \"Thank you! I love the ship!\"",
      es: "Es jueves. Pablo, su mamá y su hijo van en un barco.\nHace mucho sol, así que Pablo trae un sombrero grande.\nEn el barco ven peces en el agua y una oveja blanca en una isla.\nDe comida, Pablo come queso y su mamá come pescado.\nEn la noche, su hijo está en la cama. Dice: «¡Gracias! ¡Me encanta el barco!».",
      q: [
        ["¿Qué día van en el barco?", ["El lunes", "El jueves", "El domingo"], 1],
        ["¿Qué ven en la isla?", ["Un pez", "Un barco", "Una oveja blanca"], 2],
        ["¿Qué come la mamá de Pablo?", ["Queso", "Pescado", "Pollo"], 1],
        ["¿Dónde está el hijo en la noche?", ["En el barco", "En la cama", "En la camioneta"], 1]
      ]
    }
  },
  k3: {
    v: [
      ["azul marino", "navy blue", "néivi blu", ""],
      ["azul claro", "light blue", "láit blu", ""],
      ["verde oscuro", "dark green", "dark griin", ""],
      ["dorado", "gold", "góuld", ""],
      ["plateado", "silver", "sílver", ""],
      ["beige", "beige", "béish", ""],
      ["colorido", "colorful", "cálorful", ""],
      ["El cielo es azul.", "The sky is blue.", "de skái is blu", ""],
      ["El pasto es verde.", "The grass is green.", "de gras is griin", ""],
      ["El sol es amarillo.", "The sun is yellow.", "de san is iélou", ""],
      ["un carro rojo", "a red car", "a red car", "El color va antes."],
      ["una casa blanca", "a white house", "a uáit jáus", ""],
      ["Mi color favorito es el verde.", "My favorite color is green.", "mai féivorit cálor is griin", ""],
      ["¿Te gusta el rosa?", "Do you like pink?", "du iú láik pink", ""],
      ["Es rojo y negro.", "It's red and black.", "its red and blak", ""]
    ],
    r: {
      t: "Max's birthday",
      en: "Today is Max's birthday. He's seven.\nHis aunt buys him a present: a red and black car. The gift paper is navy blue.\nThe party is very colorful. The balloons are pink, orange and purple, and the cake is light blue.\nMax's favorite colors are red and black. His sister's favorite color is green.",
      es: "Hoy es el cumpleaños de Max. Cumple siete años.\nSu tía le compra un regalo: un carro rojo con negro. El papel de regalo es azul marino.\nLa fiesta es muy colorida. Los globos son rosas, naranjas y morados, y el pastel es azul claro.\nLos colores favoritos de Max son el rojo y el negro. El color favorito de su hermana es el verde.",
      q: [
        ["¿Qué le regala su tía a Max?", ["Un pastel", "Un carro rojo con negro", "Unos globos"], 1],
        ["¿De qué color es el papel de regalo?", ["Dorado", "Rojo", "Azul marino"], 2],
        ["¿De qué color es el pastel?", ["Rosa", "Azul claro", "Verde"], 1],
        ["¿Cuál es el color favorito de la hermana de Max?", ["El rosa", "El verde", "El negro"], 1]
      ]
    }
  },
  k4: {
    v: [
      ["11 once", "eleven", "iléven", ""],
      ["12 doce", "twelve", "tuélv", ""],
      ["13 trece", "thirteen", "zertín", ""],
      ["14 catorce", "fourteen", "fortín", ""],
      ["15 quince", "fifteen", "fiftín", ""],
      ["16 dieciséis", "sixteen", "sikstín", ""],
      ["17 diecisiete", "seventeen", "seventín", ""],
      ["18 dieciocho", "eighteen", "eitín", ""],
      ["19 diecinueve", "nineteen", "naintín", ""],
      ["20 veinte", "twenty", "tuénti", ""],
      ["0 cero", "zero", "zírou", ""],
      ["tres libros", "three books", "zri buks", ""],
      ["Tengo dos hermanos.", "I have two brothers.", "ai jav tu bráders", ""],
      ["Hay cinco sillas.", "There are five chairs.", "der ar fáiv chers", ""],
      ["¿Cuántos años tienes?", "How old are you?", "jáu óuld ar iú", ""]
    ],
    r: {
      t: "At the fair",
      en: "Today Luis goes to the fair with his three nephews. They're five, nine and twelve years old.\nThe tickets are sixteen dollars.\nOn the carousel there are fifteen horses. The little girl counts them: one, two, three... fifteen!\nLuis plays a ball game, but he has zero points.\nThen they buy two apples. They're very good!",
      es: "Hoy Luis va a la feria con sus tres sobrinos. Tienen cinco, nueve y doce años.\nLos boletos cuestan dieciséis dólares.\nEn el carrusel hay quince caballitos. La niña los cuenta: uno, dos, tres... ¡quince!\nLuis juega un juego de pelotas, pero tiene cero puntos.\nDespués compran dos manzanas. ¡Están muy ricas!",
      q: [
        ["¿Cuántos sobrinos van con Luis?", ["Dos", "Tres", "Cinco"], 1],
        ["¿Cuánto cuestan los boletos?", ["Doce dólares", "Dieciséis dólares", "Veinte dólares"], 1],
        ["¿Cuántos caballitos hay en el carrusel?", ["Doce", "Quince", "Veinte"], 1],
        ["¿Cuántos puntos tiene Luis en el juego?", ["Cero", "Diez", "Quince"], 0]
      ]
    }
  },
  k5: {
    v: [
      ["🐰 conejo", "rabbit", "rábit", ""],
      ["🐑 oveja", "sheep", "shiip", "Plural igual: sheep."],
      ["🐐 chivo", "goat", "góut", ""],
      ["🦆 pato", "duck", "dak", ""],
      ["🐻 oso", "bear", "ber", ""],
      ["🐯 tigre", "tiger", "táiguer", ""],
      ["🐒 mono", "monkey", "mánki", ""],
      ["🐍 serpiente", "snake", "snéik", ""],
      ["🐢 tortuga", "turtle", "tértol", ""],
      ["🦋 mariposa", "butterfly", "báterflai", ""],
      ["🐝 abeja", "bee", "bi", ""],
      ["🐜 hormiga", "ant", "ant", ""],
      ["🦒 jirafa", "giraffe", "yiráf", ""],
      ["mascota", "pet", "pet", ""],
      ["El perro es grande.", "The dog is big.", "de dog is big", ""],
      ["lobo", "wolf", "uulf", ""],
      ["zorro", "fox", "faks", ""],
      ["toro", "bull", "bul", ""],
      ["murciélago", "bat", "bat", "bat también es el bate de beisbol."],
      ["cola", "tail", "téil", ""],
      ["Me encantan los animales.", "I love animals.", "ai lav ánimals", ""],
      ["animales de la granja", "farm animals", "farm ánimals", ""],
      ["animales salvajes", "wild animals", "uáild ánimals", ""],
      ["El perro tiene la cola larga.", "The dog has a long tail.", "de dog jas a long téil", ""]
    ],
    r: {
      t: "Toby",
      en: "Lucía loves animals. On Saturday, she goes to an animal shelter with her son, Leo.\nThere are many dogs and cats. Rocky is a big dog. Toby is a small dog with a long tail.\nLucía and Leo take Toby home. Now Toby is their pet.\nLeo wants a turtle too. At night, they watch a TV show about wild animals: tigers, lions and elephants.",
      es: "A Lucía le encantan los animales. El sábado va a un refugio de animales con su hijo, Leo.\nHay muchos perros y gatos. Rocky es un perro grande. Toby es un perro chiquito con la cola larga.\nLucía y Leo se llevan a Toby a su casa. Ahora Toby es su mascota.\nLeo también quiere una tortuga. En la noche ven en la tele un programa de animales salvajes: tigres, leones y elefantes.",
      q: [
        ["¿Adónde va Lucía el sábado?", ["Al zoológico", "A un refugio de animales", "A una granja"], 1],
        ["¿Cómo es Toby?", ["Grande y negro", "Chiquito, con la cola larga", "Grande, con la cola corta"], 1],
        ["¿Qué animal quiere Leo también?", ["Un conejo", "Un gato", "Una tortuga"], 2],
        ["¿Qué animales ven en la tele?", ["Animales de la granja", "Animales salvajes", "Peces"], 1]
      ]
    }
  },
  k6: {
    v: [
      ["pelo", "hair", "jer", "Sin s: long hair."],
      ["cara", "face", "féis", ""],
      ["cuello", "neck", "nek", ""],
      ["hombro", "shoulder", "shóulder", ""],
      ["espalda", "back", "bak", ""],
      ["dedo", "finger", "fínguer", ""],
      ["rodilla", "knee", "nii", "La k no suena."],
      ["corazón", "heart", "jart", ""],
      ["garganta", "throat", "zróut", ""],
      ["labios", "lips", "lips", ""],
      ["lengua", "tongue", "tang", ""],
      ["uña", "nail", "néil", ""],
      ["Me duele la espalda.", "My back hurts.", "mai bak jerts", ""],
      ["Lávate las manos.", "Wash your hands.", "uásh iór jands", ""],
      ["Tengo los ojos cafés.", "I have brown eyes.", "ai jav bráun áis", ""],
      ["cuerpo", "body", "bádi", ""],
      ["cerebro", "brain", "bréin", ""],
      ["pecho", "chest", "chest", ""],
      ["hueso", "bone", "bóun", ""],
      ["músculo", "muscle", "másol", ""],
      ["sangre", "blood", "blad", ""],
      ["Me duele el pecho.", "My chest hurts.", "mai chest jerts", ""],
      ["Me duele todo el cuerpo.", "My whole body hurts.", "mai jóul bádi jerts", ""]
    ],
    r: {
      t: "A bad Saturday",
      en: "On Saturday, Pedro plays soccer with his friends. He falls, and his knee hurts. There's a little blood.\nHis friend takes him to the doctor. His hand and his shoulder hurt too, but his bones are fine.\nAt night his whole body hurts. His son draws a picture of him. \"You have blue eyes!\" he says. But Pedro has brown eyes.",
      es: "El sábado, Pedro juega futbol con sus amigos. Se cae y le duele la rodilla. Hay un poco de sangre.\nSu amigo lo lleva al doctor. También le duelen la mano y el hombro, pero sus huesos están bien.\nEn la noche le duele todo el cuerpo. Su hijo le hace un dibujo. «¡Tienes los ojos azules!», le dice. Pero Pedro tiene los ojos cafés.",
      q: [
        ["¿Qué le duele a Pedro cuando se cae?", ["La cabeza", "La rodilla", "El estómago"], 1],
        ["¿Cómo están sus huesos?", ["Bien", "Mal", "No sabe"], 0],
        ["¿Qué le duele en la noche?", ["La espalda", "Todo el cuerpo", "Los ojos"], 1],
        ["¿De qué color son los ojos de Pedro?", ["Azules", "Verdes", "Cafés"], 2]
      ]
    }
  },
  k7: {
    v: [
      ["hijo", "son", "san", ""],
      ["hija", "daughter", "dóter", ""],
      ["esposo", "husband", "jásband", ""],
      ["esposa", "wife", "uáif", ""],
      ["sobrino", "nephew", "néfiu", ""],
      ["sobrina", "niece", "niis", ""],
      ["nieto, nieta", "grandson, granddaughter", "gránsan, grándoter", ""],
      ["suegra", "mother-in-law", "máder-in-lo", ""],
      ["novio", "boyfriend", "bóifrend", ""],
      ["novia", "girlfriend", "guérlfrend", ""],
      ["amigo, amiga", "friend", "frend", ""],
      ["familia", "family", "fámili", ""],
      ["Él es mi hijo.", "He's my son.", "jis mai san", ""],
      ["Tengo una familia grande.", "I have a big family.", "ai jav a big fámili", ""],
      ["Quiero a mi familia.", "I love my family.", "ai lav mai fámili", ""],
      ["padre", "father", "fáder", ""],
      ["niño / niña", "boy / girl", "bói / guérl", ""],
      ["Mi padre es doctor.", "My father is a doctor.", "mai fáder is a dáktor", ""],
      ["Tengo un niño y una niña.", "I have a boy and a girl.", "ai jav a bói and a guérl", ""]
    ],
    r: {
      t: "Laura's wedding",
      en: "Today is Laura's wedding. Laura is Sofia's cousin.\nSofia goes with her family: her mom, her dad, her son and her daughter. Her grandpa and her aunts are there too. It's a big family!\nIn the family photo, the grandpa is in the middle and the kids are in the front.\nSofia's dad is a doctor. He dances with the bride. Everybody is very happy.",
      es: "Hoy es la boda de Laura. Laura es prima de Sofía.\nSofía va con su familia: su mamá, su papá, su hijo y su hija. Su abuelo y sus tías también están ahí. ¡Es una familia grande!\nEn la foto familiar, el abuelo está en medio y los niños están adelante.\nEl papá de Sofía es doctor. Baila con la novia. Todos están muy contentos.",
      q: [
        ["¿Qué es Laura de Sofía?", ["Su hermana", "Su prima", "Su tía"], 1],
        ["¿Quién está en medio en la foto?", ["La novia", "El abuelo", "Los niños"], 1],
        ["¿A qué se dedica el papá de Sofía?", ["Es maestro", "Es doctor", "Es fotógrafo"], 1],
        ["¿Con quién baila el papá de Sofía?", ["Con su esposa", "Con la novia", "Con Sofía"], 1]
      ]
    }
  },
  k8: {
    v: [
      ["🍓 fresa", "strawberry", "stróberi", ""],
      ["🍇 uvas", "grapes", "gréips", ""],
      ["🍉 sandía", "watermelon", "uáter-mélon", ""],
      ["🍍 piña", "pineapple", "páinapol", ""],
      ["🥑 aguacate", "avocado", "avocádou", ""],
      ["🍅 jitomate", "tomato", "toméitou", ""],
      ["🥔 papa", "potato", "potéitou", ""],
      ["🥕 zanahoria", "carrot", "cárrot", ""],
      ["🥩 carne", "meat", "miit", ""],
      ["☕ café", "coffee", "káfi", ""],
      ["🧃 jugo", "juice", "yus", ""],
      ["sal y azúcar", "salt and sugar", "solt and shúgar", ""],
      ["desayuno, comida, cena", "breakfast, lunch, dinner", "brékfast, lanch, díner", ""],
      ["Tengo sed.", "I'm thirsty.", "aim zérsti", ""],
      ["Está rico.", "It's good.", "its gud", ""],
      ["chocolate", "chocolate", "chákolet", ""],
      ["dulces", "candy", "cándi", ""],
      ["miel", "honey", "jáni", ""],
      ["mantequilla", "butter", "báter", ""],
      ["helado", "ice cream", "áis crim", ""],
      ["fruta", "fruit", "frut", ""],
      ["Me gusta mucho la fruta.", "I love fruit.", "ai lav frut", ""],
      ["pan con mantequilla", "bread and butter", "bred and báter", ""]
    ],
    r: {
      t: "A Sunday with food",
      en: "It's Sunday. I'm hungry! For breakfast I eat bread and butter, and I drink milk.\nThen we go to the supermarket. We buy grapes, apples and a big watermelon. I love fruit!\nFor lunch, my grandma cooks chicken with rice. It's good.\nIn the afternoon I'm thirsty. I drink water and juice. Then we eat chocolate ice cream. Yum!",
      es: "Es domingo. ¡Tengo hambre! De desayuno como pan con mantequilla y tomo leche.\nDespués vamos al supermercado. Compramos uvas, manzanas y una sandía grande. ¡Me gusta mucho la fruta!\nDe comida, mi abuela cocina pollo con arroz. Está rico.\nEn la tarde tengo sed. Tomo agua y jugo. Después comemos helado de chocolate. ¡Mmm!",
      q: [
        ["¿Qué desayuna?", ["Pan con mantequilla y leche", "Huevos y café", "Fruta y jugo"], 0],
        ["¿Qué compran en el supermercado?", ["Pan y leche", "Uvas, manzanas y una sandía", "Pollo y arroz"], 1],
        ["¿Quién cocina la comida?", ["Su mamá", "Su papá", "Su abuela"], 2],
        ["¿Qué comen en la tarde?", ["Helado de chocolate", "Dulces", "Pastel"], 0]
      ]
    }
  },
  k9: {
    v: [
      ["👔 corbata", "tie", "tái", ""],
      ["traje", "suit", "sut", ""],
      ["suéter", "sweater", "suéter", ""],
      ["sudadera", "hoodie", "júdi", ""],
      ["shorts", "shorts", "shorts", ""],
      ["🩳 traje de baño", "swimsuit", "suímsut", ""],
      ["👢 botas", "boots", "buts", ""],
      ["🧣 bufanda", "scarf", "skarf", ""],
      ["🧤 guantes", "gloves", "glavs", ""],
      ["👜 bolsa", "bag", "bag", ""],
      ["cinturón", "belt", "belt", ""],
      ["⌚ reloj", "watch", "uách", ""],
      ["ponerse (ropa)", "put on", "put on", ""],
      ["quitarse (ropa)", "take off", "téik of", ""],
      ["Ponte la chamarra.", "Put on your jacket.", "put on iór yáket", ""],
      ["ropa", "clothes", "clóuz", ""],
      ["abrigo", "coat", "cóut", ""],
      ["uniforme", "uniform", "iúniform", ""],
      ["Mi ropa está limpia.", "My clothes are clean.", "mai clóuz ar clíin", ""],
      ["Ponte el abrigo.", "Put on your coat.", "put on iór cóut", ""]
    ],
    r: {
      t: "The interview",
      en: "Carlos has a job interview. On Monday he buys new clothes: a black suit, a blue shirt, a gray tie and black shoes. The pants are big, so he tries a smaller size.\nOn Tuesday it's cold. His son puts on his jacket and goes to school.\nAfter the interview, Carlos meets a friend at a café. At night, good news: he has the job!",
      es: "Carlos tiene una entrevista de trabajo. El lunes compra ropa nueva: un traje negro, una camisa azul, una corbata gris y zapatos negros. El pantalón le queda grande, así que se prueba una talla más chica.\nEl martes hace frío. Su hijo se pone la chamarra y se va a la escuela.\nDespués de la entrevista, Carlos ve a un amigo en un café. En la noche, buenas noticias: ¡le dan el trabajo!",
      q: [
        ["¿De qué color es la camisa de Carlos?", ["Blanca", "Azul", "Gris"], 1],
        ["¿Qué problema tiene con el pantalón?", ["Está sucio", "Le queda grande", "Es muy caro"], 1],
        ["¿Qué se pone su hijo para ir a la escuela?", ["Un abrigo", "La chamarra", "Una gorra"], 1],
        ["¿Qué pasa en la noche?", ["Le dan el trabajo", "Compra un traje", "Va al café"], 0]
      ]
    }
  },
  k10: {
    v: [
      ["sillón", "couch", "cáuch", ""],
      ["refrigerador", "fridge", "frich", ""],
      ["estufa", "stove", "stóuv", ""],
      ["regadera", "shower", "sháuer", ""],
      ["escusado", "toilet", "tóilet", ""],
      ["espejo", "mirror", "mírror", ""],
      ["lámpara", "lamp", "lamp", ""],
      ["escaleras", "stairs", "sters", ""],
      ["jardín", "yard", "iard", ""],
      ["cochera", "garage", "garách", ""],
      ["piso (suelo)", "floor", "flor", ""],
      ["techo", "roof", "ruf", ""],
      ["llaves", "keys", "kiis", ""],
      ["El gato está debajo de la cama.", "The cat is under the bed.", "de kat is ánder de bed", ""],
      ["Mi casa tiene tres recámaras.", "My house has three bedrooms.", "mai jáus jas zri bédrums", ""],
      ["pared", "wall", "uól", ""],
      ["flor", "flower", "fláuer", ""],
      ["reloj (de pared)", "clock", "clak", ""],
      ["escritorio", "desk", "desk", ""],
      ["muebles", "furniture", "férnicher", ""],
      ["juguete", "toy", "tói", ""],
      ["El reloj está en la pared.", "The clock is on the wall.", "de clak is on de uól", ""],
      ["Hay flores en el jardín.", "There are flowers in the yard.", "der ar fláuers in de iard", ""],
      ["Mis juguetes están en mi cuarto.", "My toys are in my room.", "mai tóis ar in mai rum", ""]
    ],
    r: {
      t: "A new house",
      en: "Elena and her son have a new house. It has three bedrooms, two bathrooms, a big kitchen and a living room with two windows.\nThere's a garage, and there are flowers in the yard.\nOn moving day, the couch goes in the living room and the table goes in the kitchen.\nAt night, the cat isn't in the house. Where is he? He's on the roof!",
      es: "Elena y su hijo tienen una casa nueva. Tiene tres recámaras, dos baños, una cocina grande y una sala con dos ventanas.\nHay una cochera y hay flores en el jardín.\nEl día de la mudanza, el sillón va en la sala y la mesa va en la cocina.\nEn la noche, el gato no está en la casa. ¿Dónde está? ¡Está en el techo!",
      q: [
        ["¿Cuántas recámaras tiene la casa?", ["Dos", "Tres", "Cuatro"], 1],
        ["¿Qué hay en el jardín?", ["Un carro", "Flores", "Juguetes"], 1],
        ["¿Dónde va el sillón?", ["En la cocina", "En la recámara", "En la sala"], 2],
        ["¿Dónde está el gato en la noche?", ["Debajo de la cama", "En el techo", "En la cochera"], 1]
      ]
    }
  },
  k11: {
    v: [
      ["abrir", "open", "óupen", ""],
      ["cerrar", "close", "clóus", ""],
      ["ver, mirar", "look", "luk", ""],
      ["cocinar", "cook", "kuk", ""],
      ["jugar", "play", "pléi", ""],
      ["comprar", "buy", "bái", ""],
      ["pagar", "pay", "péi", ""],
      ["ir", "go", "góu", ""],
      ["venir", "come", "cam", ""],
      ["tener", "have", "jav", ""],
      ["querer (desear)", "want", "uánt", ""],
      ["necesitar", "need", "niid", ""],
      ["ayudar", "help", "jelp", ""],
      ["Necesito ayuda.", "I need help.", "ai niid jelp", ""],
      ["Quiero agua.", "I want water.", "ai uánt uáter", ""],
      ["saltar", "jump", "yamp", ""],
      ["sonreír", "smile", "smáil", ""],
      ["llorar", "cry", "krái", ""],
      ["esconderse", "hide", "jáid", ""],
      ["aventar", "throw", "zróu", ""],
      ["empujar", "push", "push", ""],
      ["jalar", "pull", "pul", ""],
      ["Dale un beso a tu abuela.", "Give your grandma a kiss.", "guiv iór grándma a kis", ""]
    ],
    r: {
      t: "At the water park",
      en: "On Saturday, Marta goes to a water park with her son, Leo.\nMarta can swim, so she goes to the big pool. Leo plays and jumps in the small pool.\nFor lunch they eat chicken and rice, and they drink water.\nAfter lunch, Leo hides behind a tree. A woman helps Marta.\nIn the afternoon, Grandma comes in her car, and Leo gives her a kiss.",
      es: "El sábado, Marta va a un parque acuático con su hijo, Leo.\nMarta sabe nadar, así que va a la alberca grande. Leo juega y salta en la alberca chica.\nDe comida comen pollo con arroz y toman agua.\nDespués de comer, Leo se esconde detrás de un árbol. Una señora ayuda a Marta.\nEn la tarde, la abuela llega en su carro y Leo le da un beso.",
      q: [
        ["¿Dónde juega Leo?", ["En la alberca grande", "En la alberca chica", "En el restaurante"], 1],
        ["¿Qué comen?", ["Pollo con arroz", "Pescado", "Helado"], 0],
        ["¿Dónde se esconde Leo?", ["Debajo de la mesa", "Detrás de un árbol", "En el carro"], 1],
        ["¿Quién llega en la tarde?", ["El papá", "La abuela", "Una señora"], 1]
      ]
    }
  },
  k12: {
    v: [
      ["contento", "glad", "glad", ""],
      ["emocionado", "excited", "eksáited", ""],
      ["preocupado", "worried", "uérrid", ""],
      ["sorprendido", "surprised", "sorpráisd", ""],
      ["solo (sin compañía)", "lonely", "lóunli", "Se siente solo."],
      ["orgulloso", "proud", "práud", ""],
      ["relajado", "relaxed", "rilákst", ""],
      ["confundido", "confused", "confiúsd", ""],
      ["estresado", "stressed", "strest", ""],
      ["Estoy bien, gracias.", "I'm fine, thanks.", "aim fáin, zenks", ""],
      ["Estoy un poco cansado.", "I'm a little tired.", "aim a lítol táierd", ""],
      ["No estoy enojado.", "I'm not angry.", "aim nat ángri", ""],
      ["¿Por qué estás triste?", "Why are you sad?", "uái ar iú sad", ""],
      ["porque", "because", "bicós", ""],
      ["Estoy feliz porque es viernes.", "I'm happy because it's Friday.", "aim jápi bicós its fráidei", ""]
    ],
    r: {
      t: "A trip to see Mom",
      en: "Jorge lives far from his family. Today he goes on a plane to see his mom. It's his first time, so he's nervous and a little scared.\nOn the plane he's cold, so he asks for a blanket.\nThe woman next to him isn't sad. She's happy because she's visiting her son.\nAt his mom's house, Jorge is a little tired, but he's very happy.",
      es: "Jorge vive lejos de su familia. Hoy va en avión a ver a su mamá. Es su primera vez, así que está nervioso y tiene un poco de miedo.\nEn el avión tiene frío, así que pide una cobija.\nLa señora de junto no está triste. Está feliz porque va a ver a su hijo.\nEn la casa de su mamá, Jorge está un poco cansado, pero está muy feliz.",
      q: [
        ["¿Cómo se siente Jorge en el aeropuerto?", ["Aburrido", "Nervioso", "Enojado"], 1],
        ["¿Qué pide en el avión?", ["Agua", "Una cobija", "Comida"], 1],
        ["¿Por qué está feliz la señora?", ["Porque es viernes", "Porque va a ver a su hijo", "Porque tiene calor"], 1],
        ["¿Cómo está Jorge en la casa de su mamá?", ["Triste", "Enfermo", "Un poco cansado, pero muy feliz"], 2]
      ]
    }
  },
  k13: {
    v: [
      ["rico / pobre", "rich / poor", "rich / pur", ""],
      ["fuerte / débil", "strong / weak", "strong / uíik", ""],
      ["pesado / ligero", "heavy / light", "jévi / láit", ""],
      ["caro / barato", "expensive / cheap", "ekspénsiv / chiip", ""],
      ["temprano / tarde", "early / late", "érli / léit", ""],
      ["cerca / lejos", "near / far", "nir / far", ""],
      ["bonito / feo", "beautiful / ugly", "biútiful / ágli", ""],
      ["joven / viejo", "young / old", "iang / óuld", ""],
      ["ruidoso / silencioso", "loud / quiet", "láud / kuáiet", ""],
      ["mojado / seco", "wet / dry", "uét / drái", ""],
      ["correcto / incorrecto", "right / wrong", "ráit / rong", ""],
      ["El carro es caro.", "The car is expensive.", "de car is ekspénsiv", ""],
      ["La caja es muy pesada.", "The box is very heavy.", "de baks is véri jévi", ""],
      ["Mi abuelo es viejo, pero fuerte.", "My grandpa is old, but strong.", "mai grándpa is óuld, bat strong", ""],
      ["Llegué temprano.", "I'm early.", "aim érli", ""],
      ["suave / duro", "soft / hard", "soft / jard", ""],
      ["alto / bajo (altura)", "high / low", "jái / lóu", ""],
      ["¿Cuál es el contrario de «big»?", "What's the opposite of \"big\"?", "uáts di ápozit ov big", ""],
      ["La cama es muy suave.", "The bed is very soft.", "de bed is véri soft", ""]
    ],
    r: {
      t: "A new bed",
      en: "Sara needs a new bed. She goes to the store very early.\nThe new bed is very soft, but it's very expensive. The old bed is cheap. Sara's house is small, so she buys a small bed.\nHer grandpa helps her with the boxes. The boxes are very heavy, but her grandpa is strong.\nAt night, Sara is tired, but happy.",
      es: "Sara necesita una cama nueva. Va a la tienda muy temprano.\nLa cama nueva es muy suave, pero es muy cara. La cama vieja es barata. La casa de Sara es pequeña, así que compra una cama chica.\nSu abuelo le ayuda con las cajas. Las cajas pesan mucho, pero su abuelo es fuerte.\nEn la noche, Sara está cansada, pero contenta.",
      q: [
        ["¿Cuándo va Sara a la tienda?", ["Muy tarde", "Muy temprano", "En la noche"], 1],
        ["¿Cómo es la cama nueva?", ["Barata y dura", "Muy suave, pero muy cara", "Vieja y fea"], 1],
        ["¿Por qué compra una cama chica?", ["Porque es suave", "Porque su casa es pequeña", "Porque es nueva"], 1],
        ["¿Cómo es su abuelo?", ["Débil", "Joven", "Fuerte"], 2]
      ]
    }
  },
  k14: {
    v: [
      ["Repite, por favor.", "Repeat, please.", "ripít, plís", ""],
      ["Trabajen en parejas.", "Work in pairs.", "uérk in pers", ""],
      ["Escribe tu nombre.", "Write your name.", "ráit iór néim", ""],
      ["Lee en voz alta.", "Read out loud.", "riid áut láud", ""],
      ["Pon atención.", "Pay attention.", "péi aténshon", ""],
      ["tarea", "homework", "jóumuerk", ""],
      ["examen", "test", "test", ""],
      ["maestro, maestra", "teacher", "tíicher", ""],
      ["alumno", "student", "stúdent", ""],
      ["borrador / goma", "eraser", "iréiser", ""],
      ["mochila", "backpack", "bákpak", ""],
      ["¿Cómo se dice ... en inglés?", "How do you say ... in English?", "jáu du iú séi ... in ínglish", ""],
      ["¿Qué significa?", "What does it mean?", "uát das it miin", ""],
      ["No entiendo.", "I don't understand.", "ai dóunt anderstánd", ""],
      ["¿Puede hablar más despacio?", "Can you speak slowly?", "can iú spiik slóuli", ""],
      ["Hay veinte niños en mi clase.", "There are twenty kids in my class.", "der ar tuénti kids in mai clas", ""],
      ["una hoja de papel", "a sheet of paper", "a shiit ov péiper", ""],
      ["Haz un dibujo.", "Draw a picture.", "dro a píkcher", ""],
      ["la respuesta correcta", "the right answer", "de ráit ánser", ""],
      ["por ejemplo", "for example", "for egzámpol", ""]
    ],
    r: {
      t: "English class",
      en: "Carmen goes to English class on Tuesday and Thursday. There are twenty students in her class.\nThe teacher speaks fast, so Carmen says, \"Can you speak slowly, please?\"\nToday they work in pairs. Carmen's partner is Raúl. They look at the board and write ten words.\nAt the end there's a test. Carmen is done first. All her answers are right!",
      es: "Carmen va a clase de inglés los martes y los jueves. Hay veinte alumnos en su clase.\nLa maestra habla rápido, así que Carmen dice: «¿Puede hablar más despacio, por favor?».\nHoy trabajan en parejas. El compañero de Carmen es Raúl. Miran el pizarrón y escriben diez palabras.\nAl final hay un examen. Carmen termina primero. ¡Todas sus respuestas están bien!",
      q: [
        ["¿Cuántos alumnos hay en la clase?", ["Diez", "Doce", "Veinte"], 2],
        ["¿Qué le pide Carmen a la maestra?", ["Que repita", "Que hable más despacio", "Ir al baño"], 1],
        ["¿Con quién trabaja Carmen?", ["Con la maestra", "Con Raúl", "Sola"], 1],
        ["¿Cómo le va a Carmen en el examen?", ["Mal", "Todas sus respuestas están bien", "No termina"], 1]
      ]
    }
  }
});
