let rl = require('readline-sync');
let userName;
let userHp = 15;
let weaponName;
let attackMod;
let monsterHp1 = 0;
let monsterHp2 = 0;
let monsterAttack;
function attackOptions(){
  let responce = rl.keyIn(`
   1. Attack
   2. Items
   3. Run`)
   return responce
}
function potion(){
  userHp += 15
}
function itemActoin(userAction){
  if (userAction === 1) {
    potion()
  }
}
function monsterDamage() {
  if (monsterHp1 > 0) {
    console.log(`The Enemy hit you! Who do they think they are? `);
    userHp -= damageCalculator(4);
  }
  if (monsterHp2 > 0){
    console.log(`The Enemy hit you! You should've learned how to Dodge!`);
    userHp -= damageCalculator(4);
  }
}
function Usercombat(userAction, num){
  if (userAction == 1) {
    console.log(`You attack with your ${weaponName}!`);
    monsterDamage();
    if (monsterHp1 > 0) {
      monsterHp1 -= damageCalculator(attackMod);
    } else if (monsterHp2 > 0) {
      monsterHp2 -= damageCalculator(attackMod);
    }
  } else if (userAction == 2 && (num >= 1)) {
      itemActoin(rl.keyIn(`
        1. Potion`))
      monsterDamage();
  } else if (userAction == 2 && (num == 0)) {
    console.log(`You have No items at the Momment`);
  } else if (userAction == 3) {
    console.log(`It's a small island, where are you gonna run?`);
  }
}
function damageCalculator(dmg){
  return Math.ceil(Math.random() * dmg)
}
function crab(){
  console.log(`
          ______$$_____________________ $$
          ____$$$__$__________________$__$$$
          ___$$$___$$________________$$___$$$
          ___$$$$$$$$________________$$$$$$$$
          ____$$$$$$__________________$$$$$$
          _____$$$$____$$0$$$$$0$$$____$$$$
          _______$$__$$$$$$$$$$$$$$$$__$$
          ___$$___$$$$$$$$$$$$$$$$$$$$$$___$$
          _$$__$$__$$$$$$$$$$$$$$$$$$$$__$$__$$
          $______$$$$$$$$$$$$$$$$$$$$$$$$______$
          $__$$$____$$$$$$$$$$$$$$$$$$____$$$__$
          __$___$$$$_$$$$$$$$$$$$$$$$_$$$$___$
          _$_________$_$$$$$$$$$$$$_$_________$
          _$______$$$________________$$$______$
          _______$______________________$
          ______$________________________$
          ______$_______________________ _$`
          );
}
function crab2(){
  console.log(`
          ______$$_____________________ $$                            ______$$_____________________ $$
          ____$$$__$__________________$__$$$                          ____$$$__$__________________$__$$$
          ___$$$___$$________________$$___$$$                         ___$$$___$$________________$$___$$$
          ___$$$$$$$$________________$$$$$$$$                         ___$$$$$$$$________________$$$$$$$$
          ____$$$$$$__________________$$$$$$                          ____$$$$$$__________________$$$$$$
          _____$$$$____$$0$$$$$0$$$____$$$$                           _____$$$$____$$0$$$$$0$$$____$$$$
          _______$$__$$$$$$$$$$$$$$$$__$$                             _______$$__$$$$$$$$$$$$$$$$__$$
          ___$$___$$$$$$$$$$$$$$$$$$$$$$___$$                         ___$$___$$$$$$$$$$$$$$$$$$$$$$___$$
          _$$__$$__$$$$$$$$$$$$$$$$$$$$__$$__$$                       _$$__$$__$$$$$$$$$$$$$$$$$$$$__$$__$$
          $______$$$$$$$$$$$$$$$$$$$$$$$$______$                      $______$$$$$$$$$$$$$$$$$$$$$$$$______$
          $__$$$____$$$$$$$$$$$$$$$$$$____$$$__$                      $__$$$____$$$$$$$$$$$$$$$$$$____$$$__$
          __$___$$$$_$$$$$$$$$$$$$$$$_$$$$___$                        __$___$$$$_$$$$$$$$$$$$$$$$_$$$$___$
          _$_________$_$$$$$$$$$$$$_$_________$                       _$_________$_$$$$$$$$$$$$_$_________$
          _$______$$$________________$$$______$                       _$______$$$________________$$$____  $
          _______$______________________$                             _______$______________________$___
          ______$________________________$                            ______$________________________$___
          ______$_______________________ _$                          ______$_______________________ _$___`
          );
}
function kingCrab(){console.log(`
  _________________________________________$__
  ________________________________________$$$__
  ________$____________________________$__$$$$__
  ______$__$_________________________$$__$$$$$$__
  _____$___$$_______________________$$$___$$$$$$__
  _____$$$$$$_________/|_/|_/|_______$$$$$$$$$$$__
  ______$$$$_________|||||||||_______$$$/|$$$$$____
  _______$$____$$0$$$$$$$0$$$$$$$$____$$$$$$$$____
  ________$__$$$$$$$$$$$$$$$$$$$$$$$$__$$$$$$____
  ___$$___$$$$$$$$$$   $$$$$   $$$$$$$__$$$$___
  _$$__$$__$$$$$$$$$$ $$$$$$$ $$$$$$$_$$$$____
  $______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_____
  $__$$$____$$$$$$$$$$$$$$$$$$$$$$$$$$$___$__
  __$___$$$$_$$$$$$$$$$$$$$$$$$$$$$$$$_$___$__
  _$_________$_$$$$$$$$$$$$$$$$$$$$$___$___$_
  _$______$$$______________________$$_____$__
  _______$___________________________$$__
  ______$_____________________________$__
  ______$_____________________________$`);}
function deadCrab(){
  console.log(`
    ______$$_____________________ $$
    ____$$$__$__________________$__$$$
    ___$$$___$$________________$$___$$$
    ___$$$$$$$$________________$$$$$$$$
    ____$$$$$$__________________$$$$$$
    _____$$$$____$XX$$     XXX____$$$$
    _______$$__$$$$$$    $$$$$$$__$$
    ___$$___$$$$$$$$$$    $$$$$$$$$___$$
    _$$__$$__$$$$$$$$   $$$$$$$$$__$$__$$
    $______$$$$$$$$$$$   $$$$$$$$$$______$
    $__$$$____$$$$$$$   $$$$$$$$____$$$__$
    __$___$$$$_$$$$$$$ $$$$$$$$_$$$$___$
    _$_________$_$$$$$$$$$$$$_$_________$
    _$______$$$________________$$$______$
    _______$______________________$
    ______$________________________$
    ______$_______________________ _$
    `);
}
function getWeapon(text, name, dmg){
  console.log(
    text
  );
  console.log(`You got ${name}!`);
  console.log(`Deals 1 to ${dmg} Damage on Hit!`);
  weaponName = name;
  return attackMod = dmg;
  continuePrompt();
}
function welcomeScreen(){
  console.log(`
  ____________¶¶¶¶¶¶¶¶¶_________________________________________________________________¶¶¶¶¶¶¶¶¶
  _____________¶¶¶¶¶¶¶____¶¶¶____________________________________________________________¶¶¶¶¶¶¶____¶¶¶
  ______________¶¶¶¶¶__¶¶¶¶¶¶¶¶¶__________________________________________________________¶¶¶¶¶__¶¶¶¶¶¶¶¶¶
  ______¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_________________________________________________¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  ____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶¶______________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶¶
  __¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________¶___________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________¶
  ¶¶¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_____________________________________________¶¶¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  ________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_____________|                  |__________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  _____¶¶¶¶¶¶¶¶¶___¶¶¶____¶¶¶¶¶¶¶¶¶____________| ╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗ |_______________¶¶¶¶¶¶¶¶¶___¶¶¶____¶¶¶¶¶¶¶¶¶
  ____¶¶¶¶¶¶¶______¶¶¶¶______¶¶¶¶¶¶____________| ║║║╠─║─║─║║║║║╠─ |______________¶¶¶¶¶¶¶______¶¶¶¶______¶¶¶¶¶¶
  ____¶¶¶¶¶________¶¶¶¶_______¶¶¶¶¶____________| ╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝ |______________¶¶¶¶¶________¶¶¶¶_______¶¶¶¶¶
  ____¶¶¶¶__________¶¶¶¶______¶¶¶¶¶____________|      ▀█▀ █▀█     |______________¶¶¶¶__________¶¶¶¶______¶¶¶¶¶
  ____¶¶¶___________¶¶¶¶_______¶¶¶¶____________|       █  █ █     |______________¶¶¶___________¶¶¶¶_______¶¶¶¶
  ____¶¶_____________¶¶¶¶______¶¶¶_____________|       ▀  ▀▀▀     |______________¶¶_____________¶¶¶¶______¶¶¶
  ____¶¶_____________¶¶_¶_______¶¶__________|   █▀█ █▀▀ █▀█ █▀▀ █ █  |___________¶¶_____________¶¶_¶_______¶¶
  ____¶______________¶¶¶¶¶_______¶__________|   █▀▄ █▀▀ █▄█ █   █▀█  |___________¶______________¶¶¶¶¶______¶
  ____________________¶¶¶¶__________________|   ▀▀▀ ▀▀▀ ▀ ▀ ▀▀▀ ▀ ▀  |___________________________¶¶¶¶
  ____________________¶¶_¶__________________|   █▀█ █ █ █▀▀ █▀▀ ▀█▀  |___________________________¶¶_¶
  ____________________¶¶¶¶¶_________________|   █▄█ █ █ █▀▀ ▀▀█  █   |___________________________¶¶¶¶¶
  ____________________¶¶¶¶¶_________________|_____▀ ▀▀▀ ▀▀▀ ▀▀▀  ▀___|___________________________¶¶¶¶¶
  _____________________¶¶_¶_______________________________________________________________________¶¶_¶
  _____________________¶¶¶¶¶____¶________________________________________________________________¶¶¶¶¶____¶
  __________________¶__¶¶¶¶¶__¶¶______________________________________________________________¶__¶¶¶¶¶__¶¶
  __________________¶¶¶¶¶¶¶¶¶¶¶¶¶_____________________________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶
  ___________________¶¶¶¶¶¶¶¶¶_________________________________________________________________¶¶¶¶¶¶¶¶¶`)}
  function continuePrompt() {
    rl.keyIn(`Press any Key to continue`)
  }
function mrC(text) {
   console.log(`
     ┊ ┊ ┊ ┊ ┊ ──────▄▀▄─────▄▀▄         ┊ ┊ ┊ ┊ ┊
     ┊ ┊ ┊ ┊ ✯ ─────▄█░░▀▀▀▀▀░░█▄        ★ ┊ ┊ ┊ ┊
     ┊ ┊ ┊ ✯   ─▄▄──█░░░░░░░░░░░█──▄▄      ★ ┊ ┊ ┊
     ┊ ┊ ★     █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█       ★ ┊ ┊
     ┊ ✯     |Mr. C|                           ★ ┊
     ★  ________________________________________ ★
     ${text}`);
   }
function startGame(){
  let startGame = rl.keyIn(`Start Game? y/n`, {limit:`yn`});
  if (startGame == `y`){
    welcomeScreen()
    userName = rl.question(`Enter your name`)
  } else {
    console.log(`Fair Enough, I wouldn't talk to a black screen on my computer either`);
    return process.exit();
  };
}
function checkDead(){
  if (userHp > 0){
    break;
  } else if (userHp <= 0) {
    console.log(`You Lose!`);
    process.exit()
  }
}
function stats(monsterHp1, monsterHp2){
  console.log(`
  ╔═.✵.════════════════════════════════╗
  ✵ ${userName}  HP:${userHp}  Weapon:${weaponName}
  ╚════════════════════════════════.✵.═╝
    `);
    if(monsterHp2 > 0 && monsterHp1 > 0){
     console.log(`
       ╔═══════════════╗
       Monster HP: ${monsterHp1}
       Monster Hp: ${monsterHp2}
       ╚═══════════════╝`)
    } else if (monsterHp2 > 0) {
      console.log(`
         ╔═══════════════╗
         Monster HP: ${monsterHp1}
         Monster Hp: ${monsterHp2}
         ╚═══════════════╝`)
    } else {
      console.log(`
        ╔═══════════════╗
        Monster HP: ${monsterHp1}
        ╚═══════════════╝`);
    }
   }
function winOrLoose(){
  if (userHp <= 0) {
    console.log(`You lose!`);
    return process.exit();
  } else if (monsterHp1 <= 0 || monsterHp2 <= 0){
    console.log(deadCrab());
    console.log(`
      ┏━━━━━°❀•°:🎀:°•❀°━━━━━┓
              YOU WON!
      ┗━━━━━°❀•°:🎀:°•❀°━━━━━┛
      `);
    }
}




startGame()
mrC(`
  | Hey, ${userName}, Welcome to our little
  | island. My name is Kitty Cat Patty Wack
  | Mcdanials the third, but you can call me
  | Mr. C`);
    continuePrompt();
mrC(`
  | Now you may have already guessed why i
  | called you here today. Much like a early
  | 2000s pop star, Our peaceful little town
  | has been over run by crabs, and only you
  | can stop them`);
  continuePrompt();
mrC(`
  | Well it really could have been anyone,
  | your the only person who actually
  | responded to the email, but that's
   | besides the point ${userName}`)
  continuePrompt();
mrC(`|Quickly, Take this Sword, one of them is
     | coming this way!!`);
getWeapon(`
                                                    ¶
                                                  _¶¶
                                                 _¶¶¶
                                               _¶¶_¶¶
                                              _¶¶__¶¶
                                             _¶¶_¶_¶¶
                                           _¶¶_¶__¶¶
                                          _¶__¶___¶¶
                                        _¶¶__¶___¶¶
                                      _¶¶_¶¶___¶¶¶
                                     _¶¶_¶¶____¶¶
                                     ¶__¶¶___¶¶¶
                                   _¶_¶¶¶____¶¶
                                 _¶¶_¶¶____¶¶¶
                                _¶__¶¶____¶¶¶
                               _¶__¶¶____¶¶¶
                             _¶¶_¶¶_____¶¶¶
                           _¶__¶¶____¶¶¶¶
                          _¶¶_¶¶¶___¶¶¶¶
                        _¶__¶¶¶___¶¶¶¶
                       _¶¶_¶¶__¶¶¶¶
                      _¶¶__¶¶_¶¶¶¶
                    __¶_¶¶¶__¶¶¶
           _¶¶¶¶¶¶¶¶_¶¶_¶¶_¶¶¶¶
          _¶¶_¶¶¶¶¶¶¶¶_¶¶_¶¶¶
          _¶¶¶¶___¶¶¶¶¶__¶¶_
              _¶¶¶¶¶¶¶¶¶_
             _¶¶¶_¶_¶¶¶¶¶_
            _¶¶¶_¶_¶¶__¶¶¶_
          _¶¶_¶¶_¶¶__¶¶_¶_
        _¶¶¶_¶_¶¶¶__¶¶_¶¶_
      __¶¶_¶¶_¶¶¶___¶¶¶_
  _¶¶¶¶¶¶_¶_¶¶¶_
  ¶¶____¶¶_¶¶¶_
  ¶¶_____¶¶¶¶_
  _¶¶¶____¶¶_
  __¶¶¶¶__¶¶_
  ____¶¶¶¶¶_`, `Rusty Sword`,5);
monsterHp1 = 10
do {
  stats(monsterHp1);
  crab();
  Usercombat(attackOptions(), 0)
} while (monsterHp1 > 0 && userHp > 0);
winOrLoose()
  console.log(`You grow stronger, HP + 10 !`);
mrC(
  `| Fine work out there ${userName}, but
   | we've only just begun, we need to
   | stop this problem at the source!
   | You have to venture to the dangerous
   | place on the island: Crab Kinds Cave!!!`);
  continuePrompt()
mrC(`
  | I wanted to save this for the right time
  | but there's no time like the present,
  | take these two swords and put that
  | Crab King on a platter!!`)
  continuePrompt()
getWeapon(`
  __¶_____________________________________________¶
  __¶¶___________________________________________¶¶____________
  __¶¶¶¶________________________________________¶¶¶____________
  __¶¶_¶¶_____________________________________¶¶_¶¶____________
  __¶¶__¶¶___________________________________¶¶__¶¶____________
  __¶¶_¶_¶¶_________________________________¶¶_¶_¶¶____________
  __¶¶__¶__¶_______________________________¶¶_¶__¶¶____________
  __¶¶___¶__¶¶____________________________¶__¶___¶¶____________
  ___¶¶___¶¶_¶¶_________________________¶¶__¶___¶¶____________
  ____¶¶___¶¶_¶¶_______________________¶¶_¶¶___¶¶¶____________
  _____¶¶___¶¶__¶_____________________¶¶_¶¶____¶¶____________
  ______¶¶___¶¶__¶¶__________________¶__¶¶___¶¶¶____________
  _______¶¶____¶¶_¶¶_______________¶¶_¶¶¶____¶¶____________
  ________¶¶____¶¶_¶¶_____________¶¶_¶¶____¶¶¶____________
  _________¶¶____¶¶__¶¶__________¶__¶¶____¶¶¶____________
  __________¶¶_____¶¶_¶¶_______¶¶__¶¶____¶¶____________
  ___________¶¶_____¶¶_¶¶_____¶¶_¶¶_____¶¶____________
  _____________¶¶____¶¶__¶¶__¶__¶¶____¶¶¶_____________
  ______________¶¶¶____¶¶_¶¶¶_¶¶¶___¶¶¶______________
  ________________¶¶¶___¶¶__¶¶¶___¶¶¶¶______________
  __________________¶¶¶___¶¶_¶¶__¶¶¶_________________
  ____________________¶¶¶__¶¶_¶¶¶¶____________________
  ____________________¶_¶¶¶__¶¶_¶¶___¶¶¶¶¶¶____________
  _________¶¶¶¶¶¶¶¶_¶¶_¶¶_¶¶__¶¶_¶¶¶¶¶¶¶¶_¶¶____________
  ________¶¶_¶¶¶¶¶¶¶¶_¶¶_¶¶¶¶¶__¶¶¶¶¶¶__¶¶_¶¶____________
  ________¶¶¶¶___¶¶¶¶¶__¶¶___¶¶¶¶¶¶¶¶¶¶__¶¶¶¶____________
  _____________¶¶¶¶¶¶¶¶¶_______¶¶¶¶¶_¶¶¶____________
  ___________¶¶¶_¶_¶¶¶¶¶______¶¶¶_¶¶¶_¶¶¶¶____________
  __________¶¶¶_¶_¶¶__¶¶¶_____¶¶¶__¶¶¶__¶¶¶____________
  _________¶¶_¶¶_¶¶__¶¶_¶_____¶_¶¶__¶¶_¶_¶¶¶____________
  _______¶¶¶_¶_¶¶¶__¶¶_¶¶_____¶¶_¶___¶¶_¶¶_¶¶¶____________
  ______¶¶_¶¶_¶¶¶____¶¶¶_______¶¶¶_____¶¶_¶_¶¶¶¶____________
  _¶¶¶¶¶¶_¶_¶¶¶_________________________¶¶_¶¶_¶¶¶¶¶¶____________
  ¶¶____¶¶_¶¶¶____________________________¶¶_¶¶____¶____________
  ¶¶_____¶¶¶¶______________________________¶¶_____¶¶____________
  _¶¶¶____¶¶_______________________________¶____¶¶¶____________
  __¶¶¶¶__¶¶_______________________________¶¶¶¶¶¶¶____________
  ____¶¶¶¶¶_________________________________¶¶¶____________
  `, `Fine Blades`, 8);
userHp = 25;
console.log(`
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§§§1§§¶¶
    ¶¶¶¶¶¶¶___¶¶¶¶_¶_¶¶_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§1_
    ¶¶¶¶¶§______¶_¶¶__________________________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶§_________¶¶__________________________1§¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶_____________________________________________¶¶¶¶1¶¶¶
    ¶¶¶_______________/____________/_______________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶______________| CRAB KING  |_________________¶§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶____________|   CAVE!!!  |_________________¶¶1§¶¶¶¶
    ¶¶¶¶¶¶¶___________/____________/________________1§¶¶¶¶¶¶
    ¶¶¶¶¶¶________________________________________¶¶1§¶¶¶¶¶
    ¶¶¶¶¶¶_________________________________________¶¶¶¶1§¶¶¶¶
    ¶¶¶¶¶__________________________________________1¶§¶¶¶¶¶
    ¶¶¶¶¶¶_______________________________________¶1§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶__________________________________________¶1§¶¶¶¶
    ¶¶¶¶¶¶¶_______________________________________¶¶¶¶¶¶¶1§¶¶¶
    ¶¶¶¶¶¶§§§¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶§§§¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶`);
continuePrompt();
monsterHp1 = 10
monsterHp2 = 10
do {
  stats(monsterHp1, monsterHp2);
  crab2();
  Usercombat(attackOptions(), 0)
} while (monsterHp1 > 0 || monsterHp2 > 0 && userHp > 0);
winOrLoose()
console.log(`You grow stronger!! DMG Up!!`);
console.log(`Attack 1 - 8 => 1 - 10`);
attackMod = 10
continuePrompt();
console.log(`
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§§§1§§¶¶
    ¶¶¶¶¶¶¶___¶¶¶¶_¶_¶¶_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§1_
    ¶¶¶¶¶§______¶_¶¶__________________________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶§_________¶¶__________________________1§¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶_____________________________________________¶¶¶¶1¶¶¶
    ¶¶¶____________________________________________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶____________________________________________¶§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶___________| You venture to   |______________¶¶1§¶¶¶¶
    ¶¶¶¶¶¶¶__________| the Heart of the |____________1§¶¶¶¶¶¶
    ¶¶¶¶¶¶___________| Cave System!     |___________¶¶1§¶¶¶¶¶
    ¶¶¶¶¶¶_________________________________________¶¶¶¶1§¶¶¶¶
    ¶¶¶¶¶__________________________________________1¶§¶¶¶¶¶
    ¶¶¶¶¶¶_______________________________________¶1§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶__________________________________________¶1§¶¶¶¶
    ¶¶¶¶¶¶¶_______________________________________¶¶¶¶¶¶¶1§¶¶¶
    ¶¶¶¶¶¶§_________________________________________¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶§________________________________________¶¶¶¶¶¶`);
continuePrompt();
console.log(`
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§§§1§§¶¶
    ¶¶¶¶¶¶¶___¶¶¶¶_¶_¶¶_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§1_
    ¶¶¶¶¶§______¶_¶¶__________________________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶§_________¶¶__________________________1§¶¶¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶_____________________________________________¶¶¶¶1¶¶¶
    ¶¶¶____________________________________________¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶____________________________________________¶§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶___________| You Find a potion  |_________|▀|___¶¶1§¶¶¶¶
    ¶¶¶¶¶¶¶__________| nestled in a crack |________.| |§¶¶¶¶¶¶
    ¶¶¶¶¶¶___________| in the wall!       |________{   )_¶¶1§¶¶¶¶¶
    ¶¶¶¶¶¶_________________________________________{___)¶¶1§¶¶¶¶
    ¶¶¶¶¶__________________________________________1¶§¶¶¶¶¶
    ¶¶¶¶¶¶_______________________________________¶1§¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶¶¶__________________________________________¶1§¶¶¶¶
    ¶¶¶¶¶¶¶_______________________________________¶¶¶¶¶¶¶1§¶¶¶
    ¶¶¶¶¶¶§_________________________________________¶¶¶¶¶¶¶¶¶¶¶¶
    ¶¶¶¶¶¶§________________________________________¶¶¶¶¶¶`);
continuePrompt()
kingCrab();
monsterHp1 = 40
console.log(`You murder my kin, Prepare to die fool!`);
continuePrompt();
userHp = 25
do {
  stats(monsterHp1);
  kingCrab();
  Usercombat(attackOptions(), 1)
} while (monsterHp1 > 0 || monsterHp2 > 0 && userHp > 0);
winOrLoose();
mrC(`
  | Great work ${userName}, all the
  | creatures of the island thank you
  | for saving us from this plight.`);
continuePrompt();
mrC(`
  | and Don't Worry, I've already secured
  | your reward, Checks in the mail.`);
continuePrompt();
console.log(`
  ____________¶¶¶¶¶¶¶¶¶_________________________________________________________________¶¶¶¶¶¶¶¶¶
  _____________¶¶¶¶¶¶¶____¶¶¶____________________________________________________________¶¶¶¶¶¶¶____¶¶¶
  ______________¶¶¶¶¶__¶¶¶¶¶¶¶¶¶__________________________________________________________¶¶¶¶¶__¶¶¶¶¶¶¶¶¶
  ______¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_________________________________________________¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  ____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶¶______________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶¶
  __¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________¶___________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________¶
  ¶¶¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_____________________________________________¶¶¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  ________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_____________|    You win!!!!    |_________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
  _____¶¶¶¶¶¶¶¶¶___¶¶¶____¶¶¶¶¶¶¶¶¶____________|      work by      |______________¶¶¶¶¶¶¶¶¶___¶¶¶____¶¶¶¶¶¶¶¶¶
  ____¶¶¶¶¶¶¶______¶¶¶¶______¶¶¶¶¶¶____________|  Eduard Fernandez |______________¶¶¶¶¶¶¶______¶¶¶¶______¶¶¶¶¶¶
  ____¶¶¶¶¶________¶¶¶¶_______¶¶¶¶¶____________|                   |______________¶¶¶¶¶________¶¶¶¶_______¶¶¶¶¶
  ____¶¶¶¶__________¶¶¶¶______¶¶¶¶¶____________|I hope you enjoyed!|______________¶¶¶¶__________¶¶¶¶______¶¶¶¶¶
  ____¶¶¶___________¶¶¶¶_______¶¶¶¶______________________________________________¶¶¶___________¶¶¶¶_______¶¶¶¶
  ____¶¶_____________¶¶¶¶______¶¶¶_______________________________________________¶¶_____________¶¶¶¶______¶¶¶
  ____¶¶_____________¶¶_¶_______¶¶_______________________________________________¶¶_____________¶¶_¶_______¶¶
  ____¶______________¶¶¶¶¶_______¶________________________________________________¶______________¶¶¶¶¶______¶
  ____________________¶¶¶¶_______________________________________________________________________¶¶¶¶
  ____________________¶¶_¶_______________________________________________________________________¶¶_¶
  ____________________¶¶¶¶¶______________________________________________________________________¶¶¶¶¶
  ____________________¶¶¶¶¶______________________________________________________________________¶¶¶¶¶
  _____________________¶¶_¶_______________________________________________________________________¶¶_¶
  _____________________¶¶¶¶¶____¶________________________________________________________________¶¶¶¶¶____¶
  __________________¶__¶¶¶¶¶__¶¶______________________________________________________________¶__¶¶¶¶¶__¶¶
  __________________¶¶¶¶¶¶¶¶¶¶¶¶¶_____________________________________________________________¶¶¶¶¶¶¶¶¶¶¶¶¶
  ___________________¶¶¶¶¶¶¶¶¶_________________________________________________________________¶¶¶¶¶¶¶¶¶`);
console.log(`You grow stronger!!! Self-Confidence + 3!!`);
