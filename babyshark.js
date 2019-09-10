function babySharkLyrics(){
    // your code here
    
    let sharks = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"];
    let song = "";
    for (let i in sharks) {
        let line = "";
        line += sharks[i] + ", ";
        let j = 0;
        while (j < 6) {
            line += "doo ";
            j++;
        }
        line = line.trim();
        line += "\n";
        line += line + line;
        line += sharks[i] + "!\n";
        song += line;
    }
    song += "Run away,…"
    debugger;
    return song;
  }

  babySharkLyrics();
// Baby shark, doo doo doo doo doo doo\n\
// Baby shark, doo doo doo doo doo doo\n\
// Baby shark, doo doo doo doo doo doo\n\
// Baby shark!\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark!\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark!\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark!\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark!\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt!\n\
// Run away,…";

"Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,..."